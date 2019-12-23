import styled from 'styled-components';
import Button from '~/components/Button';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #FFF;
`;

export const Header = styled.div`
  display: flex;
  width: 70vw;
  background: #6ACB9A;
  color: #000;
  font-size: 30px;
  text-align: center;
  flex-direction: row;
`;

export const Logo = styled.img`
  max-width: 300px;
`;

export const Title = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #000;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: row;
  flex: 1;
  padding: 10px;
  margin: 10px;
  background: #FFF;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  border: 1px solid #000;
  height: 70vh;
  overflow: scroll;
`;

export const SubmitButton = styled(Button)`
  margin: 15px auto;
  align-self: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SmallForms = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: row;  
`;

export const SmForm = styled(Form)`
  height: 35vh;
`;
