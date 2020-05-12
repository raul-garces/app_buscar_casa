const { Router } = require("express")
const { renderIndex } = require("../controlers/index.controls")
const router = Router();


router.get("/inicio", renderIndex);




module.exports = router;