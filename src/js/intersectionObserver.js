import { inputRef, ancorRef } from './refs';
import apiService from './apiService'; // объект с HTTP запросами
import updateHTML from './updateHTML'; // функция создания и добавления разметки в HTML
import onSucess from './notifications';

function onEntries(entries) {
  entries.forEach(enter => {
    //   если пересекает, то
    if (enter.isIntersecting) {
      apiService.increasePageNumber(); // увеличение страницы
      apiService.query = inputRef.value; // передаем значение input в обьект
      apiService
        .fetchQuery() // HTTP запрос и возврат массива объектов
        .then(updateHTML.makeMarkupHTML); // создаем разметку и пушим ее в HTML
      onSucess(); // нотификашка об успешной загрузке картинок
    }
  });
}

function observerCall() {
  // опции IntersectionObserver
  const options = {
    rootMargin: '200px',
  };
  const io = new IntersectionObserver(onEntries, options);
  return io.observe(ancorRef);
}

export default observerCall;
