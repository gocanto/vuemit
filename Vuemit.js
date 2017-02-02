
/**
 * Vuemit class.
 *
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/vuemit/blob/master/LICENSE
 */

window.Vuemit = new class
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
	 * clear a given event.
	 *
	 * @param {Object} event
	 * @param {Function} callback
	 * @return {Void}
	 */
	clear(event, callback)
	{
		this.vue.$off(event, callback);
	}
        /**
	 * Listens for a given event for once time only.
	 *
	 * @param {Object} event
	 * @param {Function} callback
	 * @return {Void}
	 */
	once(event, callback)
	{
		this.vue.$once(event, callback);
	}
}
