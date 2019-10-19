const express = require('express');
const app = express();

<<<<<<< HEAD
app.get('/', (req, res)=>{
    res.render('index.html');
=======
app.get('/', (req, res) => {
  res.send('Hello World');
>>>>>>> 875633124ac84da757f5d98a93cbd4bd5d459847
});

app.listen(process.env.port || 3000);
<<<<<<< HEAD
console.log(`Server Live `);
=======
console.log('Server Live on 3000');
>>>>>>> 875633124ac84da757f5d98a93cbd4bd5d459847
