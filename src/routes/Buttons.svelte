<script>

    let playIcon = 'play_arrow_fill0.svg'; 
    let stopIcon = 'stop_fill0.svg'; 
    let rewIcon = 'rewind_fill0.svg'; 

    let reverseState = false; 

    function playing() {
        playIcon = 'play_arrow_fill1.svg'; 
    }

    function stopping() {
        playIcon = 'play_arrow_fill0.svg'; 
        stopIcon = 'stop_fill1.svg'; 
    }

    function stopUpdate() {
        stopIcon = 'stop_fill0.svg'; 
    }

    function reverse() {
        reverseState = !reverseState; 
        if (reverseState === true) {
            rewIcon = 'rewind_fill1.svg'
        } else if (reverseState === false) {
            rewIcon = 'rewind_fill0.svg'
        }
    }

</script>

<div id="button-container">
    <div class="button" id="play" on:click={playing} on:keydown={playing} role="button" tabindex="0"><img src={playIcon} alt="Play button"></div>
    <div class="button" id="stop" on:mousedown={stopping} on:mouseup={stopUpdate} role="button" tabindex="0"><img src={stopIcon} alt="Stop button"></div>
    <div class="button" id="reverse" on:click={reverse} on:keydown={reverse} role="button" tabindex="0"><img src={rewIcon} alt="Reverse tape button"></div>
</div>

<style> 
    #button-container {
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px; 
    }

    .button {
        width: 50px; 
        height: 50px; 
        border: solid 2pt black; 
    }


</style>