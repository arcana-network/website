import jsonp from 'jsonp'
import queryString from 'query-string'

const userId = 'c9473907136742316b62eebd9'
const listId = '9c780f0e4e'
const listUrl = 'https://network.us1.list-manage.com/subscribe/post-json'

export function subscribe({ email, groups, providerType, storage, location }) {
  return new Promise((resolve, reject) => {
    const data = {
      u: userId,
      id: listId,
      EMAIL: email,
      PROVIDER: providerType,
      CAPACITY: storage?.capacity,
      CAPUNIT: storage?.unit,
      LOCATION: location,
    }
    if (groups instanceof Array) {
      if (groups.includes('Newsletter')) {
        data['group[381006][2]'] = 2
      }
      if (groups.includes('Developer')) {
        data['group[381006][1]'] = 1
      }
      if (groups.includes('Provider')) {
        data['group[381006][4]'] = 4
      }
    }
    const stringifiedData = queryString.stringify(data)

    const url = `${listUrl}?${stringifiedData}`
    jsonp(url, { param: 'c' }, (error, data) => {
      if (error) {
        return reject(error)
      } else if (data.result === 'error') {
        return reject(data.msg)
      }
      return resolve(data)
    })
  })
}
