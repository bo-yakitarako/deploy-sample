import React from "react";
import styled from "styled-components";

export const App: React.FC = () => {
  return (
    <Wrapper>
      <h1>こんにちは, 世界</h1>
      <p>最強のサンプルサイトがお出ましだぜ</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  color: #eee;
  width: 100%;
  min-height: 100vh;
  background-color: #222;
  font-family: 'Hina Mincho', serif;
  font-family: 'Noto Serif JP', serif;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;

  h1 {
    margin: 0;
    font-size: 48px;
  }

  p {
    margin: 0;
    font-size: 24px;
  }
`;
