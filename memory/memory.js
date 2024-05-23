let ttlFoto = document.querySelector('.title-foto');
let ddFoto = document.querySelector('.dd-foto');
let ang = document.querySelectorAll('#angles');

let slideIndex = 1
showSlides(slideIndex);
function slides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    let i;
    let slide = document.getElementsByClassName('foto')
    if (n > slide.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}
    for (i = 0 ; i < slide.length ; i++) {
        slide[i].style.display = "none";
    }
    slide[slideIndex-1].style.display = "grid";
    if( slideIndex === 1) {
        ttlFoto.innerHTML = 'FOTO KKN'
        ddFoto.innerHTML = 'foto bersama kakak-kakak KKN dari IAIN kediri'
    } else if(slideIndex === 2) {
        ttlFoto.innerHTML = 'FOTO UPACARA'
        ddFoto.innerHTML = 'foto setelah upacara bendera memperingati HUT RI. ke-78'
    } else if  (slideIndex === 3) {
        ttlFoto.innerHTML = 'FOTO LAB'
        ddFoto.innerHTML = 'foto setelah pengambilan foto untuk foto ijazah di lab komputer'
    }
}
let imgg = document.querySelectorAll('.imgs')

imgg.forEach(btns =>{
    btns.addEventListener('click', ()=> {
       location.href = 'https://drive.google.com/drive/folders/1G1fo5xaMfSaK_t0Yb8QmBeT0xuf-nKCw?hl=id'
    })
})