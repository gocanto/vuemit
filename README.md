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
require('vuemit');
```

This process will create a ***Vuemit*** variable as globally for you to use within any files needed.

<a href="https://github.com/gocanto/vuemit/blob/master/LICENSE">See Demo</a>


After importing it, you will be able to either ***fire*** an event or ***listen*** for one. Examples, 


- Fire an event: To fire an event you will have to pass two parameters to the method, being the first one the event name, and the second one the required data if needed. As so: ```Vuemit.fire('setAddress', {name: 'gocanto'});```. See this <a href="https://github.com/gocanto/google-autocomplete/blob/master/src/js/Components/googleAutocomplete.vue#L70">demo</a> for more information.

- Listen to events: To listen to an event you will have to be able to know the name of the fired event and the callback that will handle the information according to the event been fired. As so: ```Vuemit.listen('setAddress', callback);```. See this <a href="https://github.com/gocanto/google-autocomplete/blob/master/src/js/demo.js#L23">demo</a> for more information.


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

