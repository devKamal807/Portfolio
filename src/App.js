
import './App.css';
import Header from './components/Header/Header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import Contact from './components/Contact/Contact';
import TransitionsModal from './components/Modal/Modal';


function App() {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <Contact/>
      {/* <TransitionsModal/> */}
    </div>
  );
}

export default App;
