import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
     <div className="App">
    
    <PersonCard  firstName={"mustafa"}
    lastName={"taha"}
    age={29}
    hairColor={"black"}></PersonCard>

<PersonCard  firstName={"Test"}
    lastName={"Test"}
    age={25}
    hairColor={"black"}></PersonCard>
 
 <PersonCard  firstName={"newTest"}
    lastName={"newTest"}
    age={26}
    hairColor={"black"}></PersonCard>
 
 <PersonCard  firstName={"John"}
    lastName={"smith"}
    age={20}
    hairColor={"black"}></PersonCard>
 
 
    
    </div>

  
  );
}

export default App;
