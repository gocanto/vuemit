import Vue from 'vue';
import test from 'ava';

/*
|------------------------------------------------------------------------------------
| The Vue.js events handler
|------------------------------------------------------------------------------------
|
| We import the events handler in order for us to use within our tests suit.
 */
import Vuemit from '../src/Vuemit';

/*
|------------------------------------------------------------------------------------
| The component stub
|------------------------------------------------------------------------------------
|
| We create a component stub to interact with fired events.
 */
import Component from './Components/Stub';

/*
|------------------------------------------------------------------------------------
| Extending and mounting stub components
|------------------------------------------------------------------------------------
|
| We extend from the stub component in order for use to use it within our tests.
 */

const Ctor = Vue.extend(Component);
const vm = new Ctor().$mount('demo');

/*
|------------------------------------------------------------------------------------
| Fake data
|------------------------------------------------------------------------------------
|
| We initialize a fake data to be used within our assertions.
 */
const data = {
	email: 'gustavoocanto@gmail.com',
	last_name: 'Ocanto',
	name: 'Gustavo'
};

/*
|------------------------------------------------------------------------------------
| Tests begin
|------------------------------------------------------------------------------------
|
| We start testing our Vuemit object.
 */
test.beforeEach(t => {
   vm.setPerson({});
});

test('Vuemit should implement Vue', t => {
	t.true(Vuemit.vue instanceof Vue);
	t.true(Vuemit.vue._isVue);
});

test('Stub component should be mounted', t => {
	t.true(vm._isMounted);
})

test('Checks whether the fired data event was retrieved by the stub component.', t => {
	Vuemit.fire('setPerson', data);
	t.deepEqual(data, vm.getPerson());
});

test('Set person information once within the stub component.', t => {
	Vuemit.fire('setPersonOnce', data);
	t.deepEqual(data, vm.getPerson());
});

test('Checks whether the fired event (setPersonOnce) is not listening any longer.', t => {
	let event = Vuemit.vue._events.setPersonOnce;
	let setPerson = Vuemit.vue._events.setPerson;

	t.true(Object.keys(event).length === 0);
	t.true(Object.keys(setPerson).length > 0);
});