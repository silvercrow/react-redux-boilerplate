import styled from 'styled-components';
export const FormModule = styled.div`
position: relative;
background: #ffffff;
max-width: 420px;
width: 100%;
margin: 0 auto;
margin-top:8%;
border: 1px solid #cecece;
margin-bottom: 30px;
overflow: hidden;
position: relative;
padding: 20px;
color: #888;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
-ms-border-radius: 4px;
border-radius: 4px;
-webkit-box-shadow: 0 2px 3px 0 rgba(0,0,0,.15);
box-shadow: 0 2px 3px 0 rgba(0,0,0,.15);
`;


export const Input = styled.input`
display: block;
width: 100%;
border: 1px solid #CCC;
padding: 0 15px;
margin: 0 0 20px;
padding: 10px 15px;
-webkit-box-sizing: border-box;
        box-sizing: border-box;
font-wieght: 400;
-webkit-transition: 0.3s ease;
transition: 0.3s ease;
outline: none;
border-radius: 4px;
:focus {
    border: 1px solid #33b5e5;
    color: #333333;
  }
`;
export const Container = styled.div`
padding: 40px;
`;
export const Button = styled.button`
cursor: pointer;
background: linear-gradient(to bottom,#adff4c 3%,#08b445 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#adff4c', endColorstr='#08b445', GradientType=0);
  width: 100%;
  border: 0;
  padding: 10px 15px;
  color: #ffffff;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  box-shadow: inset 0 0 1px rgba(0,0,0,.6);
  border: 1px solid #CCC;
  border-radius: 4px;
  font-family: "Trebuchet MS","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Tahoma,sans-serif;
font-weight: 600;
line-height: 1.4em;
`;
export const H2 = styled.h2`
margin: 0 0 20px;
color: #57d11b;
font-weight: 400;
font-size: 18px;
line-height: 1;
`;


