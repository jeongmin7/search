import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <div>
      <LoadingContainer>
        <LoadingPosition>
          <Spin />
        </LoadingPosition>
      </LoadingContainer>
    </div>
  );
};

export default Loading;
const LoadingSpinnerAnimation = keyframes`   0% { transform: translate(-50%,-50%) rotate(0deg); }
  100% { transform: translate(-50%,-50%) rotate(360deg); }`;

const LoadingContainer = styled.div`
  margin: 0 auto;
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  background: transparent;
`;

const LoadingPosition = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;
const Spin = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border: 15px solid #1677ff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${LoadingSpinnerAnimation} 1s linear infinite;
  top: 50%;
  left: 50%;
`;
