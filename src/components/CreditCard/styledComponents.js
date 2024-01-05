import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const CardContainer = styled.div`
  background-color: #3b4b69;
  width: 40vw;
  height: 100vh;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 350px;
  height: 250px;
  border-radius: 16px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  margin-top: 100px;
  line-height: 2px;
`

export const YellowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 0px;
  margin: 10px;
`
export const YellowUnderLine = styled.hr`
  border: 2px solid #ffd773;
  width: 156px;
  line-height: 0px;
  margin-left: 1px;
`
export const CardNumber = styled.p`
  font-size: 30px;
  font-weight: 500;
`
export const CardName = styled.p`
  font-size: 22px;
  font-weight: 500;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
`
export const InputShadowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 250px;
  box-shadow: 1px 1px 5px 5px #c3cad9;
`
export const Input = styled.input`
  width: 340px;
  background-color: transparent;
  outline: none;
  margin: 10px;
  border: none;
  box-shadow: 1px 1px 5px 5px #d3d9e0;
  font-weight: 400;
  padding: 15px;
`
export const PaymentHead = styled.h1`
  color: #344e7a;
  font-size: 24px;
`
