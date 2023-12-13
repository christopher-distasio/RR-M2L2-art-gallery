import { useState, useEffect } from "react";
import ButtonBar from "./components/ButtonBar";
import Gallery from "./components/Gallery";

function App(props) {

  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  
  useEffect(() => {
      document.title='Welcome to ArtWorld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])
  
 
  // in App.js
// send this function down to <ButtonBar />
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}

 return <div className="App">
    <Gallery artId={data.artId} image={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
    {data.artId && (
      <Gallery
        artId={data.artId}
        image={data.primaryImage}
        artist={data.artistDisplayName}
        title={data.title}
      />
    )}
  <ButtonBar handleIterate={handleIterate} />

  </div>;

}

export default App;