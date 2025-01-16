// src/components/Testej.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react'; // Biblioteca para testes de componentes React
import '@testing-library/jest-dom'; // Extensão de Jest com asserções úteis para manipulação de DOM
import Testej from './testej'; // Importa o componente que queremos testar

test('renders the Testej component correctly', () => {
  // Renderiza o componente
  render(<Testej />);

  // Seleciona o elemento no DOM que estamos testando por seu texto
  const element = screen.getByText(/This is the Testej component!/i);

  // Asserte que o elemento está presente no documento
  expect(element).toBeInTheDocument();
});