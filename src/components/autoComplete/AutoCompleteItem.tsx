/* eslint-disable */
import React, { useRef } from 'react';
import EmptyResult from './EmptyResult';
import { Sick } from '../../types';
import HighlightedText from './HighlightText';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import dataState from '../../recoil/limitedData';

type Props = {
  searchTerm: string | undefined;
  activeIdx: number;
};
const AutoCompleteItem = (props: Props) => {
  const { searchTerm, activeIdx } = props;
  const autoRef = useRef<HTMLUListElement>(null);
  const [suggested, setSuggested] = useRecoilState<Sick[]>(dataState);

  return (
    <Wrapper onClick={() => {}} onMouseDown={e => e.preventDefault()}>
      <ContentWrapper>
        <Title>추천 검색어</Title>
        <ul ref={autoRef}>
          {!searchTerm && <div>검색어를 입력해주세요</div>}
          {searchTerm && suggested.length === 0 && <EmptyResult />}
          {searchTerm &&
            suggested.map((item, idx) => (
              <Item key={item.sickCd} isActive={activeIdx === idx}>
                <HighlightedText data={item.sickNm} searchTerm={searchTerm} />
              </Item>
            ))}
        </ul>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AutoCompleteItem;

const Wrapper = styled.div`
  background-color: #fff;
  height: 400px;
  border-radius: 20px;
  font-size: 20px;
`;
const ContentWrapper = styled.div`
  padding: 25px;
`;
const Title = styled.p`
  border-bottom: 1px solid #333;
`;

const Item = styled.li<{ isActive: boolean }>`
  padding: 5px;
  width: 400px;
  &:hover {
    background-color: #edf5f5d4;
    cursor: pointer;
  }
  background-color: ${props => (props.isActive ? '#edf5f5d4' : '#fff')};
  position: relative;
`;
