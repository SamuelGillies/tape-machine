<script>
    import Buttons from './Buttons.svelte'; 
    import Tape from './Tape.svelte'; 
    import Menu from './Menu.svelte'; 
    import SpeedDial from './SpeedDial.svelte'; 
    import RangeSlider from './RangeSlider.svelte'; 



</script>

<div id='unit'>
    <Tape/>
    <div id='Ctrl'> 
        <Menu/>
        <SpeedDial/>
    </div>
    <RangeSlider/>
    <Buttons/>
</div>

<style>
    
    #Ctrl {
        display: flex; 
        align-items: center;
        justify-content: center;
        gap: 2rem; 
        margin: 3rem; 
    }



</style>