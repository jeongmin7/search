/* eslint-disable */
import React, { useEffect, useState } from 'react';
import EmptyResult from './EmptyResult';
import { Sick } from '../../types';
import HighlightedText from './HighlightText';

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
    <div onClick={() => {}} onMouseDown={e => e.preventDefault()}>
      <p>추천 검색어</p>
      {!searchTerm && <div>검색어를 입력해주세요</div>}
      {searchTerm && suggested.length === 0 && <EmptyResult />}
      {searchTerm &&
        suggested.map(item => (
          <div key={item.sickCd}>
            <HighlightedText data={item.sickNm} searchTerm={searchTerm} />
          </div>
        ))}
    </div>
  );
};

export default AutoCompleteItem;
