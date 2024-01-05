import {useState} from 'react'
import {
  CardContainer,
  ImageContainer,
  YellowUnderLine,
  YellowContainer,
  CardNumber,
  CardName,
  MainContainer,
  InputContainer,
  InputShadowContainer,
  Input,
  PaymentHead,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolder, setCardHolder] = useState('')

  const cardNumberUpdate = event => {
    setCardNumber(event.target.value)
  }

  const cardNameUpdate = event => {
    setCardHolder(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <YellowContainer>
          <h1>CREDIT CARD</h1>
          <YellowUnderLine />
        </YellowContainer>
        <ImageContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <p>CARDHOLDER NAME</p>
          <CardName>{cardHolder.toUpperCase()}</CardName>
        </ImageContainer>
      </CardContainer>
      <InputContainer>
        <InputShadowContainer>
          <PaymentHead>Payment Method</PaymentHead>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={cardNumberUpdate}
            value={cardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={cardNameUpdate}
            value={cardHolder}
          />
        </InputShadowContainer>
      </InputContainer>
    </MainContainer>
  )
}

export default CreditCard
