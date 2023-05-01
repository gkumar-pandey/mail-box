import {mails} from './Data'
export const fakeFetch = (url:string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/allemails') {
          resolve({
            data:mails
          })
        } else {
          reject({
            status: 404,
            message: 'Email list not found.',
          })
        }
      }, 2000)
    })
  }