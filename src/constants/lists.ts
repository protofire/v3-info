export const UNSUPPORTED_LIST_URLS: string[] = []
export const ABSTRACT_TESTNET_LIST = getTokenListApiURL('abstract-testnet')
export const ZERO_LIST = getTokenListApiURL('zero')
export const BOB_LIST = getLegacyTokenListApiURL('60808') // legacy URL
export const CYBER_LIST = getTokenListApiURL('cyber')
export const SHAPE_LIST = getTokenListApiURL('shape')
export const REDSTONE_LIST = getTokenListApiURL('redstone')
export const REDSTONE_GARNET_LIST = getTokenListApiURL('garnet')
export const INK_LIST = getTokenListApiURL('ink')
export const ABSTRACT_LIST = getTokenListApiURL('abstract')
export const ANIME_TESTNET_LIST = getTokenListApiURL('anime-testnet')
export const MODE_LIST = getTokenListApiURL('mode')
export const FLOW_TESTNET_LIST =
  'https://cyan-legislative-leech-117.mypinata.cloud/ipfs/QmWFoYN4bFDB3g42pp8w9qgfS8gYVbo6wmeoCWiDcXFmcZ'

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [
  /* ABSTRACT_TESTNET_LIST,
  ZERO_LIST,
  BOB_LIST,
  CYBER_LIST,
  SHAPE_LIST,
  REDSTONE_LIST,
  REDSTONE_GARNET_LIST,
  INK_LIST,
  ABSTRACT_LIST,
  ANIME_TESTNET_LIST,
  MODE_LIST, */
  FLOW_TESTNET_LIST,
]

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
