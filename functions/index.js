const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// Initiliazations
const app = express();

// Settings
app.set('views', path.join(__dirname, './src/views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares

// Global Variables

// Routes 
app.use(require('./src/routes/index'));

// Statics Files
app.use(express.static(path.join(__dirname, './src/statics')));

exports.app = functions.https.onRequest(app);