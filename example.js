'use strict'

const {RoundRobin} = require('square-batman')
const runAbstractSchedulerTests = require('.')

const createRoundRobin = vals => new RoundRobin(vals)

runAbstractSchedulerTests(createRoundRobin)
