import { BigNumber } from '@ethersproject/bignumber'
import { Connector } from '@web3-react/types'
import ms from 'ms'

import { SupportedNetwork } from './networks'

export const MAX_UINT128 = BigNumber.from(2).pow(128).sub(1)

export const MATIC_ADDRESS = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
export const CELO_ADDRESS = '0x471EcE3750Da237f93B8E339c536989b8978a438'

const WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
const ARBITRUM_WETH_ADDRESS = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'
const ABSTRACT_TESTNET_WETH_ADDRESS = '0x9EDCde0257F2386Ce177C3a7FCdd97787F0D841d'

export const WETH_ADDRESSES = [WETH_ADDRESS, ARBITRUM_WETH_ADDRESS, ABSTRACT_TESTNET_WETH_ADDRESS]

export const TOKEN_HIDE: { [key: string]: string[] } = {
  [SupportedNetwork.ETHEREUM]: [
    '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    '0x7dfb72a2aad08c937706f21421b15bfc34cba9ca',
    '0x12b32f10a499bf40db334efe04226cca00bf2d9b',
    '0x160de4468586b6b2f8a92feb0c260fc6cfc743b1',
  ],
  [SupportedNetwork.POLYGON]: ['0x8d52c2d70a7c28a9daac2ff12ad9bfbf041cd318'],
  [SupportedNetwork.ARBITRUM]: [],
  [SupportedNetwork.OPTIMISM]: [],
  [SupportedNetwork.CELO]: [],
  [SupportedNetwork.BNB]: [],
  [SupportedNetwork.AVALANCHE]: [],
  [SupportedNetwork.BASE]: [],
  [SupportedNetwork.ABSTRACT_TESTNET]: [],
  [SupportedNetwork.ZERO]: [],
  [SupportedNetwork.BOB]: [],
  [SupportedNetwork.CYBER]: [],
  [SupportedNetwork.SHAPE]: [],
  [SupportedNetwork.REDSTONE]: [],
  [SupportedNetwork.REDSTONE_GARNET]: [],
  [SupportedNetwork.INK]: [],
  [SupportedNetwork.ABSTRACT]: [],
  [SupportedNetwork.ANIME_TESTNET]: [],
  [SupportedNetwork.MODE]: [],
  [SupportedNetwork.ANIME]: [],
  [SupportedNetwork.STABLE_TESTNET]: [],
  [SupportedNetwork.STABLE]: [
    '0xdbfcab084043097a139bf6ab2944153963b87947',
    '0x89d0d3767cc14183aeb6571ba7e8cd576b23feed',
    '0x2f6c905fa539fe17b46da51523435cbca83c6211',
    '0x6e536509fb89e0f424c5d2c3740561e5f12b3241',
    '0x2482e7dcbf4aa109f7a09ebb1b6487c5dc3b0988',
    '0xe355e4f1bf56d4957439bbb3396bc122d99b7837',
    '0xb12785a882b7ced598f83528f0e9b203e3ce4c9c',
    '0x40376a5057f1655d875c5869539cf474c7f70f54',
    '0x5c39818d4fa2cab5f0767185f434eed01a9a352b',
    '0x40d336b4a1d4db1cb23864c521f62b47872e23d4',
    '0xbb7cab3675d1b8adbf4dde38feafcf2146c71fc3',
    '0x7477e8cd55dc92b0eb7d2e2843c6abeb759c4789',
    '0xd5749f4f3288fe45706df1f1ade224d02df66628',
    '0x2005fe954688cb287367c50ec5abe2e673beeb08',
    '0x2c1722f03248abba42d8772569aedbe68ff8925c',
    '0x5aaaf310045fa4200c6ae118485c6f9370c40645',
    '0x76fe4edaed965b036b8ab6ef77b6b94ddda3c6ee',
    '0x0acde18b9c660462bf4790019dfb6786e30a4615',
    '0x192bfd0444f0ea3ae07d3f7c72e76f19c60d30df',
    '0x457e8bc91edd6c26b4c8445ae51f5ff4d3c9060a',
    '0x7fce4ca7a8be78a01733b653f0865915c20afe29',
    '0x91e1881ac6331a7d6b85074ccedee0cad4a3414d',
    '0x85ffbfca6850aa39e77518875971975e7a1fd8e5',
    '0x790db92a44c4ff9f06d5aaef0e4c2d13251f1757',
    '0xb5c1c4ae6c322aa23fb2cb9e7253f278cdd7a7aa',
    '0x8ed4a7134f28f0804135330ab75683570f9ef1cf',
    '0xe09bbf5253bcfb235f9c9016cde734e8ef6fe3ad',
    '0xe4ae81c20284d14d0dbd1ebe8c982acecf396bd0',
    '0xa5aad5a54e6258bf3ad976afbaf731e4e41389d2',
    '0x9455b7bf2c010ea996bcf5b3ebee6740ee18a12f',
    '0xd0869bc5bd1c877991682146041fb65917b5821c',
    '0xc023c0cc9be45b499de9bd659c12b26ecd92be1b',
    '0xc9aca2eded9e69532f39ca4b66735178124b845e',
    '0x7dcb9b1e6febd795056fc057fbcf7783350279d0',
    '0xa7cf5447090268d03e06efe13736a46fd8084c14',
    '0xcdc9f36b9c7d81b8d5480540fe3cb8c1ec8b2f04',
  ],
}

export const POOL_HIDE: { [key: string]: string[] } = {
  [SupportedNetwork.ETHEREUM]: [
    '0x86d257cdb7bc9c0df10e84c8709697f92770b335',
    '0xf8dbd52488978a79dfe6ffbd81a01fc5948bf9ee',
    '0x8fe8d9bb8eeba3ed688069c3d6b556c9ca258248',
    '0xa850478adaace4c08fc61de44d8cf3b64f359bec',
    '0x277667eb3e34f134adf870be9550e9f323d0dc24',
    '0x8c0411f2ad5470a66cb2e9c64536cfb8dcd54d51',
    '0x055284a4ca6532ecc219ac06b577d540c686669d',
    '0xdcd734669997b8457f7293282aa2d0fa020084f4',
    '0x6af374ab0001e7f8c0d36e22e6a5c16828c7328e',
  ],
  [SupportedNetwork.POLYGON]: ['0x5f616541c801e2b9556027076b730e0197974f6a'],
  [SupportedNetwork.ARBITRUM]: [],
  [SupportedNetwork.OPTIMISM]: [],
  [SupportedNetwork.CELO]: [],
  [SupportedNetwork.BNB]: [],
  [SupportedNetwork.AVALANCHE]: [],
  [SupportedNetwork.BASE]: [],
  [SupportedNetwork.ABSTRACT_TESTNET]: [],
  [SupportedNetwork.ZERO]: [],
  [SupportedNetwork.BOB]: [],
  [SupportedNetwork.CYBER]: [],
  [SupportedNetwork.SHAPE]: [],
  [SupportedNetwork.REDSTONE]: [],
  [SupportedNetwork.REDSTONE_GARNET]: [],
  [SupportedNetwork.INK]: [],
  [SupportedNetwork.ABSTRACT]: [],
  [SupportedNetwork.ANIME_TESTNET]: [],
  [SupportedNetwork.MODE]: [],
  [SupportedNetwork.ANIME]: [],
  [SupportedNetwork.STABLE_TESTNET]: [],
  [SupportedNetwork.STABLE]: [
    '0xa29c1fdd888a4cbcd000c00b4a71e8827add88a5',
    '0x35d6041fdc5292c04640030127f8cd3bc4a9a30f',
    '0x0fb29e079b9bedba0fa50de0ad26d9b2cb4682da',
    '0x9b4904019bc1e0b39e3254d93866bc236ea55f14',
    '0x15cbe73d4afe141c1c9b176a50e4ff67f0e4e729',
    '0xdcd734669997b8457f7293282aa2d0fa020084f4',
    '0x5d105c7cee02cb03499361e7c7e559477b4433ee',
    '0x0b5a040a4eded894a09472065ebc34fc44228b24',
    '0x3d82b477c5ec3df68bd73a1b90af0c1291fd026e',
    '0x2575e0eaaf54f9efd732939bd01e0a0abbcc5144',
    '0xee8de384727b5a0f28ab8fd3368a7cf81c156664',
    '0xbc852c2195871c07a89350a46ee65e55ce4f0b42',
    '0x50b356021b74ec604f33a089873d4583f9e56091',
    '0x7ace577de2938e68ac19ba7b491f02b198ebf067',
    '0x012b33e0847db1ce0a5fe6cc4b739437a2f93886',
    '0x0f4826c2953cf0c79cba8da5cc998e5498967865',
    '0x672abb38635c147521114237498b91670e23ea99',
    '0x8b6e5b85778fb473cc58a2a7c9f777214d746dac',
    '0xa01f901d349192459bfc61fad77e24605fbbbe90',
    '0x6af374ab0001e7f8c0d36e22e6a5c16828c7328e',
    '0x92ecd25ee05346c566405aeea5664136c35fd653',
    '0xf156cd95254fd299d6b388ffac1c6e73f7013284',
    '0xd980c6ec54429d6f594c68bc7d9a622ab8c59306',
    '0xb2a54754829059aaabc79c4ba71215578ff26de4',
    '0xbc13eb8a7813ef56ac42d3c41395bbd76ddc31f2',
    '0x0cd8c6ffc6d38100ce8d34941a501c9d6c2ee9bd',
    '0x16b75ef9f63f0b175f74ea19c64e2026436513e2',
    '0x23ce86abcc9f9e318b5d26c5ad212b96e4771538',
    '0x531b52d13459a90f9ab972bce8038b9506f5db62',
    '0x555d65426c654310e2692dc11f54310b2c393bd4',
    '0x7c0cadd6dce1676fc5455705bc552dc89be65d2e',
    '0xaca756bee582ec806e520f39f28aa52bd3273fa8',
    '0xb11b84a10a551cefba9c62b7f32ab77997b356fa',
    '0xe86ee34eb6a975b5007785d9621422138463b68a',
    '0xf94754f7d36024c796d53b5e957edf1960643244',
    '0xcdd44247f2413720a6c7f88e23b8332826008147',
  ],
}

export const START_BLOCKS: { [key: string]: number } = {
  [SupportedNetwork.ETHEREUM]: 14292820,
  [SupportedNetwork.POLYGON]: 25459720,
  [SupportedNetwork.ARBITRUM]: 175,
  [SupportedNetwork.OPTIMISM]: 10028767,
  [SupportedNetwork.CELO]: 13916355,
  [SupportedNetwork.BNB]: 26324014,
  [SupportedNetwork.AVALANCHE]: 31422450,
  [SupportedNetwork.BASE]: 1371680,
  [SupportedNetwork.ABSTRACT_TESTNET]: 356725,
  [SupportedNetwork.ZERO]: 727,
  [SupportedNetwork.BOB]: 5188280,
  [SupportedNetwork.CYBER]: 9567951,
  [SupportedNetwork.SHAPE]: 6022152,
  [SupportedNetwork.REDSTONE]: 924516,
  [SupportedNetwork.REDSTONE_GARNET]: 586081,
  [SupportedNetwork.INK]: 284117,
  [SupportedNetwork.ABSTRACT]: 5617,
  [SupportedNetwork.ANIME_TESTNET]: 1651650,
  [SupportedNetwork.MODE]: 19222570,
  [SupportedNetwork.ANIME]: 57516,
  [SupportedNetwork.STABLE_TESTNET]: 34539327,
  [SupportedNetwork.STABLE]: 3442522,
}

export interface WalletInfo {
  connector?: Connector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const AVERAGE_L1_BLOCK_TIME = ms(`12s`)

export const NetworkContextName = 'NETWORK'

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
]
