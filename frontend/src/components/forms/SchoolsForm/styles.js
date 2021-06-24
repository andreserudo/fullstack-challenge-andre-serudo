import styled from 'styled-components';

const SchoolFormWrapper = styled.div`
    width: 185px;
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 2rem;

    form {
        width: 100%;
        display: flex;
            flex-direction: column;
            align-items: center;

        label {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            
        }
    }
    
`;

SchoolFormWrapper.Actions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 1.5rem;
`;

export default SchoolFormWrapper;
