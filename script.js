function changeColor() {
    let color = document.getElementById("colorInput").value;
    document.getElementById("text").style.color = color;
}

fetch('https://dinoipsum.com/api/?format=json&words=10&paragraphs=3')
    .then((response) => response.json())
    .then((arrayOfDinoIpsumParagraphs) => {


        let targetDiv = document.getElementById('target')
        console.log(targetDiv)
        console.log(arrayOfDinoIpsumParagraphs)

        for(let paragraph of arrayOfDinoIpsumParagraphs){
            console.log(paragraph)


            let pTag = document.createElement('p')
            pTag.innerText = paragraph
            targetDiv.appendChild(pTag)

        }

    });

function search(){
    let textToSearch = document.getElementById("text-to-search").value;
    let paragraph = document.getElementById("paragraph");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${textToSearch}`,"gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}


