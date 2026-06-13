var nodemailer = require("nodemailer")
require("dotenv").config()

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
         user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

var playlists = {
    "julia":  "https://open.spotify.com/playlist/7IsneNrnjgPkEc1BLkBwwi?si=44e509a194b54793",
    "debora": "https://open.spotify.com/playlist/5AWE4eH44IYbdmIqVzCSAi?si=51658fece0164772",
    "empate":  "https://open.spotify.com/playlist/3HvgaZeBWbr7UjFeicPFRI?si=1213edb0f0fb424a"
}

function enviarEmail(emailDestino, nomeUsuario, resultado) {
    var linkPlaylist = playlists[resultado]

    var mailOptions = {
        from: "isabelateixeira9349@gmail.com",
        to: emailDestino,
        subject: "Sua playlist Reflexos baseada em seu resultado de personalidade ;)",
        html: `
            <h1>Olá, ${nomeUsuario}!</h1>
            <p>Baseado no seu resultado, separamos uma playlist especial para você!</p>
            <a href="${linkPlaylist}">${linkPlaylist}</a>
        `
    }

    return transporter.sendMail(mailOptions)
}

module.exports = { enviarEmail }