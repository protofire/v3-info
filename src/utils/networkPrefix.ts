import { NetworkInfo, StableNetworkInfo } from 'constants/networks'

export function networkPrefix(activeNewtork: NetworkInfo) {
  if (activeNewtork === StableNetworkInfo) {
    return '/'
  }
  const prefix = '/' + activeNewtork.route.toLocaleLowerCase() + '/'
  return prefix
}
