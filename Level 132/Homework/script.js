const apiKey = 'da165704b3f34f7da2f7a5b78fc233f8';
const newsContainer = document.getElementById('news-container');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const fetchNews = (query = 'latest') => {
  const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&pageSize=12&apiKey=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      newsContainer.innerHTML = '';

      if (data.articles.length === 0) {
        newsContainer.innerHTML = '<p>არ მოიძებნა შედეგი</p>';
        return;
      }

      data.articles.forEach(article => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${article.urlToImage || 'https://via.placeholder.com/300x160'}" alt="News image">
          <h3>${article.title}</h3>
          <p>${article.description || ''}</p>
          <a href="${article.url}" target="_blank">ვრცლად</a>
        `;
        newsContainer.appendChild(card);
      });
    })
    .catch(err => {
      newsContainer.innerHTML = '<p>შეცდომა მოხდა სიახლეების მიღებისას</p>';
      console.error(err);
    });
};

// Default load
fetchNews();

// Handle search
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) fetchNews(query);
});
