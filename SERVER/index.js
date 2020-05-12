const express = require("express");
const morgan = require("morgan");
const app = express();
const exphbs = require ("handlebars");
const path = require("path");


//setings

//ddsfdsf

app.set('appName', "search house");
app.set("views", path.join(__dirname, "views"))
app.set('port', process.env.PORT || 3000);
app.engine('.hbs', exphbs({
    defaultLayout: "main", 
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname:".hbs",
    helpers: require('./lib/handlebars')
}));
app.set("view engine", ".hbs");
app.set(express.urlencoded({extended: true}));
app.use(express.json());

//Global variables 
app.use((req, res , next) =>{
    next();
})

//mideweres 
app.use(express.json());
app.use(morgan('dev'));



//rutes
app.use(require("./routes/index.route"));
app.use(require("./routes/autentication"));
app.use(require("./routes/links"));

app.use(require("./routes/keys"));

//public
app.use(express.static(path.join(__dirname, "public")));


app.listen(app.get("port"), () => {
    console.log(app.get('appName'))
    console.log("server on port", app.get("port"));
});