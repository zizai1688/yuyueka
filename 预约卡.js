function setGlow(on) {
    var h1 = document.querySelector('.card h1');
    var status = document.querySelector('.card .status');
    if (on) {
        h1.classList.add('glow');
        status.classList.add('glow');
    } else {
        h1.classList.remove('glow');
        status.classList.remove('glow');
    }
}
function setCardBorderGlow(on) {
    var border = document.getElementById('cardGlowBorder');
    if (border) border.classList.toggle('hide', !on);
}
setGlow(true);
setCardBorderGlow(true);

function screenshotAndDownload() {
    var warp = document.querySelector('.warp');
    setGlow(false);
    setCardBorderGlow(false);
    setTimeout(function() {
        html2canvas(warp).then(function(canvas) {
            setGlow(true);
            setCardBorderGlow(true);
            var link = document.createElement('a');
            link.download = 'warp_screenshot.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }, 50);
}

var checkbox = document.getElementById('topCheck');
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        screenshotAndDownload();
    }
});

var cameraBtn = document.getElementById('cameraBtn');
cameraBtn.addEventListener('click', function() {
    screenshotAndDownload();
});
