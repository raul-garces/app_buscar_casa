const express = require("express");
const morgan = require("morgan");
const app = express();


//setings

app.set('appName', "search house");
app.set('port', process.env.PORT || 5000);
app.set('view engine', "ejs");



//mideweres 
app.use(express.json());
app.use(morgan('dev'));



//rutes
app.use(require("./routes/index.route.js"));


});


app.listen(app.get("port"), () => {
    console.log(app.get('appName'))
    console.log("server on port", app.get("port"));
});