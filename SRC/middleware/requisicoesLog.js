const fs = require ('fs');

module.exports = (req, res, next) => {
    let dataHora = new Date().toISOString();

    fs.appendFileSync("requisicoesLog.txt", `O usuário ip: ${req.ip} acessou a rota ${req.method} ${req.url} cod status http: ${req.statusCode} as ${dataHora}\n`);

    return next();
}