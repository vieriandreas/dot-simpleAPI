const app = require('./src/app');
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
