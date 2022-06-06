import './App.css';

function Welcome(props) {
  return <div><h1>{props.myText}</h1></div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Welcome myText="Welcome to tasks app"/>
       <Welcome myText="Enjoy with my tasks app"/>
      </header>
    </div>
  );
}

export default App;
