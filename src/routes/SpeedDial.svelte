<script>
    
    import { tapeSpeed } from './app.js'; 

    let tapeSpeedSelection = 1; 
    let labelOne, labelTwo, labelThree; 
    tapeSpeed.set(tapeSpeedSelection); 

</script>



<div id='speedContainer'>
    <input bind:value={tapeSpeedSelection} id='speed' name='speed' type='range' orient='vertical' min="0" max="2">
    <div id='speedLabels'>
        <p bind:this={labelOne}>15 i.p.s.</p>
        <p bind:this={labelTwo} class='highlight'>7.5 i.p.s.</p>
        <p bind:this={labelThree}>3.75 i.p.s.</p>
    </div>
</div>

<style>
    #speedContainer {
        display: flex; 
        flex-direction: row;
        align-items: center; 
        justify-content: center;
        gap: 1rem; 
    }

    #speed {
        height: 100px; 
    }

    #speedLabels {
        display: flex; 
        flex-direction: column;
        gap: 1rem; 
    }

    p {
        margin: 0; 
        padding: 0; 
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: large; 
    }

</style>