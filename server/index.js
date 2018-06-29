/* eslint-disable */
require('babel-register');
if (process.env.NODE_ENV == 'development') {
  require.extensions['.png'] = function () {};
  require.extensions['.jpg'] = function () {};
  require.extensions['.jpeg'] = function () {};
}
const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.info(`Express is listening on port ${port}`);
});
