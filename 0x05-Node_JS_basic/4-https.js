const http = require('http');


const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer


app.on('request', (_, res) => {
   const responseText = 'Hello Holberton School!';


   res.setHeader('Content-Type', 'text/plain');
   re.setHeader('Content-Length', responseTect.length);
   res.write(Buffer.from(responseText));
  });

  app.listen(PORT, HOST, () => {
	  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n	);

module.exports = app;
