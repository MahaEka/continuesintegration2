const http = require('http');
const server = http.createServer((req, res) => {
  res.end(':rocket: Hello my lovely group "JUMP TO TECH", my CI/CD deployed!');
});
server.listen(80, () => {
  console.log(':globe_with_meridians: Server is running on port 80');
});
