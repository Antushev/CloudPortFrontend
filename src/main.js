// Подключение библиотек и утилит
// для клиентской части облачного сервиса
import {render} from './utils/render.js';
import API from './api/index.js';

import Files from './components/files.js';

const api = new API('https://cloud.antushev.com:8443');

// Выбор элементов в разметке
// клиентской части облачного сервиса
const filesTableWrapperElement = document.querySelector(`.files__inner`);
const buttonUploadFilesElement = document.querySelector('.files__button-update');

// Получение и отображение файлов
// в клиентской части облачного сервиса
api.getFiles()
  .then((files) => {
    render(filesTableWrapperElement, new Files(files));
  });

// Бизнес-логика обновления списка файлов
// клиентской части облачного сервиса
buttonUploadFilesElement.addEventListener('click', (evt) => {
  const filesTableElement = document.querySelector('.files__table');
  filesTableElement.remove();
  api.getFiles()
    .then((files) => {
      render(filesTableWrapperElement, new Files(files));
    });
})

// Обновление информацией об устройстве
// и съемных накопителях с интервалом 1000мс
// клиентской части облачного сервиса
setInterval(() => {
  api.getStatusDevice()
    .then((status) => {
      const deviceListElement = document.querySelector('.device-list__status-1');
      const carriersListElement = document.querySelector('.carriers-list__1');
      if (status.online) {
        deviceListElement.textContent = 'online';
        deviceListElement.classList.remove('devices-list__status-text--offline');
        deviceListElement.classList.add('devices-list__status-text--online');
        carriersListElement.textContent = 'online';
        carriersListElement.classList.remove('carriers-list__status--offline');
        carriersListElement.classList.add('carriers-list__status--online');
      } else {
        deviceListElement.textContent = 'offline';
        deviceListElement.classList.remove('devices-list__status-text--online');
        deviceListElement.classList.add('device-list__status-text--offline');
        carriersListElement.textContent = 'offline';
        carriersListElement.classList.remove('carriers-list__status--online');
        carriersListElement.classList.add('carriers-list__status--offline');
      }
    })
}, 1000);









