
/**
 * Vuemit class.
 *
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/vuemit/blob/master/LICENSE
 */

const Vue = require('vue')

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
        this.vue = new Vue()
    }

    /**
	 * Fires a given event/s.
	 *
	 * @param {Object} event
	 * @param {Object} data
	 * @return {Void}
	 */
    fire(event, data = null)
    {
        if (Array.isArray(event)) {
            return event.forEach((e) => {
                this.vue.$emit(e, data)
            })
        }

        this.vue.$emit(event, data)
    }

    /**
	 * Listens for a given event/s.
	 *
	 * @param {Object} event
	 * @param {Function} callback
	 * @return {Void}
	 */
    listen(event, callback)
    {
        if (Array.isArray(event)) {
            return event.forEach((e) => {
                this.vue.$on(e, callback)
            })
        }

        this.vue.$on(event, callback)
    }

    /**
	 * Listens for a given event/s for one time only.
	 *
	 * @param {Object} event
	 * @param {Function} callback
	 * @return {Void}
	 */
    listenOnce(event, callback)
    {
        if (Array.isArray(event)) {
            return event.forEach((e) => {
                this.vue.$once(e, callback)
            })
        }

        this.vue.$once(event, callback)
    }

    /**
	 * Removes listeners for a given event/s and callback.
	 *
	 * @param {Object} event
	 * @param {Function} callback
	 * @return {Void}
	 */
    remove(event, callback)
    {
        if (Array.isArray(event)) {
            return event.forEach((e) => {
                this.vue.$off(e, callback)
            })
        }

        this.vue.$off(event, callback)
    }

    /**
	 * Removes all listeners for a given event/s.
	 *
	 * @param {Object} event
	 * @return {Void}
	 */
    removeListenersFrom(event)
    {
        if (Array.isArray(event)) {
            return event.forEach((e) => {
                this.vue.$off(e)
            })
        }

        this.vue.$off(event)
    }

    /**
	 * Removes all event listeners.
	 *
	 * @return {Void}
	 */
    removeAll()
    {
        this.vue.$off()
    }
}

module.exports = new Vuemit()
