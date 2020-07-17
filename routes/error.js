//create an express
let express = require('express');

//router method allows us to route back to app.js
let router = express.Router();

router.get('*', (req, res) => {

    console.log("You've reached an error");
} )

//now we need to export the file (router.get) back to app.js
module.exports = router;