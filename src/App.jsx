import NewProject from "./components/NewProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from 'react';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleAddNewProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  }

  function handleSaveNewProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random()
    }

    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSaveNewProject={handleSaveNewProject}/>
  } else if (projectsState.selectedProjectId === undefined ) {
    content = <NoProjectSelected onAddNewProject={handleAddNewProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddNewProject={handleAddNewProject}/>
      {content}
    </main>
  );
}

export default App;
