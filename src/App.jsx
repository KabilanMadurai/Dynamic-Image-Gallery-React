import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <header className="hero">
        <h1>Dynamic Image Gallery</h1>
        <p>
          Explore breathtaking moments through stunning photography
        </p>
      </header>

      <main>
        <Gallery />
      </main>
    </>
  );
}

export default App;