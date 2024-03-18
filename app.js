
const express = require('express');

const bodyParser = require('body-parser');


const app = express();


app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.set('views', './views');


const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/', (req, res) => {
    res.render('home');
});


app.post('/submit-form', (req, res) => {

    const { name, lastname, age, gender, code, studyField } = req.body;


    console.log('Dane z formularza:', { name, lastname, age, gender, code, studyField });


    res.render('form-success', { name });
});
