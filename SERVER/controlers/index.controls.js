const indexCtrl = {};
const path = require("path");


indexCtrl.renderIndex = (req, res) => {
    res.sendFile(path.join (__dirname, "/index.html") )
}


module.exports = indexCtrl;