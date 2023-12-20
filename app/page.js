import Page from "./components/Page";
// Define the Home component
export default function Home() {

  return(
    <>    
    <audio id="loopedAudio" loop>
    <source src="/first_alarm.ogg" type="audio/ogg"/>
    Your browser does not support the audio element.
</audio>

    <Page />
    </>

  )
}

