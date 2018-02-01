import styled from 'styled-components';
export const HeaderBar = styled.header`
  height: 70px;
  background-color: #0B557D;
  border-bottom: 1px solid #C0FF00;
  z-index: 500;
`;
export const Logo = styled.section`
  float: left;
  height: 70px;
  color: #FFF;
  padding-top:10px;
`;
export  const Container = styled.section`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
      max-width: 540px;
  }
  @media (min-width: 768px) {
      max-width: 720px;
  }
  @media (min-width: 992px) {
      max-width: 960px;
  }
  @media (min-width: 1200px) {
      max-width: 1140px;
  }
`;

export const CopyRight = styled.footer`
p {opacity: .6;
color: #FFF;
margin: 0;
padding: 12px 0;
font-size: 10px;
font-weight: 300;
text-align: center;}
`;

export const Body = styled.div`
background:#ECEEF0;
`;
export const Wrapper = styled.div`
min-height:100%;
position:relative;
`;
export const Content = styled.div`
padding:10px;
padding-bottom:60px; 
`;
export const Foot = styled.div`
position:absolute;
bottom:0;
width:100%;
height:60px; 
background:#083B57;
`;