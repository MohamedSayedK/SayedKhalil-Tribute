var marker = document.querySelector('.marker');
var item = document.querySelectorAll('nav a');

function indicator(x) {

    marker.style.left = x.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
    
}

item.forEach(Link =>{
    link.addEventListener('click',(x) => {
        indicator(x.target);
    })
})