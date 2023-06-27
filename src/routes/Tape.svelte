<script> 
    import { playToken, revToken } from './app.js'; 

    let rotationInterval; 
    let rotateDegree = 0; 

    function rotateImage() {
        let tapeLeft = document.getElementById("tapeLeft");
        rotateDegree =+ 60; 
        tapeLeft.style.transform = "rotate("+ (rotateDegree % 360) +"deg)"; 
    }

    function resetImage() {
        let tapeLeft = document.getElementById("tapeLeft");
        rotateDegree =+ 60; 
        tapeLeft.style.transform = "rotate("+ (360 - (rotateDegree % 360)) +"deg)";
    }

    playToken.subscribe((value) => {
        if (value === 1) {
            rotationInterval = setInterval(rotateImage, 100);  
        } else if (value === 0) { 
            clearInterval(rotationInterval); 
        }
    })

</script>

<div id='tapereels'>
    <img id='tapeLeft' src="tape1.png" alt="tape spool">
    <img id='tapeRight' src="tape1.png" alt="tape spool">
</div>



<style>
    #tapereels {
        display: flex; 
        align-items: center;
        justify-content: center;
        gap: 50px; 
    }

</style>