import styled from 'styled-components';

const EditInput = styled.input`
  margin-left: 10px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 60%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export default EditInput;
