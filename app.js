require('dotenv').config();
const express = require('express'),
    app = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

