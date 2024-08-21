import { PlayerGetByGroup } from './playerGetByGroup'

interface PlayerGetByGroupParams {
  group: string
  team: string
}
export async function playerGetByGroupAndTeam({
  group,
  team,
}: PlayerGetByGroupParams) {
  try {
    const storage = await PlayerGetByGroup({ group })

    const players = storage.filter((player) => player.team === team)

    return players
  } catch (error) {
    throw error
  }
}
