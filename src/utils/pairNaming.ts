export interface TokenLike {
  symbol: string
  address: string
}

/**
 * Returns the tokens in a standardized order for display.
 * The rule is: if one of the tokens is WFLOW, it should come first.
 * Otherwise, the original order is preserved.
 *
 * @param token0 The first token
 * @param token1 The second token
 * @returns [tokenA, tokenB] where tokenA is the priority token
 */
export function getOrderedTokens<T extends TokenLike>(token0: T, token1: T): [T, T] {
  if (token1.symbol === 'WFLOW') {
    return [token1, token0]
  }
  return [token0, token1]
}
