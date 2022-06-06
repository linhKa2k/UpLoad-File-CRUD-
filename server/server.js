var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
  cors = require('cors')
  const multer=require('multer')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/quiz_app',
{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
  console.log("Connected !!!")
}).catch(err => {
  console.log(err);
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'img')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage }).any()
app.use(upload)
app.use(express.static('img'))

app.use(cors({}))
app.use(bodyParser.json());

var routes = require('./api/route/index');
routes(app);


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Server started on: ' + port);
