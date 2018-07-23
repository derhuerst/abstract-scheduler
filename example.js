'use strict'

const createRoundRobin = require('round-robin-scheduler')
const runAbstractSchedulerTests = require('.')

runAbstractSchedulerTests(createRoundRobin)
