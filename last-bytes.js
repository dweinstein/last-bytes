'use strict'

const BufferList = require('bl')
const through = require('through2')

function lastBytes (len, source) {
  const buffer = new BufferList()
  const reader = through((chunk, enc, cb) => {
    if ((buffer.length + chunk.length) >= len) {
      buffer.consume(chunk.length)
    }
    buffer.append(chunk.slice(-len))
    cb()
  })
  source.pipe(reader)
  return buffer
}

module.exports = lastBytes;
