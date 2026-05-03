import { useState } from 'react';
import './App.css';
import ProjectAdder from './ProjectAdder';
import ProjectViewer from './ProjectViewer';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');

  function addProject() {
    if (!title.trim() || !description.trim()) return;
    setProjects([...projects, { title, description }]);
    setTitle('');
    setDescription('');
  }

  function deleteProject(index) {
    setProjects(projects.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Project Showcase App</h1>
      </header>
      <ProjectAdder
        title={title}
        description={description}
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
        onAdd={addProject}
      />
      <ProjectViewer
        projects={projects}
        search={search}
        onSearchChange={setSearch}
        onDelete={deleteProject}
      />
    </div>
  );
}

export default App;
