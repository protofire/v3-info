export const UNSUPPORTED_LIST_URLS: string[] = []
export const ABSTRACT_TESTNET_LIST = getTokenListApiURL('abstract-testnet')
export const ZERO_LIST = getTokenListApiURL('zero')
export const BOB_LIST = getLegacyTokenListApiURL('60808') // legacy URL
export const CYBER_LIST = getTokenListApiURL('cyber')
export const SHAPE_LIST = getTokenListApiURL('shape')
export const REDSTONE_LIST = getTokenListApiURL('redstone')
export const REDSTONE_GARNET_LIST = getTokenListApiURL('garnet')
export const INK_LIST = getTokenListApiURL('ink')
export const ABSTRACT_LIST =
  'https://raw.githubusercontent.com/protofire/token-list/refs/heads/main/networks/abstract.json'
export const ANIME_TESTNET_LIST = getTokenListApiURL('anime-testnet')
export const MODE_LIST = getTokenListApiURL('mode')

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [ABSTRACT_LIST]

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  ...DEFAULT_ACTIVE_LIST_URLS,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

function getTokenListApiURL(slug: string) {
  return `https://api-${slug}.reservoir.tools/tokenlist/v1`
}

function getLegacyTokenListApiURL(chainId: string) {
  return `https://api.relay.link/tokenlist?chainId=${chainId}`
}
