import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const ImageContainer = styled.View`
  width: auto;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;
export const Image = styled.Image`
  width: 120px;
  height: 30px;
  margin-right: 8px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 8px 4px;
  flex-direction: row;
  height: auto;
  border-color: #f2f2f2;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  justify-content: center;
`;
export const Content = styled.View`
  width: 100%;
  height: 100%;
`;
