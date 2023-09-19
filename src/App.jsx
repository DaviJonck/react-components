
import './App.css'
import FirstComponents from './components/FirstComponents';
import Hooks from './components/Hooks';
import List from './components/List';
import AnotherComponent from './components/anotherComponent';
import Images from './components/images';
import RenderCond from './components/RenderCond';

function App() {
 

  return (
    <div className='App'>
   <h2>React</h2>
   <FirstComponents/>
   <AnotherComponent/>
   <Images/>
   <Hooks/>
   <List/>
   <RenderCond x={5}/>
   </div>
  )
}

export default App
