const express = require('express');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs'); //references to directory named views

app.set('views', 'views');

app.use(express.static('public'));

app.use(require('./routes/index'));//reference of where we placed the index

app.use(require('./routes/aboutUs'));//reference of where we placed the about us

app.use(require('./routes/faq'));//reference of where we placed the faq

app.use(require('./routes/error'));//reference of where we placed the error

app.listen(PORT, () => {

    console.log(`Listening on port ${PORT}`);
})