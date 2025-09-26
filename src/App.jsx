import Aside from "./Componentes/Aside"
import Container from "./Componentes/Container"
import Main from "./Componentes/Main/Main"
import SearchInput from "./Componentes/SearchInput"
import Typography from "./Componentes/Typography"

import Card from "./Componentes/Card"

function App() {
  return (
    <Container>
      <Aside/>
      <Main>
        <SearchInput/>
        <div>
          <Typography variant="h1">
            Olá, Leandro!
          </Typography>
          <Typography variant="p">
            veja como estão suas finanças hoje.
          </Typography>
        </div>
        <section>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$200
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$200
            </Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  )
}

export default App
