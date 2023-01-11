/* eslint-disable */
import React from 'react';
import { Sick } from '../../types';

type Props = {
  searchTerm: string | undefined;
  data: Sick[];
};
const AutoCompleteItem = (props: Props) => {
  const { data, searchTerm } = props;
  console.log(data);
  return (
    <div onClick={() => {}} onMouseDown={e => e.preventDefault()}>
      <p>추천 검색어</p>
      {data.map(item => (
        <div>{item.sickNm}</div>
      ))}
    </div>
  );

  // );
  // };
};

export default AutoCompleteItem;
