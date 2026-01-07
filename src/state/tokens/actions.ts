import { createAction } from '@reduxjs/toolkit'
import { TokenData, TokenChartEntry } from './reducer'
import { PriceChartEntry, Transaction } from 'types'

// protocol wide info
export const updateTokenData = createAction<{ tokens: TokenData[]; networkId: number }>('tokens/updateTokenData')

// add token address to byAddress
export const addTokenKeys = createAction<{ tokenAddresses: string[]; networkId: number }>('tokens/addTokenKeys')

// add list of pools token is in
export const addPoolAddresses = createAction<{
  tokenAddress: string
  poolAddresses: string[]
  networkId: number
}>('tokens/addPoolAddresses')

// tvl and volume data over time
export const updateChartData = createAction<{
  tokenAddress: string
  chartData: TokenChartEntry[]
  networkId: number
}>('tokens/updateChartData')

// transactions
export const updateTransactions = createAction<{
  tokenAddress: string
  transactions: Transaction[]
  networkId: number
}>('tokens/updateTransactions')

// price data at arbitrary intervals
export const updatePriceData = createAction<{
  tokenAddress: string
  secondsInterval: number
  priceData: PriceChartEntry[] | undefined
  oldestFetchedTimestamp: number
  networkId: number
}>('tokens/updatePriceData')
