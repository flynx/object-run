# object-run.js

This module defines a singe method `.run(..)` on `Object.prototype` making 
it visible from all JavaScript objects inheriting from Object.

The `.run(..)` method simply executes a function in the context of object 
from which `.run(..)` was called.

The return value of `.run(..)` is the non-`undefined` return value of the
passed function.

The use of `.run(..)` enables the concatinative programming style on any
JavaScript structure/object.


## Installation

```shell
$ npm install --save object-run
```

## Basic usage

```javascript
require('object-run')
```

```javascript
var o = {}
	.run(function(){
		this.x = 123
		this.y = 321
	})
```

## Examples

```javascript
var l = [1, 2, 3, 4, 5]
	// keep only even elements...
	.filter(function(e){
		return e % 2 == 0 })
	.sort()
	// if length is not even add an extra even number at the end...
	.run(function(){
		this.length % 2 != 0
			&& this.push(this[this.length-1] + 2) })
```



## Components

### `Object.prototype.run(..)`

```
<obj>.run(<func>)
	-> <obj>
	-> <return-value>
```

```
<func>()
	-> undefined
	-> <return-value>
```


## License

[BSD 3-Clause License](./LICENSE)

Copyright (c) 2016-2020, Alex A. Naanou,  
All rights reserved.


<!-- vim:set ts=4 sw=4 spell : -->
