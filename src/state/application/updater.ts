import { useEffect } from 'react'
import { useSubgraphStatus } from './hooks'
import { useFetchedSubgraphStatus } from '../../data/application'

export default function Updater(): null {
  // subgraph status
  const [, updateStatus] = useSubgraphStatus()
  const { available, syncedBlock: newSyncedBlock, headBlock } = useFetchedSubgraphStatus()

  useEffect(() => {
    updateStatus(available, newSyncedBlock, headBlock)
  }, [available, headBlock, newSyncedBlock, updateStatus])

  return null
}
