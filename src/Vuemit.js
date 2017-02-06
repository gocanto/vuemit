
/**
 * Vuemit class.
 *
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/vuemit/blob/master/LICENSE
 */

class Vuemit
{
	/**
	 * Creates a new Event instance.
	 *
	 * @return {Void}
	 */
	constructor()
	{
		/**
		 * The Vue instance.
		 *
		 * @type {Vue}
		 */
		this.vue = new Vue();
	}

	/**
	 * Fires a given event.
	 *
	 * @param {Object} event
	 * @param {Object} data
	 * @return {Void}
	 */
	fire(event, data = null)
	{
		this.vue.$emit(event, data);
	}

	/**
	 * Listens for a given event.
	 *
	 * @param {Object} event
	 * @param {Function} callback
	 * @return {Void}
	 */
	listen(event, callback)
	{
		this.vue.$on(event, callback);
	}

	/**
	 * Listens for a given event for once time only.
	 *
	 * @param {Object} event
	 * @param {Function} callback
	 * @return {Void}
	 */
	listenOnce(event, callback)
	{
		this.vue.$once(event, callback);
	}

     /**
	 * Removes listeners for a given event and callback.
	 *
	 * @param {Object} event
	 * @param {Function} callback
	 * @return {Void}
	 */
	remove(event, callback)
	{
		this.vue.$off(event, callback);
	}

	/**
	 * Removes all listeners for a given event.
	 *
	 * @param {Object} event
	 * @return {Void}
	 */
	removeListenersFrom(event)
	{
		this.vue.$off(event);
	}

	/**
	 * Removes all event listeners.
	 *
	 * @return {Void}
	 */
	removeAll()
	{
		this.vue.$off();
	}
}

module.exports = new Vuemit;
