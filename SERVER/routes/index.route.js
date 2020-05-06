const { Router } = require("express")
const { renderIndex } = require("../controlers/index.controls")
const router = Router();


router.get("/", renderIndex);




module.exports = router;