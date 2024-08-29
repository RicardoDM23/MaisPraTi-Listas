import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from './Container';
import Title from './Title';
import Input from './Input';
import Button from './Button';
import TaskList from './TaskList';
import TaskItem from './TaskItem';
import EditInput from './EditInput';

const API_URL = 'http://localhost:5000/tasks';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    setTasks(response.data);
  };

  const addTask = async () => {
    if (task) {
      const newTask = { text: task };
      const response = await axios.post(API_URL, newTask);
      setTasks([...tasks, response.data]);
      setTask('');
    }
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, text) => {
    setEditingTaskId(id);
    setEditingTaskText(text);
  };

  const updateTask = async (id) => {
    const updatedTask = { text: editingTaskText };
    await axios.put(`${API_URL}/${id}`, updatedTask);
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: editingTaskText } : task)));
    setEditingTaskId(null);
    setEditingTaskText('');
  };

  return (
    <Container>
      <Title>Todo App</Title>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={addTask}>Add Task</Button>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {editingTaskId === task.id ? (
              <EditInput
                type="text"
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                onBlur={() => updateTask(task.id)}
              />
            ) : (
              <>
                {task.text}
                <div>
                  <button onClick={() => editTask(task.id, task.text)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default TodoApp;
