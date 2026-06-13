var { gerarGuiaViagem } = require("../routes/geminiService");

async function guiaController(req, res) {
    try {
        var { perfil } = req.body;

        if (!perfil) {
            return res.status(400).json({ erro: "Perfil não informado" });
        }

        var resultado = await gerarGuiaViagem(perfil);
        res.json(resultado);

    } catch (erro) {
        console.error("Erro no guiaController:", erro);
        res.status(500).json({ erro: "Erro ao gerar o guia de viagem" });
    }
}

module.exports = { guiaController };