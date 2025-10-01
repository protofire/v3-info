import { ShapeNetworkNetworkInfo, NetworkInfo } from 'constants/networks'

export function networkPrefix(activeNewtork: NetworkInfo) {
  const isShape = activeNewtork === ShapeNetworkNetworkInfo
  if (isShape) {
    return '/'
  }
  const prefix = '/' + activeNewtork.route.toLocaleLowerCase() + '/'
  return prefix
}
