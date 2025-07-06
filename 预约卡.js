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
document.getElementById('cameraLogo').onclick = function() {
    var warp = document.querySelector('.warp');
    var logo = document.getElementById('cameraLogo');
    setGlow(false);
    setCardBorderGlow(false);
    logo.style.display = 'none';
    setTimeout(function() {
        html2canvas(warp).then(function(canvas) {
            logo.style.display = '';
            setGlow(true);
            setCardBorderGlow(true);
            var link = document.createElement('a');
            link.download = 'warp_screenshot.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }, 50);
};
