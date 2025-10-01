import Aside from "./Componentes/Aside";
import Container from "./Componentes/Container";
import Main from "./Componentes/Main/Main";
import SearchInput from "./Componentes/SearchInput";
import Typography from "./Componentes/Typography";

import { Accounts } from "./Componentes/Accounts";
import Card from "./Componentes/Card";
import Section from "./Componentes/Section";

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
        <Section>
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
              Progresso da meta financeira
            </Card.Header>
            <Card.Body>
              Economizar
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Minhas Contas
            </Card.Header>
            <Card.Body>
              <Accounts/>
            </Card.Body>
          </Card>
        </Section>
      </Main>
    </Container>
  )
}

export default App
