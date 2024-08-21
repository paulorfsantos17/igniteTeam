import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig'
import { groupsGetAll } from './groupsGetAll'

interface GroupRemoveByNameParams {
  groupNameDelete: string
}

export async function groupRemoveByName({
  groupNameDelete,
}: GroupRemoveByNameParams) {
  try {
    const storageGroups = await groupsGetAll()

    const isGroupExist = storageGroups.includes(groupNameDelete)

    if (!isGroupExist) {
      throw new Error('Grupo não encontrado.')
    }

    const groups = storageGroups.filter((group) => group !== groupNameDelete)

    const storage = JSON.stringify(groups)

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupNameDelete}`)
  } catch (error) {
    throw error
  }
}
