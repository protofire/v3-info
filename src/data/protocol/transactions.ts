import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import gql from 'graphql-tag'
import { Transaction, TransactionType } from 'types'
import { formatTokenSymbol } from 'utils/tokens'
import { getTokenOverride } from 'data/tokens/overrides'

const GLOBAL_TRANSACTIONS = gql`
  query transactions {
    transactions(first: 500, orderBy: timestamp, orderDirection: desc, subgraphError: allow) {
      id
      timestamp
      mints {
        pool {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        owner
        sender
        origin
        amount0
        amount1
        amountUSD
      }
      swaps {
        pool {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        origin
        amount0
        amount1
        amountUSD
      }
      burns {
        pool {
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
        owner
        origin
        amount0
        amount1
        amountUSD
      }
    }
  }
`

type TransactionEntry = {
  timestamp: string
  id: string
  mints: {
    pool: {
      token0: {
        id: string
        symbol: string
      }
      token1: {
        id: string
        symbol: string
      }
    }
    origin: string
    amount0: string
    amount1: string
    amountUSD: string
  }[]
  swaps: {
    pool: {
      token0: {
        id: string
        symbol: string
      }
      token1: {
        id: string
        symbol: string
      }
    }
    origin: string
    amount0: string
    amount1: string
    amountUSD: string
  }[]
  burns: {
    pool: {
      token0: {
        id: string
        symbol: string
      }
      token1: {
        id: string
        symbol: string
      }
    }
    owner: string
    origin: string
    amount0: string
    amount1: string
    amountUSD: string
  }[]
}

interface TransactionResults {
  transactions: TransactionEntry[]
}

export async function fetchTopTransactions(
  client: ApolloClient<NormalizedCacheObject>,
): Promise<Transaction[] | undefined> {
  try {
    const { data, error, loading } = await client.query<TransactionResults>({
      query: GLOBAL_TRANSACTIONS,
      fetchPolicy: 'cache-first',
    })

    if (error || loading || !data) {
    return undefined
    }

    const formatted = data.transactions.reduce((accum: Transaction[], t: TransactionEntry) => {
      const formatTokens = (token0: any, token1: any) => ({
        token0Symbol: getTokenOverride(token0.id)?.symbol ?? formatTokenSymbol(token0.id, token0.symbol),
        token1Symbol: getTokenOverride(token1.id)?.symbol ?? formatTokenSymbol(token1.id, token1.symbol),
        token0Address: token0.id,
        token1Address: token1.id,
      })

      const createEntry = (type: TransactionType, data: any, origin: string) => ({
        type,
        hash: t.id,
        timestamp: t.timestamp,
        sender: origin,
        ...formatTokens(data.pool.token0, data.pool.token1),
        amountUSD: parseFloat(data.amountUSD),
        amountToken0: parseFloat(data.amount0),
        amountToken1: parseFloat(data.amount1),
      })

      const mintEntries = t.mints.map((m) => createEntry(TransactionType.MINT, m, m.origin))
      const burnEntries = t.burns.map((m) => createEntry(TransactionType.BURN, m, m.origin))
      const swapEntries = t.swaps.map((m) => createEntry(TransactionType.SWAP, m, m.origin))
      accum = [...accum, ...mintEntries, ...burnEntries, ...swapEntries]
      return accum
    }, [])

    return formatted
  } catch {
    return undefined
  }
}
