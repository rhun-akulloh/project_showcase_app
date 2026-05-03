import { useState } from 'react';
import './App.css';

function ProjectCard({ title, description, onDelete }) {
  return (
    <div className="projectCard">
      <button className="deleteButton" onClick={onDelete}>✕</button>
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDescription">{description}</p>
    </div>
  );
}

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');

  function addProject() {
    //Adds the projects to an object for display in the projectCards
    if (!title.trim() || !description.trim()) return;
    setProjects([...projects, { title, description }]);
    setTitle('');
    setDescription('');
  }

  function deleteProject(index) {
    // Deletes a project from the projects card
    setProjects(projects.filter((_, i) => i !== index));
  }

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Project Showcase App</h1>
      </header>
      <div className="projectAdder">
        <h2>Add Project</h2>
        <label htmlFor="titleInput" className="labelTags"><b>Title</b></label>
        <input
          id="titleInput"
          type="text"
          className="titleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter project title"
        />
        <label htmlFor="descriptionInput" className="labelTags"><b>Description</b></label>
        <input
          id="descriptionInput"
          type="text"
          className="descriptionInput"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter project description"
        />
        <br />
        <button className="addButton" onClick={addProject}>+ Add Project</button>
      </div>
      <div className="projectViewer">
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search projects by title..."
            className="searchInput"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="projectCards">
          {filtered.length === 0 && (
            <p className="emptyMessage">
              {projects.length === 0 ? 'No projects yet. Add one above!' : 'No projects match your search.'}
            </p>
          )}
          {filtered.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              onDelete={() => deleteProject(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
