let data = {};
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

function clear() {
  
}

function search() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  if (!data || Object.keys(data).length === 0 || query === '') {
    resultsDiv.style.display = 'none';
    return;
  }
  let resultCount = 0;
  for (const category in data) {
    if (Object.keys(data[category]).length === 0) continue;
    for (const item in data[category]) {
      const [url, title, desc, date] = data[category][item];
      if (title.toLowerCase().includes(query) || desc.toLowerCase().includes(query)) {
        if (resultCount >= 5) break;
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
  } else {
    resultsDiv.style.display = 'none';
  }
}

window.onload = async function() {
  await fetchData();
  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('keyup', search);
  searchBar.addEventListener('input', search);
  searchBar.addEventListener('blur', (event) => {
    document.getElementById('searchBar').value = "";
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    resultsDiv.style.display = 'none';
  });
}
