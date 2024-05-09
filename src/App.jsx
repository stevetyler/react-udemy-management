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

  function handleCancelNewProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleSaveNewProject(projectData) {
    const newProjectId = Math.random();
    const newProject = {
      ...projectData,
      id: newProjectId
    }

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSave={handleSaveNewProject} onCancel={handleCancelNewProject}/>
  } else if (projectsState.selectedProjectId === undefined ) {
    content = <NoProjectSelected onAddNewProject={handleAddNewProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddNewProject={handleAddNewProject} projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
