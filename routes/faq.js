//create an express
let express = require('express');

//router method allows us to route back to app.js
let router = express.Router();

router.get('/faq', (req, res) => {

    console.log("FAQs");
})

//now we need to export the file (router.get) back to app.js
module.exports = router;