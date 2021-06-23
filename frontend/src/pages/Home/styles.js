import styled from 'styled-components';

const HomeWrapper = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 0 .5rem;
`;

const ModuleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Module = styled.button`
    width: 150px;

    &+&, &:first-of-type{
        margin-bottom: 1rem;
    };
`;

export { HomeWrapper, ModuleWrapper, Module };
