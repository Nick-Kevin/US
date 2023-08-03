import './App.css';
import NavBar from './components/NavBar/NavBar';
import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';
import Groups from './components/Groups/Groups';
import Members from './components/Members/Members';
import Ricardo from './components/Ricardo/Ricardo';
import  Kevin from  './components/Kevin/Kevin';
import Sebastien from './components/Sebastien/Sebastien';
import Elie from './components/Elie/Elie';
import Lucas from './components/Lucas/Lucas';

function App() { 
  console.log(Menu)
  return (
    <>
      <NavBar />
      <Menu />
      <Welcome />
      <Groups />
      <Members />
      <Ricardo  />
      <Kevin  />
      <Sebastien  />
      <Elie />
      <Lucas  />
    </>

  );
}

export default App;
