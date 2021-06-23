import React from 'react';
import { useHistory } from 'react-router-dom';
import { HomeWrapper, ModuleWrapper, Module } from './styles';

function Home() {
  const history = useHistory();

  const handleClick = (location) => {
    history.push(location);
  };

  return (
    <HomeWrapper>
      <h1>Amais</h1>
      <ModuleWrapper>
        <Module onClick={() => handleClick('/schools')}>Escolas</Module>
        <Module onClick={() => handleClick('/classes')}>Turmas</Module>
        <Module onClick={() => handleClick('/students')}>Alunos</Module>
        <Module onClick={() => handleClick('/teachers')}>Professores</Module>
      </ModuleWrapper>
    </HomeWrapper>
  );
}

export default Home;
