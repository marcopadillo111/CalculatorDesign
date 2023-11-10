document.addEventListener("DOMContentLoaded", function() {
    const calculatorWidthInPixels = 360;
    const calculatorHeightInPixels = 550;
    
    function calculateZoomLevel() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let widthZoomLevel = (windowWidth / calculatorWidthInPixels) * 0.9;
        let heightZoomLevel = (windowHeight / calculatorHeightInPixels) * 0.9;
        let zoomLevel = Math.min(widthZoomLevel, heightZoomLevel);

        document.body.style.zoom = zoomLevel;
    }

    calculateZoomLevel();
    window.addEventListener('resize', calculateZoomLevel);





let mainText = document.getElementById("mainText");
let subText = document.getElementById("subText");

mainText.textContent = "1+2*3-4÷5";
subText.textContent = "6.2";

});
