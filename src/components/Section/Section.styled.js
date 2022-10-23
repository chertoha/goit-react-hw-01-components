import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-top: ${p => p.theme.space[6]};
  padding-bottom: ${p => p.theme.space[6]};
  text-align: center;

  background-color: ${p => p.theme.colors.background};
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]};
`;
