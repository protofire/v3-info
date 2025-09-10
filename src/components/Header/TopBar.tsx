import React from 'react'
import styled from 'styled-components'
import { AutoRow, RowBetween } from 'components/Row'
import { ExternalLink } from 'theme'

import Polling from './Polling'

import { forkConfig } from 'forkConfig'
import { ChevronLeft } from 'react-feather'
import { Flex } from 'rebass'

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.black};
  padding: 10px 20px;
`

const StyledLink = styled(ExternalLink)`
  font-size: 12px;
  color: ${({ theme }) => theme.text1};
`

const TopBar = () => {
  const interfaceUrl = process.env.REACT_APP_INTERFACE_URL ?? `https://swap.w3us.site`

  return (
    <Wrapper>
      <RowBetween>
        {forkConfig.latestSyncedBlockSupported && <Polling />}
        <AutoRow $gap="6px" style={{ justifyContent: 'flex-start' }}>
          <StyledLink href={`${interfaceUrl}/#/swap`}>
            <Flex alignItems={'center'}>
              <ChevronLeft width={16} height={16} />
              Back to swap page
            </Flex>
          </StyledLink>
        </AutoRow>
      </RowBetween>
    </Wrapper>
  )
}

export default TopBar
