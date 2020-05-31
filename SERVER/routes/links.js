const { Router } = require("express")

const router = Router();
const pool = require("./database");
const path = require("path");


router.get("/preca", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/formularioC.html'));
});

router.post("/preca", async(req, res) => {


});
router.get("/venta", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/formulariov.html'));
});

module.exports = router