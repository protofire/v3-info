import React, { useEffect, useMemo } from 'react'
import { PageWrapper } from 'pages/styled'
import { AutoColumn } from 'components/Column'
import { TYPE } from 'theme'
import PoolTable from 'components/pools/PoolTable'
import { useAllPoolData, usePoolDatas } from 'state/pools/hooks'
import { notEmpty } from 'utils'
import { useSavedPools } from 'state/user/hooks'
import { DarkGreyCard } from 'components/Card'
// import { Trace } from '@uniswap/analytics'
// import TopPoolMovers from 'components/pools/TopPoolMovers'

import TransactionsTable from 'components/TransactionsTable'
import { LocalLoader } from 'components/Loader'
import { useProtocolTransactions } from 'state/protocol/hooks'
import { useActiveNetworkVersion } from 'state/application/hooks'

export default function PoolPage() {
  const [activeNetwork] = useActiveNetworkVersion()
  const [transactions] = useProtocolTransactions()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // get all the pool datas that exist
  const allPoolData = useAllPoolData()
  const poolDatas = useMemo(() => {
    return Object.values(allPoolData)
      .map((p) => p.data)
      .filter(notEmpty)
  }, [allPoolData])

  const [savedPools] = useSavedPools()
  const watchlistPools = usePoolDatas(savedPools)

  return (
    // <Trace page="pools-overview-page" shouldLogImpression>
    <PageWrapper>
      <AutoColumn $gap="lg">
        <TYPE.main>Your Watchlist</TYPE.main>
        {watchlistPools.length > 0 ? (
          <PoolTable poolDatas={watchlistPools} />
        ) : (
          <DarkGreyCard>
            <TYPE.main>Saved pools will appear here</TYPE.main>
          </DarkGreyCard>
        )}
        <TYPE.main>All Pools</TYPE.main>
        <PoolTable poolDatas={poolDatas} />
        <TYPE.main>Transactions</TYPE.main>
        <DarkGreyCard>
          {transactions ? (
            <TransactionsTable transactions={transactions} color={activeNetwork.primaryColor} />
          ) : (
            <LocalLoader fill={false} />
          )}
        </DarkGreyCard>
      </AutoColumn>
    </PageWrapper>
    // </Trace>
  )
}
