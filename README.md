# Vuemit

<a href="https://github.com/gocanto/google-autocomplete/blob/master/src/js/Components/googleAutocomplete.vue#L70"><img src="https://img.shields.io/badge/online-demo-green.svg" alt="Demo"></a>
<a href="https://www.npmjs.com/package/google-autocomplete-vue"><img src="https://img.shields.io/npm/v/vuemit.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/google-autocomplete-vue"><img src="https://img.shields.io/npm/dt/vuemit.svg" alt="Downloads"></a>
<a href="https://github.com/gocanto/vuemit/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/easiest-js-validator.svg" alt="License"></a>

Vuemit is a tiny library to work with events on Vue.js. Its aim is to keeping simple the fact of sharing information between any number of components.

# Installation

```js
npm install vuemit --save
```

# Gettings started

Require the library within your entry point or your bootstrap file.

```js
window.Vuemit = require('vuemit');
```

Now you will have a global ***Vuemit*** variable which you can use anywhere in your app.

# Usage

- all the methods take the same props as the [Original Events](https://vuejs.org/v2/api/#Instance-Methods-Events), except for the events-names which can be an array.

|     Vue      |            Vuemit            |                                    Description                                    |
|--------------|------------------------------|-----------------------------------------------------------------------------------|
| this.$emit() | Vuemit.fire()                | ***Fire an event/s :*** takes 2 arguments ('event-name', (optional) data object)  |
| this.$on()   | Vuemit.listen()              | ***Listen for an event/s :*** takes 2 arguments ('event-name', callback)          |
| this.$once() | Vuemit.listenOnce()          | ***Listen once to an event/s :*** takes 2 arguments ('event-name', callback)      |
| this.$off()  | Vuemit.remove()              | ***Remove listeners for an event/s:*** takes 2 arguments ('event-name', callback) |
| this.$off()  | Vuemit.removeListenersFrom() | ***Remove listeners from an event/s:*** takes 1 arguments ('event-name')          |
| this.$off()  | Vuemit.removeAll()           | ***Remove all event listeners:*** takes no arguments                              |

- Vue started to support events array from **v2.2.0+** except `$emit` & `$once` but with Vuemit you can use events-names as an array with all the methods except `removeAll()` which takes no arguments.

```js
// fire multiple events with a shared payload
Vuemit.fire(['event1','event2'], {some: data})

// listen once to multiple events with a shared callback
Vuemit.listenOnce(['other-event1', 'other-event2'], ()=>{
    // do something ex."refresh localStorage"
})
```

# Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.

# License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

# How can I thank you?
Why not star the github repo? Why not share the link for this repository on Twitter? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/gocanto)!

Thanks!

Gustavo Ocanto.
gustavoocanto@gmail.com

