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
    let textElements = document.body.querySelectorAll('*:not(script):not(style)');

    textElements.forEach(element => {
        let elementText = element.innerHTML.toLowerCase();
        let regex = new RegExp(searchWord, 'g');

        if(elementText.includes(searchWord)) {
            element.innerHTML = elementText.replace(regex, match => `<span style="background-color: #E07B67;">${match}</span>`);
        }
    });
    console.log((searchWord));
   
}