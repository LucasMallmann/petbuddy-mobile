import styled from 'styled-components/native';

export const AvatarField = styled.Image`
  width: ${props => (props.size === 'p' ? '40px' : '80px')};
  height: ${props => (props.size === 'p' ? '40px' : '80px')};
  border-radius: ${props => (props.size === 'p' ? '20px' : '40px')};
  border-width: ${props => (props.border ? 2 : 0)};
  border-color: ${props => (props.border ? '#fff' : 'transparent')};
`;
