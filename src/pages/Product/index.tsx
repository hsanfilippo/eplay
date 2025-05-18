import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsa
          ipsum qui ratione veniam ullam velit, nobis est corporis quasi iste
          voluptatibus officia. Minus atque magni quia cum asperiores corporis!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsa
          ipsum qui ratione veniam ullam velit, nobis est corporis quasi iste
          voluptatibus officia. Minus atque magni quia cum asperiores corporis!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ipsa
          ipsum qui ratione veniam ullam velit, nobis est corporis quasi iste
          voluptatibus officia. Minus atque magni quia cum asperiores corporis!
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> Playstation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment <br />
          <b>Idiomas:</b> Inglês, espanhol, francês, alemão, italiano,
          português. As opções de áudio e legenda podem ser ajustadas nas
          configurações do jogo.
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <div>fotos</div>
      </Section>
    </>
  )
}

export default Product
