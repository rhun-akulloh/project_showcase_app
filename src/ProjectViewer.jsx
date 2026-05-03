import ProjectCard from './ProjectCard';

function ProjectViewer({ projects, search, onSearchChange, onDelete }) {
  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="projectViewer">
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search projects by title..."
          className="searchInput"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
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
            onDelete={() => onDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectViewer;
