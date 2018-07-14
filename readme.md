# abstract-scheduler

**An interface and test suite to implement various [scheduling algorithms](https://en.wikipedia.org/wiki/Scheduling_(computing)#Scheduling_disciplines).** The goal is to define a simple and flexible standard for libraries that implement scheduling algorithms, so that you can replace them easily.

```js
// todo
```

[![npm version](https://img.shields.io/npm/v/abstract-scheduler.svg)](https://www.npmjs.com/package/abstract-scheduler)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/abstract-scheduler.svg)


## `abstract-scheduler`-compatible modules

*todo*

Send a PR by adding yours!


## Badge

Include this badge if you make a library compatible with `abstract-scheduler`.

[![compatible with abstract-scheduler](badge.png)](readme.md)

```md
[![compatible with abstract-scheduler](https://github.com/derhuerst/abstract-scheduler/raw/master/badge.png)](https://github.com/derhuerst/abstract-scheduler)
```


## How to test for `abstract-scheduler` compatibility

Include this in your test file:

```js
const runAbstractSchedulerTests = require('abstract-scheduler')
const createMyScheduler = require('.')

runAbstractSchedulerTests(createMyScheduler)
```

[`tape`](https://npmjs.com/package/tape) will be used to test, writing [TAP](https://testanything.org) to `stdout`.


## The `abstract-scheduler` API

*todo*


## Related

`abstract-scheduler` is inspired by [`abstract-chunk-store`](https://github.com/mafintosh/abstract-chunk-store), [`abstract-blob-store`](https://github.com/maxogden/abstract-blob-store) and [`abstract-point-store`](https://github.com/noffle/abstract-point-store).


## Contributing

If you have a question or need support using `abstract-scheduler`, refer to [the issues page](https://github.com/derhuerst/abstract-scheduler/issues).
