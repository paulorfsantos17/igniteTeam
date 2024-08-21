import { Header } from '@components/Header'
import { Container, NumberOfPlayers } from './styles'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { Filter } from '@components/Filter'
import { Alert, FlatList, type TextInput } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { HeaderList } from '@components/Filter/styles'
import { PlayerCard } from '@components/PlayerCard'
import { Button } from '@components/Button'
import { useRoute } from '@react-navigation/native'
import { AppError } from '@utils/AppError'
import { PlayerAddByGroup } from '@storage/player/PlayerAddByGroup'
import type { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'
import { playerGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam'

interface PlayersRouteParams {
  group: string
}

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [newPlayerName, setNewPlayerName] = useState('')

  const newPlayerNameInputRef = useRef<TextInput>(null)

  const route = useRoute()

  const { group } = route.params as PlayersRouteParams

  const { COLORS } = useTheme()

  function handleSetTeam(team: string) {
    setTeam(team)
  }

  async function handleAddPlayer() {
    const isInputPlayerNameEmpty = newPlayerName.trim().length === 0

    if (isInputPlayerNameEmpty) {
      return Alert.alert('Adicionar Jogador', 'Informe o nome do jogador.')
    }

    const newPlayer: PlayerStorageDTO = { name: newPlayerName, team }
    try {
      await PlayerAddByGroup({ newPlayer, group })
      await fetchPlayerByTeam()
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Adicionar Jogador', error.message)
      } else {
        console.error(error)
        return Alert.alert(
          'Adicionar Jogador',
          'Não foi possível adicionar o Jogador.',
        )
      }
    }
    newPlayerNameInputRef.current?.blur()
    setNewPlayerName('')
  }

  async function fetchPlayerByTeam() {
    try {
      const playerByTeam = await playerGetByGroupAndTeam({ group, team })

      setPlayers(playerByTeam)
    } catch (error) {
      Alert.alert('Buscar Jogadores', 'Não foi possível buscar os jogadores.')
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPlayerByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times."
      />
      <Input.Root>
        <Input.InputText
          inputRef={newPlayerNameInputRef}
          placeholder="Nome do participant"
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <Input.InputButton onPress={handleAddPlayer}>
          <MaterialIcons name="add" size={28} color={COLORS.GREEN_700} />
        </Input.InputButton>
      </Input.Root>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => handleSetTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}} />
        )}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  )
}
