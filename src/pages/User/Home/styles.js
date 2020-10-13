import styled from 'styled-components';

export const HeaderContainer = styled.View`
  height: 22%;
  background-color: #cc0303;
  padding: 0 30px;
  width: 100%;
`;

export const EnterpreunerArea = styled.View``;

export const ContainerHeaderText = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const ExternalContainerAvatar = styled.View`
  /* background-color: pink; */
  height: 180px;
  position: relative;
`;

export const ContainerDataEnterpreuner = styled.View`
  height: 85%;
  width: 100%;
  margin-top: 20px;
  background-color: #fff;
  position: absolute;
  z-index: 1;
  border-radius: 30px;
  align-items: center;
`;

export const ContainerDataTitle = styled.View`
  margin-top: 20px;
`;

export const Container = styled.View`
  background-color: #e5e5e5;
  height: 100%;
  padding: 20px;
`;

export const ContainerButtonAction = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonAction = styled.TouchableOpacity`
  height: 120px;
  border: 1px solid #cecece;
  width: 110px;
  border-radius: 12px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;
