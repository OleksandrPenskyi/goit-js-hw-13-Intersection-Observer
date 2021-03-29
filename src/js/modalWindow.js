import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

let instance;

// закрытие по кнопке или по Escape
function onClose(event) {
  if (event.target.nodeName === 'BUTTON' || event.code === 'Escape') {
    instance.close();
  }

  window.removeEventListener('keydown', onClose);
}

// октрытие модалки
function onOpen(event) {
  if (event.target.nodeName === 'IMG') {
    instance.show();
  }
}

function onShowModal(event) {
  event.preventDefault();
  const largeImgRef = event.target.dataset.largeimg;
  instance = basicLightbox.create(
    `<div>
        <img width="800" height="600" src="${largeImgRef}">
        <button type="button" class="closeModalBtn"></button>
        </div>`,
  );

  onOpen(event); // октрытие модалки
  const closeModalBtnRef = document.querySelector('.closeModalBtn'); // ссылка на кнопку закрытия
  closeModalBtnRef.addEventListener('click', onClose); // закрытие по кнопке
  window.addEventListener('keydown', onClose); // закрытие по ескейп
}

export default onShowModal;