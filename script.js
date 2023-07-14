

new Masonry("#posts .grid", {
    itemSelector : '.grid-item',
    gutter : 20
});
new Swiper('.swiper-container',{
    direction:'horizontal',
    loop:true,
    slidesPerView:5,
    autoplay:{
        delay:3000
    },
    breakpoints:{
    '@0':{
        slidesPerView:2
    },
    '@1.00':{
        slidesPerView:3
    },
    '@1.25':4
    },
    '@1.50':{
        slidesPerView:5
    }
})

const selectElement = (element) => document.querySelector(element);

selectElement('.ims').addEventListener('click', () => {
    selectElement('.im').classList.toggle('active');
})


const select = (element) => document.querySelector(element);

selectElement('.imss').addEventListener('click', () => {
    selectElement('.im').classList.toggle('active');
})






/*var lastscrolltop = 0;

head = document.getElementById("head");
window.addEventListener("scroll", function(){
    var scrolltop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrolltop > lastscrolltop){
        head.style.top="-6rem";

    }else{
        head.style.top="0";
    }
    lastscrolltop = scrolltop;
})
*/