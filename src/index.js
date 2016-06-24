// ==============================================
//
//                    IMPORTS
//
// ==============================================
const R = require('ramda')

// ==============================================
//
//                    SETUP
//
// ==============================================
const pipe     = R.pipe
const reduce   = R.reduce
const filter   = R.filter
const map      = R.map
const pick     = R.pick
const values   = R.values
const zipObj   = R.zipObj
const mergeAll = R.mergeAll

const set = (k, v, hmap) => {
  hmap[k] = v
  return hmap
}

const log = (text) => {
  console.log(text)
}

const queue = []
const newMessage = (type, payload, error) => {
  type,
  payload,
  err
}

const pushQ = (message) => {
  queue.push(message)
}

const popQ = () => {
  return queue.shift()
}

log(Date.now())
log(pushQ(1))
log(pushQ(2))
log(popQ())
log(popQ())
