'use strict'

const fp = require('fastify-plugin')

const NODE_SERVER_DEFAULT_TIMEOUT = 120000

module.exports = fp(function (fastify, opts, next) {
  const timeout = opts.serverTimeout || NODE_SERVER_DEFAULT_TIMEOUT
  fastify.server.setTimeout(timeout)

  next()
})
