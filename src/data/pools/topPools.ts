import { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { useActiveNetworkVersion, useClients } from 'state/application/hooks'
import { notEmpty } from 'utils'
import { getPoolHideList } from '../../constants'

export const TOP_POOLS = gql`
  query topPools {
    pools(first: 50, orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
      id
    }
  }
`

interface TopPoolsResponse {
  pools: {
    id: string
  }[]
}

/**
 * Fetch top addresses by volume
 */
export function useTopPoolAddresses(): {
  loading: boolean
  error: boolean
  addresses: string[] | undefined
} {
  const [currentNetwork] = useActiveNetworkVersion()
  const { dataClient } = useClients()
  const { loading, error, data } = useQuery<TopPoolsResponse>(TOP_POOLS, {
    client: dataClient,
    fetchPolicy: 'cache-first',
  })

  const formattedData = useMemo(() => {
    if (data) {
      const hideList = getPoolHideList(currentNetwork.chainId).map((x) => x.toLowerCase())
      return data.pools
        .map((p) => {
          if (hideList.includes(p.id.toLocaleLowerCase())) {
            return undefined
          }
          return p.id
        })
        .filter(notEmpty)
    } else {
      return undefined
    }
  }, [currentNetwork.chainId, data])

  return {
    loading: loading,
    error: Boolean(error),
    addresses: formattedData,
  }
}
