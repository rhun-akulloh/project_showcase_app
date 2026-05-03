function ProjectCard({ title, description, onDelete }) {
  return (
    <div className="projectCard">
      <button className="deleteButton" onClick={onDelete}>✕</button>
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDescription">{description}</p>
    </div>
  );
}

export default ProjectCard;
