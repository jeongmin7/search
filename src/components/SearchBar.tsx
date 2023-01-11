/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import styled from 'styled-components';
import getData from '../apis';
import Loading from './Loading';
import AutoCompleteItem from './autoComplete/AutoCompleteItem';
import useDebounce from '../hooks/useDebounce';

const SearchBar: React.FC = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchedData, setSearchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = () => {
    setIsSearch(true);
  };

  const getSearchTermHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const { debounceValue } = useDebounce(searchTerm);
  useEffect(() => {
    if (!debounceValue) {
      setSearchedData([]);
    }
    getData(debounceValue).then(res => setSearchedData(res));
  }, [debounceValue]);

  return (
    <Wrapper>
      <SearchWrapper>
        <InputWrapper>
          {!isSearch && <BsSearch />}
          <Input
            type="text"
            placeholder="질환명을 입력해 주세요"
            value={searchTerm}
            onClick={() => {
              search();
            }}
            onChange={getSearchTermHandler}
          />
          {isSearch && (
            <AiFillCloseCircle style={{ fontSize: '1rem', color: '#A6AFB7' }} />
          )}
        </InputWrapper>
        <Button type="button">
          <BsSearch />
        </Button>
        {isLoading && <Loading />}
      </SearchWrapper>
      {isSearch && (
        <AutoCompleteItem
          searchedData={searchedData}
          searchTerm={debounceValue}
        />
      )}
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  margin-top: 10rem;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  height: 65px;
  padding-right: 8px;
  border: 2px solid white;
  border-radius: 30px;
  background-color: #fff;
  :focus-within {
    border: px solid #017be8;
  }
`;
const InputWrapper = styled.div`
  padding: 20px 10px 20px 24px;
`;
const Input = styled.input`
  width: 350px;
  height: 30px;
  font-size: 1.2rem;
  color: #e0e3e6;
  padding-left: 0.8rem;
`;
const Button = styled.button`
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 700;
  background-color: #017be8;
  border-radius: 30px;
`;
