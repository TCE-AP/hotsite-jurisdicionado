var https = require('https');
var fs = require('fs');
const { parse } = require('url');

var root = '/home/deployer/';

const next = require('next')
const port = 3000; //parseInt(process.env.PORT, 10) || config.getPort()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()

var options = {
    key: fs.readFileSync(`${root}ssl.key`),
    cert: fs.readFileSync(`${root}ssl.crt`),
    // ca: [fs.readFileSync(`${root}root.crt`)],
};

app.prepare().then(() => {
    https.createServer(options, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on localhost:${port}`)
    })
})
