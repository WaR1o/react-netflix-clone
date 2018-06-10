const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.info(`Express is listening on port ${port}`);
})