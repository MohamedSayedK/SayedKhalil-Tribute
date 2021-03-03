$(document).ready(function(){
    $("#dt").css
});

document.addEventListener('DOMContentLoaded',init);


const openArtistListButtons = document.querySelectorAll('[data-model-target]')

const openArtistListButtons = document.querySelectorAll('[data-close-button]')

const overlay = document.getElementById('overlay')

openArtistListButtons.forEach(a => {
a.addEventListener('click',() => {
    const authorsList = document.querySelector(a.dataset.modelTarget)
    openArtistListButtons()
    })
})