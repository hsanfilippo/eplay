import Product from '../Product'

import { Container, List } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image="https://placehold.co/222x250"
          infos={['-10%', 'R$150']}
          system="Windows"
          title="Nome do Jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
