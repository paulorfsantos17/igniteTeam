import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const { navigate } = useNavigation()
  async function handleNewGroup() {
    try {
      await groupCreate(group)
      navigate('players', {
        group,
      })
    } catch (error) {
      console.error('Error creating group:', error)
    }
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
          <Input.InputText
            placeholder="Nome da turma"
            onChangeText={setGroup}
          />
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
