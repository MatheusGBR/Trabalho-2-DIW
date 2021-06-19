const API_KEY ='5bd6818337abf690b484cd1d437b3450';
//const API_KEY ='f56fd894718705f5199faddc07a0bed7';
const img_prefix ='https://image.tmdb.org/t/p/w500/';



function  carregarFilmes(){
    console.log('Função')
    let query = document.getElementById('textPesquisa').value;        
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeFilmes;
    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?language=pt-br&api_key=${API_KEY}&query=${query}`);
    xhr.send();
};

function exibeFilmes(){
    console.log('Função 2');
    let data = JSON.parse (this.responseText);
    console.log('apos data');
    let conteudo = '';


    for(i = 0; i<data.results.length; i++){
        console.log('Função 3')
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

    

};

document.getElementById('btn-pesquisa').addEventListener ('click', exibeFilmes);



