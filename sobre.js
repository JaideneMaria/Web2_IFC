const main = document.querySelector("main");

//quando a página estiver carregada
window.onload = (event) => {
    fetch('meusDados.json') // requisição GET
        .then(response => response.json()) // tratar como json
        .then(dados => { // chamar o conteúdo retornado de "dados"
            //dados é um objeto com quatro propriedades
            let h2 = document.createElement('h2');
            h2.innerText = dados.descricao
            main.appendChild(h2)

            let paragrafo = document.createElement('p');
            let txt = "Atividade desenvolvida para o curso " + dados.curso + " no ano de " + dados.ano + ".";
            paragrafo.innerText = txt;
            main.appendChild(paragrafo);

            paragrafo = document.createElement('p');
            txt = "Aluna " + dados.aluna;
            paragrafo.innerText = txt;
            main.appendChild(paragrafo);

            paragrafo = document.createElement('p');
            txt = "Professor: " + dados.professor;
            paragrafo.innerText = txt;
            main.appendChild(paragrafo);


        })
};