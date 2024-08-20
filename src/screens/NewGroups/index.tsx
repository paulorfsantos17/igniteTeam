import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { groupCreate } from '@storage/group/groupCreate'
import { Alert } from 'react-native'
import { AppError } from '@utils/AppError'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const { navigate } = useNavigation()
  async function handleNewGroup() {
    try {
      const isGroupNameEmpty  =  group.trim().length === 0

      if(isGroupNameEmpty) {
        return  Alert.alert('Novo Grupo', 'Informe o nome da turma.')
      }

      await groupCreate(group)
      navigate('players', {
        group,
      })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.')
        console.error('Error creating group:', error)
      }
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
