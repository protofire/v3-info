export interface TokenMetadataOverride {
  name?: string
  symbol?: string
}

const overrides: Record<string, TokenMetadataOverride> = {
  // Add overrides here when the chain data needs manual correction.
  // Example:
  // '0x123...': {
  //   address: '0x123...'
  //   name: 'Custom Token',
  //   description: 'This token represents ...'
  // },
  '0xf1815bd50389c46847f0bda824ec8da914045d14': {
    name: 'USDC',
    symbol: 'USDC',
  },
}

export function getTokenOverride(address?: string): TokenMetadataOverride | undefined {
  if (!address) {
    return undefined
  }

  const normalized = address.toLowerCase()
  return overrides[normalized]
}
