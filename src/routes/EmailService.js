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
    "julia":  "https://open.spotify.com/playlist/5lYgPthlYg24aBQUtJEdeW?si=adc9b0b2894e416d",
    "debora": "https://open.spotify.com/playlist/56V8jY6fmWI7D7lKPVgPZU?si=9c4fa2d4763444a0",
    "empate":  "https://open.spotify.com/playlist/7gjJoBoKrETWUen8YmsxVw?si=45e70bf880e94d5f"
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