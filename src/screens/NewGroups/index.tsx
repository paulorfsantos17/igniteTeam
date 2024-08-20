import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'

export function NewGroup() {
  const { navigate } = useNavigation()
  function handleNewGroup() {
    navigate('players', {
      group: 'Rocket',
    })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie a sua turma para adicionar as pessoas."
        />
        <Input.Root>
          <Input.InputText placeholder="Nome da turma" />
        </Input.Root>
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  )
}
