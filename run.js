/**********************************************************************
* 
* object-run.js
*
* Repo and docs:
* 	https://github.com/flynx/object-run.js
*
*
***********************************************/ /* c8 ignore next 2 */
((typeof define)[0]=='u'?function(f){module.exports=f(require)}:define)
(function(require){ var module={} // make module AMD/node compatible...
/*********************************************************************/

// Run a function in the context of an object...
//
Object.prototype.run
	|| Object.defineProperty(Object.prototype, 'run', {
		enumerable: false,
		value: function(func){
			var res = func ? 
				func.call(this) 
				: undefined
			return res === undefined ? 
				this 
				: res }, })



/**********************************************************************
* vim:set ts=4 sw=4 :                               */ return module })
