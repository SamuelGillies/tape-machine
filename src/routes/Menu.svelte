<script>

    import { tapeItem } from './app.js'; 



</script>

<div id="menuContainer">
    <form>
        <select id="tapes" name="tapes" >
            <option value="0">01-Timpani-Rolls</option>
            <option value="1">01-Timpani-RubberBall</option>
            <option value="2">01-Timpani-Strikes</option>
            <option value="3">02-Timpani-Rolls</option>
            <option value="4">02-Timpani-RubberBall</option>
            <option value="5">02-Timpani-Strikes</option>
            <option value="6">03-PercussionBattery-Articulations</option>
            <option value="7">03-PercussionBattery-BrushStrikes</option>
            <option value="8">03-PercussionBattery-BrushTexture</option>
            <option value="9">03-PercussionBattery-Rolls</option>
            <option value="10">03-PercussionBattery-Strikes</option>
            <option value="11">04-SuspendedCymbal-Bowed</option>
            <option value="12">04-SuspendedCymbal-Brushes</option>
            <option value="13">04-SuspendedCymbal-Rolls</option>
            <option value="14">04-SuspendedCymbal-Strikes</option>
            <option value="15">05-TamTam-Strikes</option>
            <option value="16">05-TamTam-Wire</option>
            <option value="17">06-WindGong-Rolls</option>
            <option value="18">06-WindGong-Strikes</option>
            <option value="19">07-Djembe-Strikes</option>
            <option value="20">08-Guero-Articulation</option>
            <option value="21">08-Guero-Strikes</option>
            <option value="22">09-Maracca-Articulations</option>
            <option value="23">09-Maracca-Strikes</option>
            <option value="24">10-Cabassa-Articulations</option>
            <option value="25">10-Cabassa-Strikes</option>
            <option value="26">11-Tamborine-Glissando</option>
            <option value="27">11-Tamborine-Rolls</option>
            <option value="28">11-Tamborine-Strikes</option>
            <option value="29">12-SlideWhistle-Articulations</option>
            <option value="30">12-SlideWhistle-Strikes</option>
            <option value="31">13-Castanettes-Strikes</option>
            <option value="32">14-WindChimes-Dampened</option>
            <option value="33">14-WindChimes-Glissandi</option>
            <option value="34">15-Glockenspiel-ArticulationsLong</option>
            <option value="35">15-Glockenspiel-ArticulationsShort</option>
            <option value="36">15-Glockenspiel-PitchBend</option>
            <option value="37">15-Glockenspiel-Strikes</option>
            <option value="38">15-Glockenspiel-Thirds</option>
            <option value="39">16-Xylophone-Compass1</option>
            <option value="40">16-Xylophone-Compass2</option>
            <option value="41">16-Xylophone-Compass3</option>
            <option value="42">16-Xylophone-Strikes</option>
            <option value="43">17-Marimba-Articulations1</option>
            <option value="44">17-Marimba-Articulations2</option>
            <option value="45">17-Marimba-Pulses1</option>
            <option value="46">17-Marimba-Pulses2</option>
            <option value="47">17-Marimba-Strikes</option>
            <option value="48">18-Piano-Scraping</option>
        </select>
    </form>
</div>

<style>
    #menuContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px; 
        margin-bottom: 40px; 
    }

    select {
        border: solid 2pt black; 
        border-radius: 4px;    
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: large; 
    }

</style>