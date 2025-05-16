import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam natus
      suscipit velit similique, odio possimus architecto! Perspiciatis illo
      autem atque similique a modi provident minus ut tempore, omnis, iste
      distinctio.
    </Descricao>
  </Card>
)

export default Product
