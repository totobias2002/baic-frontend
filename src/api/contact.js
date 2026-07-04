import client from './client.js'

export const submitContactRequest = (data) => client.post('/contact', data).then((r) => r.data)
