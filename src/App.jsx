import { Footer } from "./Modules/Footer/Footer";
import { Navbar } from "./Modules/Navbar/Navbar";
import "./App.css";

// function App() {
export function App() {
  return (
    <div id="App">
      <Navbar />
      <div>
        <p>Ting jeg må jobbe mer med</p>
        <ul>
          <li>Functions</li>
          <li>File structure</li>
          <li>Stop nesting the nested mess of overnested divs</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
