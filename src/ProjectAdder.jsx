function ProjectAdder({ title, description, onTitleChange, onDescriptionChange, onAdd }) {
  return (
    <div className="projectAdder">
      <h2>Add Project</h2>
      <label htmlFor="titleInput" className="labelTags"><b>Title</b></label>
      <input
        id="titleInput"
        type="text"
        className="titleInput"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Enter project title"
      />
      <label htmlFor="descriptionInput" className="labelTags"><b>Description</b></label>
      <input
        id="descriptionInput"
        type="text"
        className="descriptionInput"
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        placeholder="Enter project description"
      />
      <br />
      <button className="addButton" onClick={onAdd}>+ Add Project</button>
    </div>
  );
}

export default ProjectAdder;
