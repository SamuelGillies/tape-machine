<script> 
    import { playToken } from './app.js'; 

    let rotationInterval, tapeLeft, tapeRight; 
    let rotateDegreeLeft = 0; 
    let rotateDegreeRight = 0; 

    function rotateImage() {
        rotateDegreeLeft += 10; 
        rotateDegreeRight += 12; 
        tapeLeft.style.transform = "rotate("+ (rotateDegreeLeft % 360) +"deg)"; 
        tapeRight.style.transform = "rotate("+ (180 + (rotateDegreeRight % 360)) +"deg)"; 
    }

    playToken.subscribe((value) => {
        if (value === 1) {
            rotationInterval = setInterval(rotateImage, 40);  
        } else if (value === 0) { 
            clearInterval(rotationInterval); 
        }
    })

</script>

<div id='tapereels'>
    <div class='tapeBackground'>
        <img id='tapeLeft' src="tape1.png" alt="tape spool" bind:this={tapeLeft}>
    </div>
    <div class='tapeBackground'>
        <img id='tapeRight' src="tape1.png" alt="tape spool" style="transform: rotate(180deg)" bind:this={tapeRight}>
    </div>
</div>

<style>
    #tapereels {
        display: flex; 
        align-items: center;
        justify-content: center;
        gap: 50px; 
    }

    img {
        width: 15rem; 
        height: 15rem; 
    }

    .tapeBackground {
        width: 16rem; 
        height: 16rem; 
        border-radius: 50%; 
        border: solid 2pt black; 
        background: black; 
        display: flex; 
        align-items: center;
        justify-content: center;
    }
</style>