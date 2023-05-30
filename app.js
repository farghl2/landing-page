let skills = document.querySelector('.our-skills')
let spans = document.querySelectorAll('.pro-holder span');

console.log(spans);


window.onscroll = function() {
    if(window.scrollY >= skills.offsetTop -250){
        spans.forEach((span)=> {
            span.style.width = span.dataset.progress;
        })

    }
}