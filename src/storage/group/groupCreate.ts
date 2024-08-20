import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storageConfig'
import { groupsGetAll } from './groupsGetAll'

export async function groupCreate(newGroup: string) {
  try {
    const storageGroups = await groupsGetAll()

    if (storageGroups.includes(newGroup)) {
      throw new Error('Group already exists')
    }

    const storage = JSON.stringify([...storageGroups, newGroup])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    console.error('Error creating group:', error)
    throw error
  }
}
