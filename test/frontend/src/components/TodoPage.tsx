import {
  Check,
  Delete,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.ts';
import { Task } from '../index';

const TodoPage = () => {
  const api = useFetch();
  const [ tasks, setTasks ] = useState<Task[]>([]);
  const [ newTaskName, setNewTaskName ] = useState<string>('');

  const handleFetchTasks = async () => setTasks(await api.get('/tasks'));
  // Function to delete a task by its ID
  const handleDelete = async (id: number) => {
    await api.delete(`/tasks/${id}`);
    await handleFetchTasks(); // Refresh the tasks
  };
  // Function to save a new task
  const handleSave = async () => {
    if (newTaskName) { // Check if the new task name is not empty
      await api.post('/tasks', { name: newTaskName }); // Send a POST request to add the new task
      setNewTaskName('');
      await handleFetchTasks(); // Refresh the tasks
    }
  };

  useEffect(() => {
    handleFetchTasks();
  }, []);

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={5}>
        <Typography variant="h2">HDM Todo List</Typography>
      </Box>
      {/* Display tasks */}
      <Box mt={5}>
        {tasks.map((task) => (
          <Box display="flex" alignItems="center" mt={2}>
            <TextField size="small" value={task.name} />
            <Button onClick={() => handleDelete(task.id)} color="error">
              Delete
            </Button>
          </Box>
        ))}
      </Box>
      <Box mt={5}>
        {/* Add new task */}
        <TextField
          size="small"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Add new task"
        />
        <Button onClick={handleSave} disabled={!newTaskName}>
          Add Task
        </Button>
      </Box>
    </Container>
  );
};

export default TodoPage;
