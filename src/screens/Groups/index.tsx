import { Header } from '@components/Header'
import { Container } from './styles'
import { Highlight } from '@components/Highlight'
import GroupCard from '@components/GroupCard'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import ListEmpty from '@components/ListEmpty'
import { Button } from '@components/Button'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { groupsGetAll } from '@storage/group/groupsGetAll'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const { navigate } = useNavigation()

  function handleNewGroup() {
    navigate('new')
  }

  function handleOpenGroup(group: string) {
    navigate('players', { group })
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll()
      setGroups(data)
    } catch (error) {
      console.error('Error fetching groups:', error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

  return (
    <Container>
      <Header showBackButton={false} />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma." />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma." />
        }
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}
