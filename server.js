const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require("./routes");
const cors = require('cors');

const port = 7581;

const jsonParser = bodyParser.json();
const urlencodeParser = bodyParser.urlencoded({extended:true});

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

app.use(routes);

app.listen(port, () => console.log(`Running on http://localhost:${port}`));