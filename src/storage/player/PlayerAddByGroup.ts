import AsyncStorage from '@react-native-async-storage/async-storage'
import type { PlayerStorageDTO } from './PlayerStorageDTO'
import { PLAYER_COLLECTION } from '@storage/storageConfig'
import { PlayerGetByGroup } from './playerGetByGroup'
import { AppError } from '@utils/AppError'

interface PlayerAddByGroupParams {
  newPlayer: PlayerStorageDTO
  group: string
}
export async function PlayerAddByGroup({
  group,
  newPlayer,
}: PlayerAddByGroupParams) {
  try {
    const storagePlayers = await PlayerGetByGroup({ group })

    const isPlayerExist = storagePlayers.find(
      (player) => player.name.toUpperCase() === newPlayer.name.toUpperCase(),
    )

    if (isPlayerExist) {
      throw new AppError('Jogador já cadastrado neste grupo.')
    }

    const storage = JSON.stringify([...storagePlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
