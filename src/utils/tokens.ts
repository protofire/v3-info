import { Token } from '@uniswap/sdk-core'
import { CeloNetworkInfo, HarmonyNetworkInfo, NetworkInfo, PolygonNetworkInfo } from 'constants/networks'
import { CELO_ADDRESS, MATIC_ADDRESS, WETH_ADDRESSES, ONE_ADDRESS } from '../constants'

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
}

export function serializeToken(token: Token): SerializedToken {
  return {
    chainId: token.chainId,
    address: token.address,
    decimals: token.decimals,
    symbol: token.symbol,
    name: token.name,
  }
}

export function formatTokenSymbol(address: string, symbol: string, activeNetwork?: NetworkInfo) {
  // dumb catch for matic
  if (address === MATIC_ADDRESS && activeNetwork === PolygonNetworkInfo) {
    return 'MATIC'
  }

  // dumb catch for Celo
  if (address === CELO_ADDRESS && activeNetwork === CeloNetworkInfo) {
    return 'CELO'
  }

  // dumb catch for Harmony
  if (address === ONE_ADDRESS && activeNetwork === HarmonyNetworkInfo) {
    return 'ONE'
  }

  if (WETH_ADDRESSES.includes(address)) {
    return 'ETH'
  }
  return symbol
}

export function formatTokenName(address: string, name: string, activeNetwork?: NetworkInfo) {
  // dumb catch for matic
  if (address === MATIC_ADDRESS && activeNetwork === PolygonNetworkInfo) {
    return 'MATIC'
  }

  // dumb catch for Celo
  if (address === CELO_ADDRESS && activeNetwork === CeloNetworkInfo) {
    return 'CELO'
  }

  // dumb catch for Harmony
  if (address === ONE_ADDRESS && activeNetwork === HarmonyNetworkInfo) {
    return 'ONE'
  }

  if (WETH_ADDRESSES.includes(address)) {
    return 'Ether'
  }
  return name
}
