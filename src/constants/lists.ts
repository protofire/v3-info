export const UNSUPPORTED_LIST_URLS: string[] = []
export const ABSTRACT_LIST =
  'https://raw.githubusercontent.com/protofire/token-list/refs/heads/main/networks/abstract.json'
export const ANIME_LIST = 'https://raw.githubusercontent.com/protofire/token-list/refs/heads/main/networks/anime.json'

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [ABSTRACT_LIST, ANIME_LIST]

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  ...DEFAULT_ACTIVE_LIST_URLS,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]
