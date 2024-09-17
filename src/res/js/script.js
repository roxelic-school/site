let data = {};
let selectedIndex = -1;
let currentResults = [];
let typing = true;
const delay = ms => new Promise(res => setTimeout(res, ms));

async function fetchData() {
  try {
    const response = await fetch('/api/fileparse.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function clearResults() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  resultsDiv.style.display = 'none';
  currentResults = [];
  selectedIndex = -1;
}

function updateHighlightedResult() {
  const resultsDiv = document.getElementById('results');
  const resultsItems = resultsDiv.querySelectorAll('.file');

  resultsItems.forEach((item, index) => {
    if (index === selectedIndex) {
      item.classList.add('highlight');
    } else {
      item.classList.remove('highlight');
    }
  });

  if (selectedIndex !== -1 && currentResults.length > 0) {
    document.getElementById('searchBar').value = currentResults[selectedIndex].title;
  }
}


function search() {
  if (!typing) return; 

  const query = document.getElementById('searchBar').value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  if (!data || Object.keys(data).length === 0 || query === '') {
    clearResults();
    return;
  }

  let resultCount = 0;
  currentResults = [];

  for (const category in data) {
    if (Object.keys(data[category]).length === 0) continue;
    for (const item in data[category]) {
      const [url, title, desc, date] = data[category][item];
      if (title.toLowerCase().includes(query) || desc.toLowerCase().includes(query)) {
        if (resultCount >= 5) break;
        currentResults.push({ url, title, date });
        const resultElement = document.createElement('div');
        resultElement.classList.add('file');
        resultElement.innerHTML = `<p style="font-size:small;"><a href="${url}">${title}</a> - ${date}</p>`;
        resultsDiv.appendChild(resultElement);
        resultCount++;
      }
    }
    if (resultCount >= 5) break;
  }

  if (resultCount > 0) {
    resultsDiv.style.display = 'block';
    typing = false;
  } else {
    clearResults();
  }

  selectedIndex = -1;
  updateHighlightedResult();
}

function handleKeydown(event) {
  const resultsDiv = document.getElementById('results');
  if (!resultsDiv || currentResults.length === 0) return;

  if (event.key === 'ArrowDown') {
    selectedIndex = (selectedIndex + 1) % currentResults.length;
    updateHighlightedResult();
    event.preventDefault();
  } else if (event.key === 'ArrowUp') {
    selectedIndex = (selectedIndex - 1 + currentResults.length) % currentResults.length;
    updateHighlightedResult();
    event.preventDefault();
  } else if (event.key === 'Enter') {
    if (selectedIndex !== -1) {
      window.location.href = currentResults[selectedIndex].url;
    } else if (currentResults.length > 0) {
      window.location.href = currentResults[0].url;
    }
  }
}

function handleClickOutside(event) {
  const searchBar = document.getElementById('searchBar');
  const resultsDiv = document.getElementById('results');
  
  if (!searchBar.contains(event.target) && !resultsDiv.contains(event.target)) {
    clearResults();
    searchBar.value = '';
  }
}

function handleInput(event) {
  typing = true;
  search();
}

window.onload = async function() {
  await fetchData();
  const searchBar = document.getElementById('searchBar');

  searchBar.addEventListener('input', handleInput);
  searchBar.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', handleClickOutside);
};

window.onload = async function() {
  await fetchData();

  const searchBar = document.getElementById('searchBar');

  searchBar.addEventListener('input', handleInput);
  searchBar.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', handleClickOutside);

  document.addEventListener('keydown', (event) => {
    if (document.activeElement !== searchBar && !event.ctrlKey && !event.altKey && !event.metaKey) {
      searchBar.focus();
    }
  });
};
