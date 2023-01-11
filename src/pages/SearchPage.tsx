import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};

export default SearchPage;

const Wrapper = styled.div`
  background-color: #cae9ff;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
