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
    <div id='waveform'>

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
        gap: 1rem; 
    }

    #waveform {
        background-color: black;
        width: 10rem; 
        height: 8rem; 
    }

    img {
        width: 5rem; 
        height: 5rem; 
    }

    .tapeBackground {
        width: 6rem; 
        height: 6rem; 
        border-radius: 50%; 
        border: solid 2pt black; 
        background: black; 
        display: flex; 
        align-items: center;
        justify-content: center;
    }

</style>