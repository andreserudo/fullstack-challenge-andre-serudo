import styled from 'styled-components';

const HeaderWrapper = styled.header`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem 2rem;
    background-color: #191970;
`;

const TextLink = styled.button`
    height: 32px;
    border: none;
    color:white;
    background-color: transparent;
    cursor: pointer;

`;

export { HeaderWrapper, TextLink };
