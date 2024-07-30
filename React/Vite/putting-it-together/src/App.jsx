
import './App.css'
import PersonCard from './components/PersonCard'

function App() {

  return (
    <>
      <PersonCard firstName="Mustafa" lastName="Taha" age={29} hairColoe="black"/>
      <PersonCard firstName="Test" lastName="Test" age={24} hairColoe="black"/>
      <PersonCard firstName="Test1" lastName="Test1" age={20} hairColoe="black"/>     
    </>
  )
}

export default App
