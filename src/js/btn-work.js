import { tripleSpinnerRef, ancorRef } from './refs';

export default {
  // показываем тройной спиннер при загрузке
  tripleSpinnerShow() {
    tripleSpinnerRef.forEach(item => {
      item.classList.remove('is-hidden');
    });
  },

  // прячем тройной спиннер при загрузке
  tripleSpinnerHide() {
    tripleSpinnerRef.forEach(item => {
      item.classList.add('is-hidden');
    });
  },

  // добавляем в разметку якорь для IntersectionObserver
  ancorShow() {
    ancorRef.classList.remove('is-hidden');
  },

  // убираем с разметки якорь для IntersectionObserver
  ancorHide() {
    ancorRef.classList.add('is-hidden');
  },
};
