import { NetworkInfo, ZircuitNetworkInfo } from 'constants/networks'

export function networkPrefix(activeNewtork: NetworkInfo) {
  const isZircuit = activeNewtork === ZircuitNetworkInfo
  if (isZircuit) {
    return '/'
  }
  const prefix = '/' + activeNewtork.route.toLocaleLowerCase() + '/'
  return prefix
}
