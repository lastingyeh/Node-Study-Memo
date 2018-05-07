// _self (original)
// function() {
//     console.log(2);
// };
Function.prototype.before = function(beforefn) {
	var _self = this;

	return function() {
		beforefn.apply(this, arguments);
		return _self.apply(this, arguments);
	};
};

// _self (dynamic modify)
// function() {
//     beforefn.apply(this, arguments);
//     return _self.apply(this, arguments);
// };
Function.prototype.after = function(afterfn) {
	var _self = this;

	return function() {
		// dynamic add code
		console.log(_self.toString());
		var ret = _self.apply(this, arguments);
		afterfn.apply(this, arguments);
		//return ret;
	};
};

var func = function() {
	console.log(2);
};

func = func
	.before(function() {
		console.log(1);
	})
	.after(function() {
		console.log(3);
	});

func();
// result
// 1
// 2
// 3
