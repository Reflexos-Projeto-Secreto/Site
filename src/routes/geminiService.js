var { GoogleGenAI } = require("@google/genai");

var ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function gerarGuiaViagem(perfil) {
    try {
        var prompt = `
            O usuário tem perfil de viajante "${perfil}".
            caso o resultado seja Débora:
            Crie um guia de viagem personalizado para uma pessoa com o seguinte perfil:

            Personalidade: educadora apaixonada, socioemocional, reflexiva, ama música e dança, 
            se vê como um polvo (curiosa, multitarefa), cor favorita laranja, ama sua casa mas 
            sonha em conhecer a Suíça (especialmente pelos cenários de A Noviça Rebelde).

            Gostos musicais: Justin Bieber, Skillet, Illenium.
            Filmes/séries favoritos: A Noviça Rebelde, O Fantasma da Ópera, O Rei do Show.
            Flores favoritas: Tulipa, Crisântemo, Edelweiss.
            Animal de estimação: cachorro Border Collie chamada Tulipa.
            Hobby: cantar e tocar instrumentos.
            Comida favorita: hambúrguer, churrasco ou queijo coalho/gorgonzola (depende do contexto).
            Sonho de infância: trabalhar com música e dança.
            Destino dos sonhos: Suíça.

            Caso o resultado seja Julia:

            Personalidade: educadora apaixonada, socioemocional, reflexiva, ama música e dança, 
            se vê como um polvo (curiosa, multitarefa), cor favorita laranja, ama sua casa mas 
            sonha em conhecer a Suíça (especialmente pelos cenários de A Noviça Rebelde).

            Gostos musicais: Justin Bieber, Skillet, Illenium.
            Filmes/séries favoritos: A Noviça Rebelde, O Fantasma da Ópera, O Rei do Show.
            Flores favoritas: Tulipa, Crisântemo, Edelweiss.
            Animal de estimação: cachorro Border Collie chamada Tulipa.
            Hobby: cantar e tocar instrumentos.
            Comida favorita: hambúrguer, churrasco ou queijo coalho/gorgonzola (depende do contexto).
            Sonho de infância: trabalhar com música e dança.
            Destino dos sonhos: Suíça.

            Caso o resultado seja Julia:

            Crie um guia de viagem personalizado para uma pessoa com o seguinte perfil:

            Personalidade: educadora com sonho antigo de ser professora de história, apaixonada 
            por transformar vidas, se vê como uma leoa (liderança, juba), cor favorita roxo/lilás, 
            ama culinária japonesa, praias e tem grande desejo de conhecer a Alemanha.

            Gostos musicais: Linkin Park, Avenged Sevenfold, Supercombo (e BTS como amor eterno em 4º).
            Filmes/séries favoritos: Friends, Hora de Aventura, Dark.
            Flores favoritas: Tulipas, Peônias, Margaridas.
            Mascote de kpop favorito: BT21 (todos).
            Hobby: pintar unhas, ler livros, quebra-cabeça, pintar.
            Comida favorita: japonesa.
            Lugar favorito: praias em geral.
            Destino dos sonhos: Alemanha.
            Sonho de infância: ser estilista ou chef de cozinha.
            Já teve um papagaio chamado Pepê.

            Crie um guia de viagem personalizado contendo:
            - Destino ideal e por que combina com esse perfil
            - 3 pontos turísticos recomendados
            - Trilha sonora da viagem (5 músicas que combinam com o lugar e o perfil)
            - 2 dicas personalizadas de experiências

            Crie tambem uma lista de filmes e musicas baseados no gosto do perfil que foi enviado, coloque novas musicas alem das ja existentes que enviei de cada uma
        `;

        var response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: { tools: [{ googleSearch: {} }] }
        });

        return { text: response.text };

    } catch (erro) {
        console.error("Erro no geminiService:", erro);
        throw erro;
    }
}

module.exports = {
    gerarGuiaViagem
};