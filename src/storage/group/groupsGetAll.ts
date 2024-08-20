import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)

    if (!storage) {
      return []
    }

    const groups: string[] = JSON.parse(storage)

    return groups
  } catch (error) {
    console.error('Error fetching groups:', error)
    throw error
  }
}
