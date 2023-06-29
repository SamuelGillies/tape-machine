<script>
    import Buttons from './Buttons.svelte'; 
    import Tape from './Tape.svelte'; 
    import Menu from './Menu.svelte'; 
    import SpeedDial from './SpeedDial.svelte'; 



</script>

<Tape/>
<div id='Ctrl'> 
    <Menu/>
    <SpeedDial/>
</div>

<Buttons/>

<style>
    
    #Ctrl {
        display: flex; 
        align-items: center;
        justify-content: center;
        gap: 2rem; 
        margin: 3rem; 
    }



</style>