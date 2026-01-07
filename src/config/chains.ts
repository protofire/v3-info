import Ajv from 'ajv'
import chainsFile from './chains.json'
import schema from './chains.schema.json'
import { DeployEnv, getChainEnabledFromEnv, getChainUrlOverridesFromEnv, getDeployEnv } from './chainsEnv'

type ChainRegistryFile = typeof chainsFile

export type ChainConfig = {
  key: string
  chainId: number
  enabled: boolean
  default?: boolean
  route: string
  name: string
  logoURI: string
  colors: {
    bgColor: string
    bgColorDark?: string
    primaryColor: string
    secondaryColor: string
  }
  explorer: {
    baseUrl: string
    paths: {
      tx: string
      address: string
      token: string
      block: string
    }
  }
  tokenList: {
    stagingUrl: string
    productionUrl: string
  }
  subgraphs: {
    staging: { dataUrl: string; blockUrl: string }
    production: { dataUrl: string; blockUrl: string }
  }
}

export type ResolvedChainConfig = ChainConfig & {
  resolved: {
    deployEnv: DeployEnv
    tokenListUrl: string
    dataSubgraphUrl?: string
    blockSubgraphUrl?: string
  }
}

function validateRegistryFile(file: unknown): asserts file is ChainRegistryFile {
  const ajv = new Ajv({ allErrors: true, jsonPointers: true } as any)
  const validate = ajv.compile(schema as any)
  const ok = validate(file)
  if (ok) return

  const first = validate.errors?.[0]
  const details = first ? `${first.dataPath || ''} ${first.message || ''}`.trim() : 'unknown schema validation error'
  throw new Error(`Invalid chain registry (src/config/chains.json): ${details}`)
}

function assertNoDuplicates(chains: ChainConfig[]) {
  const seenKey = new Set<string>()
  const seenChainId = new Set<number>()
  for (const chain of chains) {
    if (seenKey.has(chain.key)) throw new Error(`Duplicate chain key in registry: ${chain.key}`)
    if (seenChainId.has(chain.chainId)) throw new Error(`Duplicate chainId in registry: ${chain.chainId}`)
    seenKey.add(chain.key)
    seenChainId.add(chain.chainId)
  }
}

function resolveTokenListUrl(chain: ChainConfig, deployEnv: DeployEnv): string {
  const override = getChainUrlOverridesFromEnv(chain.key, deployEnv).tokenListUrl
  if (override) return override
  return deployEnv === 'production' ? chain.tokenList.productionUrl : chain.tokenList.stagingUrl
}

function resolveSubgraphUrl(
  chain: ChainConfig,
  deployEnv: DeployEnv,
  kind: 'dataSubgraphUrl' | 'blockSubgraphUrl',
): string | undefined {
  const overrides = getChainUrlOverridesFromEnv(chain.key, deployEnv)
  const override = overrides[kind]
  if (override) return override

  const fromFile = deployEnv === 'production' ? chain.subgraphs.production : chain.subgraphs.staging
  const value = kind === 'dataSubgraphUrl' ? fromFile.dataUrl : fromFile.blockUrl
  return value ? value : undefined
}

function resolveEnabled(chain: ChainConfig): boolean {
  const envOverride = getChainEnabledFromEnv(chain.key)
  return envOverride ?? chain.enabled
}

function resolveChain(chain: ChainConfig, deployEnv: DeployEnv): ResolvedChainConfig {
  return {
    ...chain,
    enabled: resolveEnabled(chain),
    resolved: {
      deployEnv,
      tokenListUrl: resolveTokenListUrl(chain, deployEnv),
      dataSubgraphUrl: resolveSubgraphUrl(chain, deployEnv, 'dataSubgraphUrl'),
      blockSubgraphUrl: resolveSubgraphUrl(chain, deployEnv, 'blockSubgraphUrl'),
    },
  }
}

let cached: { deployEnv: DeployEnv; chains: ResolvedChainConfig[] } | undefined

export function getChains(): ResolvedChainConfig[] {
  const deployEnv = getDeployEnv()
  if (cached?.deployEnv === deployEnv) return cached.chains

  validateRegistryFile(chainsFile)
  const chains = (chainsFile as any).chains as ChainConfig[]
  assertNoDuplicates(chains)

  const resolved = chains.map((c) => resolveChain(c, deployEnv))
  cached = { deployEnv, chains: resolved }
  return resolved
}

export function getEnabledChains(): ResolvedChainConfig[] {
  return getChains().filter((c) => c.enabled)
}

export function getDefaultChain(): ResolvedChainConfig {
  const enabled = getEnabledChains()
  if (enabled.length === 0) throw new Error('Chain registry has no enabled chains')
  const explicit = enabled.find((c) => c.default)
  return explicit ?? enabled[0]
}

export function getChainById(chainId: number): ResolvedChainConfig | undefined {
  return getChains().find((c) => c.chainId === chainId)
}

export function getChainByKey(key: string): ResolvedChainConfig | undefined {
  return getChains().find((c) => c.key === key)
}
