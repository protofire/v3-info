import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { getChainById } from 'config/chains'
import { useActiveNetworkVersion, useBlockClient, useDataClient } from 'state/application/hooks'

export const SUBGRAPH_META = gql`
  query subgraphMeta {
    _meta {
      block {
        number
      }
    }
  }
`

/**
 * Fetch top addresses by volume
 */
export function useFetchedSubgraphStatus(): {
  available: boolean | null
  syncedBlock: number | undefined
  headBlock: number | undefined
} {
  const [activeNetwork] = useActiveNetworkVersion()
  const chain = getChainById(activeNetwork.chainId)

  const hasEndpoints = Boolean(chain?.resolved.dataSubgraphUrl && chain?.resolved.blockSubgraphUrl)
  const dataClient = useDataClient()
  const blockClient = useBlockClient()

  const dataMeta = useQuery<{ _meta?: { block?: { number?: number } } }>(SUBGRAPH_META, {
    client: dataClient,
    skip: !hasEndpoints,
    fetchPolicy: 'network-only',
  })

  const blockMeta = useQuery<{ _meta?: { block?: { number?: number } } }>(SUBGRAPH_META, {
    client: blockClient,
    skip: !hasEndpoints,
    fetchPolicy: 'network-only',
  })

  if (!hasEndpoints) {
    return { available: false, syncedBlock: undefined, headBlock: undefined }
  }

  if (dataMeta.loading || blockMeta.loading) {
    return { available: null, syncedBlock: undefined, headBlock: undefined }
  }

  if (
    dataMeta.error ||
    blockMeta.error ||
    !dataMeta.data?._meta?.block?.number ||
    !blockMeta.data?._meta?.block?.number
  ) {
    return { available: false, syncedBlock: undefined, headBlock: undefined }
  }

  return {
    available: true,
    syncedBlock: dataMeta.data._meta.block.number,
    headBlock: blockMeta.data._meta.block.number,
  }
}
