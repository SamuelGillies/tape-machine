<script>

    import { playToken, stopToken, revToken } from './app.js'; 

    let playIcon = 'play_arrow_fill0.svg'; 
    let stopIcon = 'stop_fill0.svg'; 
    let rewIcon = 'fastforward_fill0.svg'; 

    let reverseState = false; 

    function playing() {
        playIcon = 'play_arrow_fill1.svg'; 
        stopToken.set(0);
        playToken.set(1);
    }

    function stopping() {
        playIcon = 'play_arrow_fill0.svg'; 
        stopIcon = 'stop_fill1.svg'; 
        playToken.set(0);        
        stopToken.set(1);
    }

    function stopUpdate() {
        stopIcon = 'stop_fill0.svg'; 
    }

    function reverse() {
        reverseState = !reverseState; 
        if (reverseState === true) {
            rewIcon = 'rewind_fill1.svg'
            revToken.update(1);
        } else if (reverseState === false) {
            rewIcon = 'fastforward_fill0.svg';
            revToken.update(0);
        }
    }

</script>

<div id="button-container">
    <div class="button" id="play" on:click={playing} on:keydown={playing} role="button" tabindex="0"><img src={playIcon} alt="Play button"></div>
    <div class="button" id="stop" on:mousedown={stopping} on:mouseup={stopUpdate} role="button" tabindex="0"><img src={stopIcon} alt="Stop button"></div>
    <div class="button" id="reverse" on:mousedown={reverse} role="button" tabindex="0"><img src={rewIcon} alt="Reverse tape button"></div>
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
        border-radius: 4px;
        display: flex; 
        align-items: center;
        justify-content: center;
    }
    
</style>