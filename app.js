require('dotenv').config();
const express = require('express'),
  app = express();
  const request = require('request');


    app.get('/',(req, res) => {
        res.render("pages/private_home_page.html");
    })
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
