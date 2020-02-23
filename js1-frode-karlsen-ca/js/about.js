// JavaScript - JS1 - CA - About.js

function replaceWord() {
    let paragraphs = document.querySelectorAll("p");
    let h1 = document.querySelector("h1"); 

    let formattedHeader = h1.innerText;
    formattedHeader = formattedHeader.replace(/The /g, "Replaced ");
    formattedHeader = formattedHeader.replace(/the /g, "replaced ");
    h1.innerText = formattedHeader;

    paragraphs.forEach(text => {
    let formattedParagraph = text.innerText;
    formattedParagraph = formattedParagraph.replace(/the /g, "replaced ");
    formattedParagraph = formattedParagraph.replace(/The /g, "Replaced ");
    text.innerText = formattedParagraph;
    });
}

setTimeout(replaceWord, 4000);
