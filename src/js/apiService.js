export default {
  userQuery: '', // запрос пользователя
  page: 1, // поиск запроса пользователя с 1-й страницы

  apiKey: '20741002-e77497ffbafc5e505ef96c3e8', // ключ к api

  // HTTP запрос и возврат массива объектов
  fetchQuery() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.userQuery}&page=${this.page}&per_page=12&key=${this.apiKey}`,
    )
      .then(res => res.json())
      .then(({ hits }) => hits);
  },

  set query(value) {
    this.userQuery = value;
  },

  // увеличение номера страницы на 1 при нажатии кнопки Load more
  increasePageNumber() {
    this.page += 1;
  },
};
