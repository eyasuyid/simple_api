const app = require('express')();
require('dotenv').config();
const router = require('./routes');
const port = process.env.PORT || 5000;

app.use(router);

app.listen(port, (err) => {
  if (err) {
    console.error(`Error: ${err}`);
  } else {
    console.log(`listening on port ${port}`);
  }
})
