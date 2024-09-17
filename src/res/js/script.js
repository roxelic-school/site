let data = {};
async function fetchData() {
  try {
    const response = await fetch('/api/fileparse.json');
    data = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
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
      const [url, title, desc] = data[category][item];
      if (title.toLowerCase().includes(query) || desc.toLowerCase().includes(query)) {
        if (resultCount >= 5) break;
        const resultElement = document.createElement('div');
        resultElement.classList.add('file');
        resultElement.innerHTML = `<a href="${url}">${title}</a><p>${desc}</p>`;
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
  document.getElementById('searchBar').addEventListener('keyup', search);
};