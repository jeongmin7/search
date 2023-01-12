import React from 'react';
import styled from 'styled-components';

interface Props {
  data: string;
  searchTerm: string;
}

const HighlightedText = ({ data, searchTerm }: Props) => {
  const boldStartIndex = data.toLowerCase().indexOf(searchTerm.toLowerCase());
  const boldEndIndex =
    data.toLowerCase().indexOf(searchTerm.toLowerCase()) + searchTerm.length;

  return (
    <div>
      {data.substring(0, boldStartIndex)}
      <Highlighted>{data.substring(boldStartIndex, boldEndIndex)}</Highlighted>
      {data.substring(boldEndIndex)}
    </div>
  );
};

export default HighlightedText;

const Highlighted = styled.span`
  font-weight: 700;
`;
