const path = require('path');

module.exports = {
  mode: 'development', // указываем режим для разработчиков
  entry: './src/main.js', // указываем входящий файл для обработки
  output: {
    filename: 'bundle.js', // указываем исходящий файл сборки проекта
    path: path.join(__dirname, 'public')
  },
  devtool: 'source-map',

  devServer: {
    contentBase: path.join('public'), // указываем, в каком каталоге необходимо отслеживать изменения
    watchContentBase: true // опция, которая необходима для сброса кеша, после после каждой сборки проекта при внесении изменений
  }
}
