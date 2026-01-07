import { ProtocolData } from './reducer'
import { createAction } from '@reduxjs/toolkit'
import { ChartDayData, Transaction } from 'types'

// protocol wide info
export const updateProtocolData = createAction<{ protocolData: ProtocolData; networkId: number }>(
  'protocol/updateProtocolData',
)
export const updateChartData = createAction<{ chartData: ChartDayData[]; networkId: number }>(
  'protocol/updateChartData',
)
export const updateTransactions = createAction<{ transactions: Transaction[]; networkId: number }>(
  'protocol/updateTransactions',
)
