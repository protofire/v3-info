export type DeployEnv = 'staging' | 'production'

function normalizeDeployEnv(value: string | undefined): DeployEnv {
  if (value === 'production') return 'production'
  return 'staging'
}

export function getDeployEnv(): DeployEnv {
  return normalizeDeployEnv(process.env.REACT_APP_DEPLOY_ENV)
}

function toEnvKeySegment(chainKey: string): string {
  return chainKey.replace(/-/g, '_').toUpperCase()
}

function getChainEnvVarName(chainKey: string, variable: string, deployEnv: DeployEnv): string {
  return `REACT_APP_CHAIN_${toEnvKeySegment(chainKey)}_${variable}_${deployEnv.toUpperCase()}`
}

export function getChainEnabledFromEnv(chainKey: string): boolean | undefined {
  const value = process.env[`REACT_APP_CHAIN_${toEnvKeySegment(chainKey)}_ENABLED`]
  if (value === undefined) return undefined
  if (value.toLowerCase() === 'true') return true
  if (value.toLowerCase() === 'false') return false
  return undefined
}

export type ChainUrlOverrides = {
  tokenListUrl?: string
  dataSubgraphUrl?: string
  blockSubgraphUrl?: string
}

export function getChainUrlOverridesFromEnv(chainKey: string, deployEnv: DeployEnv): ChainUrlOverrides {
  const tokenListUrl = process.env[getChainEnvVarName(chainKey, 'TOKEN_LIST_URL', deployEnv)]
  const dataSubgraphUrl = process.env[getChainEnvVarName(chainKey, 'DATA_SUBGRAPH_URL', deployEnv)]
  const blockSubgraphUrl = process.env[getChainEnvVarName(chainKey, 'BLOCK_SUBGRAPH_URL', deployEnv)]

  return {
    tokenListUrl: tokenListUrl || undefined,
    dataSubgraphUrl: dataSubgraphUrl || undefined,
    blockSubgraphUrl: blockSubgraphUrl || undefined,
  }
}
