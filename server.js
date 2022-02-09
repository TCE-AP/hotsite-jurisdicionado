const https = require('https');
const fs = require('fs');
const { parse } = require('url');

const next = require('next');
const port = 3000; //parseInt(process.env.PORT, 10) || config.getPort()
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

const root = '/home/deployer/sslfiles';
const options = {
    key: fs.readFileSync(`${root}/tce.ap.gov.br.key`),
    cert: fs.readFileSync(`${root}/STAR_tce_ap_gov_br.crt`),
    ca: [fs.readFileSync(`${root}/SectigoRSADomainValidationSecureServerCA.crt`)],
};

app.prepare().then(() => {
    https.createServer(options, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on localhost:${port}`);
    })
});
