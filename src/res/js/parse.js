function createElementFromStructure(structure) {
    console.log('Creating element from structure:', structure);
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
                        console.log("change");
                    }
                });
            });
        } else {
            console.error('Element with id "sidebar" not found.');
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
}
document.addEventListener('DOMContentLoaded', generateHtmlFromApi);