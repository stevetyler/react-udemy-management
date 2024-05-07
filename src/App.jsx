import NewProject from "./components/NewProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from 'react';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectsState.selectedProjectId === undefined ) {
    content = <NoProjectSelected onAddNewProject={handleAddNewProject}/>
  }

  function handleAddNewProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddNewProject={handleAddNewProject}/>
      {content}
    </main>
  );
}

export default App;
