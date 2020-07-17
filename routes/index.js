
//create an express
let express = require('express');

//router method allows us to route back to app.js
let router = express.Router();

router.get('/', (req, res) => {

    // res.send(`
    
    //     <link rel="stylesheet" href="style.css">
    //     <h1>Front Page</h1>
    // `)

    let pictures = [
        "https://images.hdqwalls.com/wallpapers/fortnite-chapter-2-season-3-di.jpg", 
        "https://lh3.googleusercontent.com/f1YBWhcuPpf9A_ZK-YCeM6VrhYnxEwuTBs3ES4WBKG5u5OejtRIlLmZ2LNJaq753NQTQvY2c-A=w640-h400-e365", 
        "https://supertabthemes.com/wp-content/uploads/2020/06/1-3-758x426.jpg"]

    res.render('index');

    firstName: "Michael", //this value can be an array, object or integer
    lastName: "Cortez",
    pic: pictures
})

//now we need to export the file (router.get) back to app.js
module.exports = router;