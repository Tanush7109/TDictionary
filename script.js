let word = document.getElementById("word");
let meaning = document.getElementById("meaning");
let getmeaning = document.getElementById("get-meaning");
getmeaning.addEventListener('click',()=>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`)
    .then(response =>{ 
        return response.json();
    })
    .then(data =>{
        meaning.innerHTML = (data[0].meanings[0].definitions[0].definition);
    })
})

