/* eslint-disable */
import React, { useEffect, useState } from 'react';
import EmptyResult from './EmptyResult';
import { Sick } from '../../types';
import HighlightedText from './HighlightText';
import styled from 'styled-components';

type Props = {
  searchTerm: string | undefined;
  searchedData: Sick[];
};
const AutoCompleteItem = (props: Props) => {
  const { searchedData, searchTerm } = props;
  const [suggested, setSuggested] = useState<Sick[]>([]);

  const filteredData = () => {
    setSuggested(searchedData);

    if (searchedData.length > 8) {
      setSuggested(searchedData.slice(0, 8));
    }
  };

  useEffect(filteredData, [searchTerm, searchedData]);
  return (
    <Wrapper onClick={() => {}} onMouseDown={e => e.preventDefault()}>
      <ContentWrapper>
        <Title>추천 검색어</Title>
        <Content>
          {!searchTerm && <div>검색어를 입력해주세요</div>}
          {searchTerm && suggested.length === 0 && <EmptyResult />}
          {searchTerm &&
            suggested.map(item => (
              <div key={item.sickCd}>
                <HighlightedText data={item.sickNm} searchTerm={searchTerm} />
              </div>
            ))}
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AutoCompleteItem;

const Wrapper = styled.div`
  background-color: #fff;
  height: 400px;
  border-radius: 20px;
`;
const ContentWrapper = styled.div`
  padding: 25px;
`;
const Title = styled.p`
  font-size: 20px;
  border-bottom: 1px solid #333;
`;
const Content = styled.div`
  font-size: 20px;
`;
