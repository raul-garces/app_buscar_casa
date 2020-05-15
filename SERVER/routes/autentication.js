const { Router } = require("express")

const router = Router();
const pool = require("./database")
const path = require("path");

router.get("/formulario", (req, res) => {
    res.render(path.join(__dirname, '../public/html/formularioC.html'));
});

module.exports = router