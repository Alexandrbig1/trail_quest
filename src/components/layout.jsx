import styled from "styled-components";

export const RootLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const MainContainer = styled.main`
  flex-grow: 1;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  position: relative;
  margin: 0 auto;
  padding: 0 1.2rem;
  border: 1px solid red;

  @media (min-width: 768px) {
    max-width: 768px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8.6rem;
    max-width: 1440px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 9.6rem 2.4rem;
    gap: 9.6rem;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8.6rem;
`;
