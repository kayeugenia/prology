import './App.css';
import ProjectList from './components/ProjectList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <ProjectList />
      <Sidebar />
    </div>
  );
}

export default App;
