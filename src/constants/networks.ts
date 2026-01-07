import { getDefaultChain, getEnabledChains } from 'config/chains'

export type NetworkInfo = {
  key: string
  chainId: number
  route: string
  name: string
  imageURL: string
  bgColor: string
  bgColorDark?: string
  primaryColor: string
  secondaryColor: string
  isDefault: boolean
}

const defaultKey = getDefaultChain().key

export function toNetworkInfo(chain: ReturnType<typeof getEnabledChains>[number]): NetworkInfo {
  return {
    key: chain.key,
    chainId: chain.chainId,
    route: chain.route,
    name: chain.name,
    imageURL: chain.logoURI,
    bgColor: chain.colors.bgColor,
    bgColorDark: chain.colors.bgColorDark,
    primaryColor: chain.colors.primaryColor,
    secondaryColor: chain.colors.secondaryColor,
    isDefault: chain.key === defaultKey,
  }
}

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = getEnabledChains().map(toNetworkInfo)
export const DEFAULT_NETWORK: NetworkInfo = toNetworkInfo(getDefaultChain())
