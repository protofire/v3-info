import { Token } from '@uniswap/sdk-core'
import { ChainId } from '@uniswap/sdk-core'
import { NetworkInfo } from 'constants/networks'
import { CELO_ADDRESS, MATIC_ADDRESS, WETH_ADDRESSES } from '../constants'

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
  if (address === MATIC_ADDRESS && activeNetwork?.chainId === ChainId.POLYGON) {
    return 'MATIC'
  }

  // dumb catch for Celo
  if (address === CELO_ADDRESS && activeNetwork?.chainId === ChainId.CELO) {
    return 'CELO'
  }

  if (WETH_ADDRESSES.includes(address)) {
    return 'ETH'
  }
  return symbol
}

export function formatTokenName(address: string, name: string, activeNetwork?: NetworkInfo) {
  // dumb catch for matic
  if (address === MATIC_ADDRESS && activeNetwork?.chainId === ChainId.POLYGON) {
    return 'MATIC'
  }

  // dumb catch for Celo
  if (address === CELO_ADDRESS && activeNetwork?.chainId === ChainId.CELO) {
    return 'CELO'
  }

  if (WETH_ADDRESSES.includes(address)) {
    return 'Ether'
  }
  return name
}
