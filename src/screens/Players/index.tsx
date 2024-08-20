import { Header } from '@components/Header'
import { Container, NumberOfPlayers } from './styles'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { Filter } from '@components/Filter'
import { FlatList } from 'react-native'
import { useState } from 'react'
import { HeaderList } from '@components/Filter/styles'
import { PlayerCard } from '@components/PlayerCard'
import { Button } from '@components/Button'
import { useRoute } from '@react-navigation/native'

interface PlayersRouteParams {
  group: string
}

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Paulo'])

  const route = useRoute()

  const { group } = route.params as PlayersRouteParams

  const { COLORS } = useTheme()

  function handleSetTeam(team: string) {
    setTeam(team)
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times."
      />
      <Input.Root>
        <Input.InputText placeholder="Nome do participant" />
        <Input.InputButton>
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  )
}
