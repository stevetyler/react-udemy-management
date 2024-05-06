import NewProject from "./components/NewProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from 'react';

function App() {
  const [showNewProject, setShowNewProject] = useState(false);

  function handleShowNewProject() {
    setShowNewProject(true);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar handleShowNewProject={handleShowNewProject}/>
      {showNewProject ? 
        <NewProject /> :
        <NoProjectSelected />
      }
    </main>
  );
}

export default App;
