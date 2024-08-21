import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import type { PlayerStorageDTO } from './PlayerStorageDTO'

interface PlayerGetByGroupParams {
  group: string
}
export async function PlayerGetByGroup({ group }: PlayerGetByGroupParams) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

    const isPlayersListEmpty = !storage
    if (isPlayersListEmpty) {
      return []
    }

    const players: PlayerStorageDTO[] = JSON.parse(storage)

    return players
  } catch (error) {
    throw error
  }
}
