import './App.css';
import MapComponent from "./containers/MapContainer/MapContainer";
import { useMediaQuery } from 'react-responsive'


function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


  return (
    <div className="App rows">
      Please select the location : View {isMobile ? "Mobile" : "Desktop"}
      <div className="row maps-view">
        <MapComponent>
          This is Map
        </MapComponent>
      </div>
      <div className="row image-list">
        List of images
    </div>
    </div >
  );
}

export default App;
