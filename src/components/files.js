import AbstractComponent from './abstract-component.js';

const createFileTemplate = (file) => {
  return (`<tr>
        <td class="files__td">${file}</td>
        <td class="files__td">.file</td>
        <td class="files__td">14KB</td>
        <td class="files__td files__td--download">
            <a href="https://cloud.antushev.com/device/get_files/${file}">Скачать</a>
        </td>
      </tr>`
  );
}

const createFilesListTemplate = (files) => {
  return files.map((file) => {
    return createFileTemplate(file);
  }).join(` `);
}

const createTableFiles = (files) => {
  const countFiles = files.length;
  if (countFiles !== 0) {
    return (`<table class="files__table">
      <tr>
        <th class="files__th">Имя</th>
        <th class="files__th">Тип</th>
        <th class="files__th">Размер</th>
        <th class="files__th">Действие</th>
      </tr>
      ${createFilesListTemplate(files)};
    </table>`
    );
  } else {
    return (`<table class="files__table">
      <tr>
        <td class="files__td">Отсутствуют файлы на выбранном съемном накопителе. Пожалуйста, нажмите кнопку "Обновить" или подключите другой накопитель.</td>
      </tr>
    </table>`);
  }

}

export default class Files extends AbstractComponent {
  constructor(files) {
    super();

    this._files = files;
  }

  getTemplate() {
    return createTableFiles(this._files);
  }
}
