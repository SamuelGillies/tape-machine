<script>

    function playing() {
        
    }

    function stopping() {

    }

    function stopUpdate() {

    }


</script>

<!-- https://developers.google.com/fonts/docs/material_icons -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


<div id="button-container">
    <div class="button" id="play" on:click={playing} role="button" tabindex="0"></div>
    <div class="button" id="stop" on:click={stopping} on:mouseup={stopUpdate} role="button" tabindex="0"></div>
    <div class="button" id="reverse"></div>
</div>

<style> 
    #button-container {
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .button {
        width: 50px; 
        height: 50px; 
        border: solid 2pt black; 
    }

</style>