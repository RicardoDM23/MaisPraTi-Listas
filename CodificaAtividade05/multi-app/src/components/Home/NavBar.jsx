import styled from 'styled-components';

const NavBar = styled.div`
width: 240px;
background-color: #2c3e50;
color: #fff;
height: 100%;
display: flex;
flex-direction: column;
padding: 20px;
box-shadow: 3px 0 15px rgba(0,0,0,0.3);

@media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
}
`;

export default NavBar;