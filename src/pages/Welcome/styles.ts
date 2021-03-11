import styled, { css } from 'styled-components';

export const WelcomeContainer = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background: ${theme.colors.primary};
  `}
`;
