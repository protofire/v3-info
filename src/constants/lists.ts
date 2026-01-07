import { getDefaultChain } from 'config/chains'

export const UNSUPPORTED_LIST_URLS: string[] = []

function getDefaultTokenListUrl(): string {
  return getDefaultChain().resolved.tokenListUrl
}

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [getDefaultTokenListUrl()]

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  ...DEFAULT_ACTIVE_LIST_URLS,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]
