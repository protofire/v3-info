import OPTIMISM_LOGO_URL from '../assets/images/optimism.svg'
import ARBITRUM_LOGO_URL from '../assets/images/arbitrum.svg'
import ETHEREUM_LOGO_URL from '../assets/images/ethereum-logo.png'
import POLYGON_LOGO_URL from '../assets/images/polygon-logo.png'
import CELO_LOGO_URL from '../assets/images/celo-logo.svg'
import BNB_LOGO_URL from '../assets/images/bnb-logo.svg'
import BASE_LOGO_URL from '../assets/images/base-logo.svg'
import { ChainId } from '@uniswap/sdk-core'
import AVALANCHE_LOGO_URL from '../assets/images/avalanche-logo.png'
import ZIRCUIT_LOGO_URL from '../assets/images/zircuit-logo.png'

export enum SupportedNetwork {
  ETHEREUM,
  ARBITRUM,
  OPTIMISM,
  POLYGON,
  CELO,
  BNB,
  BASE,
  AVALANCHE,
  ABSTRACT_TESTNET,
  ZERO,
  BOB,
  CYBER,
  SHAPE,
  REDSTONE,
  REDSTONE_GARNET,
  INK,
  ABSTRACT,
  ANIME_TESTNET,
  MODE,
  ANIME,
  ZIRCUIT,
}

export type NetworkInfo = {
  chainId: ChainId
  id: SupportedNetwork
  route: string
  name: string
  imageURL: string
  bgColor: string
  bgColorDark?: string
  primaryColor: string
  secondaryColor: string
}

export const EthereumNetworkInfo: NetworkInfo = {
  chainId: ChainId.MAINNET,
  id: SupportedNetwork.ETHEREUM,
  route: 'ethereum',
  name: 'Ethereum',
  bgColor: '#fc077d',
  primaryColor: '#fc077d',
  secondaryColor: '#0cb259',
  imageURL: ETHEREUM_LOGO_URL,
}

export const ArbitrumNetworkInfo: NetworkInfo = {
  chainId: ChainId.ARBITRUM_ONE,
  id: SupportedNetwork.ARBITRUM,
  route: 'arbitrum',
  name: 'Arbitrum',
  imageURL: ARBITRUM_LOGO_URL,
  bgColor: '#0A294B',
  primaryColor: '#0490ED',
  secondaryColor: '#96BEDC',
}

export const OptimismNetworkInfo: NetworkInfo = {
  chainId: ChainId.OPTIMISM,
  id: SupportedNetwork.OPTIMISM,
  route: 'optimism',
  name: 'Optimism',
  bgColor: '#F01B36',
  primaryColor: '#F01B36',
  secondaryColor: '#FB7876',
  imageURL: OPTIMISM_LOGO_URL,
}

export const PolygonNetworkInfo: NetworkInfo = {
  chainId: ChainId.POLYGON,
  id: SupportedNetwork.POLYGON,
  route: 'polygon',
  name: 'Polygon',
  bgColor: '#8247e5',
  primaryColor: '#8247e5',
  secondaryColor: '#FB7876',
  imageURL: POLYGON_LOGO_URL,
}
export const CeloNetworkInfo: NetworkInfo = {
  chainId: ChainId.CELO,
  id: SupportedNetwork.CELO,
  route: 'celo',
  name: 'Celo',
  bgColor: '#02502F',
  primaryColor: '#35D07F',
  secondaryColor: '#9ACDB2',
  imageURL: CELO_LOGO_URL,
}

export const BNBNetworkInfo: NetworkInfo = {
  chainId: ChainId.BNB,
  id: SupportedNetwork.BNB,
  route: 'bnb',
  name: 'BNB Chain',
  bgColor: '#F0B90B',
  primaryColor: '#F0B90B',
  secondaryColor: '#F0B90B',
  imageURL: BNB_LOGO_URL,
}

export const BaseNetworkInfo: NetworkInfo = {
  chainId: ChainId.BASE,
  id: SupportedNetwork.BASE,
  route: 'base',
  name: 'Base',
  bgColor: '#0052ff',
  primaryColor: '#0052ff',
  secondaryColor: '#0052ff',
  imageURL: BASE_LOGO_URL,
}

export const AvalancheNetworkInfo: NetworkInfo = {
  chainId: 43114,
  id: SupportedNetwork.AVALANCHE,
  route: 'avax',
  name: 'Avalanche',
  bgColor: '#e84142',
  primaryColor: '#e84142',
  secondaryColor: '#e84142',
  imageURL: AVALANCHE_LOGO_URL,
}

export const ZircuitNetworkInfo: NetworkInfo = {
  chainId: 48900 as any,
  id: SupportedNetwork.ZIRCUIT,
  route: 'zircuit',
  name: 'Zircuit',
  bgColor: '#0cb259',
  primaryColor: '#0cb259',
  secondaryColor: '#0cb259',
  imageURL: ZIRCUIT_LOGO_URL,
}

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [
  // EthereumNetworkInfo,
  // PolygonNetworkInfo,
  // OptimismNetworkInfo,
  // ArbitrumNetworkInfo,
  // CeloNetworkInfo,
  // BNBNetworkInfo,
  // BaseNetworkInfo,
  // AvalancheNetworkInfo,
  // AbstractTestnetNetworkInfo,
  // CyberNetworkNetworkInfo,
  // BobNetworkNetworkInfo,
  // ShapeNetworkNetworkInfo,
  // RedstoneNetworkInfo,
  // RedstoneGarnetNetworkInfo,
  // InkNetworkInfo,
  // AbstractNetworkInfo,
  // AnimeTestnetNetworkInfo,
  // ModeNetworkInfo,
  // ZeroNetworkNetworkInfo,
  // AnimeNetworkInfo,
  ZircuitNetworkInfo,
]
