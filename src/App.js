import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/index'
import './styles/main.sass'
import './styles/components/app.sass'
import Projects from './components/Layout/projectsPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout/>}/>
      </Routes>
      <Routes>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
