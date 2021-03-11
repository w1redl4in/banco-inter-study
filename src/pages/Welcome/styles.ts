import styled, { css } from 'styled-components';

export const WelcomeContainer = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background: ${theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
