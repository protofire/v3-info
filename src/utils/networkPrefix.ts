import { NetworkInfo } from 'constants/networks'

export function networkPrefix(activeNewtork: NetworkInfo) {
  return activeNewtork.isDefault ? '/' : '/' + activeNewtork.route.toLocaleLowerCase() + '/'
}
