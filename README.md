<!-- ЗАДАЧИ НА СЛЕДУЮЩИЙ "СПРИНТ": добавить возможность использования экспериментальных "фишек" тайпскрипта -->

# scripts
`npm run dev` - собрать в дев моде <br/>
`npm run build` - собрать в прод моде <br/>
`npm run watch` - сборка в дев моде с "горячим" режимом <br/>

# problems
`start": "cross-env NODE_ENV=development webpack serve --mode development` - не работает, какая-то ошибка у самого вебпака
Как временное решение: для запуска дев сервера используется команда `webpack serve --config webpack.config.js`
Вызов этой команды происходит прямо в консоли
Ссылка на ошибку: https://github.com/webpack/webpack-cli/issues/1976#issuecomment-715057073

`ctrl + shift + p` чтобы открыть Quokka.js (в лайв режиме показывает то, что выводит код)
<!-- Ссылка на Минина (вебпак): https://youtu.be/eSaF8NXeNsA?t=5429 -->