function createElementFromStructure(structure) {
    const container = document.createElement('div');
    container.classList.add('folder-container');
    for (const [key, value] of Object.entries(structure)) {
        if (typeof value === 'object' && !Array.isArray(value)) {
            const folder = document.createElement('div');
            folder.classList.add('folder');
            folder.textContent = key;

            const hold = document.createElement('div');
            hold.classList.add('hold');
            hold.appendChild(createElementFromStructure(value));
            container.appendChild(folder);
            container.appendChild(hold);
        } else if (Array.isArray(value)) {
            const link = document.createElement('a');
            link.href = value[0];

            const file = document.createElement('div');
            file.classList.add('file');
            file.textContent = key;

            link.appendChild(file);
            container.appendChild(link);
        }
    }
    return container;
}

function decodeAndNormalizeUrl(url) {
    return decodeURIComponent(url.replace('/content/', '').replace(/\/$/, ''));
}

function openFoldersToFile(folderElement) {
    let parentHold = folderElement.nextElementSibling;
    while (parentHold && parentHold.classList.contains('hold')) {
        parentHold.classList.add('open');
        folderElement = folderElement.parentElement.closest('.folder');
        if (folderElement) {
            parentHold = folderElement.nextElementSibling;
        } else {
            parentHold = null;
        }
    }
}

function findAndOpenFile(structure, url) {
    const normalizedUrl = decodeAndNormalizeUrl(url);
    console.log('Normalized URL:', normalizedUrl);
    function traverse(struct, parentElements) {
        for (const [key, value] of Object.entries(struct)) {
            const normalizedValue = decodeAndNormalizeUrl(Array.isArray(value) ? value[0] : '');
            console.log('Checking:', key, '=>', normalizedValue);
            if (Array.isArray(value) && normalizedValue === normalizedUrl) {
                console.log('Match found:', key);
                parentElements.forEach(folder => openFoldersToFile(folder));
                return true;
            }
            if (typeof value === 'object') {
                const folderElements = document.querySelectorAll('.folder');
                let folderElement = null;
                folderElements.forEach(folder => {
                    if (decodeAndNormalizeUrl(folder.textContent.trim()) === key) {
                        folderElement = folder;
                    }
                });
                if (folderElement) {
                    const newParentElements = [...parentElements, folderElement];
                    if (traverse(value, newParentElements)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    traverse(structure, []);
}

async function generateHtmlFromApi() {
    try {
        const response = await fetch('/api/fileparse.json');
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const apiData = await response.json();
        const structureElement = createElementFromStructure(apiData);
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.appendChild(structureElement);
            const folders = document.querySelectorAll('.folder');
            folders.forEach(folder => {
                folder.addEventListener('click', function () {
                    const nextElement = this.nextElementSibling;
                    if (nextElement && nextElement.classList.contains('hold')) {
                        nextElement.classList.toggle('open');
                    }
                });
            });
            const currentUrl = window.location.pathname;
            console.log('Current URL:', currentUrl);
            findAndOpenFile(apiData, currentUrl);
        } else {
            console.error('Element with id "sidebar" not found.');
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

document.addEventListener('DOMContentLoaded', generateHtmlFromApi);
