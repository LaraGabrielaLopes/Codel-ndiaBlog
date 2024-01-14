//Curtida : criar uma função que preencha o coração quando o mesmo é clicado
const icon = document.querySelectorAll(".icon_heart");

icon.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle("filled")
    })
})

//Pesquisa : criar a funcionalidade de pesquisar a palavra digitada nos posts da blog

function findWord() {
    let searchWord = document.getElementById('content_search').value.toLowerCase();
    let pageText = document.body.innerHTML.toLowerCase();

    if (pageText.includes(searchWord)) {
        let highlightedText = pageText.replace(new RegExp(searchWord, 'g'), '<span style="background-color: #E07B67;">$&</span');

        document.body.innerHTML = highlightedText;
        console.log(searchWord)
    } else {
        console.log('Termo não existe')
    };
};