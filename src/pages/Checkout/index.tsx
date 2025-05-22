import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { Row, InputGroup, TabButton } from './styles'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input type="text" id="fullName" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input type="email" id="deliveryEmail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input type="email" id="confirmDeliveryEmail" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancario
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={cartao} alt="Cartao de credito" />
            Cartao de credito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartao</label>
                    <input type="text" id="cardOwner" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartao
                    </label>
                    <input type="text" id="cpfCardOwner" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartao</label>
                    <input type="text" id="cardDisplayName" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Numero do cartao</label>
                    <input type="text" id="cardNumber" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mes do vencimento</label>
                    <input type="text" id="expiresMonth" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input type="text" id="expiresYear" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input type="text" id="cardCode" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select>
                      <option>1x de R$ 200,00</option>
                      <option>2x de R$ 200,00</option>
                      <option>3x de R$ 200,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                ipsam modi maiores distinctio sit praesentium dignissimos
                tempora harum commodi, natus impedit ex eum, id debitis
                aspernatur quia et eius cumque.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
