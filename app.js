const express = require('express');
const app = express();

app.get('/', "Hello Server");




app.listen(process.env.port || 3000);
