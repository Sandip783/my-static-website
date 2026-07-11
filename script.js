const scrollUpBtn = document.getElementById('scrollUpBtn');
let preVal = 0;

window.addEventListener('scroll',() => {
    
    if(scrollY - preVal >= 0) {
        console.log('scrollY = ' + Math.round(scrollY));
        console.log('y = ' + preVal)
        scrollUpBtn.style.opacity = '0';
        preVal = scrollY;
    } else if(scrollY - preVal < 0) {
        console.log('scrollY = ' + Math.round(scrollY));
        console.log('y = ' + preVal);
        scrollUpBtn.style.opacity = '1';
        preVal = scrollY;
    }
})

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);

})