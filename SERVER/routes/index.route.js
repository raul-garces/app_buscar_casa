const { Router } = require("express")
    //const { renderIndex } = require("../controlers/index.controls")
const router = Router();
const pool = require("./database")
const path = require("path");

//-----------------------ruta inicial-----------------------------//
router.get('/', function(req, res) {
    res.render(path.join(__dirname, '/public/html/index.html'));
});
//--------------------------------------------------------------//

router.get("/links/add", (req, res) => {
    res.render("links/add");
});

module.exports = router;