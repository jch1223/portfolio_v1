import styled from 'styled-components';

const ContainerStyle = styled.div`
  max-width: 1180px;
  padding: 0 20px;
  width: 100%;
  margin: auto;
  @media (max-width: 768px) {
    padding-right: 0;
    padding-left: 0;
    max-width: 360px;
    width: 100%;
  }
`;

export default ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};
