# Vuemit

<a href="https://github.com/gocanto/google-autocomplete/blob/master/src/js/Components/googleAutocomplete.vue#L70"><img src="https://img.shields.io/badge/online-demo-green.svg" alt="Demo"></a>
<a href="https://www.npmjs.com/package/google-autocomplete-vue"><img src="https://img.shields.io/npm/v/vuemit.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/google-autocomplete-vue"><img src="https://img.shields.io/npm/dt/vuemit.svg" alt="Downloads"></a>
<a href="https://github.com/gocanto/vuemit/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/easiest-js-validator.svg" alt="License"></a>


Vuemit is a tiny library to work with events on Vue.js. Its aim is to keeping simple the fact of sharing information between two o more components.


# Requirements

You will have to install Vue, as so: 

```js
npm install vue --save
```


# Gettings started


You will have to require this library within your entry point or your bootstrap file, as so: 

```js
window.Vuemit = require('vuemit');
```

This process will create a ***Vuemit*** variable as globally for you to use it within any files needed.

<a href="https://github.com/gocanto/vuemit/blob/master/LICENSE">See Demo</a>


After importing it, you will be able to fire, listen, listen once, remove, remove listeners from a particular event or remove all listeners. 

The explanation for each method is listed below: 

----------

***Fire an event:*** To fire an event you will have to pass two parameters to the method, being the first one the event name, and the second one the required data if needed. As so: 

```js
Vuemit.fire('setAddress', {name: 'gocanto'});    
```

See this <a href="https://github.com/gocanto/google-autocomplete/blob/master/src/js/Components/googleAutocomplete.vue#L70">demo</a> for more information.


***Listen for event:*** To listen to an event you will have to be able to know the name of the fired event and the callback that will handle the information according to the event been fired. As so: 

```js
Vuemit.listen('setAddress', callback);
```

See this <a href="https://github.com/gocanto/google-autocomplete/blob/master/src/js/demo.js#L23">demo</a> for more information.


***Listen once:*** This option will listen for an event and trigger only once, and will then be removed. As so: 

```js
Vuemit.listenOnce('setAddress', callback);
``` 

***Remove:*** Removes listeners for a given event and callback. As so:

```js
Vuemit.remove('setAddress', callback);
```

***Remove listeners from:*** Removes all listeners for a given event. As so:

```js
Vuemit.removeListenersFrom('setAddress');
```

***Remove all:*** Removes all event listeners. As so: 

```js
Vuemit.removeAll();
```

----------

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

