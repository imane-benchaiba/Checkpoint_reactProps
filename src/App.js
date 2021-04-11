import Image from './moi.jpg';
import Profile from './profile/Profile';
import './App.css';

function App() {
  function handleName(){
    return alert("Full name : BENCHAIBA Imane ");
}
  return (
    <div className="App">
      <Profile name={handleName()} bio="" profession="Rédactrice web"> {Image} </Profile>
    </div>
  );
}

export default App;
