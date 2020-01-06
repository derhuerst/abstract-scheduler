'use strict'

const createRoundRobin = require('@derhuerst/round-robin-scheduler')
const runAbstractSchedulerTests = require('.')

runAbstractSchedulerTests(createRoundRobin)
