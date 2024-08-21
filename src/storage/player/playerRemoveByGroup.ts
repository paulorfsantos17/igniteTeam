import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { PlayerGetByGroup } from './playerGetByGroup'

interface PlayerGetByGroupParams {
  group: string
  playerNameRemoved: string
}
export async function PlayerRemoveByGroup({
  group,
  playerNameRemoved,
}: PlayerGetByGroupParams) {
  try {
    const storage = await PlayerGetByGroup({ group })

    const filteredPlayers = storage.filter(
      (player) => player.name !== playerNameRemoved,
    )

    const players = JSON.stringify(filteredPlayers)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
  } catch (error) {
    throw error
  }
}
