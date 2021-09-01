var express = require('express');
var app = express();
const port=3000;
var db = require('./models');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(require('./routes/routes'));

app.get('/',(req,res)=>{
    res.send('Hello');
})

app.listen(port, function() {
  db.sequelize.sync();
  console.log(`running on port ${port}`);
});