/* import logo from './logo.svg';
import './App.css'; */
import ImageContainer1 from './ImageContainer.jsx'

function App() {
  return (
    /* 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload1.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */   
  <div>
    <h1 style={{textAlign: "center"}}>Skill BLOG</h1>
    <div style={{display:"flex", justifyContent: "center"}}>
        <div><ImageContainer1/> <ImageContainer1/> <ImageContainer1/>  </div> 
    </div>
  </div>    
  );
}

export default App;
