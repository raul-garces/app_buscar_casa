const { Router } = require("express")
const { renderIndex } = require("../controlers/index.controls")
const router = Router();
const pool = require("./database")
const path = require("path");
const passport = require("passport")
    //-----------------------ruta inicial-----------------------------//
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
});

router.post("/", async(req, res) => {

    passport.authenticate('local.signup', {
        successRedirect: '/opcion/..',
        failureRedirect: '/falloi',
        failureFlash: true
    })

    const { correo, telefono, opcion } = req.body;
    const newUser = {

        correo,

        telefono,
        opcion
    };


    await pool.query('INSERT INTO users set ? ', [newUser]);


    if (newUser.opcion === "comprar") {
        res.redirect("/opcion/preca")
    } else if (newUser.opcion === " vender") {
        res.redirect("/opcion/venta")
    } else {
        console.log("error al tomar decicion")

    }

    console.log(newUser);

});
//--------------------------------------------------------------//

module.exports = router;