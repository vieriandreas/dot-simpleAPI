const app = require('./src/app');
const PORT = 3117;

app.listen(PORT, function () {
  console.log(`Server berjalan pada http://localhost:${PORT}`);
});
