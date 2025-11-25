import { StableTestnetNetworkInfo, NetworkInfo } from 'constants/networks'

export function networkPrefix(activeNewtork: NetworkInfo) {
  const isFlow = activeNewtork === StableTestnetNetworkInfo
  if (isFlow) {
    return '/'
  }
  const prefix = '/' + activeNewtork.route.toLocaleLowerCase() + '/'
  return prefix
}
