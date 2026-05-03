import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the header and form', () => {
  render(<App />);
  expect(screen.getByText(/personal project showcase app/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
});

test('adds a project card and clears the inputs', () => {
  render(<App />);

  const titleInput = screen.getByRole('textbox', { name: /title/i });
  const descInput = screen.getByRole('textbox', { name: /description/i });

  userEvent.type(titleInput, 'My Project');
  userEvent.type(descInput, 'A cool project');
  userEvent.click(screen.getByRole('button', { name: /add/i }));

  expect(screen.getByText('My Project')).toBeInTheDocument();
  expect(titleInput).toHaveValue('');
  expect(descInput).toHaveValue('');
});

test('does not add a project when a field is empty', () => {
  render(<App />);

  userEvent.type(screen.getByRole('textbox', { name: /title/i }), 'Only Title');
  userEvent.click(screen.getByRole('button', { name: /add/i }));

  expect(screen.queryAllByRole('heading', { level: 3 })).toHaveLength(0);
});

test('deletes a project card when the ✕ button is clicked', () => {
  render(<App />);

  userEvent.type(screen.getByRole('textbox', { name: /title/i }), 'Delete Me');
  userEvent.type(screen.getByRole('textbox', { name: /description/i }), 'Some desc');
  userEvent.click(screen.getByRole('button', { name: /add/i }));
  userEvent.click(screen.getByRole('button', { name: /✕/i }));

  expect(screen.queryByText('Delete Me')).not.toBeInTheDocument();
});

test('filters cards by title using the search box', () => {
  render(<App />);

  for (const [title, desc] of [['React App', 'Desc 1'], ['Vue App', 'Desc 2']]) {
    userEvent.type(screen.getByRole('textbox', { name: /title/i }), title);
    userEvent.type(screen.getByRole('textbox', { name: /description/i }), desc);
    userEvent.click(screen.getByRole('button', { name: /add/i }));
  }

  userEvent.type(screen.getByPlaceholderText(/search projects/i), 'React');

  expect(screen.getByText('React App')).toBeInTheDocument();
  expect(screen.queryByText('Vue App')).not.toBeInTheDocument();
});
