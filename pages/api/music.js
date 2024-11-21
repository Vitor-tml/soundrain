async function teste(request, response) {
    const musica = 'Imprevisto';
    const artista = 'Yago Oproprio';

    const apikey = process.env.API_KEY;
    const lastfmUrl = `http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${artista}&track=${musica}&api_key=${apikey}&format=json`;
    
    // Use await para esperar a resposta do fetch
    const resultado = await fetch(lastfmUrl);
    
    // Agora que a resposta foi recebida, converta para JSON
    const data = await resultado.json();

    // Envie a resposta com os dados
    return response.json(data);
}

export default teste;
