const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>ANA SAYFA</h2>');
  } else if (url === '/hakkimda') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>HAKKIMDA</h2>');
  } else if (url === '/iletisim') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>ILETISIM</h2>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h2>SAYFA BULUNAMADI</h2>');
  }

  res.end();
});

const port = 5000;

server.listen(5000, () => {
  console.log(`Server started on port ${port}...`);
});
