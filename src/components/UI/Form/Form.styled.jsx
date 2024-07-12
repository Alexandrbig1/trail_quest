import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  padding: 2.4rem;
  border-radius: 1.2rem;
`;
