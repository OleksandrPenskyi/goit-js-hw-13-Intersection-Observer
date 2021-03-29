import { formRef, inputRef, galerryRef } from './js/refs';
import apiService from './js/apiService'; // объект с HTTP запросами
import updateHTML from './js/updateHTML'; // функция создания и добавления разметки в HTML
import btn from './js/btn-work'; // механихм работы кнопок, спиннеров и т.д.
import modalWindow from './js/modalWindow';
import observerCall from './js/intersectionObserver';
import './styles.css';

function onSubmitForm(event) {
  event.preventDefault(); // для сброса стандартных действий браузера
  btn.tripleSpinnerShow(); // добавляем тройной спиннер при загрузке
  btn.ancorHide(); // прячем в разметке якорь, чтобы перезагрузить результаты загрузки картинок
  updateHTML.clearMarkupHTML(); // для удаления всего после поиска нового

  apiService.query = inputRef.value; // передаем значение input в обьект
  apiService
    .fetchQuery() // HTTP запрос и возврат массива объектов
    .then(updateHTML.makeMarkupHTML)
    // создаем разметку и пушим ее в HTML
    .finally(() => {
      btn.tripleSpinnerHide(); // прячем тройной спиннер при загрузке
      btn.ancorShow(); // показать в разметке якорь чтобы работал IntersectionObserver
    });
  galerryRef.addEventListener('click', modalWindow); // по клику на img в галерее открывется модалка
}

formRef.addEventListener('submit', onSubmitForm);

// вызов IntersectionObserver
observerCall();
