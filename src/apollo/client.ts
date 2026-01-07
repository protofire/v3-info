import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { getChainById, getDefaultChain } from 'config/chains'

function createDataCache() {
  return new InMemoryCache({
    typePolicies: {
      Token: { keyFields: false },
      Pool: { keyFields: false },
    },
  })
}

function createApolloClient(uri: string, cache: InMemoryCache): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient<NormalizedCacheObject>({
    uri,
    cache,
    queryDeduplication: true,
    defaultOptions: {
      watchQuery: { fetchPolicy: 'no-cache' },
      query: { fetchPolicy: 'no-cache', errorPolicy: 'all' },
    },
  })
}

const DEFAULT_FALLBACK_GRAPHQL_URL = 'https://example.io/graphql'

export const healthClient = createApolloClient('https://api.thegraph.com/index-node/graphql', new InMemoryCache())

const dataClientByUri = new Map<string, ApolloClient<NormalizedCacheObject>>()
const blockClientByUri = new Map<string, ApolloClient<NormalizedCacheObject>>()

export function getDataClient(chainId: number): ApolloClient<NormalizedCacheObject> {
  const chain = getChainById(chainId) ?? getDefaultChain()
  const uri = chain.resolved.dataSubgraphUrl ?? DEFAULT_FALLBACK_GRAPHQL_URL
  const existing = dataClientByUri.get(uri)
  if (existing) return existing
  const created = createApolloClient(uri, createDataCache())
  dataClientByUri.set(uri, created)
  return created
}

export function getBlockClient(chainId: number): ApolloClient<NormalizedCacheObject> {
  const chain = getChainById(chainId) ?? getDefaultChain()
  const uri = chain.resolved.blockSubgraphUrl ?? DEFAULT_FALLBACK_GRAPHQL_URL
  const existing = blockClientByUri.get(uri)
  if (existing) return existing
  const created = createApolloClient(uri, new InMemoryCache())
  blockClientByUri.set(uri, created)
  return created
}

export const client = getDataClient(getDefaultChain().chainId)
export const blockClient = getBlockClient(getDefaultChain().chainId)
