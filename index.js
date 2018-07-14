'use strict'

const test = require('tape')

const isObj = o => 'object' === typeof o && o !== null && !Array.isArray(o)

const testScheduler = (createScheduler) => {
	test('createScheduler', (t) => {
		t.plan(4)

		t.equal(typeof createScheduler, 'function', 'createScheduler should be a function')
		t.equal(createScheduler.length, 1, 'createScheduler.length should be 1')

		const scheduler1 = createScheduler()
		t.ok(isObj(scheduler1), 'createScheduler() should return an object')
		const scheduler2 = createScheduler([])
		t.ok(isObj(scheduler2), 'createScheduler([]) should return an object')
	})

	test('scheduler.add', (t) => {
		const scheduler = createScheduler([])
		t.plan(3)

		t.equal(typeof scheduler.add, 'function', 'scheduler.add should be a function')
		t.equal(scheduler.add.length, 1, 'scheduler.add.length should be 1')
		t.doesNotThrow(() => {
			scheduler.add('foo')
		}, `scheduler.add('foo') should work`)
	})

	test('scheduler.remove', (t) => {
		const scheduler = createScheduler([])
		scheduler.add('foo')
		t.plan(5)

		t.equal(typeof scheduler.remove, 'function', 'scheduler.remove should be a function')
		t.equal(scheduler.remove.length, 1, 'scheduler.remove.length should be 1')

		let res1
		t.doesNotThrow(() => {
			res1 = scheduler.remove('foo')
		}, `scheduler.remove('foo') should work`)
		t.equal(res1, true, 'scheduler.remove should return true for a known item')

		const res2 = scheduler.remove('bar')
		t.equal(res2, false, 'scheduler.remove should return false for an unknown item')
	})

	test('scheduler.has', (t) => {
		const scheduler = createScheduler([])
		t.plan(4)

		t.equal(typeof scheduler.has, 'function', 'scheduler.has should be a function')
		t.equal(scheduler.has.length, 1, 'scheduler.has.length should be 1')

		scheduler.add('foo')
		const res1 = scheduler.has('foo')
		t.equal(res1, true, 'scheduler.has should return true for a known item')

		const res2 = scheduler.has('bar')
		t.equal(res2, false, 'scheduler.has should return fals for an unknown item')
	})

	test('scheduler.get', (t) => {
		const scheduler = createScheduler([])
		const items = ['foo', 'bar', 'baz']
		for (let item of items) scheduler.add(item)
		t.plan(2 + 1000)

		t.equal(typeof scheduler.get, 'function', 'scheduler.get should be a function')
		t.equal(scheduler.get.length, 0, 'scheduler.get.length should be 0')

		for (let i = 0; i < 1000; i++) {
			const msg = `scheduler.get() call #${i} should return a known value`
			const item = scheduler.get()
			t.ok(items.includes(item), msg)
		}
	})

	test('supports initial values', (t) => {
		const scheduler = createScheduler(['foo', 'bar', 'baz'])
		t.plan(4)

		const hasFoo = scheduler.has('foo')
		t.equal(hasFoo, true, `initial value 'foo' unknown`)
		const hasBar = scheduler.has('bar')
		t.equal(hasBar, true, `initial value 'bar' unknown`)
		const hasBaz = scheduler.has('baz')
		t.equal(hasBaz, true, `initial value 'baz' unknown`)

		scheduler.add('qux')
		const hasFoo2 = scheduler.has('foo')
		t.equal(hasFoo2, true, `initial value 'foo' unknown after adding 'qux'`)
	})

	test('actually adds and removes', (t) => {
		const scheduler = createScheduler([])
		t.plan(3)

		const has1 = scheduler.has('foo')
		t.equal(has1, false, `'foo' should be unknown in the beginning`)

		scheduler.add('foo')
		const has2 = scheduler.has('foo')
		t.equal(has2, true, `'foo' should be known after adding`)

		scheduler.remove('foo')
		const has3 = scheduler.has('foo')
		t.equal(has3, false, `'foo' should be unknown after removing`)
	})

	test('works with objects, null and undefined', (t) => {
		const scheduler = createScheduler([null])
		t.plan(3)

		const hasNull = scheduler.has(null)
		t.equal(hasNull, true, 'null should be known')

		scheduler.add(undefined)
		const hasUndefined = scheduler.has(undefined)
		t.equal(hasUndefined, true, 'undefined should be known')

		const obj = {}
		scheduler.add(obj)
		const hasObj = scheduler.has(obj)
		t.equal(hasObj, true, 'obj should be known')
	})
}

module.exports = testScheduler
