

const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const APIKEY = '5bd6818337abf690b484cd1d437b3450';
const img_prefix ='https://image.tmdb.org/t/p/w500/';

function carregarFilmes(){
    let xhr = new XMLHttpRequest();
    console.log('Função')
    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + APIKEY, true);
    xhr.onload = exibeFilmes;
    xhr.send();
}


function exibeFilmes(){
    console.log('Função 2')
    let data = JSON.parse (this.responseText);
    let conteudo = '';


    for(let i = 0; i<5; i++){
        console.log('Função ');
        let nomeFilme = data.results[i].original_title;
        let sinopse = data.results[i].overview;
        let popularidade = data.results[i].popularity;
        let Img = img_prefix + data.results[i].poster_path;


         conteudo += `
        <div class="carousel-item">
            <div class="container">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-6">
                <img src="${Img}">
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                <span><h5>${nomeFilme}</h5></span>
                <span><p>${sinopse}</p></span>
                <span><P>${popularidade}</p></span>
                </div>
            </div>
            </div>
      </div>`;

    };

    document.getElementById('tela').innerHTML = conteudo;
}