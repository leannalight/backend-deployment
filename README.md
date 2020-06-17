# backend-deployment

## Актуальная версия v0.0.1

Практическая работа 15. Изучение серверного программирования на node.js с использованием express.js. Финальная работа, в которой доделываем бэкенд проекта Mesto и деплоим на удалённый сервер

**Backend развернут по IP - адресу 84.201.153.161** [**по ссылке**](https://84.201.153.161/)

**И доступен на домене** [**https:/api.newmestoapp.ga/**](https:/api.newmestoapp.ga/)

**Front доступен по адресу** [**https:/newmestoapp.ga/**](https:/newmestoapp.ga/)

## Технологии:

- Node.js,
- Express.js.
- MongoDB,
- Mongoose (Object Data Modeling (ODM) library for MongoDB and Node.js),
- Helmet, 
- Express-rate-limit, 
- Celebrate,
- Winston

### POST /signup - регистрация нового пользователя - в ответ придет объект пользователя

### POST /signin - авторизация формат: { "email": "hello@gmail.com", "password": "12345678" } в ответ придет cookie s jwt

### GET /users - возвращает всеx пользователей

### GET /users/id - возвращает пользователя по id, и сообщение об ошибке, если user не найден

### POST /users - создает нового пользователя

### GET /cards - возвращает все карточки

### POST /cards - создает карточку

### DELETE /cards/id - удаляет карточку по id

## Инструкции по установке, настройке и запуску

1. Для клонирования используйте git clone https://github.com/leannalight/backend-deployment
2. Используйте npm i для переустановки пакетов.
3. Используйте npm run dev, чтобы открыть проект на локальном сервере.
4. Команда npm run start запускает сервер на локальном хосте: 3000;
5. Команда npm run dev запускает сервер на локальном хосте: 3000 с горячей перезагрузкой;
6. Приложение Node.js подключается к серверу Mongo по адресу mongodb: // localhost: 27017 / mestodb;

## Чеклист: 

- все ошибки обрабатываются централизованно;
- тела запросов и, где необходимо, заголовки и параметры, валидируются по определённым схемам. Если запрос не соответствует схеме, обработка не передаётся контроллеру и клиент получает ошибку валидации;
- все запросы и ответы записываются в файл request.log;
- все ошибки записываются в файл error.log;
- файлы логов не добавляются в репозиторий;
- к серверу можно обратиться по публичному IP-адресу, указанному в README.md;
- к серверу можно обратиться по http и по https, используя домен, указанный в README.md;
- секретный ключ для создания и верификации JWT хранится на сервере в .env файле. Этот файл не добавляется в git;
- в режиме разработки (когда process.env.NODE_ENV !== 'production') код запускается и работает без наличия .env файла;
- сервер самостоятельно восстанавливается после GET-запроса на URL /crash-test.
