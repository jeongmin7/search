import React from 'react';
import './App.css';
import SearchPage from './pages/SearchPage';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <SearchPage />
    </div>
  );
};

export default App;
