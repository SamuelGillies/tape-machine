<script> 
// https://medium.com/@predragdavidovic10/native-dual-range-slider-html-css-javascript-91e778134816



</script>


<div id='rangeContainer'> 
    <input id='minSlider' type='range' value=30 min=0 max=100 >
    <input id='maxSlider' type='range' value=70 min=0 max=100 >
</div>

<style>
    #rangeContainer {
        display: flex;
        flex-direction: column;
        width: 25rem;
        margin: 2rem auto;    
        position: relative;
        min-height: 50px;
    }

    #minSlider {
        background-color: rgb(0, 0, 0);
    }

    #maxSlider {
        background-color: rgba(0, 0, 0, 0);
    }

    input[type="range"] {
        -webkit-appearance: none; 
        appearance: none;
        height: 2px;
        width: 100%;
        position: absolute;
        pointer-events: none;
    }

    input[type=range]::-moz-range-thumb {
        -webkit-appearance: none;
        pointer-events: all;
        width: 12px;
        height: 12px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 1px #C6C6C6;
        cursor: pointer;  
    }

    /* input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        pointer-events: all;
        width: 12px;
        height: 12px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 1px #C6C6C6;
        cursor: pointer;
    } */

    /* input[type=range]::-webkit-slider-thumb:hover {
        background: #f7f7f7;
    }

    input[type=range]::-webkit-slider-thumb:active {
        box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
        -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
    } */

</style>