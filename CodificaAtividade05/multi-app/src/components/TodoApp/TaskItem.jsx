import styled from 'styled-components';

const TaskItem = styled.li`
  background: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: background-color 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f1f1f1;
  }

  button {
    margin-left: 10px;
    background: transparent;
    border: none;
    color: red;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      color: darkred;
    }
  }
`;

export default TaskItem;
