const loadingText = document.querySelector('.loading-text');
const backgroundImg = document.querySelector('.bg');

let loadingVal = 0;

const interval = setInterval(blurring, 30);


function blurring() {
    loadingVal++;

    if(loadingVal > 99) {
        clearInterval(interval);
    }

    loadingText.textContent = `${loadingVal}%`;
    loadingText.style.opacity = scale(loadingVal, 0, 100, 1, 0);
    backgroundImg.style.filter = `blur(${scale(loadingVal, 0, 100, 30, 0)}px)`;
}


https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}