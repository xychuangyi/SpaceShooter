(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS
//
// For some reason, tabs can appear in href protocols and it still works.
// So '\tjava\tSCRIPT:alert("!!!")' and 'javascript:alert("!!!")' are the same
// in practice. That is why _VirtualDom_RE_js and _VirtualDom_RE_js_html look
// so freaky.
//
// Pulling the regular expressions out to the top level gives a slight speed
// boost in small benchmarks (4-10%) but hoisting values to reduce allocation
// can be unpredictable in large programs where JIT may have a harder time with
// functions are not fully self-contained. The benefit is more that the js and
// js_html ones are so weird that I prefer to see them near each other.


var _VirtualDom_RE_script = /^script$/i;
var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;


function _VirtualDom_noScript(tag)
{
	return _VirtualDom_RE_script.test(tag) ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return _VirtualDom_RE_on_formAction.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return _VirtualDom_RE_js.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return _VirtualDom_RE_js_html.test(value)
		? /**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlJson(value)
{
	return (typeof _Json_unwrap(value) === 'string' && _VirtualDom_RE_js_html.test(_Json_unwrap(value)))
		? _Json_wrap(
			/**_UNUSED/''//*//**/'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'//*/
		) : value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $linsyking$messenger_core$Messenger$Scene$Scene$Roll = function (a) {
	return {$: 'Roll', a: a};
};
var $linsyking$messenger_core$Messenger$Scene$Scene$abstract = F3(
	function (conmodel, initMsg, initEnv) {
		var abstractRec = function (data) {
			var views = function (env) {
				return A2(conmodel.view, env, data);
			};
			var updates = F2(
				function (env, event) {
					var _v0 = A3(conmodel.update, env, event, data);
					var new_d = _v0.a;
					var new_m = _v0.b;
					var new_e = _v0.c;
					return _Utils_Tuple3(
						abstractRec(new_d),
						new_m,
						new_e);
				});
			return $linsyking$messenger_core$Messenger$Scene$Scene$Roll(
				{update: updates, view: views});
		};
		return abstractRec(
			A2(conmodel.init, initEnv, initMsg));
	});
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $linsyking$messenger_core$Messenger$Base$addCommonData = F2(
	function (commonData, env) {
		return {commonData: commonData, globalData: env.globalData};
	});
var $elm$core$Basics$add = _Basics_add;
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $linsyking$messenger_core$Messenger$Base$removeCommonData = function (env) {
	return {commonData: _Utils_Tuple0, globalData: env.globalData};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$append = _Utils_append;
var $linsyking$messenger_core$Messenger$GeneralModel$unroll = function (_v0) {
	var un = _v0.a;
	return un;
};
var $linsyking$messenger_core$Messenger$Recursion$updateOne = F6(
	function (lastEnv, evt, objs, lastObjs, lastMsgUnfinished, lastMsgFinished) {
		updateOne:
		while (true) {
			if (objs.b) {
				var ele = objs.a;
				var restObjs = objs.b;
				var _v1 = A2(
					$linsyking$messenger_core$Messenger$GeneralModel$unroll(ele).update,
					lastEnv,
					evt);
				var newObj = _v1.a;
				var newMsg = _v1.b;
				var _v2 = _v1.c;
				var newEnv = _v2.a;
				var block = _v2.b;
				var finishedMsg = A2(
					$elm$core$List$filterMap,
					function (m) {
						if (m.$ === 'Parent') {
							var x = m.a;
							return $elm$core$Maybe$Just(x);
						} else {
							return $elm$core$Maybe$Nothing;
						}
					},
					newMsg);
				var unfinishedMsg = A2(
					$elm$core$List$filterMap,
					function (m) {
						if (m.$ === 'Parent') {
							return $elm$core$Maybe$Nothing;
						} else {
							var msg = m.a;
							return $elm$core$Maybe$Just(msg);
						}
					},
					newMsg);
				if (block) {
					return _Utils_Tuple3(
						_Utils_ap(
							$elm$core$List$reverse(restObjs),
							A2($elm$core$List$cons, newObj, lastObjs)),
						_Utils_Tuple2(
							_Utils_ap(lastMsgUnfinished, unfinishedMsg),
							_Utils_ap(lastMsgFinished, finishedMsg)),
						_Utils_Tuple2(lastEnv, block));
				} else {
					var $temp$lastEnv = newEnv,
						$temp$evt = evt,
						$temp$objs = restObjs,
						$temp$lastObjs = A2($elm$core$List$cons, newObj, lastObjs),
						$temp$lastMsgUnfinished = _Utils_ap(lastMsgUnfinished, unfinishedMsg),
						$temp$lastMsgFinished = _Utils_ap(lastMsgFinished, finishedMsg);
					lastEnv = $temp$lastEnv;
					evt = $temp$evt;
					objs = $temp$objs;
					lastObjs = $temp$lastObjs;
					lastMsgUnfinished = $temp$lastMsgUnfinished;
					lastMsgFinished = $temp$lastMsgFinished;
					continue updateOne;
				}
			} else {
				return _Utils_Tuple3(
					lastObjs,
					_Utils_Tuple2(lastMsgUnfinished, lastMsgFinished),
					_Utils_Tuple2(lastEnv, false));
			}
		}
	});
var $linsyking$messenger_core$Messenger$Recursion$updateOnce = F3(
	function (env, evt, objs) {
		return A6(
			$linsyking$messenger_core$Messenger$Recursion$updateOne,
			env,
			evt,
			$elm$core$List$reverse(objs),
			_List_Nil,
			_List_Nil,
			_List_Nil);
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $linsyking$messenger_core$Messenger$Recursion$updateRemain = F3(
	function (env, _v0, objs) {
		updateRemain:
		while (true) {
			var unfinishedMsg = _v0.a;
			var finishedMsg = _v0.b;
			if ($elm$core$List$isEmpty(unfinishedMsg)) {
				return _Utils_Tuple3(objs, finishedMsg, env);
			} else {
				var _v1 = A3(
					$elm$core$List$foldl,
					F2(
						function (ele, _v3) {
							var lastObjs = _v3.a;
							var _v4 = _v3.b;
							var lastMsgUnfinished = _v4.a;
							var lastMsgFinished = _v4.b;
							var lastEnv = _v3.c;
							var msgMatched = A2(
								$elm$core$List$filterMap,
								function (_v12) {
									var tar = _v12.a;
									var msg = _v12.b;
									return $linsyking$messenger_core$Messenger$GeneralModel$unroll(ele).matcher(tar) ? $elm$core$Maybe$Just(msg) : $elm$core$Maybe$Nothing;
								},
								unfinishedMsg);
							if ($elm$core$List$isEmpty(msgMatched)) {
								return _Utils_Tuple3(
									_Utils_ap(
										lastObjs,
										_List_fromArray(
											[ele])),
									_Utils_Tuple2(lastMsgUnfinished, lastMsgFinished),
									lastEnv);
							} else {
								var _v5 = A3(
									$elm$core$List$foldl,
									F2(
										function (msg, _v7) {
											var lastObj2 = _v7.a;
											var _v8 = _v7.b;
											var lastMsgUnfinished2 = _v8.a;
											var lastMsgFinished2 = _v8.b;
											var lastEnv2 = _v7.c;
											var _v9 = A2(
												$linsyking$messenger_core$Messenger$GeneralModel$unroll(lastObj2).updaterec,
												lastEnv2,
												msg);
											var newEle = _v9.a;
											var newMsgs = _v9.b;
											var newEnv3 = _v9.c;
											var finishedMsgs = A2(
												$elm$core$List$filterMap,
												function (nmsg) {
													if (nmsg.$ === 'Parent') {
														var pmsg = nmsg.a;
														return $elm$core$Maybe$Just(pmsg);
													} else {
														return $elm$core$Maybe$Nothing;
													}
												},
												newMsgs);
											var unfinishedMsgs = A2(
												$elm$core$List$filterMap,
												function (nmsg) {
													if (nmsg.$ === 'Parent') {
														return $elm$core$Maybe$Nothing;
													} else {
														var omsg = nmsg.a;
														return $elm$core$Maybe$Just(omsg);
													}
												},
												newMsgs);
											return _Utils_Tuple3(
												newEle,
												_Utils_Tuple2(
													_Utils_ap(lastMsgUnfinished2, unfinishedMsgs),
													_Utils_ap(lastMsgFinished2, finishedMsgs)),
												newEnv3);
										}),
									_Utils_Tuple3(
										ele,
										_Utils_Tuple2(_List_Nil, _List_Nil),
										lastEnv),
									msgMatched);
								var newObj = _v5.a;
								var _v6 = _v5.b;
								var newMsgUnfinished = _v6.a;
								var newMsgFinished = _v6.b;
								var newEnv2 = _v5.c;
								return _Utils_Tuple3(
									_Utils_ap(
										lastObjs,
										_List_fromArray(
											[newObj])),
									_Utils_Tuple2(
										_Utils_ap(lastMsgUnfinished, newMsgUnfinished),
										_Utils_ap(lastMsgFinished, newMsgFinished)),
									newEnv2);
							}
						}),
					_Utils_Tuple3(
						_List_Nil,
						_Utils_Tuple2(_List_Nil, _List_Nil),
						env),
					objs);
				var newObjs = _v1.a;
				var _v2 = _v1.b;
				var newUnfinishedMsg = _v2.a;
				var newFinishedMsg = _v2.b;
				var newEnv = _v1.c;
				var $temp$env = newEnv,
					$temp$_v0 = _Utils_Tuple2(
					newUnfinishedMsg,
					_Utils_ap(finishedMsg, newFinishedMsg)),
					$temp$objs = newObjs;
				env = $temp$env;
				_v0 = $temp$_v0;
				objs = $temp$objs;
				continue updateRemain;
			}
		}
	});
var $linsyking$messenger_core$Messenger$Recursion$updateObjects = F3(
	function (env, evt, objs) {
		var _v0 = A3($linsyking$messenger_core$Messenger$Recursion$updateOnce, env, evt, objs);
		var newObjs = _v0.a;
		var _v1 = _v0.b;
		var newMsgUnfinished = _v1.a;
		var newMsgFinished = _v1.b;
		var _v2 = _v0.c;
		var newEnv = _v2.a;
		var newBlock = _v2.b;
		var _v3 = A3(
			$linsyking$messenger_core$Messenger$Recursion$updateRemain,
			newEnv,
			_Utils_Tuple2(newMsgUnfinished, newMsgFinished),
			newObjs);
		var resObj = _v3.a;
		var resMsg = _v3.b;
		var resEnv = _v3.c;
		return _Utils_Tuple3(
			resObj,
			resMsg,
			_Utils_Tuple2(resEnv, newBlock));
	});
var $linsyking$messenger_core$Messenger$Scene$LayeredScene$updateLayeredScene = F4(
	function (settingsFunc, env, evt, lsd) {
		var _v0 = A3(
			$linsyking$messenger_core$Messenger$Recursion$updateObjects,
			A2($linsyking$messenger_core$Messenger$Base$addCommonData, lsd.commonData, env),
			evt,
			lsd.layers);
		var newLayers = _v0.a;
		var newMsgs = _v0.b;
		var _v1 = _v0.c;
		var newEnv = _v1.a;
		var som = A2(
			$elm$core$List$filterMap,
			function (msg) {
				if (msg.$ === 'SOMMsg') {
					var m = msg.a;
					return $elm$core$Maybe$Just(m);
				} else {
					return $elm$core$Maybe$Nothing;
				}
			},
			newMsgs);
		return _Utils_Tuple3(
			{
				commonData: newEnv.commonData,
				layers: newLayers,
				renderSettings: A3(settingsFunc, env, evt, lsd)
			},
			som,
			$linsyking$messenger_core$Messenger$Base$removeCommonData(newEnv));
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableGroup = function (a) {
	return {$: 'DrawableGroup', a: a};
};
var $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified = {$: 'NotSpecified'};
var $linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable = function (a) {
	return {$: 'Renderable', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $linsyking$elm_canvas$Canvas$Internal$Canvas$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var $linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke = F2(
	function (a, b) {
		return {$: 'FillAndStroke', a: a, b: b};
	});
var $linsyking$elm_canvas$Canvas$Internal$Canvas$Stroke = function (a) {
	return {$: 'Stroke', a: a};
};
var $linsyking$elm_canvas$Canvas$mergeDrawOp = F2(
	function (op1, op2) {
		var _v0 = _Utils_Tuple2(op1, op2);
		_v0$7:
		while (true) {
			switch (_v0.b.$) {
				case 'FillAndStroke':
					var _v1 = _v0.b;
					var c = _v1.a;
					var sc = _v1.b;
					return A2($linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc);
				case 'Fill':
					switch (_v0.a.$) {
						case 'Fill':
							var c = _v0.b.a;
							return $linsyking$elm_canvas$Canvas$Internal$Canvas$Fill(c);
						case 'Stroke':
							var c1 = _v0.a.a;
							var c2 = _v0.b.a;
							return A2($linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, c1);
						case 'FillAndStroke':
							var _v2 = _v0.a;
							var sc = _v2.b;
							var c2 = _v0.b.a;
							return A2($linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, sc);
						default:
							break _v0$7;
					}
				case 'Stroke':
					switch (_v0.a.$) {
						case 'Stroke':
							var c = _v0.b.a;
							return $linsyking$elm_canvas$Canvas$Internal$Canvas$Stroke(c);
						case 'Fill':
							var c1 = _v0.a.a;
							var c2 = _v0.b.a;
							return A2($linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c1, c2);
						case 'FillAndStroke':
							var _v3 = _v0.a;
							var c = _v3.a;
							var sc2 = _v0.b.a;
							return A2($linsyking$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc2);
						default:
							break _v0$7;
					}
				default:
					if (_v0.a.$ === 'NotSpecified') {
						break _v0$7;
					} else {
						var whatever = _v0.a;
						var _v5 = _v0.b;
						return whatever;
					}
			}
		}
		var _v4 = _v0.a;
		var whatever = _v0.b;
		return whatever;
	});
var $linsyking$elm_canvas$Canvas$addSettingsToRenderable = F2(
	function (settings, renderable) {
		var addSetting = F2(
			function (setting, _v1) {
				var r = _v1.a;
				return $linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable(
					function () {
						switch (setting.$) {
							case 'SettingCommand':
								var cmd = setting.a;
								return _Utils_update(
									r,
									{
										commands: A2($elm$core$List$cons, cmd, r.commands)
									});
							case 'SettingCommands':
								var cmds = setting.a;
								return _Utils_update(
									r,
									{
										commands: A3($elm$core$List$foldl, $elm$core$List$cons, r.commands, cmds)
									});
							case 'SettingUpdateDrawable':
								var f = setting.a;
								return _Utils_update(
									r,
									{
										drawable: f(r.drawable)
									});
							default:
								var op = setting.a;
								return _Utils_update(
									r,
									{
										drawOp: A2($linsyking$elm_canvas$Canvas$mergeDrawOp, r.drawOp, op)
									});
						}
					}());
			});
		return A3($elm$core$List$foldl, addSetting, renderable, settings);
	});
var $linsyking$elm_canvas$Canvas$group = F2(
	function (settings, entities) {
		return A2(
			$linsyking$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			$linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable(
				{
					commands: _List_Nil,
					drawOp: $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
					drawable: $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableGroup(entities)
				}));
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $linsyking$messenger_core$Messenger$GeneralModel$viewModelList = F2(
	function (env, models) {
		return A2(
			$elm$core$List$map,
			function (model) {
				return $linsyking$messenger_core$Messenger$GeneralModel$unroll(model).view(env);
			},
			models);
	});
var $linsyking$messenger_core$Messenger$Scene$LayeredScene$viewLayeredScene = F2(
	function (env, _v0) {
		var renderSettings = _v0.renderSettings;
		var commonData = _v0.commonData;
		var layers = _v0.layers;
		return A2(
			$linsyking$elm_canvas$Canvas$group,
			renderSettings,
			A2(
				$linsyking$messenger_core$Messenger$GeneralModel$viewModelList,
				A2($linsyking$messenger_core$Messenger$Base$addCommonData, commonData, env),
				layers));
	});
var $linsyking$messenger_core$Messenger$Scene$LayeredScene$genLayeredScene = F2(
	function (init, settingsFunc) {
		return $linsyking$messenger_core$Messenger$Scene$Scene$abstract(
			{
				init: init,
				update: $linsyking$messenger_core$Messenger$Scene$LayeredScene$updateLayeredScene(settingsFunc),
				view: $linsyking$messenger_core$Messenger$Scene$LayeredScene$viewLayeredScene
			});
	});
var $author$project$SceneProtos$Game$SceneBase$FrontInitData = function (a) {
	return {$: 'FrontInitData', a: a};
};
var $author$project$SceneProtos$Game$SceneBase$MainInitData = function (a) {
	return {$: 'MainInitData', a: a};
};
var $author$project$SceneProtos$Game$Model$commonDataInit = F2(
	function (_v0, _v1) {
		return {gameOver: false, score: 0};
	});
var $linsyking$messenger_core$Messenger$GeneralModel$Roll = function (a) {
	return {$: 'Roll', a: a};
};
var $linsyking$messenger_core$Messenger$GeneralModel$abstract = F3(
	function (conmodel, initMsg, initEnv) {
		var abstractRec = F2(
			function (data, base) {
				var views = function (env) {
					return A3(conmodel.view, env, data, base);
				};
				var updates = F2(
					function (env, event) {
						var _v2 = A4(conmodel.update, env, event, data, base);
						var _v3 = _v2.a;
						var new_d = _v3.a;
						var new_bd = _v3.b;
						var new_m = _v2.b;
						var new_e = _v2.c;
						return _Utils_Tuple3(
							A2(abstractRec, new_d, new_bd),
							new_m,
							new_e);
					});
				var updaterecs = F2(
					function (env, msg) {
						var _v0 = A4(conmodel.updaterec, env, msg, data, base);
						var _v1 = _v0.a;
						var new_d = _v1.a;
						var new_bd = _v1.b;
						var new_m = _v0.b;
						var new_e = _v0.c;
						return _Utils_Tuple3(
							A2(abstractRec, new_d, new_bd),
							new_m,
							new_e);
					});
				var matchers = A2(conmodel.matcher, data, base);
				var baseDatas = base;
				return $linsyking$messenger_core$Messenger$GeneralModel$Roll(
					{baseData: baseDatas, matcher: matchers, update: updates, updaterec: updaterecs, view: views});
			});
		var _v4 = A2(conmodel.init, initEnv, initMsg);
		var init_d = _v4.a;
		var init_bd = _v4.b;
		return A2(abstractRec, init_d, init_bd);
	});
var $linsyking$messenger_core$Messenger$Layer$Layer$addEmptyBData = function (mconnoB) {
	return {
		init: F2(
			function (env, msg) {
				return _Utils_Tuple2(
					A2(mconnoB.init, env, msg),
					_Utils_Tuple0);
			}),
		matcher: F3(
			function (data, _v0, tar) {
				return A2(mconnoB.matcher, data, tar);
			}),
		update: F4(
			function (env, evt, data, _v1) {
				var _v2 = A3(mconnoB.update, env, evt, data);
				var resData = _v2.a;
				var resMsg = _v2.b;
				var resEnv = _v2.c;
				return _Utils_Tuple3(
					_Utils_Tuple2(resData, _Utils_Tuple0),
					resMsg,
					resEnv);
			}),
		updaterec: F4(
			function (env, msg, data, _v3) {
				var _v4 = A3(mconnoB.updaterec, env, msg, data);
				var resData = _v4.a;
				var resMsg = _v4.b;
				var resEnv = _v4.c;
				return _Utils_Tuple3(
					_Utils_Tuple2(resData, _Utils_Tuple0),
					resMsg,
					resEnv);
			}),
		view: F3(
			function (env, data, _v5) {
				return A2(mconnoB.view, env, data);
			})
	};
};
var $linsyking$messenger_core$Messenger$Layer$Layer$genLayer = function (conlayer) {
	return $linsyking$messenger_core$Messenger$GeneralModel$abstract(
		$linsyking$messenger_core$Messenger$Layer$Layer$addEmptyBData(conlayer));
};
var $author$project$SceneProtos$Game$FrontLayer$Model$Data = function (level) {
	return {level: level};
};
var $author$project$SceneProtos$Game$FrontLayer$Model$init = F2(
	function (env, initMsg) {
		if (initMsg.$ === 'FrontInitData') {
			var lv = initMsg.a;
			return $author$project$SceneProtos$Game$FrontLayer$Model$Data(lv);
		} else {
			return $author$project$SceneProtos$Game$FrontLayer$Model$Data('');
		}
	});
var $elm$core$Basics$eq = _Utils_equal;
var $author$project$SceneProtos$Game$FrontLayer$Model$matcher = F2(
	function (data, tar) {
		return tar === 'FrontLayer';
	});
var $linsyking$messenger_core$Messenger$GeneralModel$Parent = function (a) {
	return {$: 'Parent', a: a};
};
var $linsyking$messenger_core$Messenger$Scene$Scene$SOMChangeScene = F3(
	function (a, b, c) {
		return {$: 'SOMChangeScene', a: a, b: b, c: c};
	});
var $linsyking$messenger_core$Messenger$GeneralModel$SOMMsg = function (a) {
	return {$: 'SOMMsg', a: a};
};
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Basics$not = _Basics_not;
var $author$project$SceneProtos$Game$FrontLayer$Model$update = F3(
	function (env, evt, data) {
		if (!env.commonData.gameOver) {
			var nextLvmsg = ((env.commonData.score >= 80) && (data.level === 'Level1')) ? _List_fromArray(
				[
					$linsyking$messenger_core$Messenger$GeneralModel$Parent(
					$linsyking$messenger_core$Messenger$GeneralModel$SOMMsg(
						A3($linsyking$messenger_core$Messenger$Scene$Scene$SOMChangeScene, $elm$core$Maybe$Nothing, 'Level2', $elm$core$Maybe$Nothing)))
				]) : _List_Nil;
			return _Utils_Tuple3(
				data,
				nextLvmsg,
				_Utils_Tuple2(env, false));
		} else {
			_v0$2:
			while (true) {
				switch (evt.$) {
					case 'MouseDown':
						if (!evt.a) {
							return _Utils_Tuple3(
								data,
								_List_fromArray(
									[
										$linsyking$messenger_core$Messenger$GeneralModel$Parent(
										$linsyking$messenger_core$Messenger$GeneralModel$SOMMsg(
											A3($linsyking$messenger_core$Messenger$Scene$Scene$SOMChangeScene, $elm$core$Maybe$Nothing, data.level, $elm$core$Maybe$Nothing)))
									]),
								_Utils_Tuple2(env, true));
						} else {
							break _v0$2;
						}
					case 'KeyDown':
						if (evt.a === 32) {
							return _Utils_Tuple3(
								data,
								_List_fromArray(
									[
										$linsyking$messenger_core$Messenger$GeneralModel$Parent(
										$linsyking$messenger_core$Messenger$GeneralModel$SOMMsg(
											A3($linsyking$messenger_core$Messenger$Scene$Scene$SOMChangeScene, $elm$core$Maybe$Nothing, data.level, $elm$core$Maybe$Nothing)))
									]),
								_Utils_Tuple2(env, true));
						} else {
							break _v0$2;
						}
					default:
						break _v0$2;
				}
			}
			return _Utils_Tuple3(
				data,
				_List_Nil,
				_Utils_Tuple2(env, false));
		}
	});
var $author$project$SceneProtos$Game$FrontLayer$Model$updaterec = F3(
	function (env, msg, data) {
		return _Utils_Tuple3(data, _List_Nil, env);
	});
var $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand = function (a) {
	return {$: 'SettingCommand', a: a};
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$String$all = _String_all;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field = F2(
	function (name, value) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('field')),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(name)),
					_Utils_Tuple2('value', value)
				]));
	});
var $elm$json$Json$Encode$float = _Json_wrap;
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$globalAlpha = function (alpha) {
	return A2(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'globalAlpha',
		$elm$json$Json$Encode$float(alpha));
};
var $linsyking$elm_canvas$Canvas$Settings$Advanced$alpha = function (a) {
	return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$globalAlpha(a));
};
var $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableEmpty = {$: 'DrawableEmpty'};
var $linsyking$elm_canvas$Canvas$empty = $linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable(
	{commands: _List_Nil, drawOp: $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified, drawable: $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableEmpty});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$Color = function (a) {
	return {$: 'Color', a: a};
};
var $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp = function (a) {
	return {$: 'SettingDrawOp', a: a};
};
var $linsyking$elm_canvas$Canvas$Settings$fill = function (color) {
	return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp(
		$linsyking$elm_canvas$Canvas$Internal$Canvas$Fill(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$Color(color)));
};
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$filter = function (value) {
	return A2(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'filter',
		$elm$json$Json$Encode$string(value));
};
var $linsyking$elm_canvas$Canvas$Settings$Advanced$filter = function (f) {
	return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$filter(f));
};
var $linsyking$messenger_core$Messenger$Coordinate$Coordinates$lengthToReal = F2(
	function (gd, x) {
		return gd.internalData.realWidth * (x / gd.internalData.virtualWidth);
	});
var $linsyking$messenger_core$Messenger$Coordinate$Coordinates$posToReal = F2(
	function (gd, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		var realWidth = gd.internalData.realWidth;
		var realHeight = gd.internalData.realHeight;
		return _Utils_Tuple2(realWidth * (x / gd.internalData.virtualWidth), realHeight * (y / gd.internalData.virtualHeight));
	});
var $linsyking$elm_canvas$Canvas$Internal$Canvas$Rect = F3(
	function (a, b, c) {
		return {$: 'Rect', a: a, b: b, c: c};
	});
var $linsyking$elm_canvas$Canvas$rect = F3(
	function (pos, width, height) {
		return A3($linsyking$elm_canvas$Canvas$Internal$Canvas$Rect, pos, width, height);
	});
var $linsyking$messenger_core$Messenger$Render$Shape$rect = F3(
	function (gd, pos, _v0) {
		var w = _v0.a;
		var h = _v0.b;
		return A3(
			$linsyking$elm_canvas$Canvas$rect,
			A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$posToReal, gd, pos),
			A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$lengthToReal, gd, w),
			A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$lengthToReal, gd, h));
	});
var $avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 'RgbaSpace', a: a, b: b, c: c, d: d};
	});
var $avh4$elm_color$Color$red = A4($avh4$elm_color$Color$RgbaSpace, 204 / 255, 0 / 255, 0 / 255, 1.0);
var $linsyking$elm_canvas$Canvas$Settings$Text$Start = {$: 'Start'};
var $linsyking$elm_canvas$Canvas$Settings$Text$Top = {$: 'Top'};
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$textAlign = function (align) {
	return A2(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'textAlign',
		$elm$json$Json$Encode$string(align));
};
var $linsyking$elm_canvas$Canvas$Settings$Text$textAlignToString = function (alignment) {
	switch (alignment.$) {
		case 'Left':
			return 'left';
		case 'Right':
			return 'right';
		case 'Center':
			return 'center';
		case 'Start':
			return 'start';
		default:
			return 'end';
	}
};
var $linsyking$elm_canvas$Canvas$Settings$Text$align = function (alignment) {
	return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$textAlign(
			$linsyking$elm_canvas$Canvas$Settings$Text$textAlignToString(alignment)));
};
var $linsyking$elm_canvas$Canvas$Settings$Text$textBaseLineToString = function (baseLineSetting) {
	switch (baseLineSetting.$) {
		case 'Top':
			return 'top';
		case 'Hanging':
			return 'hanging';
		case 'Middle':
			return 'middle';
		case 'Alphabetic':
			return 'alphabetic';
		case 'Ideographic':
			return 'ideographic';
		default:
			return 'bottom';
	}
};
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$textBaseline = function (baseline) {
	return A2(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'textBaseline',
		$elm$json$Json$Encode$string(baseline));
};
var $linsyking$elm_canvas$Canvas$Settings$Text$baseLine = function (textBaseLine) {
	return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$textBaseline(
			$linsyking$elm_canvas$Canvas$Settings$Text$textBaseLineToString(textBaseLine)));
};
var $avh4$elm_color$Color$black = A4($avh4$elm_color$Color$RgbaSpace, 0 / 255, 0 / 255, 0 / 255, 1.0);
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$font = function (f) {
	return A2(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'font',
		$elm$json$Json$Encode$string(f));
};
var $linsyking$elm_canvas$Canvas$Settings$Text$font = function (_v0) {
	var style = _v0.style;
	var size = _v0.size;
	var family = _v0.family;
	return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$font(
			style + (' ' + ($elm$core$String$fromInt(size) + ('px ' + family)))));
};
var $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableText = function (a) {
	return {$: 'DrawableText', a: a};
};
var $linsyking$elm_canvas$Canvas$text = F3(
	function (settings, point, str) {
		return A2(
			$linsyking$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			$linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable(
				{
					commands: _List_Nil,
					drawOp: $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
					drawable: $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableText(
						{maxWidth: $elm$core$Maybe$Nothing, point: point, text: str})
				}));
	});
var $linsyking$messenger_core$Messenger$Render$Text$renderTextWithStyle = F6(
	function (gd, size, content, ft, style, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		var rx = A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$lengthToReal, gd, size);
		var _v1 = A2(
			$linsyking$messenger_core$Messenger$Coordinate$Coordinates$posToReal,
			gd,
			_Utils_Tuple2(x, y));
		var dsx = _v1.a;
		var dsy = _v1.b;
		return A3(
			$linsyking$elm_canvas$Canvas$text,
			_List_fromArray(
				[
					$linsyking$elm_canvas$Canvas$Settings$Text$font(
					{
						family: ft,
						size: $elm$core$Basics$floor(rx),
						style: style
					}),
					$linsyking$elm_canvas$Canvas$Settings$Text$align($linsyking$elm_canvas$Canvas$Settings$Text$Start),
					$linsyking$elm_canvas$Canvas$Settings$fill($avh4$elm_color$Color$black),
					$linsyking$elm_canvas$Canvas$Settings$Text$baseLine($linsyking$elm_canvas$Canvas$Settings$Text$Top)
				]),
			_Utils_Tuple2(dsx, dsy),
			content);
	});
var $linsyking$messenger_core$Messenger$Render$Text$renderText = F5(
	function (gd, size, content, font, pos) {
		return A6($linsyking$messenger_core$Messenger$Render$Text$renderTextWithStyle, gd, size, content, font, '', pos);
	});
var $linsyking$elm_canvas$Canvas$Settings$Text$Center = {$: 'Center'};
var $linsyking$elm_canvas$Canvas$Settings$Text$Middle = {$: 'Middle'};
var $linsyking$messenger_core$Messenger$Render$Text$renderTextWithColorCenterStyle = F7(
	function (gd, size, content, ft, color, style, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		var rx = A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$lengthToReal, gd, size);
		var _v1 = A2(
			$linsyking$messenger_core$Messenger$Coordinate$Coordinates$posToReal,
			gd,
			_Utils_Tuple2(x, y));
		var dsx = _v1.a;
		var dsy = _v1.b;
		return A3(
			$linsyking$elm_canvas$Canvas$text,
			_List_fromArray(
				[
					$linsyking$elm_canvas$Canvas$Settings$Text$font(
					{
						family: ft,
						size: $elm$core$Basics$floor(rx),
						style: style
					}),
					$linsyking$elm_canvas$Canvas$Settings$Text$align($linsyking$elm_canvas$Canvas$Settings$Text$Center),
					$linsyking$elm_canvas$Canvas$Settings$fill(color),
					$linsyking$elm_canvas$Canvas$Settings$Text$baseLine($linsyking$elm_canvas$Canvas$Settings$Text$Middle)
				]),
			_Utils_Tuple2(dsx, dsy),
			content);
	});
var $linsyking$messenger_core$Messenger$Render$Text$renderTextWithColorCenter = F6(
	function (gd, size, content, font, color, position) {
		return A7($linsyking$messenger_core$Messenger$Render$Text$renderTextWithColorCenterStyle, gd, size, content, font, color, '', position);
	});
var $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableShapes = function (a) {
	return {$: 'DrawableShapes', a: a};
};
var $linsyking$elm_canvas$Canvas$shapes = F2(
	function (settings, ss) {
		return A2(
			$linsyking$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			$linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable(
				{
					commands: _List_Nil,
					drawOp: $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
					drawable: $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableShapes(ss)
				}));
	});
var $avh4$elm_color$Color$white = A4($avh4$elm_color$Color$RgbaSpace, 255 / 255, 255 / 255, 255 / 255, 1.0);
var $author$project$SceneProtos$Game$FrontLayer$Model$view = F2(
	function (env, data) {
		var gameOverVE = env.commonData.gameOver ? _List_fromArray(
			[
				$linsyking$elm_canvas$Canvas$Settings$Advanced$filter('blur(5px)')
			]) : _List_Nil;
		var gameOverMask = env.commonData.gameOver ? A2(
			$linsyking$elm_canvas$Canvas$group,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$linsyking$elm_canvas$Canvas$shapes,
					_List_fromArray(
						[
							$linsyking$elm_canvas$Canvas$Settings$Advanced$alpha(0.2),
							$linsyking$elm_canvas$Canvas$Settings$fill($avh4$elm_color$Color$white)
						]),
					_List_fromArray(
						[
							A3(
							$linsyking$messenger_core$Messenger$Render$Shape$rect,
							env.globalData,
							_Utils_Tuple2(0, 0),
							_Utils_Tuple2(1920, 1080))
						])),
					A6(
					$linsyking$messenger_core$Messenger$Render$Text$renderTextWithColorCenter,
					env.globalData,
					120,
					'Game Over',
					'Arial',
					$avh4$elm_color$Color$red,
					_Utils_Tuple2(960, 540))
				])) : $linsyking$elm_canvas$Canvas$empty;
		return A2(
			$linsyking$elm_canvas$Canvas$group,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$linsyking$elm_canvas$Canvas$group,
					gameOverVE,
					_List_fromArray(
						[
							A5(
							$linsyking$messenger_core$Messenger$Render$Text$renderText,
							env.globalData,
							40,
							'Score: ' + $elm$core$String$fromInt(env.commonData.score),
							'Arial',
							_Utils_Tuple2(1730, 80)),
							A5(
							$linsyking$messenger_core$Messenger$Render$Text$renderText,
							env.globalData,
							40,
							data.level,
							'Arial',
							_Utils_Tuple2(1750, 30))
						])),
					gameOverMask
				]));
	});
var $author$project$SceneProtos$Game$FrontLayer$Model$layercon = {init: $author$project$SceneProtos$Game$FrontLayer$Model$init, matcher: $author$project$SceneProtos$Game$FrontLayer$Model$matcher, update: $author$project$SceneProtos$Game$FrontLayer$Model$update, updaterec: $author$project$SceneProtos$Game$FrontLayer$Model$updaterec, view: $author$project$SceneProtos$Game$FrontLayer$Model$view};
var $author$project$SceneProtos$Game$FrontLayer$Model$layer = $linsyking$messenger_core$Messenger$Layer$Layer$genLayer($author$project$SceneProtos$Game$FrontLayer$Model$layercon);
var $author$project$SceneProtos$Game$Main$Model$Data = function (components) {
	return {components: components};
};
var $author$project$SceneProtos$Game$Main$Model$init = F2(
	function (env, initMsg) {
		if (initMsg.$ === 'MainInitData') {
			var data = initMsg.a;
			return $author$project$SceneProtos$Game$Main$Model$Data(data.components);
		} else {
			return $author$project$SceneProtos$Game$Main$Model$Data(_List_Nil);
		}
	});
var $author$project$SceneProtos$Game$Main$Model$matcher = F2(
	function (data, tar) {
		return tar === 'Main';
	});
var $author$project$SceneProtos$Game$Components$ComponentBase$CollisionMsg = function (a) {
	return {$: 'CollisionMsg', a: a};
};
var $author$project$SceneProtos$Game$Components$ComponentBase$Id = function (a) {
	return {$: 'Id', a: a};
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$SceneProtos$Game$Main$Collision$judgeSimpleCollision = F2(
	function (_v0, _v1) {
		var p1 = _v0.a;
		var p2 = _v0.b;
		var p3 = _v1.a;
		var p4 = _v1.b;
		var p4y = p4.b;
		var p4x = p4.a;
		var p3y = p3.b;
		var p3x = p3.a;
		var p2y = p2.b;
		var p2x = p2.a;
		var p1y = p1.b;
		var p1x = p1.a;
		return (_Utils_cmp(p2y, p3y) > -1) && ((_Utils_cmp(p1y, p4y) < 1) && ((_Utils_cmp(p2x, p3x) > -1) && (_Utils_cmp(p1x, p4x) < 1)));
	});
var $author$project$SceneProtos$Game$Main$Collision$judgeOne = F2(
	function (praw, qraw) {
		var q = $linsyking$messenger_core$Messenger$GeneralModel$unroll(qraw);
		var q1 = q.baseData.position;
		var p = $linsyking$messenger_core$Messenger$GeneralModel$unroll(praw);
		var p1 = p.baseData.position;
		var _v0 = q.baseData.position;
		var q1x = _v0.a;
		var q1y = _v0.b;
		var _v1 = q.baseData.collisionBox;
		var q1w = _v1.a;
		var q1h = _v1.b;
		var q2 = _Utils_Tuple2(q1x + q1w, q1y + q1h);
		var _v2 = p.baseData.position;
		var p1x = _v2.a;
		var p1y = _v2.b;
		var _v3 = p.baseData.collisionBox;
		var p1w = _v3.a;
		var p1h = _v3.b;
		var p2 = _Utils_Tuple2(p1x + p1w, p1y + p1h);
		return A2(
			$author$project$SceneProtos$Game$Main$Collision$judgeSimpleCollision,
			_Utils_Tuple2(p1, p2),
			_Utils_Tuple2(q1, q2)) ? _List_fromArray(
			[
				_Utils_Tuple2(
				$author$project$SceneProtos$Game$Components$ComponentBase$Id(p.baseData.id),
				$author$project$SceneProtos$Game$Components$ComponentBase$CollisionMsg(q.baseData.ty)),
				_Utils_Tuple2(
				$author$project$SceneProtos$Game$Components$ComponentBase$Id(q.baseData.id),
				$author$project$SceneProtos$Game$Components$ComponentBase$CollisionMsg(p.baseData.ty))
			]) : _List_Nil;
	});
var $author$project$SceneProtos$Game$Main$Collision$judgeCollisionHelper = F3(
	function (xs, ys, acc) {
		judgeCollisionHelper:
		while (true) {
			if (!ys.b) {
				return acc;
			} else {
				var z = ys.a;
				var zs = ys.b;
				var newMsgs = A3(
					$elm$core$List$foldl,
					F2(
						function (x, lastMsgs) {
							return _Utils_eq(
								$linsyking$messenger_core$Messenger$GeneralModel$unroll(x).baseData.id,
								$linsyking$messenger_core$Messenger$GeneralModel$unroll(z).baseData.id) ? lastMsgs : _Utils_ap(
								lastMsgs,
								A2($author$project$SceneProtos$Game$Main$Collision$judgeOne, z, x));
						}),
					acc,
					xs);
				var $temp$xs = xs,
					$temp$ys = zs,
					$temp$acc = newMsgs;
				xs = $temp$xs;
				ys = $temp$ys;
				acc = $temp$acc;
				continue judgeCollisionHelper;
			}
		}
	});
var $author$project$SceneProtos$Game$Main$Collision$judgeCollision = function (xs) {
	return A3($author$project$SceneProtos$Game$Main$Collision$judgeCollisionHelper, xs, xs, _List_Nil);
};
var $author$project$SceneProtos$Game$Main$Model$collisionDistributor = F3(
	function (env, evt, data) {
		return _Utils_Tuple3(
			data,
			_Utils_Tuple2(
				_List_Nil,
				$author$project$SceneProtos$Game$Main$Collision$judgeCollision(data.components)),
			env);
	});
var $author$project$SceneProtos$Game$Components$ComponentBase$BulletInitMsg = function (a) {
	return {$: 'BulletInitMsg', a: a};
};
var $author$project$SceneProtos$Game$Components$ComponentBase$emptyBaseData = {
	alive: true,
	collisionBox: _Utils_Tuple2(0, 0),
	id: 0,
	position: _Utils_Tuple2(0, 0),
	ty: '',
	velocity: 0
};
var $author$project$SceneProtos$Game$Components$Bullet$Model$init = F2(
	function (env, initMsg) {
		if (initMsg.$ === 'BulletInitMsg') {
			var msg = initMsg.a;
			return _Utils_Tuple2(
				{color: msg.color},
				{
					alive: true,
					collisionBox: _Utils_Tuple2(20, 10),
					id: msg.id,
					position: msg.position,
					ty: 'Bullet',
					velocity: msg.velocity
				});
		} else {
			return _Utils_Tuple2(
				{color: $avh4$elm_color$Color$black},
				$author$project$SceneProtos$Game$Components$ComponentBase$emptyBaseData);
		}
	});
var $author$project$SceneProtos$Game$Components$ComponentBase$Type = function (a) {
	return {$: 'Type', a: a};
};
var $author$project$SceneProtos$Game$Components$Bullet$Model$matcher = F3(
	function (data, basedata, tar) {
		return _Utils_eq(
			tar,
			$author$project$SceneProtos$Game$Components$ComponentBase$Type(basedata.ty)) || _Utils_eq(
			tar,
			$author$project$SceneProtos$Game$Components$ComponentBase$Id(basedata.id));
	});
var $author$project$SceneProtos$Game$Components$Bullet$Model$update = F4(
	function (env, evnt, data, basedata) {
		if (evnt.$ === 'Tick') {
			var dt = evnt.a;
			var newBullet = _Utils_update(
				basedata,
				{
					position: _Utils_Tuple2(basedata.position.a + (basedata.velocity * dt), basedata.position.b)
				});
			return _Utils_Tuple3(
				_Utils_Tuple2(data, newBullet),
				_List_Nil,
				_Utils_Tuple2(env, false));
		} else {
			return _Utils_Tuple3(
				_Utils_Tuple2(data, basedata),
				_List_Nil,
				_Utils_Tuple2(env, false));
		}
	});
var $author$project$SceneProtos$Game$Components$Bullet$Model$updaterec = F4(
	function (env, msg, data, basedata) {
		if ((msg.$ === 'CollisionMsg') && (msg.a === 'Bullet')) {
			return _Utils_Tuple3(
				_Utils_Tuple2(
					data,
					_Utils_update(
						basedata,
						{alive: false})),
				_List_Nil,
				env);
		} else {
			return _Utils_Tuple3(
				_Utils_Tuple2(data, basedata),
				_List_Nil,
				env);
		}
	});
var $linsyking$elm_canvas$Canvas$Internal$Canvas$RoundRect = F4(
	function (a, b, c, d) {
		return {$: 'RoundRect', a: a, b: b, c: c, d: d};
	});
var $linsyking$elm_canvas$Canvas$roundRect = F4(
	function (pos, width, height, radii) {
		return A4($linsyking$elm_canvas$Canvas$Internal$Canvas$RoundRect, pos, width, height, radii);
	});
var $author$project$SceneProtos$Game$Components$Bullet$Model$view = F3(
	function (env, data, basedata) {
		var gd = env.globalData;
		return _Utils_Tuple2(
			A2(
				$linsyking$elm_canvas$Canvas$shapes,
				_List_fromArray(
					[
						$linsyking$elm_canvas$Canvas$Settings$fill(data.color)
					]),
				_List_fromArray(
					[
						A4(
						$linsyking$elm_canvas$Canvas$roundRect,
						A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$posToReal, gd, basedata.position),
						A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$lengthToReal, gd, 20),
						A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$lengthToReal, gd, 10),
						_List_fromArray(
							[10, 10, 10, 10]))
					])),
			0);
	});
var $author$project$SceneProtos$Game$Components$Bullet$Model$componentcon = {init: $author$project$SceneProtos$Game$Components$Bullet$Model$init, matcher: $author$project$SceneProtos$Game$Components$Bullet$Model$matcher, update: $author$project$SceneProtos$Game$Components$Bullet$Model$update, updaterec: $author$project$SceneProtos$Game$Components$Bullet$Model$updaterec, view: $author$project$SceneProtos$Game$Components$Bullet$Model$view};
var $linsyking$messenger_core$Messenger$Component$Component$genComponent = function (concomp) {
	return $linsyking$messenger_core$Messenger$GeneralModel$abstract(concomp);
};
var $author$project$SceneProtos$Game$Components$Bullet$Model$component = $linsyking$messenger_core$Messenger$Component$Component$genComponent($author$project$SceneProtos$Game$Components$Bullet$Model$componentcon);
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$SceneProtos$Game$Main$Model$genUID = function (xs) {
	return 1 + A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$map,
				function (x) {
					return $linsyking$messenger_core$Messenger$GeneralModel$unroll(x).baseData.id;
				},
				xs)));
};
var $author$project$SceneProtos$Game$Main$Model$handleComponentMsg = F3(
	function (env, compmsg, data) {
		if (compmsg.$ === 'SOMMsg') {
			var som = compmsg.a;
			return _Utils_Tuple3(
				data,
				_List_fromArray(
					[
						$linsyking$messenger_core$Messenger$GeneralModel$Parent(
						$linsyking$messenger_core$Messenger$GeneralModel$SOMMsg(som))
					]),
				env);
		} else {
			var msg = compmsg.a;
			switch (msg.$) {
				case 'NewBulletMsg':
					var initData = msg.a;
					var objs = data.components;
					var newBulletInitMsg = $author$project$SceneProtos$Game$Components$ComponentBase$BulletInitMsg(
						{
							color: initData.color,
							id: $author$project$SceneProtos$Game$Main$Model$genUID(objs),
							position: initData.position,
							velocity: initData.velocity
						});
					var newBullet = A2($author$project$SceneProtos$Game$Components$Bullet$Model$component, newBulletInitMsg, env);
					var newObjs = A2($elm$core$List$cons, newBullet, objs);
					return _Utils_Tuple3(
						_Utils_update(
							data,
							{components: newObjs}),
						_List_Nil,
						env);
				case 'GameOverMsg':
					var cd = env.commonData;
					return _Utils_Tuple3(
						data,
						_List_Nil,
						_Utils_update(
							env,
							{
								commonData: _Utils_update(
									cd,
									{gameOver: true})
							}));
				default:
					return _Utils_Tuple3(data, _List_Nil, env);
			}
		}
	});
var $linsyking$messenger_core$Messenger$Layer$Layer$handleComponentMsgs = F5(
	function (lastEnv, compMsgs, lastData, lastLayerMsgs, handler) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (cm, _v0) {
					var d = _v0.a;
					var m = _v0.b;
					var e = _v0.c;
					var _v1 = A3(handler, e, cm, d);
					var d2 = _v1.a;
					var m2 = _v1.b;
					var e2 = _v1.c;
					return _Utils_Tuple3(
						d2,
						_Utils_ap(m, m2),
						e2);
				}),
			_Utils_Tuple3(lastData, lastLayerMsgs, lastEnv),
			compMsgs);
	});
var $author$project$SceneProtos$Game$Components$ComponentBase$EnemyInitMsg = function (a) {
	return {$: 'EnemyInitMsg', a: a};
};
var $author$project$SceneProtos$Game$Components$Enemy$Init$InitData = F6(
	function (id, velocity, position, sinF, sinA, bulletInterval) {
		return {bulletInterval: bulletInterval, id: id, position: position, sinA: sinA, sinF: sinF, velocity: velocity};
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $author$project$SceneProtos$Game$Components$Enemy$Model$init = F2(
	function (env, initMsg) {
		if (initMsg.$ === 'EnemyInitMsg') {
			var msg = initMsg.a;
			return _Utils_Tuple2(
				{interval: msg.bulletInterval, sina: msg.sinA, sinf: msg.sinF, timer: 15},
				{
					alive: true,
					collisionBox: _Utils_Tuple2(150, 50),
					id: msg.id,
					position: msg.position,
					ty: 'Enemy',
					velocity: msg.velocity
				});
		} else {
			return _Utils_Tuple2(
				{interval: 0, sina: 0, sinf: 0, timer: 15},
				$author$project$SceneProtos$Game$Components$ComponentBase$emptyBaseData);
		}
	});
var $author$project$SceneProtos$Game$Components$Enemy$Model$matcher = F3(
	function (data, basedata, tar) {
		return _Utils_eq(
			tar,
			$author$project$SceneProtos$Game$Components$ComponentBase$Type(basedata.ty)) || _Utils_eq(
			tar,
			$author$project$SceneProtos$Game$Components$ComponentBase$Id(basedata.id));
	});
var $author$project$SceneProtos$Game$Components$Bullet$Init$CreateInitData = F3(
	function (velocity, position, color) {
		return {color: color, position: position, velocity: velocity};
	});
var $author$project$SceneProtos$Game$Components$ComponentBase$NewBulletMsg = function (a) {
	return {$: 'NewBulletMsg', a: a};
};
var $linsyking$messenger_core$Messenger$GeneralModel$OtherMsg = function (a) {
	return {$: 'OtherMsg', a: a};
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Basics$sin = _Basics_sin;
var $author$project$SceneProtos$Game$Components$Enemy$Model$update = F4(
	function (env, evnt, data, basedata) {
		if (evnt.$ === 'Tick') {
			var dt = evnt.a;
			var velx = $elm$core$Basics$sin(env.globalData.sceneStartTime / data.sinf) * data.sina;
			var intModify = A2(
				$elm$core$Basics$max,
				100,
				$elm$core$Basics$floor(env.commonData.score / 2));
			var _v1 = basedata.position;
			var x = _v1.a;
			var y = _v1.b;
			var newEnemy = _Utils_update(
				basedata,
				{
					position: _Utils_Tuple2(x + (basedata.velocity * dt), y + ((velx * basedata.velocity) * dt))
				});
			return (_Utils_cmp(data.timer, data.interval - intModify) > -1) ? _Utils_Tuple3(
				_Utils_Tuple2(
					_Utils_update(
						data,
						{timer: 0}),
					newEnemy),
				_List_fromArray(
					[
						$linsyking$messenger_core$Messenger$GeneralModel$Parent(
						$linsyking$messenger_core$Messenger$GeneralModel$OtherMsg(
							$author$project$SceneProtos$Game$Components$ComponentBase$NewBulletMsg(
								A3(
									$author$project$SceneProtos$Game$Components$Bullet$Init$CreateInitData,
									-1,
									_Utils_Tuple2(x - 60, y + 5),
									$avh4$elm_color$Color$red))))
					]),
				_Utils_Tuple2(env, false)) : _Utils_Tuple3(
				_Utils_Tuple2(
					_Utils_update(
						data,
						{timer: data.timer + dt}),
					newEnemy),
				_List_Nil,
				_Utils_Tuple2(env, false));
		} else {
			return _Utils_Tuple3(
				_Utils_Tuple2(data, basedata),
				_List_Nil,
				_Utils_Tuple2(env, false));
		}
	});
var $author$project$SceneProtos$Game$Components$Enemy$Model$updaterec = F4(
	function (env, msg, data, basedata) {
		if ((msg.$ === 'CollisionMsg') && (msg.a === 'Bullet')) {
			var cd = env.commonData;
			return _Utils_Tuple3(
				_Utils_Tuple2(
					data,
					_Utils_update(
						basedata,
						{alive: false})),
				_List_Nil,
				_Utils_update(
					env,
					{
						commonData: _Utils_update(
							cd,
							{score: cd.score + 1})
					}));
		} else {
			return _Utils_Tuple3(
				_Utils_Tuple2(data, basedata),
				_List_Nil,
				env);
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $linsyking$messenger_core$Messenger$Resources$Base$igetSprite = F2(
	function (name, dst) {
		return A2($elm$core$Dict$get, name, dst);
	});
var $linsyking$elm_canvas$Canvas$Texture$dimensions = function (texture) {
	if (texture.$ === 'TImage') {
		var image = texture.a;
		return {height: image.height, width: image.width};
	} else {
		var data = texture.a;
		return {height: data.height, width: data.width};
	}
};
var $linsyking$elm_canvas$Canvas$Settings$Advanced$Scale = F2(
	function (a, b) {
		return {$: 'Scale', a: a, b: b};
	});
var $linsyking$elm_canvas$Canvas$Settings$Advanced$scale = $linsyking$elm_canvas$Canvas$Settings$Advanced$Scale;
var $linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableTexture = F2(
	function (a, b) {
		return {$: 'DrawableTexture', a: a, b: b};
	});
var $linsyking$elm_canvas$Canvas$texture = F3(
	function (settings, p, t) {
		return A2(
			$linsyking$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			$linsyking$elm_canvas$Canvas$Internal$Canvas$Renderable(
				{
					commands: _List_Nil,
					drawOp: $linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
					drawable: A2($linsyking$elm_canvas$Canvas$Internal$Canvas$DrawableTexture, p, t)
				}));
	});
var $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommands = function (a) {
	return {$: 'SettingCommands', a: a};
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn = F2(
	function (name, args) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('function')),
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string(name)),
					_Utils_Tuple2(
					'args',
					A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, args))
				]));
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$rotate = function (angle) {
	return A2(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
		'rotate',
		_List_fromArray(
			[
				$elm$json$Json$Encode$float(angle)
			]));
};
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$scale = F2(
	function (x, y) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'scale',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$transform = F6(
	function (a, b, c, d, e, f) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'transform',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(a),
					$elm$json$Json$Encode$float(b),
					$elm$json$Json$Encode$float(c),
					$elm$json$Json$Encode$float(d),
					$elm$json$Json$Encode$float(e),
					$elm$json$Json$Encode$float(f)
				]));
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$translate = F2(
	function (x, y) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'translate',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $linsyking$elm_canvas$Canvas$Settings$Advanced$transform = function (transforms) {
	return $linsyking$elm_canvas$Canvas$Internal$Canvas$SettingCommands(
		A2(
			$elm$core$List$map,
			function (t) {
				switch (t.$) {
					case 'Rotate':
						var angle = t.a;
						return $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$rotate(angle);
					case 'Scale':
						var x = t.a;
						var y = t.b;
						return A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$scale, x, y);
					case 'Translate':
						var x = t.a;
						var y = t.b;
						return A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$translate, x, y);
					default:
						var m11 = t.a.m11;
						var m12 = t.a.m12;
						var m21 = t.a.m21;
						var m22 = t.a.m22;
						var dx = t.a.dx;
						var dy = t.a.dy;
						return A6($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$transform, m11, m12, m21, m22, dx, dy);
				}
			},
			transforms));
};
var $linsyking$elm_canvas$Canvas$Settings$Advanced$Translate = F2(
	function (a, b) {
		return {$: 'Translate', a: a, b: b};
	});
var $linsyking$elm_canvas$Canvas$Settings$Advanced$translate = $linsyking$elm_canvas$Canvas$Settings$Advanced$Translate;
var $linsyking$messenger_core$Messenger$Render$Sprite$renderSprite_ = F5(
	function (gd, settings, position, _v0, t) {
		var w = _v0.a;
		var h = _v0.b;
		var text_dim = $linsyking$elm_canvas$Canvas$Texture$dimensions(t);
		var text_height = text_dim.height;
		var text_width = text_dim.width;
		var rw = A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$lengthToReal, gd, w);
		var width_s = rw / text_width;
		var rh = A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$lengthToReal, gd, h);
		var height_s = rh / text_height;
		var _v1 = A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$posToReal, gd, position);
		var newx = _v1.a;
		var newy = _v1.b;
		return ((w > 0) && (h > 0)) ? A3(
			$linsyking$elm_canvas$Canvas$texture,
			A2(
				$elm$core$List$cons,
				$linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
					_List_fromArray(
						[
							A2($linsyking$elm_canvas$Canvas$Settings$Advanced$translate, newx, newy),
							A2($linsyking$elm_canvas$Canvas$Settings$Advanced$scale, width_s, height_s)
						])),
				settings),
			_Utils_Tuple2(0, 0),
			t) : (((w > 0) && (h <= 0)) ? A3(
			$linsyking$elm_canvas$Canvas$texture,
			A2(
				$elm$core$List$cons,
				$linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
					_List_fromArray(
						[
							A2($linsyking$elm_canvas$Canvas$Settings$Advanced$translate, newx, newy),
							A2($linsyking$elm_canvas$Canvas$Settings$Advanced$scale, width_s, width_s)
						])),
				settings),
			_Utils_Tuple2(0, 0),
			t) : (((w <= 0) && (h > 0)) ? A3(
			$linsyking$elm_canvas$Canvas$texture,
			A2(
				$elm$core$List$cons,
				$linsyking$elm_canvas$Canvas$Settings$Advanced$transform(
					_List_fromArray(
						[
							A2($linsyking$elm_canvas$Canvas$Settings$Advanced$translate, newx, newy),
							A2($linsyking$elm_canvas$Canvas$Settings$Advanced$scale, height_s, height_s)
						])),
				settings),
			_Utils_Tuple2(0, 0),
			t) : A3(
			$linsyking$elm_canvas$Canvas$texture,
			settings,
			_Utils_Tuple2(newx, newy),
			t)));
	});
var $linsyking$messenger_core$Messenger$Render$Sprite$renderSprite = F5(
	function (gd, settings, position, size, name) {
		var dst = gd.internalData.sprites;
		var _v0 = A2($linsyking$messenger_core$Messenger$Resources$Base$igetSprite, name, dst);
		if (_v0.$ === 'Just') {
			var t = _v0.a;
			return A5($linsyking$messenger_core$Messenger$Render$Sprite$renderSprite_, gd, settings, position, size, t);
		} else {
			return $linsyking$elm_canvas$Canvas$empty;
		}
	});
var $author$project$SceneProtos$Game$Components$Enemy$Model$view = F3(
	function (env, data, basedata) {
		return _Utils_Tuple2(
			A5($linsyking$messenger_core$Messenger$Render$Sprite$renderSprite, env.globalData, _List_Nil, basedata.position, basedata.collisionBox, 'enemy'),
			0);
	});
var $author$project$SceneProtos$Game$Components$Enemy$Model$componentcon = {init: $author$project$SceneProtos$Game$Components$Enemy$Model$init, matcher: $author$project$SceneProtos$Game$Components$Enemy$Model$matcher, update: $author$project$SceneProtos$Game$Components$Enemy$Model$update, updaterec: $author$project$SceneProtos$Game$Components$Enemy$Model$updaterec, view: $author$project$SceneProtos$Game$Components$Enemy$Model$view};
var $author$project$SceneProtos$Game$Components$Enemy$Model$component = $linsyking$messenger_core$Messenger$Component$Component$genComponent($author$project$SceneProtos$Game$Components$Enemy$Model$componentcon);
var $elm$core$Basics$cos = _Basics_cos;
var $elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$random$Random$next = function (_v0) {
	var state0 = _v0.a;
	var incr = _v0.b;
	return A2($elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm$random$Random$peel = function (_v0) {
	var state = _v0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var $elm$random$Random$int = F2(
	function (a, b) {
		return $elm$random$Random$Generator(
			function (seed0) {
				var _v0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _v0.a;
				var hi = _v0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & $elm$random$Random$peel(seed0)) >>> 0) + lo,
						$elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = $elm$random$Random$peel(seed);
							var seedN = $elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var $linsyking$messenger_extra$Messenger$Misc$RNG$genInt = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	return A2($elm$random$Random$int, a, b);
};
var $elm$random$Random$initialSeed = function (x) {
	var _v0 = $elm$random$Random$next(
		A2($elm$random$Random$Seed, 0, 1013904223));
	var state1 = _v0.a;
	var incr = _v0.b;
	var state2 = (state1 + x) >>> 0;
	return $elm$random$Random$next(
		A2($elm$random$Random$Seed, state2, incr));
};
var $linsyking$messenger_extra$Messenger$Misc$RNG$seed = function (t) {
	return $elm$random$Random$initialSeed(t);
};
var $elm$random$Random$step = F2(
	function (_v0, seed) {
		var generator = _v0.a;
		return generator(seed);
	});
var $linsyking$messenger_extra$Messenger$Misc$RNG$genRandomInt = F2(
	function (t, _v0) {
		var a = _v0.a;
		var b = _v0.b;
		return A2(
			$elm$random$Random$step,
			$linsyking$messenger_extra$Messenger$Misc$RNG$genInt(
				_Utils_Tuple2(a, b)),
			$linsyking$messenger_extra$Messenger$Misc$RNG$seed(t)).a;
	});
var $elm$core$Basics$pi = _Basics_pi;
var $author$project$SceneProtos$Game$Main$Model$addEnemy = F2(
	function (env, comps) {
		if (A2(
			$elm$core$List$any,
			function (comp) {
				return $linsyking$messenger_core$Messenger$GeneralModel$unroll(comp).matcher(
					$author$project$SceneProtos$Game$Components$ComponentBase$Type('Enemy'));
			},
			comps)) {
			return comps;
		} else {
			var fixp = function (x) {
				return (2 * $elm$core$Basics$pi) * (x - $elm$core$Basics$floor(x));
			}(env.globalData.globalStartTime / (240 * $elm$core$Basics$pi));
			var rangep = fixp + A2(
				$linsyking$messenger_extra$Messenger$Misc$RNG$genRandomInt,
				env.globalData.globalStartTime,
				_Utils_Tuple2(-50, 50));
			return A2(
				$elm$core$List$cons,
				A2(
					$author$project$SceneProtos$Game$Components$Enemy$Model$component,
					$author$project$SceneProtos$Game$Components$ComponentBase$EnemyInitMsg(
						A6(
							$author$project$SceneProtos$Game$Components$Enemy$Init$InitData,
							1,
							(-1) / 10,
							_Utils_Tuple2(
								1920,
								150 * (3 - $elm$core$Basics$cos(rangep))),
							120,
							30,
							200)),
					env),
				comps);
		}
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $author$project$SceneProtos$Game$Main$Model$removeDead = $elm$core$List$filter(
	function (x) {
		return $linsyking$messenger_core$Messenger$GeneralModel$unroll(x).baseData.alive;
	});
var $author$project$SceneProtos$Game$Main$Model$removeOutOfBound = $elm$core$List$filter(
	function (p) {
		var _v0 = $linsyking$messenger_core$Messenger$GeneralModel$unroll(p).baseData.position;
		var x = _v0.a;
		return (_Utils_cmp(x, -200) > 0) && (x < 2000);
	});
var $author$project$SceneProtos$Game$Main$Model$updateBasic = F3(
	function (env, evt, data) {
		return _Utils_Tuple3(
			_Utils_update(
				data,
				{
					components: A2(
						$author$project$SceneProtos$Game$Main$Model$addEnemy,
						env,
						$author$project$SceneProtos$Game$Main$Model$removeOutOfBound(
							$author$project$SceneProtos$Game$Main$Model$removeDead(data.components)))
				}),
			_List_Nil,
			_Utils_Tuple2(env, false));
	});
var $linsyking$messenger_core$Messenger$Component$Component$updateComponentsWithBlock = F4(
	function (env, evt, block, comps) {
		return block ? _Utils_Tuple3(
			comps,
			_List_Nil,
			_Utils_Tuple2(env, true)) : A3($linsyking$messenger_core$Messenger$Recursion$updateObjects, env, evt, comps);
	});
var $linsyking$messenger_core$Messenger$Recursion$updateObjectsWithTarget = F3(
	function (env, msgs, objs) {
		return A3(
			$linsyking$messenger_core$Messenger$Recursion$updateRemain,
			env,
			_Utils_Tuple2(msgs, _List_Nil),
			objs);
	});
var $linsyking$messenger_core$Messenger$Component$Component$updateComponentsWithTarget = F3(
	function (env, msgs, comps) {
		return A3($linsyking$messenger_core$Messenger$Recursion$updateObjectsWithTarget, env, msgs, comps);
	});
var $author$project$SceneProtos$Game$Main$Model$update = F3(
	function (env, evt, data) {
		if (!env.commonData.gameOver) {
			var _v0 = A3($author$project$SceneProtos$Game$Main$Model$updateBasic, env, evt, data);
			var data1 = _v0.a;
			var lmsg1 = _v0.b;
			var _v1 = _v0.c;
			var env1 = _v1.a;
			var block1 = _v1.b;
			var _v2 = A4($linsyking$messenger_core$Messenger$Component$Component$updateComponentsWithBlock, env1, evt, block1, data1.components);
			var comps1 = _v2.a;
			var cmsgs1 = _v2.b;
			var _v3 = _v2.c;
			var env2 = _v3.a;
			var block2 = _v3.b;
			var _v4 = A3(
				$author$project$SceneProtos$Game$Main$Model$collisionDistributor,
				env2,
				evt,
				_Utils_update(
					data1,
					{components: comps1}));
			var data2 = _v4.a;
			var _v5 = _v4.b;
			var lmsg2 = _v5.a;
			var tocmsg = _v5.b;
			var env3 = _v4.c;
			var _v6 = A3($linsyking$messenger_core$Messenger$Component$Component$updateComponentsWithTarget, env3, tocmsg, data2.components);
			var comps2 = _v6.a;
			var cmsgs2 = _v6.b;
			var env4 = _v6.c;
			var _v7 = A5(
				$linsyking$messenger_core$Messenger$Layer$Layer$handleComponentMsgs,
				env4,
				_Utils_ap(cmsgs2, cmsgs1),
				_Utils_update(
					data2,
					{components: comps2}),
				_Utils_ap(lmsg1, lmsg2),
				$author$project$SceneProtos$Game$Main$Model$handleComponentMsg);
			var data3 = _v7.a;
			var lmsgs3 = _v7.b;
			var env5 = _v7.c;
			return _Utils_Tuple3(
				data3,
				lmsgs3,
				_Utils_Tuple2(env5, block2));
		} else {
			return _Utils_Tuple3(
				data,
				_List_Nil,
				_Utils_Tuple2(env, false));
		}
	});
var $author$project$SceneProtos$Game$Main$Model$updaterec = F3(
	function (env, msg, data) {
		return _Utils_Tuple3(data, _List_Nil, env);
	});
var $linsyking$messenger_core$Messenger$Component$Component$genComponentsRenderList = F2(
	function (env, compls) {
		return A2(
			$elm$core$List$map,
			function (comp) {
				return $linsyking$messenger_core$Messenger$GeneralModel$unroll(comp).view(env);
			},
			compls);
	});
var $elm$core$List$sortBy = _List_sortBy;
var $linsyking$messenger_core$Messenger$Component$Component$viewComponentsRenderList = function (previews) {
	return A2(
		$linsyking$elm_canvas$Canvas$group,
		_List_Nil,
		A2(
			$elm$core$List$map,
			function (_v0) {
				var r = _v0.a;
				return r;
			},
			A2(
				$elm$core$List$sortBy,
				function (_v1) {
					var n = _v1.b;
					return n;
				},
				previews)));
};
var $linsyking$messenger_core$Messenger$Component$Component$viewComponents = F2(
	function (env, compls) {
		return $linsyking$messenger_core$Messenger$Component$Component$viewComponentsRenderList(
			A2($linsyking$messenger_core$Messenger$Component$Component$genComponentsRenderList, env, compls));
	});
var $author$project$SceneProtos$Game$Main$Model$view = F2(
	function (env, data) {
		var gameOverVE = env.commonData.gameOver ? _List_fromArray(
			[
				$linsyking$elm_canvas$Canvas$Settings$Advanced$filter('blur(5px)')
			]) : _List_Nil;
		return A2(
			$linsyking$elm_canvas$Canvas$group,
			gameOverVE,
			_List_fromArray(
				[
					A2($linsyking$messenger_core$Messenger$Component$Component$viewComponents, env, data.components)
				]));
	});
var $author$project$SceneProtos$Game$Main$Model$layercon = {init: $author$project$SceneProtos$Game$Main$Model$init, matcher: $author$project$SceneProtos$Game$Main$Model$matcher, update: $author$project$SceneProtos$Game$Main$Model$update, updaterec: $author$project$SceneProtos$Game$Main$Model$updaterec, view: $author$project$SceneProtos$Game$Main$Model$view};
var $author$project$SceneProtos$Game$Main$Model$layer = $linsyking$messenger_core$Messenger$Layer$Layer$genLayer($author$project$SceneProtos$Game$Main$Model$layercon);
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$SceneProtos$Game$Model$init = F2(
	function (env, data) {
		var levelName = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (x) {
					return x.level;
				},
				data));
		var cd = A2($author$project$SceneProtos$Game$Model$commonDataInit, env, data);
		var envcd = A2($linsyking$messenger_core$Messenger$Base$addCommonData, cd, env);
		var comps = A2(
			$elm$core$List$map,
			function (x) {
				return x(envcd);
			},
			function () {
				if (data.$ === 'Just') {
					var d = data.a;
					return d.objects;
				} else {
					return _List_Nil;
				}
			}());
		return {
			commonData: cd,
			layers: _List_fromArray(
				[
					A2(
					$author$project$SceneProtos$Game$Main$Model$layer,
					$author$project$SceneProtos$Game$SceneBase$MainInitData(
						{components: comps}),
					envcd),
					A2(
					$author$project$SceneProtos$Game$FrontLayer$Model$layer,
					$author$project$SceneProtos$Game$SceneBase$FrontInitData(levelName),
					envcd)
				]),
			renderSettings: _List_Nil
		};
	});
var $linsyking$messenger_core$Messenger$Scene$LayeredScene$initCompose = F4(
	function (pinit, linit, env, msg) {
		return A2(
			pinit,
			env,
			A2(linit, env, msg));
	});
var $author$project$SceneProtos$Game$Model$settings = F3(
	function (_v0, _v1, _v2) {
		return _List_Nil;
	});
var $author$project$SceneProtos$Game$Model$genScene = function (initd) {
	return A2(
		$linsyking$messenger_core$Messenger$Scene$LayeredScene$genLayeredScene,
		A2($linsyking$messenger_core$Messenger$Scene$LayeredScene$initCompose, $author$project$SceneProtos$Game$Model$init, initd),
		$author$project$SceneProtos$Game$Model$settings);
};
var $author$project$SceneProtos$Game$Components$Ship$Init$InitData = F3(
	function (id, position, bulletInterval) {
		return {bulletInterval: bulletInterval, id: id, position: position};
	});
var $author$project$SceneProtos$Game$Components$ComponentBase$ShipInitMsg = function (a) {
	return {$: 'ShipInitMsg', a: a};
};
var $author$project$SceneProtos$Game$Components$Ship$Model$init = F2(
	function (env, initMsg) {
		if (initMsg.$ === 'ShipInitMsg') {
			var msg = initMsg.a;
			return _Utils_Tuple2(
				{interval: msg.bulletInterval, timer: 15},
				{
					alive: true,
					collisionBox: _Utils_Tuple2(150, 50),
					id: msg.id,
					position: msg.position,
					ty: 'Ship',
					velocity: 0
				});
		} else {
			return _Utils_Tuple2(
				{interval: 0, timer: 15},
				$author$project$SceneProtos$Game$Components$ComponentBase$emptyBaseData);
		}
	});
var $author$project$SceneProtos$Game$Components$Ship$Model$matcher = F3(
	function (data, basedata, tar) {
		return _Utils_eq(
			tar,
			$author$project$SceneProtos$Game$Components$ComponentBase$Type(basedata.ty)) || _Utils_eq(
			tar,
			$author$project$SceneProtos$Game$Components$ComponentBase$Id(basedata.id));
	});
var $linsyking$messenger_extra$Messenger$Misc$KeyCode$arrowDown = 40;
var $linsyking$messenger_extra$Messenger$Misc$KeyCode$arrowUp = 38;
var $avh4$elm_color$Color$blue = A4($avh4$elm_color$Color$RgbaSpace, 52 / 255, 101 / 255, 164 / 255, 1.0);
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Set$isEmpty = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$isEmpty(dict);
};
var $author$project$SceneProtos$Game$Components$Ship$Model$moveShip = F2(
	function (d, dt) {
		var _v0 = d.position;
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_update(
			d,
			{
				position: _Utils_Tuple2(x, y + (d.velocity * dt))
			});
	});
var $author$project$SceneProtos$Game$Components$Ship$Model$update = F4(
	function (env, evnt, data, basedata) {
		if (basedata.alive) {
			switch (evnt.$) {
				case 'Tick':
					var dt = evnt.a;
					if (_Utils_cmp(data.timer, data.interval) > -1) {
						var _v1 = basedata.position;
						var x = _v1.a;
						var y = _v1.b;
						return _Utils_Tuple3(
							_Utils_Tuple2(
								_Utils_update(
									data,
									{timer: 0}),
								A2($author$project$SceneProtos$Game$Components$Ship$Model$moveShip, basedata, dt)),
							_List_fromArray(
								[
									$linsyking$messenger_core$Messenger$GeneralModel$Parent(
									$linsyking$messenger_core$Messenger$GeneralModel$OtherMsg(
										$author$project$SceneProtos$Game$Components$ComponentBase$NewBulletMsg(
											A3(
												$author$project$SceneProtos$Game$Components$Bullet$Init$CreateInitData,
												1,
												_Utils_Tuple2(x + 170, y + 20),
												$avh4$elm_color$Color$blue))))
								]),
							_Utils_Tuple2(env, false));
					} else {
						return _Utils_Tuple3(
							_Utils_Tuple2(
								_Utils_update(
									data,
									{timer: data.timer + dt}),
								A2($author$project$SceneProtos$Game$Components$Ship$Model$moveShip, basedata, dt)),
							_List_Nil,
							_Utils_Tuple2(env, false));
					}
				case 'KeyDown':
					var key = evnt.a;
					var vModify = A2($elm$core$Basics$max, 3 / 2, (env.commonData.score * 1) / 60);
					var v = 1 / 4;
					return _Utils_eq(key, $linsyking$messenger_extra$Messenger$Misc$KeyCode$arrowDown) ? _Utils_Tuple3(
						_Utils_Tuple2(
							data,
							_Utils_update(
								basedata,
								{velocity: v + vModify})),
						_List_Nil,
						_Utils_Tuple2(env, false)) : (_Utils_eq(key, $linsyking$messenger_extra$Messenger$Misc$KeyCode$arrowUp) ? _Utils_Tuple3(
						_Utils_Tuple2(
							data,
							_Utils_update(
								basedata,
								{velocity: (-v) - vModify})),
						_List_Nil,
						_Utils_Tuple2(env, false)) : _Utils_Tuple3(
						_Utils_Tuple2(data, basedata),
						_List_Nil,
						_Utils_Tuple2(env, false)));
				case 'KeyUp':
					var key = evnt.a;
					return ((_Utils_eq(key, $linsyking$messenger_extra$Messenger$Misc$KeyCode$arrowDown) || _Utils_eq(key, $linsyking$messenger_extra$Messenger$Misc$KeyCode$arrowUp)) && $elm$core$Set$isEmpty(env.globalData.pressedKeys)) ? _Utils_Tuple3(
						_Utils_Tuple2(
							data,
							_Utils_update(
								basedata,
								{velocity: 0})),
						_List_Nil,
						_Utils_Tuple2(env, false)) : _Utils_Tuple3(
						_Utils_Tuple2(data, basedata),
						_List_Nil,
						_Utils_Tuple2(env, false));
				default:
					return _Utils_Tuple3(
						_Utils_Tuple2(data, basedata),
						_List_Nil,
						_Utils_Tuple2(env, false));
			}
		} else {
			return _Utils_Tuple3(
				_Utils_Tuple2(data, basedata),
				_List_Nil,
				_Utils_Tuple2(env, false));
		}
	});
var $author$project$SceneProtos$Game$Components$ComponentBase$GameOverMsg = {$: 'GameOverMsg'};
var $author$project$SceneProtos$Game$Components$Ship$Model$updaterec = F4(
	function (env, msg, data, basedata) {
		if (msg.$ === 'CollisionMsg') {
			return _Utils_Tuple3(
				_Utils_Tuple2(
					data,
					_Utils_update(
						basedata,
						{alive: false})),
				_List_fromArray(
					[
						$linsyking$messenger_core$Messenger$GeneralModel$Parent(
						$linsyking$messenger_core$Messenger$GeneralModel$OtherMsg($author$project$SceneProtos$Game$Components$ComponentBase$GameOverMsg))
					]),
				env);
		} else {
			return _Utils_Tuple3(
				_Utils_Tuple2(data, basedata),
				_List_Nil,
				env);
		}
	});
var $author$project$SceneProtos$Game$Components$Ship$Model$view = F3(
	function (env, data, basedata) {
		return _Utils_Tuple2(
			A5($linsyking$messenger_core$Messenger$Render$Sprite$renderSprite, env.globalData, _List_Nil, basedata.position, basedata.collisionBox, 'ship'),
			0);
	});
var $author$project$SceneProtos$Game$Components$Ship$Model$componentcon = {init: $author$project$SceneProtos$Game$Components$Ship$Model$init, matcher: $author$project$SceneProtos$Game$Components$Ship$Model$matcher, update: $author$project$SceneProtos$Game$Components$Ship$Model$update, updaterec: $author$project$SceneProtos$Game$Components$Ship$Model$updaterec, view: $author$project$SceneProtos$Game$Components$Ship$Model$view};
var $author$project$SceneProtos$Game$Components$Ship$Model$component = $linsyking$messenger_core$Messenger$Component$Component$genComponent($author$project$SceneProtos$Game$Components$Ship$Model$componentcon);
var $author$project$Scenes$Level1$Model$initData = F2(
	function (env, msg) {
		return {
			level: 'Level1',
			objects: _List_fromArray(
				[
					$author$project$SceneProtos$Game$Components$Ship$Model$component(
					$author$project$SceneProtos$Game$Components$ComponentBase$ShipInitMsg(
						A3(
							$author$project$SceneProtos$Game$Components$Ship$Init$InitData,
							0,
							_Utils_Tuple2(100, 500),
							200))),
					$author$project$SceneProtos$Game$Components$Enemy$Model$component(
					$author$project$SceneProtos$Game$Components$ComponentBase$EnemyInitMsg(
						A6(
							$author$project$SceneProtos$Game$Components$Enemy$Init$InitData,
							1,
							(-1) / 10,
							_Utils_Tuple2(1920, 800),
							120,
							30,
							200)))
				])
		};
	});
var $author$project$Scenes$Level1$Model$init = F2(
	function (env, msg) {
		return $elm$core$Maybe$Just(
			A2($author$project$Scenes$Level1$Model$initData, env, msg));
	});
var $author$project$Scenes$Level1$Model$scene = $author$project$SceneProtos$Game$Model$genScene($author$project$Scenes$Level1$Model$init);
var $author$project$Scenes$Level2$Model$initData = F2(
	function (env, msg) {
		return {
			level: 'Level2',
			objects: _List_fromArray(
				[
					$author$project$SceneProtos$Game$Components$Ship$Model$component(
					$author$project$SceneProtos$Game$Components$ComponentBase$ShipInitMsg(
						A3(
							$author$project$SceneProtos$Game$Components$Ship$Init$InitData,
							0,
							_Utils_Tuple2(100, 500),
							250))),
					$author$project$SceneProtos$Game$Components$Enemy$Model$component(
					$author$project$SceneProtos$Game$Components$ComponentBase$EnemyInitMsg(
						A6(
							$author$project$SceneProtos$Game$Components$Enemy$Init$InitData,
							1,
							(-1) / 8,
							_Utils_Tuple2(1920, 800),
							120,
							30,
							200)))
				])
		};
	});
var $author$project$Scenes$Level2$Model$init = F2(
	function (env, msg) {
		return $elm$core$Maybe$Just(
			A2($author$project$Scenes$Level2$Model$initData, env, msg));
	});
var $author$project$Scenes$Level2$Model$scene = $author$project$SceneProtos$Game$Model$genScene($author$project$Scenes$Level2$Model$init);
var $author$project$Scenes$AllScenes$allScenes = _List_fromArray(
	[
		_Utils_Tuple2('Level1', $author$project$Scenes$Level1$Model$scene),
		_Utils_Tuple2('Level2', $author$project$Scenes$Level2$Model$scene)
	]);
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $linsyking$messenger_core$Messenger$Audio$Internal$getAudio = function (repo) {
	return A2(
		$elm$core$List$map,
		function (pa) {
			return pa.audio;
		},
		repo.playing);
};
var $MartinSStewart$elm_audio$Audio$Group = function (a) {
	return {$: 'Group', a: a};
};
var $MartinSStewart$elm_audio$Audio$group = function (audios) {
	return $MartinSStewart$elm_audio$Audio$Group(audios);
};
var $MartinSStewart$elm_audio$Audio$Effect = function (a) {
	return {$: 'Effect', a: a};
};
var $MartinSStewart$elm_audio$Audio$ScaleVolume = function (a) {
	return {$: 'ScaleVolume', a: a};
};
var $MartinSStewart$elm_audio$Audio$scaleVolume = F2(
	function (scaleBy, audio_) {
		return $MartinSStewart$elm_audio$Audio$Effect(
			{
				audio: audio_,
				effectType: $MartinSStewart$elm_audio$Audio$ScaleVolume(
					{
						scaleBy: A2($elm$core$Basics$max, 0, scaleBy)
					})
			});
	});
var $linsyking$messenger_core$Messenger$UI$View$audio = F2(
	function (_v0, model) {
		return A2(
			$MartinSStewart$elm_audio$Audio$scaleVolume,
			model.currentGlobalData.volume,
			$MartinSStewart$elm_audio$Audio$group(
				$linsyking$messenger_core$Messenger$Audio$Internal$getAudio(model.currentGlobalData.internalData.audioRepo)));
	});
var $MartinSStewart$elm_audio$Audio$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioData = function (a) {
	return {$: 'AudioData', a: a};
};
var $MartinSStewart$elm_audio$Audio$audioData = function (_v0) {
	var model = _v0.a;
	return $MartinSStewart$elm_audio$Audio$AudioData(
		{sourceData: model.sourceData});
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $MartinSStewart$elm_audio$Audio$getUserModel = function (_v0) {
	var model = _v0.a;
	return model.userModel;
};
var $MartinSStewart$elm_audio$Audio$Model = function (a) {
	return {$: 'Model', a: a};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $MartinSStewart$elm_audio$Audio$audioSourceBufferId = function (_v0) {
	var audioSource = _v0.a;
	return audioSource.bufferId;
};
var $ianmackenzie$elm_units$Duration$inSeconds = function (_v0) {
	var numSeconds = _v0.a;
	return numSeconds;
};
var $ianmackenzie$elm_units$Duration$inMilliseconds = function (duration) {
	return $ianmackenzie$elm_units$Duration$inSeconds(duration) * 1000;
};
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0.a;
	return millis;
};
var $elm$core$Basics$round = _Basics_round;
var $ianmackenzie$elm_units$Duration$addTo = F2(
	function (time, duration) {
		return $elm$time$Time$millisToPosix(
			$elm$time$Time$posixToMillis(time) + $elm$core$Basics$round(
				$ianmackenzie$elm_units$Duration$inMilliseconds(duration)));
	});
var $MartinSStewart$elm_audio$Audio$audioStartTime = function (audio_) {
	return A2($ianmackenzie$elm_units$Duration$addTo, audio_.startTime, audio_.offset);
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $MartinSStewart$elm_audio$Audio$encodeBufferId = function (_v0) {
	var bufferId = _v0.a;
	return $elm$json$Json$Encode$int(bufferId);
};
var $MartinSStewart$elm_audio$Audio$encodeDuration = A2($elm$core$Basics$composeR, $ianmackenzie$elm_units$Duration$inMilliseconds, $elm$json$Json$Encode$float);
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $MartinSStewart$elm_audio$Audio$encodeLoopConfig = function (maybeLoop) {
	if (maybeLoop.$ === 'Just') {
		var loop = maybeLoop.a;
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'loopStart',
					$MartinSStewart$elm_audio$Audio$encodeDuration(loop.loopStart)),
					_Utils_Tuple2(
					'loopEnd',
					$MartinSStewart$elm_audio$Audio$encodeDuration(loop.loopEnd))
				]));
	} else {
		return $elm$json$Json$Encode$null;
	}
};
var $MartinSStewart$elm_audio$Audio$encodeTime = A2($elm$core$Basics$composeR, $elm$time$Time$posixToMillis, $elm$json$Json$Encode$int);
var $mgold$elm_nonempty_list$List$Nonempty$toList = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	return A2($elm$core$List$cons, x, xs);
};
var $MartinSStewart$elm_audio$Audio$encodeVolumeTimeline = function (volumeTimeline) {
	return A2(
		$elm$json$Json$Encode$list,
		function (_v0) {
			var time = _v0.a;
			var volume = _v0.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'time',
						$MartinSStewart$elm_audio$Audio$encodeTime(time)),
						_Utils_Tuple2(
						'volume',
						$elm$json$Json$Encode$float(volume))
					]));
		},
		$mgold$elm_nonempty_list$List$Nonempty$toList(volumeTimeline));
};
var $mgold$elm_nonempty_list$List$Nonempty$Nonempty = F2(
	function (a, b) {
		return {$: 'Nonempty', a: a, b: b};
	});
var $mgold$elm_nonempty_list$List$Nonempty$map = F2(
	function (f, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return A2(
			$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
			f(x),
			A2($elm$core$List$map, f, xs));
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $MartinSStewart$elm_audio$Audio$volumeTimelines = function (audio_) {
	return A2(
		$elm$core$List$map,
		$mgold$elm_nonempty_list$List$Nonempty$map(
			$elm$core$Tuple$mapFirst(
				function (a) {
					return A2($ianmackenzie$elm_units$Duration$addTo, a, audio_.offset);
				})),
		audio_.volumeTimelines);
};
var $MartinSStewart$elm_audio$Audio$encodeStartSound = F2(
	function (nodeGroupId, audio_) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('startSound')),
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'bufferId',
					$MartinSStewart$elm_audio$Audio$encodeBufferId(
						$MartinSStewart$elm_audio$Audio$audioSourceBufferId(audio_.source))),
					_Utils_Tuple2(
					'startTime',
					$MartinSStewart$elm_audio$Audio$encodeTime(
						$MartinSStewart$elm_audio$Audio$audioStartTime(audio_))),
					_Utils_Tuple2(
					'startAt',
					$MartinSStewart$elm_audio$Audio$encodeDuration(audio_.startAt)),
					_Utils_Tuple2(
					'volume',
					$elm$json$Json$Encode$float(audio_.volume)),
					_Utils_Tuple2(
					'volumeTimelines',
					A2(
						$elm$json$Json$Encode$list,
						$MartinSStewart$elm_audio$Audio$encodeVolumeTimeline,
						$MartinSStewart$elm_audio$Audio$volumeTimelines(audio_))),
					_Utils_Tuple2(
					'loop',
					$MartinSStewart$elm_audio$Audio$encodeLoopConfig(audio_.loop)),
					_Utils_Tuple2(
					'playbackRate',
					$elm$json$Json$Encode$float(audio_.playbackRate))
				]));
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $ianmackenzie$elm_units$Quantity$Quantity = function (a) {
	return {$: 'Quantity', a: a};
};
var $ianmackenzie$elm_units$Quantity$plus = F2(
	function (_v0, _v1) {
		var y = _v0.a;
		var x = _v1.a;
		return $ianmackenzie$elm_units$Quantity$Quantity(x + y);
	});
var $ianmackenzie$elm_units$Quantity$zero = $ianmackenzie$elm_units$Quantity$Quantity(0);
var $MartinSStewart$elm_audio$Audio$flattenAudio = function (audio_) {
	switch (audio_.$) {
		case 'Group':
			var group_ = audio_.a;
			return $elm$core$List$concat(
				A2($elm$core$List$map, $MartinSStewart$elm_audio$Audio$flattenAudio, group_));
		case 'BasicAudio':
			var source = audio_.a.source;
			var startTime = audio_.a.startTime;
			var settings = audio_.a.settings;
			return _List_fromArray(
				[
					{loop: settings.loop, offset: $ianmackenzie$elm_units$Quantity$zero, playbackRate: settings.playbackRate, source: source, startAt: settings.startAt, startTime: startTime, volume: 1, volumeTimelines: _List_Nil}
				]);
		default:
			var effect = audio_.a;
			var _v1 = effect.effectType;
			switch (_v1.$) {
				case 'ScaleVolume':
					var scaleVolume_ = _v1.a;
					return A2(
						$elm$core$List$map,
						function (a) {
							return _Utils_update(
								a,
								{volume: scaleVolume_.scaleBy * a.volume});
						},
						$MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio));
				case 'ScaleVolumeAt':
					var volumeAt = _v1.a.volumeAt;
					return A2(
						$elm$core$List$map,
						function (a) {
							return _Utils_update(
								a,
								{
									volumeTimelines: A2($elm$core$List$cons, volumeAt, a.volumeTimelines)
								});
						},
						$MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio));
				default:
					var duration = _v1.a;
					return A2(
						$elm$core$List$map,
						function (a) {
							return _Utils_update(
								a,
								{
									offset: A2($ianmackenzie$elm_units$Quantity$plus, duration, a.offset)
								});
						},
						$MartinSStewart$elm_audio$Audio$flattenAudio(effect.audio));
			}
	}
};
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $MartinSStewart$elm_audio$Audio$encodeSetLoopConfig = F2(
	function (nodeGroupId, loop) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setLoopConfig')),
					_Utils_Tuple2(
					'loop',
					$MartinSStewart$elm_audio$Audio$encodeLoopConfig(loop))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate = F2(
	function (nodeGroupId, playbackRate) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setPlaybackRate')),
					_Utils_Tuple2(
					'playbackRate',
					$elm$json$Json$Encode$float(playbackRate))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeSetVolume = F2(
	function (nodeGroupId, volume) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setVolume')),
					_Utils_Tuple2(
					'volume',
					$elm$json$Json$Encode$float(volume))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeSetVolumeAt = F2(
	function (nodeGroupId, volumeTimelines_) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'nodeGroupId',
					$elm$json$Json$Encode$int(nodeGroupId)),
					_Utils_Tuple2(
					'action',
					$elm$json$Json$Encode$string('setVolumeAt')),
					_Utils_Tuple2(
					'volumeAt',
					A2($elm$json$Json$Encode$list, $MartinSStewart$elm_audio$Audio$encodeVolumeTimeline, volumeTimelines_))
				]));
	});
var $MartinSStewart$elm_audio$Audio$encodeStopSound = function (nodeGroupId) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'action',
				$elm$json$Json$Encode$string('stopSound')),
				_Utils_Tuple2(
				'nodeGroupId',
				$elm$json$Json$Encode$int(nodeGroupId))
			]));
};
var $MartinSStewart$elm_audio$Audio$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $MartinSStewart$elm_audio$Audio$removeAt = F2(
	function (index, l) {
		if (index < 0) {
			return l;
		} else {
			var tail = $elm$core$List$tail(
				A2($elm$core$List$drop, index, l));
			var head = A2($elm$core$List$take, index, l);
			if (tail.$ === 'Nothing') {
				return l;
			} else {
				var t = tail.a;
				return A2($elm$core$List$append, head, t);
			}
		}
	});
var $MartinSStewart$elm_audio$Audio$updateAudioState = F2(
	function (_v0, _v1) {
		var nodeGroupId = _v0.a;
		var audioGroup = _v0.b;
		var flattenedAudio = _v1.a;
		var audioState = _v1.b;
		var json = _v1.c;
		var validAudio = A2(
			$elm$core$List$filter,
			function (_v7) {
				var a = _v7.b;
				return _Utils_eq(a.source, audioGroup.source) && (_Utils_eq(
					$MartinSStewart$elm_audio$Audio$audioStartTime(a),
					$MartinSStewart$elm_audio$Audio$audioStartTime(audioGroup)) && _Utils_eq(a.startAt, audioGroup.startAt));
			},
			A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, flattenedAudio));
		var _v2 = A2(
			$MartinSStewart$elm_audio$Audio$find,
			function (_v3) {
				var a = _v3.b;
				return _Utils_eq(a, audioGroup);
			},
			validAudio);
		if (_v2.$ === 'Just') {
			var _v4 = _v2.a;
			var index = _v4.a;
			return _Utils_Tuple3(
				A2($MartinSStewart$elm_audio$Audio$removeAt, index, flattenedAudio),
				audioState,
				json);
		} else {
			if (validAudio.b) {
				var _v6 = validAudio.a;
				var index = _v6.a;
				var a = _v6.b;
				var encodeValue = F2(
					function (getter, encoder) {
						return _Utils_eq(
							getter(audioGroup),
							getter(a)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
							A2(
								encoder,
								nodeGroupId,
								getter(a)));
					});
				var effects = A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					_List_fromArray(
						[
							A2(
							encodeValue,
							function ($) {
								return $.volume;
							},
							$MartinSStewart$elm_audio$Audio$encodeSetVolume),
							A2(
							encodeValue,
							function ($) {
								return $.loop;
							},
							$MartinSStewart$elm_audio$Audio$encodeSetLoopConfig),
							A2(
							encodeValue,
							function ($) {
								return $.playbackRate;
							},
							$MartinSStewart$elm_audio$Audio$encodeSetPlaybackRate),
							A2(encodeValue, $MartinSStewart$elm_audio$Audio$volumeTimelines, $MartinSStewart$elm_audio$Audio$encodeSetVolumeAt)
						]));
				return _Utils_Tuple3(
					A2($MartinSStewart$elm_audio$Audio$removeAt, index, flattenedAudio),
					A3($elm$core$Dict$insert, nodeGroupId, a, audioState),
					_Utils_ap(effects, json));
			} else {
				return _Utils_Tuple3(
					flattenedAudio,
					A2($elm$core$Dict$remove, nodeGroupId, audioState),
					A2(
						$elm$core$List$cons,
						$MartinSStewart$elm_audio$Audio$encodeStopSound(nodeGroupId),
						json));
			}
		}
	});
var $MartinSStewart$elm_audio$Audio$diffAudioState = F3(
	function (nodeGroupIdCounter, audioState, newAudio) {
		var _v0 = A3(
			$elm$core$List$foldl,
			$MartinSStewart$elm_audio$Audio$updateAudioState,
			_Utils_Tuple3(
				$MartinSStewart$elm_audio$Audio$flattenAudio(newAudio),
				audioState,
				_List_Nil),
			$elm$core$Dict$toList(audioState));
		var newAudioLeft = _v0.a;
		var newAudioState = _v0.b;
		var json2 = _v0.c;
		var _v1 = A3(
			$elm$core$List$foldl,
			F2(
				function (audioLeft, _v2) {
					var counter = _v2.a;
					var audioState_ = _v2.b;
					var json_ = _v2.c;
					return _Utils_Tuple3(
						counter + 1,
						A3($elm$core$Dict$insert, counter, audioLeft, audioState_),
						A2(
							$elm$core$List$cons,
							A2($MartinSStewart$elm_audio$Audio$encodeStartSound, counter, audioLeft),
							json_));
				}),
			_Utils_Tuple3(nodeGroupIdCounter, newAudioState, json2),
			newAudioLeft);
		var newNodeGroupIdCounter = _v1.a;
		var newAudioState2 = _v1.b;
		var json3 = _v1.c;
		return _Utils_Tuple3(newAudioState2, newNodeGroupIdCounter, json3);
	});
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest = F2(
	function (index, audioLoad) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'audioUrl',
					$elm$json$Json$Encode$string(audioLoad.audioUrl)),
					_Utils_Tuple2(
					'requestId',
					$elm$json$Json$Encode$int(index))
				]));
	});
var $MartinSStewart$elm_audio$Audio$flattenAudioCmd = function (audioCmd) {
	if (audioCmd.$ === 'AudioLoadRequest') {
		var data = audioCmd.a;
		return _List_fromArray(
			[data]);
	} else {
		var list = audioCmd.a;
		return $elm$core$List$concat(
			A2($elm$core$List$map, $MartinSStewart$elm_audio$Audio$flattenAudioCmd, list));
	}
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $MartinSStewart$elm_audio$Audio$encodeAudioCmd = F2(
	function (_v0, audioCmd) {
		var model = _v0.a;
		var flattenedAudioCmd = $MartinSStewart$elm_audio$Audio$flattenAudioCmd(audioCmd);
		var newPendingRequests = A2(
			$elm$core$List$indexedMap,
			F2(
				function (index, request) {
					return _Utils_Tuple2(model.requestCount + index, request);
				}),
			flattenedAudioCmd);
		return _Utils_Tuple2(
			$MartinSStewart$elm_audio$Audio$Model(
				_Utils_update(
					model,
					{
						pendingRequests: A2(
							$elm$core$Dict$union,
							model.pendingRequests,
							$elm$core$Dict$fromList(newPendingRequests)),
						requestCount: model.requestCount + $elm$core$List$length(flattenedAudioCmd)
					})),
			A2(
				$elm$json$Json$Encode$list,
				$elm$core$Basics$identity,
				A2(
					$elm$core$List$map,
					function (_v1) {
						var index = _v1.a;
						var value = _v1.b;
						return A2($MartinSStewart$elm_audio$Audio$encodeAudioLoadRequest, index, value);
					},
					newPendingRequests)));
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $MartinSStewart$elm_audio$Audio$initHelper = F3(
	function (audioPort, audioFunc, _v0) {
		var model = _v0.a;
		var cmds = _v0.b;
		var audioCmds = _v0.c;
		var _v1 = A3(
			$MartinSStewart$elm_audio$Audio$diffAudioState,
			0,
			$elm$core$Dict$empty,
			A2(
				audioFunc,
				$MartinSStewart$elm_audio$Audio$AudioData(
					{sourceData: $elm$core$Dict$empty}),
				model));
		var audioState = _v1.a;
		var newNodeGroupIdCounter = _v1.b;
		var json = _v1.c;
		var initialModel = $MartinSStewart$elm_audio$Audio$Model(
			{audioState: audioState, nodeGroupIdCounter: newNodeGroupIdCounter, pendingRequests: $elm$core$Dict$empty, requestCount: 0, samplesPerSecond: $elm$core$Maybe$Nothing, sourceData: $elm$core$Dict$empty, userModel: model});
		var _v2 = A2($MartinSStewart$elm_audio$Audio$encodeAudioCmd, initialModel, audioCmds);
		var initialModel2 = _v2.a;
		var audioRequests = _v2.b;
		var portMessage = $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'audio',
					A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, json)),
					_Utils_Tuple2('audioCmds', audioRequests)
				]));
		return _Utils_Tuple2(
			initialModel2,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						A2($elm$core$Platform$Cmd$map, $MartinSStewart$elm_audio$Audio$UserMsg, cmds),
						audioPort(portMessage)
					])));
	});
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $MartinSStewart$elm_audio$Audio$FromJSMsg = function (a) {
	return {$: 'FromJSMsg', a: a};
};
var $MartinSStewart$elm_audio$Audio$JsonParseError = function (a) {
	return {$: 'JsonParseError', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioLoadFailed = function (a) {
	return {$: 'AudioLoadFailed', a: a};
};
var $MartinSStewart$elm_audio$Audio$AudioLoadSuccess = function (a) {
	return {$: 'AudioLoadSuccess', a: a};
};
var $MartinSStewart$elm_audio$Audio$InitAudioContext = function (a) {
	return {$: 'InitAudioContext', a: a};
};
var $MartinSStewart$elm_audio$Audio$BufferId = function (a) {
	return {$: 'BufferId', a: a};
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $MartinSStewart$elm_audio$Audio$decodeBufferId = A2($elm$json$Json$Decode$map, $MartinSStewart$elm_audio$Audio$BufferId, $elm$json$Json$Decode$int);
var $MartinSStewart$elm_audio$Audio$FailedToDecode = {$: 'FailedToDecode'};
var $MartinSStewart$elm_audio$Audio$NetworkError = {$: 'NetworkError'};
var $MartinSStewart$elm_audio$Audio$UnknownError = {$: 'UnknownError'};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $MartinSStewart$elm_audio$Audio$decodeLoadError = A2(
	$elm$json$Json$Decode$andThen,
	function (value) {
		switch (value) {
			case 'NetworkError':
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$NetworkError);
			case 'MediaDecodeAudioDataUnknownContentType':
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$FailedToDecode);
			case 'DOMException: The buffer passed to decodeAudioData contains an unknown content type.':
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$FailedToDecode);
			default:
				return $elm$json$Json$Decode$succeed($MartinSStewart$elm_audio$Audio$UnknownError);
		}
	},
	$elm$json$Json$Decode$string);
var $elm$json$Json$Decode$map3 = _Json_map3;
var $ianmackenzie$elm_units$Duration$seconds = function (numSeconds) {
	return $ianmackenzie$elm_units$Quantity$Quantity(numSeconds);
};
var $MartinSStewart$elm_audio$Audio$decodeFromJSMsg = A2(
	$elm$json$Json$Decode$andThen,
	function (value) {
		switch (value) {
			case 0:
				return A3(
					$elm$json$Json$Decode$map2,
					F2(
						function (requestId, error) {
							return $MartinSStewart$elm_audio$Audio$AudioLoadFailed(
								{error: error, requestId: requestId});
						}),
					A2($elm$json$Json$Decode$field, 'requestId', $elm$json$Json$Decode$int),
					A2($elm$json$Json$Decode$field, 'error', $MartinSStewart$elm_audio$Audio$decodeLoadError));
			case 1:
				return A4(
					$elm$json$Json$Decode$map3,
					F3(
						function (requestId, bufferId, duration) {
							return $MartinSStewart$elm_audio$Audio$AudioLoadSuccess(
								{
									bufferId: bufferId,
									duration: $ianmackenzie$elm_units$Duration$seconds(duration),
									requestId: requestId
								});
						}),
					A2($elm$json$Json$Decode$field, 'requestId', $elm$json$Json$Decode$int),
					A2($elm$json$Json$Decode$field, 'bufferId', $MartinSStewart$elm_audio$Audio$decodeBufferId),
					A2($elm$json$Json$Decode$field, 'durationInSeconds', $elm$json$Json$Decode$float));
			case 2:
				return A2(
					$elm$json$Json$Decode$map,
					function (samplesPerSecond) {
						return $MartinSStewart$elm_audio$Audio$InitAudioContext(
							{samplesPerSecond: samplesPerSecond});
					},
					A2($elm$json$Json$Decode$field, 'samplesPerSecond', $elm$json$Json$Decode$int));
			default:
				return $elm$json$Json$Decode$succeed(
					$MartinSStewart$elm_audio$Audio$JsonParseError(
						{
							error: 'Type ' + ($elm$core$String$fromInt(value) + ' not handled.')
						}));
		}
	},
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$int));
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $MartinSStewart$elm_audio$Audio$fromJSPortSub = function (json) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $MartinSStewart$elm_audio$Audio$decodeFromJSMsg, json);
	if (_v0.$ === 'Ok') {
		var value = _v0.a;
		return $MartinSStewart$elm_audio$Audio$FromJSMsg(value);
	} else {
		var error = _v0.a;
		return $MartinSStewart$elm_audio$Audio$FromJSMsg(
			$MartinSStewart$elm_audio$Audio$JsonParseError(
				{
					error: $elm$json$Json$Decode$errorToString(error)
				}));
	}
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $MartinSStewart$elm_audio$Audio$subscriptions = F2(
	function (app, _v0) {
		var model = _v0.a;
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					A2(
					$elm$core$Platform$Sub$map,
					$MartinSStewart$elm_audio$Audio$UserMsg,
					A2(
						app.subscriptions,
						$MartinSStewart$elm_audio$Audio$audioData(
							$MartinSStewart$elm_audio$Audio$Model(model)),
						model.userModel)),
					app.audioPort.fromJS($MartinSStewart$elm_audio$Audio$fromJSPortSub)
				]));
	});
var $MartinSStewart$elm_audio$Audio$File = function (a) {
	return {$: 'File', a: a};
};
var $MartinSStewart$elm_audio$Audio$flip = F3(
	function (func, a, b) {
		return A2(func, b, a);
	});
var $mgold$elm_nonempty_list$List$Nonempty$head = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	return x;
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $MartinSStewart$elm_audio$Audio$rawBufferId = function (_v0) {
	var bufferId = _v0.a;
	return bufferId;
};
var $MartinSStewart$elm_audio$Audio$updateHelper = F4(
	function (audioPort, audioFunc, userUpdate, _v0) {
		var model = _v0.a;
		var audioData_ = $MartinSStewart$elm_audio$Audio$audioData(
			$MartinSStewart$elm_audio$Audio$Model(model));
		var _v1 = A2(userUpdate, audioData_, model.userModel);
		var newUserModel = _v1.a;
		var userCmd = _v1.b;
		var audioCmds = _v1.c;
		var _v2 = A3(
			$MartinSStewart$elm_audio$Audio$diffAudioState,
			model.nodeGroupIdCounter,
			model.audioState,
			A2(audioFunc, audioData_, newUserModel));
		var audioState = _v2.a;
		var newNodeGroupIdCounter = _v2.b;
		var json = _v2.c;
		var newModel = $MartinSStewart$elm_audio$Audio$Model(
			_Utils_update(
				model,
				{audioState: audioState, nodeGroupIdCounter: newNodeGroupIdCounter, userModel: newUserModel}));
		var _v3 = A2($MartinSStewart$elm_audio$Audio$encodeAudioCmd, newModel, audioCmds);
		var newModel2 = _v3.a;
		var audioRequests = _v3.b;
		var portMessage = $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'audio',
					A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, json)),
					_Utils_Tuple2('audioCmds', audioRequests)
				]));
		return _Utils_Tuple2(
			newModel2,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						A2($elm$core$Platform$Cmd$map, $MartinSStewart$elm_audio$Audio$UserMsg, userCmd),
						audioPort(portMessage)
					])));
	});
var $MartinSStewart$elm_audio$Audio$update = F3(
	function (app, msg, _v0) {
		var model = _v0.a;
		if (msg.$ === 'UserMsg') {
			var userMsg = msg.a;
			return A4(
				$MartinSStewart$elm_audio$Audio$updateHelper,
				app.audioPort.toJS,
				app.audio,
				A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
				$MartinSStewart$elm_audio$Audio$Model(model));
		} else {
			var response = msg.a;
			switch (response.$) {
				case 'AudioLoadSuccess':
					var requestId = response.a.requestId;
					var bufferId = response.a.bufferId;
					var duration = response.a.duration;
					var _v3 = A2($elm$core$Dict$get, requestId, model.pendingRequests);
					if (_v3.$ === 'Just') {
						var pendingRequest = _v3.a;
						var sourceData = A3(
							$elm$core$Dict$insert,
							$MartinSStewart$elm_audio$Audio$rawBufferId(bufferId),
							{duration: duration},
							model.sourceData);
						var source = $elm$core$Result$Ok(
							$MartinSStewart$elm_audio$Audio$File(
								{bufferId: bufferId}));
						var maybeUserMsg = A2(
							$MartinSStewart$elm_audio$Audio$find,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Tuple$first,
								$elm$core$Basics$eq(source)),
							$mgold$elm_nonempty_list$List$Nonempty$toList(pendingRequest.userMsg));
						if (maybeUserMsg.$ === 'Just') {
							var _v5 = maybeUserMsg.a;
							var userMsg = _v5.b;
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests),
											sourceData: sourceData
										})));
						} else {
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2(
									$MartinSStewart$elm_audio$Audio$flip,
									app.update,
									$mgold$elm_nonempty_list$List$Nonempty$head(pendingRequest.userMsg).b),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests),
											sourceData: sourceData
										})));
						}
					} else {
						return _Utils_Tuple2(
							$MartinSStewart$elm_audio$Audio$Model(model),
							$elm$core$Platform$Cmd$none);
					}
				case 'AudioLoadFailed':
					var requestId = response.a.requestId;
					var error = response.a.error;
					var _v6 = A2($elm$core$Dict$get, requestId, model.pendingRequests);
					if (_v6.$ === 'Just') {
						var pendingRequest = _v6.a;
						var a = $elm$core$Result$Err(error);
						var b = A2(
							$MartinSStewart$elm_audio$Audio$find,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Tuple$first,
								$elm$core$Basics$eq(a)),
							$mgold$elm_nonempty_list$List$Nonempty$toList(pendingRequest.userMsg));
						if (b.$ === 'Just') {
							var _v8 = b.a;
							var userMsg = _v8.b;
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2($MartinSStewart$elm_audio$Audio$flip, app.update, userMsg),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests)
										})));
						} else {
							return A4(
								$MartinSStewart$elm_audio$Audio$updateHelper,
								app.audioPort.toJS,
								app.audio,
								A2(
									$MartinSStewart$elm_audio$Audio$flip,
									app.update,
									$mgold$elm_nonempty_list$List$Nonempty$head(pendingRequest.userMsg).b),
								$MartinSStewart$elm_audio$Audio$Model(
									_Utils_update(
										model,
										{
											pendingRequests: A2($elm$core$Dict$remove, requestId, model.pendingRequests)
										})));
						}
					} else {
						return _Utils_Tuple2(
							$MartinSStewart$elm_audio$Audio$Model(model),
							$elm$core$Platform$Cmd$none);
					}
				case 'InitAudioContext':
					var samplesPerSecond = response.a.samplesPerSecond;
					return _Utils_Tuple2(
						$MartinSStewart$elm_audio$Audio$Model(
							_Utils_update(
								model,
								{
									samplesPerSecond: $elm$core$Maybe$Just(samplesPerSecond)
								})),
						$elm$core$Platform$Cmd$none);
				default:
					var error = response.a.error;
					return _Utils_Tuple2(
						$MartinSStewart$elm_audio$Audio$Model(model),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $ianmackenzie$elm_units$Duration$milliseconds = function (numMilliseconds) {
	return $ianmackenzie$elm_units$Duration$seconds(0.001 * numMilliseconds);
};
var $MartinSStewart$elm_audio$Audio$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $MartinSStewart$elm_audio$Audio$offsetBy = F2(
	function (offset_, audio_) {
		return $MartinSStewart$elm_audio$Audio$Effect(
			{
				audio: audio_,
				effectType: $MartinSStewart$elm_audio$Audio$Offset(offset_)
			});
	});
var $MartinSStewart$elm_audio$Audio$withAudioOffset = function (app) {
	return _Utils_update(
		app,
		{
			audio: F2(
				function (audioData_, model) {
					return A2(
						$MartinSStewart$elm_audio$Audio$offsetBy,
						$ianmackenzie$elm_units$Duration$milliseconds(50),
						A2(app.audio, audioData_, model));
				})
		});
};
var $MartinSStewart$elm_audio$Audio$elementWithAudio = A2(
	$elm$core$Basics$composeR,
	$MartinSStewart$elm_audio$Audio$withAudioOffset,
	function (app) {
		return $elm$browser$Browser$element(
			{
				init: A2(
					$elm$core$Basics$composeR,
					app.init,
					A2($MartinSStewart$elm_audio$Audio$initHelper, app.audioPort.toJS, app.audio)),
				subscriptions: $MartinSStewart$elm_audio$Audio$subscriptions(app),
				update: $MartinSStewart$elm_audio$Audio$update(app),
				view: function (model) {
					return A2(
						$elm$html$Html$map,
						$MartinSStewart$elm_audio$Audio$UserMsg,
						A2(
							app.view,
							$MartinSStewart$elm_audio$Audio$audioData(model),
							$MartinSStewart$elm_audio$Audio$getUserModel(model)));
				}
			});
	});
var $linsyking$messenger_core$Messenger$Base$SoundLoaded = F2(
	function (a, b) {
		return {$: 'SoundLoaded', a: a, b: b};
	});
var $MartinSStewart$elm_audio$Audio$AudioCmdGroup = function (a) {
	return {$: 'AudioCmdGroup', a: a};
};
var $MartinSStewart$elm_audio$Audio$cmdBatch = function (audioCmds) {
	return $MartinSStewart$elm_audio$Audio$AudioCmdGroup(audioCmds);
};
var $linsyking$messenger_core$Messenger$Audio$Internal$emptyRepo = {audio: $elm$core$Dict$empty, playing: _List_Nil};
var $linsyking$messenger_core$Messenger$Base$emptyInternalData = {
	audioRepo: $linsyking$messenger_core$Messenger$Audio$Internal$emptyRepo,
	browserViewPort: _Utils_Tuple2(0, 0),
	realHeight: 0,
	realWidth: 0,
	sprites: $elm$core$Dict$empty,
	startLeft: 0,
	startTop: 0,
	virtualHeight: 0,
	virtualWidth: 0
};
var $linsyking$messenger_core$Messenger$Coordinate$Coordinates$plScale = function (_v0) {
	var vw = _v0.a;
	var vh = _v0.b;
	return vw / vh;
};
var $linsyking$messenger_core$Messenger$Coordinate$Coordinates$getStartPoint = F2(
	function (vsize, _v0) {
		var w = _v0.a;
		var h = _v0.b;
		var fw = h * $linsyking$messenger_core$Messenger$Coordinate$Coordinates$plScale(vsize);
		var fh = w / $linsyking$messenger_core$Messenger$Coordinate$Coordinates$plScale(vsize);
		return (_Utils_cmp(
			w / h,
			$linsyking$messenger_core$Messenger$Coordinate$Coordinates$plScale(vsize)) > 0) ? _Utils_Tuple2((w - fw) / 2, 0) : _Utils_Tuple2(0, (h - fh) / 2);
	});
var $elm$browser$Browser$Events$Visible = {$: 'Visible'};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $linsyking$messenger_core$Messenger$Base$userGlobalDataToGlobalData = function (user) {
	return {
		canvasAttributes: user.canvasAttributes,
		currentScene: '',
		currentTimeStamp: $elm$time$Time$millisToPosix(0),
		extraHTML: user.extraHTML,
		globalStartFrame: user.globalStartFrame,
		globalStartTime: user.globalStartTime,
		internalData: $linsyking$messenger_core$Messenger$Base$emptyInternalData,
		mousePos: _Utils_Tuple2(0, 0),
		pressedKeys: $elm$core$Set$empty,
		pressedMouseButtons: $elm$core$Set$empty,
		sceneStartFrame: user.sceneStartFrame,
		sceneStartTime: user.sceneStartTime,
		userData: user.userData,
		volume: user.volume,
		windowVisibility: $elm$browser$Browser$Events$Visible
	};
};
var $linsyking$messenger_core$Messenger$UI$Init$emptyGlobalData = function (config) {
	return $linsyking$messenger_core$Messenger$Base$userGlobalDataToGlobalData(
		config.globalDataCodec.decode(''));
};
var $linsyking$messenger_core$Messenger$UI$Init$emptyScene = function () {
	var abstractRec = function (_v0) {
		var updates = F2(
			function (env, _v2) {
				return _Utils_Tuple3(
					abstractRec(_Utils_Tuple0),
					_List_Nil,
					env);
			});
		return $linsyking$messenger_core$Messenger$Scene$Scene$Roll(
			{
				update: updates,
				view: function (_v1) {
					return $linsyking$elm_canvas$Canvas$empty;
				}
			});
	};
	return abstractRec(_Utils_Tuple0);
}();
var $linsyking$messenger_core$Messenger$UI$Init$initModel = function (config) {
	return {
		currentGlobalData: $linsyking$messenger_core$Messenger$UI$Init$emptyGlobalData(config),
		currentScene: $linsyking$messenger_core$Messenger$UI$Init$emptyScene,
		transition: $elm$core$Maybe$Nothing
	};
};
var $MartinSStewart$elm_audio$Audio$AudioLoadRequest = function (a) {
	return {$: 'AudioLoadRequest', a: a};
};
var $MartinSStewart$elm_audio$Audio$ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage = {$: 'ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage'};
var $MartinSStewart$elm_audio$Audio$enumeratedResults = A2(
	$mgold$elm_nonempty_list$List$Nonempty$Nonempty,
	$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$ErrorThatHappensWhenYouLoadMoreThan1000SoundsDueToHackyWorkAroundToMakeThisPackageBehaveMoreLikeAnEffectPackage),
	_Utils_ap(
		_List_fromArray(
			[
				$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$FailedToDecode),
				$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$NetworkError),
				$elm$core$Result$Err($MartinSStewart$elm_audio$Audio$UnknownError)
			]),
		A2(
			$elm$core$List$map,
			function (bufferId) {
				return $elm$core$Result$Ok(
					$MartinSStewart$elm_audio$Audio$File(
						{
							bufferId: $MartinSStewart$elm_audio$Audio$BufferId(bufferId)
						}));
			},
			A2($elm$core$List$range, 0, 1000))));
var $MartinSStewart$elm_audio$Audio$loadAudio = F2(
	function (userMsg, url) {
		return $MartinSStewart$elm_audio$Audio$AudioLoadRequest(
			{
				audioUrl: url,
				userMsg: A2(
					$mgold$elm_nonempty_list$List$Nonempty$map,
					function (results) {
						return _Utils_Tuple2(
							results,
							userMsg(results));
					},
					$MartinSStewart$elm_audio$Audio$enumeratedResults)
			});
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $linsyking$messenger_core$Messenger$Scene$Loader$getScene = F2(
	function (i, scenes) {
		return $elm$core$List$head(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var s = _v0.b;
					return s;
				},
				A2(
					$elm$core$List$filter,
					function (_v1) {
						var x = _v1.a;
						return _Utils_eq(x, i);
					},
					scenes)));
	});
var $linsyking$messenger_core$Messenger$Base$Env = F2(
	function (globalData, commonData) {
		return {commonData: commonData, globalData: globalData};
	});
var $linsyking$messenger_core$Messenger$Scene$Loader$loadScene = F3(
	function (scenest, smsg, model) {
		var env = A2($linsyking$messenger_core$Messenger$Base$Env, model.currentGlobalData, _Utils_Tuple0);
		return _Utils_update(
			model,
			{
				currentScene: A2(scenest, smsg, env)
			});
	});
var $linsyking$messenger_core$Messenger$Scene$Loader$loadSceneByName = F4(
	function (name, scenes, smsg, model) {
		var _v0 = A2($linsyking$messenger_core$Messenger$Scene$Loader$getScene, name, scenes);
		if (_v0.$ === 'Just') {
			var scenest = _v0.a;
			var newModel = A3($linsyking$messenger_core$Messenger$Scene$Loader$loadScene, scenest, smsg, model);
			var gd = newModel.currentGlobalData;
			return _Utils_update(
				newModel,
				{
					currentGlobalData: _Utils_update(
						gd,
						{currentScene: name})
				});
		} else {
			return model;
		}
	});
var $linsyking$messenger_core$Messenger$Coordinate$Coordinates$maxHandW = F2(
	function (vsize, _v0) {
		var w = _v0.a;
		var h = _v0.b;
		return (_Utils_cmp(
			w / h,
			$linsyking$messenger_core$Messenger$Coordinate$Coordinates$plScale(vsize)) > 0) ? _Utils_Tuple2(
			h * $linsyking$messenger_core$Messenger$Coordinate$Coordinates$plScale(vsize),
			h) : _Utils_Tuple2(
			w,
			w / $linsyking$messenger_core$Messenger$Coordinate$Coordinates$plScale(vsize));
	});
var $linsyking$messenger_core$Messenger$UI$Init$init = F2(
	function (input, flags) {
		var scenes = input.scenes;
		var resources = input.resources;
		var config = input.config;
		var im = $linsyking$messenger_core$Messenger$UI$Init$initModel(config);
		var initGlobalData = $linsyking$messenger_core$Messenger$Base$userGlobalDataToGlobalData(
			config.globalDataCodec.decode(flags.info));
		var audioLoad = A2(
			$elm$core$List$map,
			function (_v2) {
				var name = _v2.a;
				var url = _v2.b;
				return A2(
					$MartinSStewart$elm_audio$Audio$loadAudio,
					$linsyking$messenger_core$Messenger$Base$SoundLoaded(name),
					url);
			},
			$elm$core$Dict$toList(resources.allAudio));
		var _v0 = A2(
			$linsyking$messenger_core$Messenger$Coordinate$Coordinates$maxHandW,
			_Utils_Tuple2(config.virtualSize.width, config.virtualSize.height),
			_Utils_Tuple2(flags.windowWidth, flags.windowHeight));
		var gw = _v0.a;
		var gh = _v0.b;
		var _v1 = A2(
			$linsyking$messenger_core$Messenger$Coordinate$Coordinates$getStartPoint,
			_Utils_Tuple2(config.virtualSize.width, config.virtualSize.height),
			_Utils_Tuple2(flags.windowWidth, flags.windowHeight));
		var fl = _v1.a;
		var ft = _v1.b;
		var newIT = _Utils_update(
			$linsyking$messenger_core$Messenger$Base$emptyInternalData,
			{
				browserViewPort: _Utils_Tuple2(flags.windowWidth, flags.windowHeight),
				realHeight: gh,
				realWidth: gw,
				startLeft: fl,
				startTop: ft,
				virtualHeight: config.virtualSize.height,
				virtualWidth: config.virtualSize.width
			});
		var newgd = _Utils_update(
			initGlobalData,
			{
				currentScene: config.initScene,
				currentTimeStamp: $elm$time$Time$millisToPosix(flags.timeStamp),
				internalData: newIT
			});
		var ms = A4(
			$linsyking$messenger_core$Messenger$Scene$Loader$loadSceneByName,
			config.initScene,
			scenes,
			config.initSceneMsg,
			_Utils_update(
				im,
				{currentGlobalData: newgd}));
		return _Utils_Tuple3(
			_Utils_update(
				ms,
				{currentGlobalData: newgd}),
			$elm$core$Platform$Cmd$none,
			$MartinSStewart$elm_audio$Audio$cmdBatch(audioLoad));
	});
var $linsyking$messenger_core$Messenger$Base$MouseMove = function (a) {
	return {$: 'MouseMove', a: a};
};
var $linsyking$messenger_core$Messenger$Base$NewWindowSize = function (a) {
	return {$: 'NewWindowSize', a: a};
};
var $linsyking$messenger_core$Messenger$Base$NullEvent = {$: 'NullEvent'};
var $linsyking$messenger_core$Messenger$Base$WKeyDown = function (a) {
	return {$: 'WKeyDown', a: a};
};
var $linsyking$messenger_core$Messenger$Base$WKeyUp = function (a) {
	return {$: 'WKeyUp', a: a};
};
var $linsyking$messenger_core$Messenger$Base$WMouseDown = F2(
	function (a, b) {
		return {$: 'WMouseDown', a: a, b: b};
	});
var $linsyking$messenger_core$Messenger$Base$WMouseUp = F2(
	function (a, b) {
		return {$: 'WMouseUp', a: a, b: b};
	});
var $linsyking$messenger_core$Messenger$Base$WPrompt = F2(
	function (a, b) {
		return {$: 'WPrompt', a: a, b: b};
	});
var $linsyking$messenger_core$Messenger$Base$WTick = function (a) {
	return {$: 'WTick', a: a};
};
var $linsyking$messenger_core$Messenger$Base$WindowVisibility = function (a) {
	return {$: 'WindowVisibility', a: a};
};
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 'Every', a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {processes: processes, taggers: taggers};
	});
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 'Nothing') {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.processes;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(_Utils_Tuple0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.taggers);
		if (_v0.$ === 'Nothing') {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 'Time', a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {oldTime: oldTime, request: request, subs: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$browser$Browser$AnimationManager$now = _Browser_now(_Utils_Tuple0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(_Utils_Tuple0);
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.request;
		var oldTime = _v0.oldTime;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 'Nothing') {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.subs;
		var oldTime = _v0.oldTime;
		var send = function (sub) {
			if (sub.$ === 'Time') {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 'Delta', a: a};
};
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (sub.$ === 'Time') {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrame = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Time(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrame = $elm$browser$Browser$AnimationManager$onAnimationFrame;
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keydown');
var $elm$browser$Browser$Events$onKeyUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keyup');
var $elm$browser$Browser$Events$onMouseDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'mousedown');
var $elm$browser$Browser$Events$onMouseMove = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'mousemove');
var $elm$browser$Browser$Events$onMouseUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'mouseup');
var $elm$browser$Browser$Events$Window = {$: 'Window'};
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		$elm$browser$Browser$Events$Window,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $elm$browser$Browser$Events$Hidden = {$: 'Hidden'};
var $elm$browser$Browser$Events$withHidden = F2(
	function (func, isHidden) {
		return func(
			isHidden ? $elm$browser$Browser$Events$Hidden : $elm$browser$Browser$Events$Visible);
	});
var $elm$browser$Browser$Events$onVisibilityChange = function (func) {
	var info = _Browser_visibilityInfo(_Utils_Tuple0);
	return A3(
		$elm$browser$Browser$Events$on,
		$elm$browser$Browser$Events$Document,
		info.change,
		A2(
			$elm$json$Json$Decode$map,
			$elm$browser$Browser$Events$withHidden(func),
			A2(
				$elm$json$Json$Decode$field,
				'target',
				A2($elm$json$Json$Decode$field, info.hidden, $elm$json$Json$Decode$bool))));
};
var $linsyking$messenger_core$Messenger$UI$Subscription$subscriptions = F3(
	function (config, _v0, _v1) {
		var timeSub = function () {
			var _v2 = config.timeInterval;
			if (_v2.$ === 'Fixed') {
				var time = _v2.a;
				return A2($elm$time$Time$every, time, $linsyking$messenger_core$Messenger$Base$WTick);
			} else {
				return $elm$browser$Browser$Events$onAnimationFrame($linsyking$messenger_core$Messenger$Base$WTick);
			}
		}();
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					timeSub,
					$elm$browser$Browser$Events$onKeyDown(
					A3(
						$elm$json$Json$Decode$map2,
						F2(
							function (x, rep) {
								return (!rep) ? $linsyking$messenger_core$Messenger$Base$WKeyDown(x) : $linsyking$messenger_core$Messenger$Base$NullEvent;
							}),
						A2($elm$json$Json$Decode$field, 'keyCode', $elm$json$Json$Decode$int),
						A2($elm$json$Json$Decode$field, 'repeat', $elm$json$Json$Decode$bool))),
					$elm$browser$Browser$Events$onKeyUp(
					A3(
						$elm$json$Json$Decode$map2,
						F2(
							function (x, rep) {
								return (!rep) ? $linsyking$messenger_core$Messenger$Base$WKeyUp(x) : $linsyking$messenger_core$Messenger$Base$NullEvent;
							}),
						A2($elm$json$Json$Decode$field, 'keyCode', $elm$json$Json$Decode$int),
						A2($elm$json$Json$Decode$field, 'repeat', $elm$json$Json$Decode$bool))),
					$elm$browser$Browser$Events$onResize(
					F2(
						function (w, h) {
							return $linsyking$messenger_core$Messenger$Base$NewWindowSize(
								_Utils_Tuple2(w, h));
						})),
					$elm$browser$Browser$Events$onVisibilityChange(
					function (v) {
						return $linsyking$messenger_core$Messenger$Base$WindowVisibility(v);
					}),
					$elm$browser$Browser$Events$onMouseDown(
					A4(
						$elm$json$Json$Decode$map3,
						F3(
							function (b, x, y) {
								return A2(
									$linsyking$messenger_core$Messenger$Base$WMouseDown,
									b,
									_Utils_Tuple2(x, y));
							}),
						A2($elm$json$Json$Decode$field, 'button', $elm$json$Json$Decode$int),
						A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
						A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float))),
					$elm$browser$Browser$Events$onMouseUp(
					A4(
						$elm$json$Json$Decode$map3,
						F3(
							function (b, x, y) {
								return A2(
									$linsyking$messenger_core$Messenger$Base$WMouseUp,
									b,
									_Utils_Tuple2(x, y));
							}),
						A2($elm$json$Json$Decode$field, 'button', $elm$json$Json$Decode$int),
						A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
						A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float))),
					$elm$browser$Browser$Events$onMouseMove(
					A3(
						$elm$json$Json$Decode$map2,
						F2(
							function (x, y) {
								return $linsyking$messenger_core$Messenger$Base$MouseMove(
									_Utils_Tuple2(x, y));
							}),
						A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
						A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float))),
					config.ports.promptReceiver(
					function (p) {
						return A2($linsyking$messenger_core$Messenger$Base$WPrompt, p.name, p.result);
					})
				]));
	});
var $linsyking$messenger_core$Messenger$Base$KeyDown = function (a) {
	return {$: 'KeyDown', a: a};
};
var $linsyking$messenger_core$Messenger$Base$KeyUp = function (a) {
	return {$: 'KeyUp', a: a};
};
var $linsyking$messenger_core$Messenger$Base$MouseDown = F2(
	function (a, b) {
		return {$: 'MouseDown', a: a, b: b};
	});
var $linsyking$messenger_core$Messenger$Base$MouseUp = F2(
	function (a, b) {
		return {$: 'MouseUp', a: a, b: b};
	});
var $linsyking$messenger_core$Messenger$Base$MouseWheel = function (a) {
	return {$: 'MouseWheel', a: a};
};
var $linsyking$messenger_core$Messenger$Base$Prompt = F2(
	function (a, b) {
		return {$: 'Prompt', a: a, b: b};
	});
var $linsyking$messenger_core$Messenger$Base$Tick = function (a) {
	return {$: 'Tick', a: a};
};
var $MartinSStewart$elm_audio$Audio$cmdNone = $MartinSStewart$elm_audio$Audio$AudioCmdGroup(_List_Nil);
var $linsyking$messenger_core$Messenger$Scene$Loader$existScene = F2(
	function (i, scenes) {
		var tests = A2(
			$elm$core$List$filter,
			function (_v1) {
				var x = _v1.a;
				return _Utils_eq(x, i);
			},
			scenes);
		var _v0 = $elm$core$List$head(tests);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $linsyking$messenger_core$Messenger$Coordinate$Coordinates$posToVirtual = F2(
	function (gd, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		var realWidth = gd.internalData.realWidth;
		var realHeight = gd.internalData.realHeight;
		return _Utils_Tuple2(gd.internalData.virtualWidth * (x / realWidth), gd.internalData.virtualHeight * (y / realHeight));
	});
var $linsyking$messenger_core$Messenger$Coordinate$Coordinates$fromMouseToVirtual = F2(
	function (gd, _v0) {
		var px = _v0.a;
		var py = _v0.b;
		return A2(
			$linsyking$messenger_core$Messenger$Coordinate$Coordinates$posToVirtual,
			gd,
			_Utils_Tuple2(px - gd.internalData.startLeft, py - gd.internalData.startTop));
	});
var $linsyking$messenger_core$Messenger$Base$globalDataToUserGlobalData = function (globalData) {
	return {canvasAttributes: globalData.canvasAttributes, extraHTML: globalData.extraHTML, globalStartFrame: globalData.globalStartFrame, globalStartTime: globalData.globalStartTime, sceneStartFrame: globalData.sceneStartFrame, sceneStartTime: globalData.sceneStartTime, userData: globalData.userData, volume: globalData.volume};
};
var $MartinSStewart$elm_audio$Audio$LoopConfig = F2(
	function (loopStart, loopEnd) {
		return {loopEnd: loopEnd, loopStart: loopStart};
	});
var $MartinSStewart$elm_audio$Audio$audioDefaultConfig = {loop: $elm$core$Maybe$Nothing, playbackRate: 1, startAt: $ianmackenzie$elm_units$Quantity$zero};
var $MartinSStewart$elm_audio$Audio$BasicAudio = function (a) {
	return {$: 'BasicAudio', a: a};
};
var $MartinSStewart$elm_audio$Audio$audioWithConfig = F3(
	function (audioSettings, source, startTime) {
		return $MartinSStewart$elm_audio$Audio$BasicAudio(
			{settings: audioSettings, source: source, startTime: startTime});
	});
var $MartinSStewart$elm_audio$Audio$audio = F2(
	function (source, startTime) {
		return A3($MartinSStewart$elm_audio$Audio$audioWithConfig, $MartinSStewart$elm_audio$Audio$audioDefaultConfig, source, startTime);
	});
var $linsyking$messenger_core$Messenger$Audio$Base$ALoop = {$: 'ALoop'};
var $linsyking$messenger_core$Messenger$Audio$Internal$removeFinishedAudio = F2(
	function (repo, t) {
		var playing = repo.playing;
		var newPlaying = A2(
			$elm$core$List$filter,
			function (pa) {
				return _Utils_eq(pa.opt, $linsyking$messenger_core$Messenger$Audio$Base$ALoop) || (_Utils_cmp(
					$elm$time$Time$posixToMillis(t) - $elm$time$Time$posixToMillis(pa.startTime),
					$elm$core$Basics$ceiling(
						$ianmackenzie$elm_units$Duration$inMilliseconds(pa.duration))) < 0);
			},
			playing);
		return _Utils_update(
			repo,
			{playing: newPlaying});
	});
var $linsyking$messenger_core$Messenger$Audio$Internal$playAudio = F5(
	function (rawrepo, channel, name, opt, t) {
		var repo = A2($linsyking$messenger_core$Messenger$Audio$Internal$removeFinishedAudio, rawrepo, t);
		var playing = repo.playing;
		var audio = A2($elm$core$Dict$get, name, repo.audio);
		if (audio.$ === 'Just') {
			var _v1 = audio.a;
			var source = _v1.a;
			var duration = _v1.b;
			if (opt.$ === 'ALoop') {
				var defaultConfig = $MartinSStewart$elm_audio$Audio$audioDefaultConfig;
				var audioWC = A3(
					$MartinSStewart$elm_audio$Audio$audioWithConfig,
					_Utils_update(
						defaultConfig,
						{
							loop: $elm$core$Maybe$Just(
								A2(
									$MartinSStewart$elm_audio$Audio$LoopConfig,
									$ianmackenzie$elm_units$Duration$seconds(0),
									duration))
						}),
					source,
					t);
				var newPA = {audio: audioWC, channel: channel, duration: duration, name: name, opt: opt, startTime: t};
				return _Utils_update(
					repo,
					{
						playing: A2($elm$core$List$cons, newPA, playing)
					});
			} else {
				var newPA = {
					audio: A2($MartinSStewart$elm_audio$Audio$audio, source, t),
					channel: channel,
					duration: duration,
					name: name,
					opt: opt,
					startTime: t
				};
				return _Utils_update(
					repo,
					{
						playing: A2($elm$core$List$cons, newPA, playing)
					});
			}
		} else {
			return repo;
		}
	});
var $linsyking$messenger_core$Messenger$Model$resetSceneStartTime = function (m) {
	var ogd = m.currentGlobalData;
	var ngd = _Utils_update(
		ogd,
		{sceneStartFrame: 0, sceneStartTime: 0});
	return _Utils_update(
		m,
		{currentGlobalData: ngd});
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $linsyking$messenger_core$Messenger$Audio$Internal$stopAudio = F3(
	function (rawrepo, t, s) {
		var repo = A2($linsyking$messenger_core$Messenger$Audio$Internal$removeFinishedAudio, rawrepo, t);
		var playing = repo.playing;
		var newPlaying = A2(
			$elm$core$List$filter,
			function (pa) {
				return !_Utils_eq(pa.channel, s);
			},
			playing);
		return _Utils_update(
			repo,
			{playing: newPlaying});
	});
var $linsyking$messenger_core$Messenger$UI$SOMHandler$handleSOM = F4(
	function (config, scenes, som, model) {
		var gd = model.currentGlobalData;
		var gdid = gd.internalData;
		switch (som.$) {
			case 'SOMChangeScene':
				var tm = som.a;
				var name = som.b;
				var ptrans = som.c;
				if (_Utils_eq(model.transition, $elm$core$Maybe$Nothing)) {
					if (ptrans.$ === 'Just') {
						var trans = ptrans.a;
						return A2($linsyking$messenger_core$Messenger$Scene$Loader$existScene, name, scenes) ? _Utils_Tuple3(
							_Utils_update(
								model,
								{
									transition: $elm$core$Maybe$Just(
										_Utils_Tuple2(
											trans,
											_Utils_Tuple2(name, tm)))
								}),
							_List_Nil,
							_List_Nil) : _Utils_Tuple3(
							model,
							_List_fromArray(
								[
									config.ports.alert('Scene' + (name + 'not found!'))
								]),
							_List_Nil);
					} else {
						return A2($linsyking$messenger_core$Messenger$Scene$Loader$existScene, name, scenes) ? _Utils_Tuple3(
							$linsyking$messenger_core$Messenger$Model$resetSceneStartTime(
								A4($linsyking$messenger_core$Messenger$Scene$Loader$loadSceneByName, name, scenes, tm, model)),
							_List_Nil,
							_List_Nil) : _Utils_Tuple3(
							model,
							_List_fromArray(
								[
									config.ports.alert('Scene' + (name + 'not found!'))
								]),
							_List_Nil);
					}
				} else {
					return _Utils_Tuple3(model, _List_Nil, _List_Nil);
				}
			case 'SOMPlayAudio':
				var ch = som.a;
				var name = som.b;
				var opt = som.c;
				var newRepo = A5($linsyking$messenger_core$Messenger$Audio$Internal$playAudio, gdid.audioRepo, ch, name, opt, gd.currentTimeStamp);
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{
							currentGlobalData: _Utils_update(
								gd,
								{
									internalData: _Utils_update(
										gdid,
										{audioRepo: newRepo})
								})
						}),
					_List_Nil,
					_List_Nil);
			case 'SOMSetVolume':
				var s = som.a;
				var newgd2 = _Utils_update(
					gd,
					{volume: s});
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{currentGlobalData: newgd2}),
					_List_Nil,
					_List_Nil);
			case 'SOMStopAudio':
				var ch = som.a;
				var newRepo = A3($linsyking$messenger_core$Messenger$Audio$Internal$stopAudio, gdid.audioRepo, gd.currentTimeStamp, ch);
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{
							currentGlobalData: _Utils_update(
								gd,
								{
									internalData: _Utils_update(
										gdid,
										{audioRepo: newRepo})
								})
						}),
					_List_Nil,
					_List_Nil);
			case 'SOMAlert':
				var text = som.a;
				return _Utils_Tuple3(
					model,
					_List_fromArray(
						[
							config.ports.alert(text)
						]),
					_List_Nil);
			case 'SOMPrompt':
				var name = som.a;
				var title = som.b;
				return _Utils_Tuple3(
					model,
					_List_fromArray(
						[
							config.ports.prompt(
							{name: name, title: title})
						]),
					_List_Nil);
			case 'SOMSaveGlobalData':
				var encodedGD = config.globalDataCodec.encode(
					$linsyking$messenger_core$Messenger$Base$globalDataToUserGlobalData(model.currentGlobalData));
				return _Utils_Tuple3(
					model,
					_List_fromArray(
						[
							config.ports.sendInfo(encodedGD)
						]),
					_List_Nil);
			case 'SOMSetContext':
				var ctx = som.a;
				var newgd = _Utils_update(
					gd,
					{currentScene: ctx.name, sceneStartFrame: ctx.sceneStartFrame, sceneStartTime: ctx.sceneStartTime});
				var newModel = _Utils_update(
					model,
					{currentGlobalData: newgd, currentScene: ctx.scene});
				return _Utils_Tuple3(newModel, _List_Nil, _List_Nil);
			default:
				var getter = som.a;
				var ctx = {name: gd.currentScene, scene: model.currentScene, sceneStartFrame: gd.sceneStartFrame, sceneStartTime: gd.sceneStartTime};
				var newgd = _Utils_update(
					gd,
					{
						userData: A2(getter, ctx, gd.userData)
					});
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{currentGlobalData: newgd}),
					_List_Nil,
					_List_Nil);
		}
	});
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $linsyking$messenger_core$Messenger$Base$loadedResourceNum = function (globalData) {
	return $elm$core$Dict$size(globalData.internalData.sprites) + $elm$core$Dict$size(globalData.internalData.audioRepo.audio);
};
var $linsyking$messenger_core$Messenger$Render$SpriteSheet$spriteSheetSize = function (sheet) {
	return A3(
		$elm$core$Dict$foldl,
		F3(
			function (_v0, v, acc) {
				return (acc + $elm$core$List$length(v)) - 1;
			}),
		0,
		sheet);
};
var $linsyking$messenger_core$Messenger$UserConfig$resourceNum = function (resources) {
	return ($elm$core$Dict$size(resources.allTexture) + $linsyking$messenger_core$Messenger$Render$SpriteSheet$spriteSheetSize(resources.allSpriteSheets)) + $elm$core$Dict$size(resources.allAudio);
};
var $linsyking$messenger_core$Messenger$Scene$Scene$unroll = function (_v0) {
	var un = _v0.a;
	return un;
};
var $linsyking$messenger_core$Messenger$Model$updateSceneTime = F2(
	function (m, delta) {
		var gd = m.currentGlobalData;
		var ngd = _Utils_update(
			gd,
			{sceneStartFrame: gd.sceneStartFrame + 1, sceneStartTime: gd.sceneStartTime + delta});
		return _Utils_update(
			m,
			{currentGlobalData: ngd});
	});
var $linsyking$messenger_core$Messenger$UI$Update$gameUpdate = F3(
	function (input, evnt, model) {
		if (_Utils_cmp(
			$linsyking$messenger_core$Messenger$Base$loadedResourceNum(model.currentGlobalData),
			$linsyking$messenger_core$Messenger$UserConfig$resourceNum(input.resources)) < 0) {
			return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
		} else {
			var scenes = input.scenes;
			var config = input.config;
			var somHandler = A2($linsyking$messenger_core$Messenger$UI$SOMHandler$handleSOM, config, scenes);
			var _v0 = A2(
				$linsyking$messenger_core$Messenger$Scene$Scene$unroll(model.currentScene).update,
				A2($linsyking$messenger_core$Messenger$Base$Env, model.currentGlobalData, _Utils_Tuple0),
				evnt);
			var sdt = _v0.a;
			var som = _v0.b;
			var newenv = _v0.c;
			var updatedModel1 = _Utils_update(
				model,
				{currentGlobalData: newenv.globalData, currentScene: sdt});
			var timeUpdatedModel = function () {
				if (evnt.$ === 'Tick') {
					var delta = evnt.a;
					return A2($linsyking$messenger_core$Messenger$Model$updateSceneTime, updatedModel1, delta);
				} else {
					return updatedModel1;
				}
			}();
			var _v1 = A3(
				$elm$core$List$foldl,
				F2(
					function (singleSOM, _v2) {
						var lastModel = _v2.a;
						var lastCmds = _v2.b;
						var lastAudioCmds = _v2.c;
						var _v3 = A2(somHandler, singleSOM, lastModel);
						var newModel = _v3.a;
						var newCmds = _v3.b;
						var newAudioCmds = _v3.c;
						return _Utils_Tuple3(
							newModel,
							_Utils_ap(newCmds, lastCmds),
							_Utils_ap(newAudioCmds, lastAudioCmds));
					}),
				_Utils_Tuple3(timeUpdatedModel, _List_Nil, _List_Nil),
				som);
			var updatedModel2 = _v1.a;
			var cmds = _v1.b;
			var audiocmds = _v1.c;
			var updatedModel3 = function () {
				var _v4 = updatedModel2.transition;
				if (_v4.$ === 'Just') {
					var _v5 = _v4.a;
					var trans = _v5.a;
					var _v6 = _v5.b;
					var name = _v6.a;
					var tm = _v6.b;
					return _Utils_eq(trans.currentTransition, trans.outT) ? $linsyking$messenger_core$Messenger$Model$resetSceneStartTime(
						A4($linsyking$messenger_core$Messenger$Scene$Loader$loadSceneByName, name, scenes, tm, updatedModel2)) : updatedModel2;
				} else {
					return updatedModel2;
				}
			}();
			return _Utils_Tuple3(
				updatedModel3,
				$elm$core$Platform$Cmd$batch(cmds),
				$MartinSStewart$elm_audio$Audio$cmdBatch(audiocmds));
		}
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $MartinSStewart$elm_audio$Audio$length = F2(
	function (_v0, source) {
		var audioData_ = _v0.a;
		return A2(
			$elm$core$Maybe$withDefault,
			$ianmackenzie$elm_units$Quantity$zero,
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.duration;
				},
				A2(
					$elm$core$Dict$get,
					$MartinSStewart$elm_audio$Audio$rawBufferId(
						$MartinSStewart$elm_audio$Audio$audioSourceBufferId(source)),
					audioData_.sourceData)));
	});
var $elm$core$Set$remove = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$remove, key, dict));
	});
var $linsyking$messenger_core$Messenger$Resources$Base$saveSprite = F3(
	function (dst, name, text) {
		return A3($elm$core$Dict$insert, name, text, dst);
	});
var $linsyking$elm_canvas$Canvas$Internal$Texture$TSprite = F2(
	function (a, b) {
		return {$: 'TSprite', a: a, b: b};
	});
var $linsyking$elm_canvas$Canvas$Texture$sprite = F2(
	function (data, texture) {
		if (texture.$ === 'TImage') {
			var image = texture.a;
			return A2($linsyking$elm_canvas$Canvas$Internal$Texture$TSprite, data, image);
		} else {
			var image = texture.b;
			return A2($linsyking$elm_canvas$Canvas$Internal$Texture$TSprite, data, image);
		}
	});
var $elm$core$String$toFloat = _String_toFloat;
var $linsyking$messenger_core$Messenger$UI$Update$update = F4(
	function (input, audiodata, msg, model) {
		var scenes = input.scenes;
		var resources = input.resources;
		var gd = model.currentGlobalData;
		var gdid = gd.internalData;
		var gameUpdateInner = $linsyking$messenger_core$Messenger$UI$Update$gameUpdate(input);
		var config = input.config;
		switch (msg.$) {
			case 'TextureLoaded':
				if (msg.b.$ === 'Nothing') {
					var name = msg.a;
					var _v1 = msg.b;
					return _Utils_Tuple3(
						model,
						config.ports.alert('Failed to load sprite ' + name),
						$MartinSStewart$elm_audio$Audio$cmdNone);
				} else {
					var name = msg.a;
					var t = msg.b.a;
					var newgd = function () {
						var _v2 = A2($elm$core$Dict$get, name, resources.allSpriteSheets);
						if (_v2.$ === 'Just') {
							var sprites = _v2.a;
							return A3(
								$elm$core$List$foldl,
								F2(
									function (_v3, lastgd) {
										var n = _v3.a;
										var s = _v3.b;
										var oldIT = lastgd.internalData;
										var _v4 = s.realStartPoint;
										var x = _v4.a;
										var y = _v4.b;
										var _v5 = s.realSize;
										var w = _v5.a;
										var h = _v5.b;
										var newTexture = A2(
											$linsyking$elm_canvas$Canvas$Texture$sprite,
											{height: h, width: w, x: x, y: y},
											t);
										var newIT = _Utils_update(
											oldIT,
											{
												sprites: A3($linsyking$messenger_core$Messenger$Resources$Base$saveSprite, oldIT.sprites, name + ('.' + n), newTexture)
											});
										return _Utils_update(
											lastgd,
											{internalData: newIT});
									}),
								gd,
								sprites);
						} else {
							var newIT = _Utils_update(
								gdid,
								{
									sprites: A3($linsyking$messenger_core$Messenger$Resources$Base$saveSprite, gdid.sprites, name, t)
								});
							return _Utils_update(
								gd,
								{internalData: newIT});
						}
					}();
					return _Utils_Tuple3(
						_Utils_update(
							model,
							{currentGlobalData: newgd}),
						$elm$core$Platform$Cmd$none,
						$MartinSStewart$elm_audio$Audio$cmdNone);
				}
			case 'SoundLoaded':
				var name = msg.a;
				var result = msg.b;
				if (result.$ === 'Ok') {
					var sound = result.a;
					var ar = gdid.audioRepo;
					var ard = A3(
						$elm$core$Dict$insert,
						name,
						_Utils_Tuple2(
							sound,
							A2($MartinSStewart$elm_audio$Audio$length, audiodata, sound)),
						ar.audio);
					return _Utils_Tuple3(
						_Utils_update(
							model,
							{
								currentGlobalData: _Utils_update(
									gd,
									{
										internalData: _Utils_update(
											gdid,
											{
												audioRepo: _Utils_update(
													ar,
													{audio: ard})
											})
									})
							}),
						$elm$core$Platform$Cmd$none,
						$MartinSStewart$elm_audio$Audio$cmdNone);
				} else {
					return _Utils_Tuple3(
						model,
						config.ports.alert('Failed to load audio ' + name),
						$MartinSStewart$elm_audio$Audio$cmdNone);
				}
			case 'NewWindowSize':
				var t = msg.a;
				var oldIT = gd.internalData;
				var _v7 = A2(
					$linsyking$messenger_core$Messenger$Coordinate$Coordinates$maxHandW,
					_Utils_Tuple2(gd.internalData.virtualWidth, gd.internalData.virtualHeight),
					t);
				var gw = _v7.a;
				var gh = _v7.b;
				var _v8 = A2(
					$linsyking$messenger_core$Messenger$Coordinate$Coordinates$getStartPoint,
					_Utils_Tuple2(gd.internalData.virtualWidth, gd.internalData.virtualHeight),
					t);
				var fl = _v8.a;
				var ft = _v8.b;
				var newIT = _Utils_update(
					oldIT,
					{browserViewPort: t, realHeight: gh, realWidth: gw, startLeft: fl, startTop: ft});
				var newgd = _Utils_update(
					gd,
					{internalData: newIT});
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{currentGlobalData: newgd}),
					$elm$core$Platform$Cmd$none,
					$MartinSStewart$elm_audio$Audio$cmdNone);
			case 'WindowVisibility':
				var v = msg.a;
				var newgd = _Utils_update(
					gd,
					{pressedKeys: $elm$core$Set$empty, pressedMouseButtons: $elm$core$Set$empty, windowVisibility: v});
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{currentGlobalData: newgd}),
					$elm$core$Platform$Cmd$none,
					$MartinSStewart$elm_audio$Audio$cmdNone);
			case 'MouseMove':
				var _v9 = msg.a;
				var px = _v9.a;
				var py = _v9.b;
				var mp = A2(
					$linsyking$messenger_core$Messenger$Coordinate$Coordinates$fromMouseToVirtual,
					gd,
					_Utils_Tuple2(px, py));
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{
							currentGlobalData: _Utils_update(
								gd,
								{mousePos: mp})
						}),
					$elm$core$Platform$Cmd$none,
					$MartinSStewart$elm_audio$Audio$cmdNone);
			case 'WMouseDown':
				var e = msg.a;
				var pos = msg.b;
				var newPressedMouseButtons = A2($elm$core$Set$insert, e, gd.pressedMouseButtons);
				var newModel = _Utils_update(
					model,
					{
						currentGlobalData: _Utils_update(
							gd,
							{pressedMouseButtons: newPressedMouseButtons})
					});
				return A2(
					gameUpdateInner,
					A2(
						$linsyking$messenger_core$Messenger$Base$MouseDown,
						e,
						A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$fromMouseToVirtual, newModel.currentGlobalData, pos)),
					newModel);
			case 'WMouseUp':
				var e = msg.a;
				var pos = msg.b;
				var newPressedMouseButtons = A2($elm$core$Set$remove, e, gd.pressedMouseButtons);
				var newModel = _Utils_update(
					model,
					{
						currentGlobalData: _Utils_update(
							gd,
							{pressedMouseButtons: newPressedMouseButtons})
					});
				return A2(
					gameUpdateInner,
					A2(
						$linsyking$messenger_core$Messenger$Base$MouseUp,
						e,
						A2($linsyking$messenger_core$Messenger$Coordinate$Coordinates$fromMouseToVirtual, newModel.currentGlobalData, pos)),
					newModel);
			case 'WKeyUp':
				var key = msg.a;
				var newPressedKeys = A2($elm$core$Set$remove, key, gd.pressedKeys);
				return A2(
					gameUpdateInner,
					$linsyking$messenger_core$Messenger$Base$KeyUp(key),
					_Utils_update(
						model,
						{
							currentGlobalData: _Utils_update(
								gd,
								{pressedKeys: newPressedKeys})
						}));
			case 'WKeyDown':
				switch (msg.a) {
					case 112:
						return config.debug ? _Utils_Tuple3(
							model,
							config.ports.prompt(
								{name: 'load', title: 'Enter the scene you want to load'}),
							$MartinSStewart$elm_audio$Audio$cmdNone) : A2(
							gameUpdateInner,
							$linsyking$messenger_core$Messenger$Base$KeyDown(112),
							model);
					case 113:
						return config.debug ? _Utils_Tuple3(
							model,
							config.ports.prompt(
								{name: 'setVolume', title: 'Set volume (0-1)'}),
							$MartinSStewart$elm_audio$Audio$cmdNone) : A2(
							gameUpdateInner,
							$linsyking$messenger_core$Messenger$Base$KeyDown(113),
							model);
					default:
						var key = msg.a;
						var newPressedKeys = A2($elm$core$Set$insert, key, gd.pressedKeys);
						return A2(
							gameUpdateInner,
							$linsyking$messenger_core$Messenger$Base$KeyDown(key),
							_Utils_update(
								model,
								{
									currentGlobalData: _Utils_update(
										gd,
										{pressedKeys: newPressedKeys})
								}));
				}
			case 'WPrompt':
				switch (msg.a) {
					case 'load':
						var result = msg.b;
						return A2($linsyking$messenger_core$Messenger$Scene$Loader$existScene, result, scenes) ? _Utils_Tuple3(
							$linsyking$messenger_core$Messenger$Model$resetSceneStartTime(
								A4($linsyking$messenger_core$Messenger$Scene$Loader$loadSceneByName, result, scenes, $elm$core$Maybe$Nothing, model)),
							$elm$core$Platform$Cmd$none,
							$MartinSStewart$elm_audio$Audio$cmdNone) : _Utils_Tuple3(
							model,
							config.ports.alert('Scene not found!'),
							$MartinSStewart$elm_audio$Audio$cmdNone);
					case 'setVolume':
						var result = msg.b;
						var vol = $elm$core$String$toFloat(result);
						if (vol.$ === 'Just') {
							var v = vol.a;
							var newGd = _Utils_update(
								gd,
								{volume: v});
							return _Utils_Tuple3(
								_Utils_update(
									model,
									{currentGlobalData: newGd}),
								$elm$core$Platform$Cmd$none,
								$MartinSStewart$elm_audio$Audio$cmdNone);
						} else {
							return _Utils_Tuple3(
								model,
								config.ports.alert('Not a number'),
								$MartinSStewart$elm_audio$Audio$cmdNone);
						}
					default:
						var name = msg.a;
						var result = msg.b;
						return A2(
							gameUpdateInner,
							A2($linsyking$messenger_core$Messenger$Base$Prompt, name, result),
							model);
				}
			case 'WTick':
				var delta = msg.a;
				var trans = model.transition;
				var timeInterval = $elm$time$Time$posixToMillis(delta) - $elm$time$Time$posixToMillis(gd.currentTimeStamp);
				var newTrans = function () {
					if (trans.$ === 'Just') {
						var _v12 = trans.a;
						var data = _v12.a;
						var sd = _v12.b;
						return (_Utils_cmp(data.currentTransition, data.inT + data.outT) > -1) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
							_Utils_Tuple2(
								_Utils_update(
									data,
									{currentTransition: data.currentTransition + timeInterval}),
								sd));
					} else {
						return trans;
					}
				}();
				var newGD = _Utils_update(
					gd,
					{currentTimeStamp: delta, globalStartFrame: gd.globalStartFrame + 1, globalStartTime: gd.globalStartTime + timeInterval});
				return A2(
					gameUpdateInner,
					$linsyking$messenger_core$Messenger$Base$Tick(timeInterval),
					_Utils_update(
						model,
						{currentGlobalData: newGD, transition: newTrans}));
			case 'NullEvent':
				return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $MartinSStewart$elm_audio$Audio$cmdNone);
			default:
				var x = msg.a;
				return A2(
					gameUpdateInner,
					$linsyking$messenger_core$Messenger$Base$MouseWheel(x),
					model);
		}
	});
var $linsyking$messenger_core$Messenger$Base$WMouseWheel = function (a) {
	return {$: 'WMouseWheel', a: a};
};
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$core$String$fromFloat = _String_fromNumber;
var $linsyking$messenger_core$Messenger$Base$TextureLoaded = F2(
	function (a, b) {
		return {$: 'TextureLoaded', a: a, b: b};
	});
var $linsyking$elm_canvas$Canvas$Internal$Texture$TSImageUrl = F2(
	function (a, b) {
		return {$: 'TSImageUrl', a: a, b: b};
	});
var $linsyking$elm_canvas$Canvas$Texture$loadFromImageUrl = F2(
	function (url, onLoad) {
		return A2($linsyking$elm_canvas$Canvas$Internal$Texture$TSImageUrl, url, onLoad);
	});
var $linsyking$messenger_core$Messenger$Resources$Base$getTexture = function (res) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var x = _v0.a;
			var y = _v0.b;
			return A2(
				$linsyking$elm_canvas$Canvas$Texture$loadFromImageUrl,
				y,
				$linsyking$messenger_core$Messenger$Base$TextureLoaded(x));
		},
		$elm$core$Dict$toList(res.allTexture));
};
var $linsyking$messenger_core$Messenger$Scene$Transition$makeTransition = F3(
	function (gd, trans, ren) {
		if (trans.$ === 'Just') {
			var data = trans.a;
			return (_Utils_cmp(data.currentTransition, data.outT) < 0) ? A3(data.outTrans, gd, ren, data.currentTransition / data.outT) : ((_Utils_cmp(data.currentTransition, data.outT + data.inT) < 0) ? A3(data.inTrans, gd, ren, (data.currentTransition - data.outT) / data.inT) : ren);
		} else {
			return ren;
		}
	});
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$html$Html$canvas = _VirtualDom_node('canvas');
var $linsyking$elm_canvas$Canvas$cnvs = A2($elm$html$Html$canvas, _List_Nil, _List_Nil);
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlJson(value));
	});
var $elm$html$Html$Attributes$property = $elm$virtual_dom$VirtualDom$property;
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$commands = function (list) {
	return A2(
		$elm$html$Html$Attributes$property,
		'cmds',
		A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, list));
};
var $elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		$elm$core$String$fromInt(n));
};
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$empty = _List_Nil;
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$beginPath = A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'beginPath', _List_Nil);
var $elm$core$Tuple$mapBoth = F3(
	function (funcA, funcB, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			funcA(x),
			funcB(y));
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $avh4$elm_color$Color$toCssString = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var roundTo = function (x) {
		return $elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return $elm$core$Basics$round(x * 10000) / 100;
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				$elm$core$String$fromFloat(
				pct(r)),
				'%,',
				$elm$core$String$fromFloat(
				pct(g)),
				'%,',
				$elm$core$String$fromFloat(
				pct(b)),
				'%,',
				$elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$var = F3(
	function (name, init, modifiers) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('variable')),
					_Utils_Tuple2(
					'field',
					$elm$json$Json$Encode$string(name)),
					_Utils_Tuple2('init', init),
					_Utils_Tuple2(
					'modifiers',
					A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, modifiers))
				]));
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$encodeStyle = F2(
	function (fieldKey, style) {
		var adaptStops = $elm$core$List$map(
			A2(
				$elm$core$Basics$composeL,
				A2(
					$elm$core$Basics$composeL,
					$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn('addColorStop'),
					function (_v1) {
						var offset = _v1.a;
						var color = _v1.b;
						return _List_fromArray(
							[offset, color]);
					}),
				A2(
					$elm$core$Tuple$mapBoth,
					$elm$json$Json$Encode$float,
					A2($elm$core$Basics$composeR, $avh4$elm_color$Color$toCssString, $elm$json$Json$Encode$string))));
		switch (style.$) {
			case 'Color':
				var color = style.a;
				return A2(
					$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
					fieldKey,
					$elm$json$Json$Encode$string(
						$avh4$elm_color$Color$toCssString(color)));
			case 'LinearGradient':
				var spec = style.a;
				var stops = style.b;
				return A3(
					$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$var,
					fieldKey,
					A2(
						$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
						'createLinearGradient',
						_List_fromArray(
							[
								$elm$json$Json$Encode$float(spec.x0),
								$elm$json$Json$Encode$float(spec.y0),
								$elm$json$Json$Encode$float(spec.x1),
								$elm$json$Json$Encode$float(spec.y1)
							])),
					adaptStops(stops));
			default:
				var spec = style.a;
				var stops = style.b;
				return A3(
					$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$var,
					fieldKey,
					A2(
						$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
						'createRadialGradient',
						_List_fromArray(
							[
								$elm$json$Json$Encode$float(spec.x0),
								$elm$json$Json$Encode$float(spec.y0),
								$elm$json$Json$Encode$float(spec.rad0),
								$elm$json$Json$Encode$float(spec.x1),
								$elm$json$Json$Encode$float(spec.y1),
								$elm$json$Json$Encode$float(spec.rad1)
							])),
					adaptStops(stops));
		}
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyleEx = $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$encodeStyle('fillStyle');
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$clearRect = F4(
	function (x, y, width, height) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'clearRect',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y),
					$elm$json$Json$Encode$float(width),
					$elm$json$Json$Encode$float(height)
				]));
	});
var $linsyking$elm_canvas$Canvas$renderClear = F4(
	function (_v0, w, h, cmds) {
		var x = _v0.a;
		var y = _v0.b;
		return A2(
			$elm$core$List$cons,
			A4($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$clearRect, x, y, w, h),
			cmds);
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc = F6(
	function (x, y, radius, startAngle, endAngle, anticlockwise) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'arc',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y),
					$elm$json$Json$Encode$float(radius),
					$elm$json$Json$Encode$float(startAngle),
					$elm$json$Json$Encode$float(endAngle),
					$elm$json$Json$Encode$bool(anticlockwise)
				]));
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$circle = F3(
	function (x, y, r) {
		return A6($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc, x, y, r, 0, 2 * $elm$core$Basics$pi, false);
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo = F2(
	function (x, y) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'moveTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$rect = F4(
	function (x, y, w, h) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'rect',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y),
					$elm$json$Json$Encode$float(w),
					$elm$json$Json$Encode$float(h)
				]));
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$arcTo = F5(
	function (x1, y1, x2, y2, radius) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'arcTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x1),
					$elm$json$Json$Encode$float(y1),
					$elm$json$Json$Encode$float(x2),
					$elm$json$Json$Encode$float(y2),
					$elm$json$Json$Encode$float(radius)
				]));
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$bezierCurveTo = F6(
	function (cp1x, cp1y, cp2x, cp2y, x, y) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'bezierCurveTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(cp1x),
					$elm$json$Json$Encode$float(cp1y),
					$elm$json$Json$Encode$float(cp2x),
					$elm$json$Json$Encode$float(cp2y),
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineTo = F2(
	function (x, y) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'lineTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$quadraticCurveTo = F4(
	function (cpx, cpy, x, y) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'quadraticCurveTo',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(cpx),
					$elm$json$Json$Encode$float(cpy),
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y)
				]));
	});
var $linsyking$elm_canvas$Canvas$renderLineSegment = F2(
	function (segment, cmds) {
		switch (segment.$) {
			case 'ArcTo':
				var _v1 = segment.a;
				var x = _v1.a;
				var y = _v1.b;
				var _v2 = segment.b;
				var x2 = _v2.a;
				var y2 = _v2.b;
				var radius = segment.c;
				return A2(
					$elm$core$List$cons,
					A5($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$arcTo, x, y, x2, y2, radius),
					cmds);
			case 'BezierCurveTo':
				var _v3 = segment.a;
				var cp1x = _v3.a;
				var cp1y = _v3.b;
				var _v4 = segment.b;
				var cp2x = _v4.a;
				var cp2y = _v4.b;
				var _v5 = segment.c;
				var x = _v5.a;
				var y = _v5.b;
				return A2(
					$elm$core$List$cons,
					A6($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$bezierCurveTo, cp1x, cp1y, cp2x, cp2y, x, y),
					cmds);
			case 'LineTo':
				var _v6 = segment.a;
				var x = _v6.a;
				var y = _v6.b;
				return A2(
					$elm$core$List$cons,
					A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineTo, x, y),
					cmds);
			case 'MoveTo':
				var _v7 = segment.a;
				var x = _v7.a;
				var y = _v7.b;
				return A2(
					$elm$core$List$cons,
					A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
					cmds);
			default:
				var _v8 = segment.a;
				var cpx = _v8.a;
				var cpy = _v8.b;
				var _v9 = segment.b;
				var x = _v9.a;
				var y = _v9.b;
				return A2(
					$elm$core$List$cons,
					A4($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$quadraticCurveTo, cpx, cpy, x, y),
					cmds);
		}
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$roundRect = F5(
	function (x, y, w, h, r) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'roundRect',
			_List_fromArray(
				[
					$elm$json$Json$Encode$float(x),
					$elm$json$Json$Encode$float(y),
					$elm$json$Json$Encode$float(w),
					$elm$json$Json$Encode$float(h),
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$float, r)
				]));
	});
var $linsyking$elm_canvas$Canvas$renderShape = F2(
	function (shape, cmds) {
		switch (shape.$) {
			case 'Rect':
				var _v1 = shape.a;
				var x = _v1.a;
				var y = _v1.b;
				var w = shape.b;
				var h = shape.c;
				return A2(
					$elm$core$List$cons,
					A4($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$rect, x, y, w, h),
					A2(
						$elm$core$List$cons,
						A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
						cmds));
			case 'RoundRect':
				var _v2 = shape.a;
				var x = _v2.a;
				var y = _v2.b;
				var w = shape.b;
				var h = shape.c;
				var r = shape.d;
				return A2(
					$elm$core$List$cons,
					A5($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$roundRect, x, y, w, h, r),
					A2(
						$elm$core$List$cons,
						A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
						cmds));
			case 'Circle':
				var _v3 = shape.a;
				var x = _v3.a;
				var y = _v3.b;
				var r = shape.b;
				return A2(
					$elm$core$List$cons,
					A3($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$circle, x, y, r),
					A2(
						$elm$core$List$cons,
						A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x + r, y),
						cmds));
			case 'Path':
				var _v4 = shape.a;
				var x = _v4.a;
				var y = _v4.b;
				var segments = shape.b;
				return A3(
					$elm$core$List$foldl,
					$linsyking$elm_canvas$Canvas$renderLineSegment,
					A2(
						$elm$core$List$cons,
						A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
						cmds),
					segments);
			default:
				var _v5 = shape.a;
				var x = _v5.a;
				var y = _v5.b;
				var radius = shape.b;
				var startAngle = shape.c;
				var endAngle = shape.d;
				var anticlockwise = shape.e;
				return A2(
					$elm$core$List$cons,
					A2(
						$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo,
						x + (radius * $elm$core$Basics$cos(endAngle)),
						y + (radius * $elm$core$Basics$sin(endAngle))),
					A2(
						$elm$core$List$cons,
						A6($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc, x, y, radius, startAngle, endAngle, anticlockwise),
						A2(
							$elm$core$List$cons,
							A2(
								$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo,
								x + (radius * $elm$core$Basics$cos(startAngle)),
								y + (radius * $elm$core$Basics$sin(startAngle))),
							cmds)));
		}
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$NonZero = {$: 'NonZero'};
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillRuleToString = function (fillRule) {
	if (fillRule.$ === 'NonZero') {
		return 'nonzero';
	} else {
		return 'evenodd';
	}
};
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fill = function (fillRule) {
	return A2(
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
		'fill',
		_List_fromArray(
			[
				$elm$json$Json$Encode$string(
				$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillRuleToString(fillRule))
			]));
};
var $linsyking$elm_canvas$Canvas$renderShapeFill = F2(
	function (maybeStyle, cmds) {
		return A2(
			$elm$core$List$cons,
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fill($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$NonZero),
			function () {
				if (maybeStyle.$ === 'Just') {
					var style = maybeStyle.a;
					return A2(
						$elm$core$List$cons,
						$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyleEx(style),
						cmds);
				} else {
					return cmds;
				}
			}());
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$stroke = A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'stroke', _List_Nil);
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyleEx = $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$encodeStyle('strokeStyle');
var $linsyking$elm_canvas$Canvas$renderShapeStroke = F2(
	function (maybeStyle, cmds) {
		return A2(
			$elm$core$List$cons,
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$stroke,
			function () {
				if (maybeStyle.$ === 'Just') {
					var style = maybeStyle.a;
					return A2(
						$elm$core$List$cons,
						$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyleEx(style),
						cmds);
				} else {
					return cmds;
				}
			}());
	});
var $linsyking$elm_canvas$Canvas$renderShapeDrawOp = F2(
	function (drawOp, cmds) {
		switch (drawOp.$) {
			case 'NotSpecified':
				return A2(
					$linsyking$elm_canvas$Canvas$renderShapeStroke,
					$elm$core$Maybe$Nothing,
					A2($linsyking$elm_canvas$Canvas$renderShapeFill, $elm$core$Maybe$Nothing, cmds));
			case 'Fill':
				var c = drawOp.a;
				return A2(
					$linsyking$elm_canvas$Canvas$renderShapeFill,
					$elm$core$Maybe$Just(c),
					cmds);
			case 'Stroke':
				var c = drawOp.a;
				return A2(
					$linsyking$elm_canvas$Canvas$renderShapeStroke,
					$elm$core$Maybe$Just(c),
					cmds);
			default:
				var fc = drawOp.a;
				var sc = drawOp.b;
				return A2(
					$linsyking$elm_canvas$Canvas$renderShapeStroke,
					$elm$core$Maybe$Just(sc),
					A2(
						$linsyking$elm_canvas$Canvas$renderShapeFill,
						$elm$core$Maybe$Just(fc),
						cmds));
		}
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillText = F4(
	function (text, x, y, maybeMaxWidth) {
		if (maybeMaxWidth.$ === 'Nothing') {
			return A2(
				$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'fillText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y)
					]));
		} else {
			var maxWidth = maybeMaxWidth.a;
			return A2(
				$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'fillText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y),
						$elm$json$Json$Encode$float(maxWidth)
					]));
		}
	});
var $linsyking$elm_canvas$Canvas$renderTextFill = F5(
	function (txt, x, y, maybeStyle, cmds) {
		return A2(
			$elm$core$List$cons,
			A4($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillText, txt.text, x, y, txt.maxWidth),
			function () {
				if (maybeStyle.$ === 'Just') {
					var style = maybeStyle.a;
					return A2(
						$elm$core$List$cons,
						$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyleEx(style),
						cmds);
				} else {
					return cmds;
				}
			}());
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText = F4(
	function (text, x, y, maybeMaxWidth) {
		if (maybeMaxWidth.$ === 'Nothing') {
			return A2(
				$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'strokeText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y)
					]));
		} else {
			var maxWidth = maybeMaxWidth.a;
			return A2(
				$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'strokeText',
				_List_fromArray(
					[
						$elm$json$Json$Encode$string(text),
						$elm$json$Json$Encode$float(x),
						$elm$json$Json$Encode$float(y),
						$elm$json$Json$Encode$float(maxWidth)
					]));
		}
	});
var $linsyking$elm_canvas$Canvas$renderTextStroke = F5(
	function (txt, x, y, maybeStyle, cmds) {
		return A2(
			$elm$core$List$cons,
			A4($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText, txt.text, x, y, txt.maxWidth),
			function () {
				if (maybeStyle.$ === 'Just') {
					var style = maybeStyle.a;
					return A2(
						$elm$core$List$cons,
						$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyleEx(style),
						cmds);
				} else {
					return cmds;
				}
			}());
	});
var $linsyking$elm_canvas$Canvas$renderTextDrawOp = F3(
	function (drawOp, txt, cmds) {
		var _v0 = txt.point;
		var x = _v0.a;
		var y = _v0.b;
		switch (drawOp.$) {
			case 'NotSpecified':
				return A5(
					$linsyking$elm_canvas$Canvas$renderTextStroke,
					txt,
					x,
					y,
					$elm$core$Maybe$Nothing,
					A5($linsyking$elm_canvas$Canvas$renderTextFill, txt, x, y, $elm$core$Maybe$Nothing, cmds));
			case 'Fill':
				var fill = drawOp.a;
				return A5(
					$linsyking$elm_canvas$Canvas$renderTextFill,
					txt,
					x,
					y,
					$elm$core$Maybe$Just(fill),
					cmds);
			case 'Stroke':
				var stroke = drawOp.a;
				return A5(
					$linsyking$elm_canvas$Canvas$renderTextStroke,
					txt,
					x,
					y,
					$elm$core$Maybe$Just(stroke),
					cmds);
			default:
				var fill = drawOp.a;
				var stroke = drawOp.b;
				return A5(
					$linsyking$elm_canvas$Canvas$renderTextStroke,
					txt,
					x,
					y,
					$elm$core$Maybe$Just(stroke),
					A5(
						$linsyking$elm_canvas$Canvas$renderTextFill,
						txt,
						x,
						y,
						$elm$core$Maybe$Just(fill),
						cmds));
		}
	});
var $linsyking$elm_canvas$Canvas$renderText = F3(
	function (drawOp, txt, cmds) {
		return A3($linsyking$elm_canvas$Canvas$renderTextDrawOp, drawOp, txt, cmds);
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage = F9(
	function (sx, sy, sw, sh, dx, dy, dw, dh, imageObj) {
		return A2(
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'drawImage',
			_List_fromArray(
				[
					imageObj,
					$elm$json$Json$Encode$float(sx),
					$elm$json$Json$Encode$float(sy),
					$elm$json$Json$Encode$float(sw),
					$elm$json$Json$Encode$float(sh),
					$elm$json$Json$Encode$float(dx),
					$elm$json$Json$Encode$float(dy),
					$elm$json$Json$Encode$float(dw),
					$elm$json$Json$Encode$float(dh)
				]));
	});
var $linsyking$elm_canvas$Canvas$Internal$Texture$drawTexture = F4(
	function (x, y, t, cmds) {
		return A2(
			$elm$core$List$cons,
			function () {
				if (t.$ === 'TImage') {
					var image = t.a;
					return A9($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage, 0, 0, image.width, image.height, x, y, image.width, image.height, image.json);
				} else {
					var sprite = t.a;
					var image = t.b;
					return A9($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage, sprite.x, sprite.y, sprite.width, sprite.height, x, y, sprite.width, sprite.height, image.json);
				}
			}(),
			cmds);
	});
var $linsyking$elm_canvas$Canvas$renderTexture = F3(
	function (_v0, t, cmds) {
		var x = _v0.a;
		var y = _v0.b;
		return A4($linsyking$elm_canvas$Canvas$Internal$Texture$drawTexture, x, y, t, cmds);
	});
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$restore = A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'restore', _List_Nil);
var $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$save = A2($linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'save', _List_Nil);
var $linsyking$elm_canvas$Canvas$renderDrawable = F3(
	function (drawable, drawOp, cmds) {
		switch (drawable.$) {
			case 'DrawableText':
				var txt = drawable.a;
				return A3($linsyking$elm_canvas$Canvas$renderText, drawOp, txt, cmds);
			case 'DrawableShapes':
				var ss = drawable.a;
				return A2(
					$linsyking$elm_canvas$Canvas$renderShapeDrawOp,
					drawOp,
					A3(
						$elm$core$List$foldl,
						$linsyking$elm_canvas$Canvas$renderShape,
						A2($elm$core$List$cons, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$beginPath, cmds),
						ss));
			case 'DrawableTexture':
				var p = drawable.a;
				var t = drawable.b;
				return A3($linsyking$elm_canvas$Canvas$renderTexture, p, t, cmds);
			case 'DrawableClear':
				var p = drawable.a;
				var w = drawable.b;
				var h = drawable.c;
				return A4($linsyking$elm_canvas$Canvas$renderClear, p, w, h, cmds);
			case 'DrawableGroup':
				var renderables = drawable.a;
				return A3($linsyking$elm_canvas$Canvas$renderGroup, drawOp, renderables, cmds);
			default:
				return cmds;
		}
	});
var $linsyking$elm_canvas$Canvas$renderGroup = F3(
	function (drawOp, renderables, cmds) {
		var cmdsWithDraw = function () {
			switch (drawOp.$) {
				case 'NotSpecified':
					return cmds;
				case 'Fill':
					var fill = drawOp.a;
					return A2(
						$elm$core$List$cons,
						$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyleEx(fill),
						cmds);
				case 'Stroke':
					var stroke = drawOp.a;
					return A2(
						$elm$core$List$cons,
						$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyleEx(stroke),
						cmds);
				default:
					var fc = drawOp.a;
					var sc = drawOp.b;
					return A2(
						$elm$core$List$cons,
						$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyleEx(fc),
						A2(
							$elm$core$List$cons,
							$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyleEx(sc),
							cmds));
			}
		}();
		return A3(
			$elm$core$List$foldl,
			$linsyking$elm_canvas$Canvas$renderOne(drawOp),
			cmdsWithDraw,
			renderables);
	});
var $linsyking$elm_canvas$Canvas$renderOne = F3(
	function (parentDrawOp, _v0, cmds) {
		var commands = _v0.a.commands;
		var drawable = _v0.a.drawable;
		var drawOp = _v0.a.drawOp;
		return A2(
			$elm$core$List$cons,
			$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$restore,
			A3(
				$linsyking$elm_canvas$Canvas$renderDrawable,
				drawable,
				A2($linsyking$elm_canvas$Canvas$mergeDrawOp, parentDrawOp, drawOp),
				_Utils_ap(
					commands,
					A2($elm$core$List$cons, $linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$save, cmds))));
	});
var $linsyking$elm_canvas$Canvas$render = function (entities) {
	return A3(
		$elm$core$List$foldl,
		$linsyking$elm_canvas$Canvas$renderOne($linsyking$elm_canvas$Canvas$Internal$Canvas$NotSpecified),
		$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$empty,
		entities);
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $linsyking$elm_canvas$Canvas$Internal$Texture$TImage = function (a) {
	return {$: 'TImage', a: a};
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $linsyking$elm_canvas$Canvas$Internal$Texture$decodeTextureImage = A2(
	$elm$json$Json$Decode$andThen,
	function (image) {
		return A4(
			$elm$json$Json$Decode$map3,
			F3(
				function (tagName, width, height) {
					return (tagName === 'IMG') ? $elm$core$Maybe$Just(
						$linsyking$elm_canvas$Canvas$Internal$Texture$TImage(
							{height: height, json: image, width: width})) : $elm$core$Maybe$Nothing;
				}),
			A2($elm$json$Json$Decode$field, 'tagName', $elm$json$Json$Decode$string),
			A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float));
	},
	$elm$json$Json$Decode$value);
var $linsyking$elm_canvas$Canvas$Internal$Texture$decodeImageLoadEvent = A2($elm$json$Json$Decode$field, 'target', $linsyking$elm_canvas$Canvas$Internal$Texture$decodeTextureImage);
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $linsyking$elm_canvas$Canvas$renderTextureSource = function (textureSource) {
	var url = textureSource.a;
	var onLoad = textureSource.b;
	return _Utils_Tuple2(
		url,
		A2(
			$elm$html$Html$img,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$src(url),
					A2($elm$html$Html$Attributes$attribute, 'crossorigin', 'anonymous'),
					A2($elm$html$Html$Attributes$style, 'display', 'none'),
					A2(
					$elm$html$Html$Events$on,
					'load',
					A2($elm$json$Json$Decode$map, onLoad, $linsyking$elm_canvas$Canvas$Internal$Texture$decodeImageLoadEvent)),
					A2(
					$elm$html$Html$Events$on,
					'error',
					$elm$json$Json$Decode$succeed(
						onLoad($elm$core$Maybe$Nothing)))
				]),
			_List_Nil));
};
var $elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		$elm$core$String$fromInt(n));
};
var $linsyking$elm_canvas$Canvas$toHtmlWith = F3(
	function (options, attrs, entities) {
		return A3(
			$elm$html$Html$Keyed$node,
			'elm-canvas',
			A2(
				$elm$core$List$cons,
				$linsyking$elm_canvas$Canvas$Internal$CustomElementJsonApi$commands(
					$linsyking$elm_canvas$Canvas$render(entities)),
				A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$height(options.height),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$Attributes$width(options.width),
						attrs))),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('__canvas', $linsyking$elm_canvas$Canvas$cnvs),
				A2($elm$core$List$map, $linsyking$elm_canvas$Canvas$renderTextureSource, options.textures)));
	});
var $linsyking$messenger_core$Messenger$UI$View$view = F3(
	function (input, _v0, model) {
		var transitionData = A2($elm$core$Maybe$map, $elm$core$Tuple$first, model.transition);
		var resources = input.resources;
		var config = input.config;
		var canvas = A3(
			$linsyking$elm_canvas$Canvas$toHtmlWith,
			{
				height: $elm$core$Basics$floor(model.currentGlobalData.internalData.realHeight),
				textures: $linsyking$messenger_core$Messenger$Resources$Base$getTexture(resources),
				width: $elm$core$Basics$floor(model.currentGlobalData.internalData.realWidth)
			},
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						$elm$html$Html$Attributes$style,
						'left',
						$elm$core$String$fromFloat(model.currentGlobalData.internalData.startLeft)),
						A2(
						$elm$html$Html$Attributes$style,
						'top',
						$elm$core$String$fromFloat(model.currentGlobalData.internalData.startTop)),
						A2($elm$html$Html$Attributes$style, 'position', 'fixed')
					]),
				model.currentGlobalData.canvasAttributes),
			_List_fromArray(
				[
					config.background(model.currentGlobalData),
					A3(
					$linsyking$messenger_core$Messenger$Scene$Transition$makeTransition,
					model.currentGlobalData,
					transitionData,
					$linsyking$messenger_core$Messenger$Scene$Scene$unroll(model.currentScene).view(
						{commonData: _Utils_Tuple0, globalData: model.currentGlobalData}))
				]));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Events$on,
					'wheel',
					A2(
						$elm$json$Json$Decode$map,
						$linsyking$messenger_core$Messenger$Base$WMouseWheel,
						A2($elm$json$Json$Decode$field, 'deltaY', $elm$json$Json$Decode$int)))
				]),
			function () {
				var _v1 = model.currentGlobalData.extraHTML;
				if (_v1.$ === 'Just') {
					var x = _v1.a;
					return _List_fromArray(
						[canvas, x]);
				} else {
					return _List_fromArray(
						[canvas]);
				}
			}());
	});
var $linsyking$messenger_core$Messenger$UI$genMain = function (input) {
	return $MartinSStewart$elm_audio$Audio$elementWithAudio(
		{
			audio: $linsyking$messenger_core$Messenger$UI$View$audio,
			audioPort: {fromJS: input.config.ports.audioPortFromJS, toJS: input.config.ports.audioPortToJS},
			init: $linsyking$messenger_core$Messenger$UI$Init$init(input),
			subscriptions: $linsyking$messenger_core$Messenger$UI$Subscription$subscriptions(input.config),
			update: $linsyking$messenger_core$Messenger$UI$Update$update(input),
			view: $linsyking$messenger_core$Messenger$UI$View$view(input)
		});
};
var $author$project$Lib$Resources$allAudio = $elm$core$Dict$empty;
var $author$project$Lib$Resources$allSpriteSheets = $elm$core$Dict$empty;
var $author$project$Lib$Resources$allTexture = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('enemy', 'assets/enemy.png'),
			_Utils_Tuple2('ship', 'assets/mainship.png')
		]));
var $author$project$Lib$Resources$resources = {allAudio: $author$project$Lib$Resources$allAudio, allSpriteSheets: $author$project$Lib$Resources$allSpriteSheets, allTexture: $author$project$Lib$Resources$allTexture};
var $author$project$Lib$Ports$alert = _Platform_outgoingPort('alert', $elm$json$Json$Encode$string);
var $author$project$Lib$Ports$audioPortFromJS = _Platform_incomingPort('audioPortFromJS', $elm$json$Json$Decode$value);
var $author$project$Lib$Ports$audioPortToJS = _Platform_outgoingPort('audioPortToJS', $elm$core$Basics$identity);
var $linsyking$messenger_core$Messenger$UserConfig$coloredBackground = F2(
	function (color, gd) {
		return A2(
			$linsyking$elm_canvas$Canvas$shapes,
			_List_fromArray(
				[
					$linsyking$elm_canvas$Canvas$Settings$fill(color)
				]),
			_List_fromArray(
				[
					A3(
					$linsyking$elm_canvas$Canvas$rect,
					_Utils_Tuple2(0, 0),
					gd.internalData.realWidth,
					gd.internalData.realHeight)
				]));
	});
var $avh4$elm_color$Color$lightBlue = A4($avh4$elm_color$Color$RgbaSpace, 114 / 255, 159 / 255, 207 / 255, 1.0);
var $author$project$MainConfig$background = $linsyking$messenger_core$Messenger$UserConfig$coloredBackground($avh4$elm_color$Color$lightBlue);
var $author$project$MainConfig$debug = true;
var $author$project$Lib$UserData$UserData = {};
var $author$project$Lib$UserData$decodeUserData = function (ls) {
	return $author$project$Lib$UserData$UserData;
};
var $author$project$MainConfig$initGlobalData = function (data) {
	var storage = $author$project$Lib$UserData$decodeUserData(data);
	return {canvasAttributes: _List_Nil, extraHTML: $elm$core$Maybe$Nothing, globalStartFrame: 0, globalStartTime: 0, sceneStartFrame: 0, sceneStartTime: 0, userData: storage, volume: 0.5};
};
var $author$project$MainConfig$initScene = 'Level1';
var $author$project$MainConfig$initSceneMsg = $elm$core$Maybe$Nothing;
var $author$project$Lib$Ports$prompt = _Platform_outgoingPort(
	'prompt',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'name',
					$elm$json$Json$Encode$string($.name)),
					_Utils_Tuple2(
					'title',
					$elm$json$Json$Encode$string($.title))
				]));
	});
var $author$project$Lib$Ports$promptReceiver = _Platform_incomingPort(
	'promptReceiver',
	A2(
		$elm$json$Json$Decode$andThen,
		function (result) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (name) {
					return $elm$json$Json$Decode$succeed(
						{name: name, result: result});
				},
				A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'result', $elm$json$Json$Decode$string)));
var $author$project$Lib$UserData$encodeUserData = function (storage) {
	return A2(
		$elm$json$Json$Encode$encode,
		0,
		$elm$json$Json$Encode$object(_List_Nil));
};
var $author$project$MainConfig$saveGlobalData = function (globalData) {
	return $author$project$Lib$UserData$encodeUserData(globalData.userData);
};
var $author$project$Lib$Ports$sendInfo = _Platform_outgoingPort('sendInfo', $elm$json$Json$Encode$string);
var $linsyking$messenger_core$Messenger$UserConfig$Animation = {$: 'Animation'};
var $author$project$MainConfig$timeInterval = $linsyking$messenger_core$Messenger$UserConfig$Animation;
var $author$project$MainConfig$virtualSize = {height: 1080, width: 1920};
var $author$project$Main$userConfig = {
	background: $author$project$MainConfig$background,
	debug: $author$project$MainConfig$debug,
	globalDataCodec: {decode: $author$project$MainConfig$initGlobalData, encode: $author$project$MainConfig$saveGlobalData},
	initScene: $author$project$MainConfig$initScene,
	initSceneMsg: $author$project$MainConfig$initSceneMsg,
	ports: {alert: $author$project$Lib$Ports$alert, audioPortFromJS: $author$project$Lib$Ports$audioPortFromJS, audioPortToJS: $author$project$Lib$Ports$audioPortToJS, prompt: $author$project$Lib$Ports$prompt, promptReceiver: $author$project$Lib$Ports$promptReceiver, sendInfo: $author$project$Lib$Ports$sendInfo},
	timeInterval: $author$project$MainConfig$timeInterval,
	virtualSize: $author$project$MainConfig$virtualSize
};
var $author$project$Main$main = $linsyking$messenger_core$Messenger$UI$genMain(
	{config: $author$project$Main$userConfig, resources: $author$project$Lib$Resources$resources, scenes: $author$project$Scenes$AllScenes$allScenes});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (windowWidth) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (windowHeight) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (timeStamp) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (info) {
									return $elm$json$Json$Decode$succeed(
										{info: info, timeStamp: timeStamp, windowHeight: windowHeight, windowWidth: windowWidth});
								},
								A2($elm$json$Json$Decode$field, 'info', $elm$json$Json$Decode$string));
						},
						A2($elm$json$Json$Decode$field, 'timeStamp', $elm$json$Json$Decode$int));
				},
				A2($elm$json$Json$Decode$field, 'windowHeight', $elm$json$Json$Decode$float));
		},
		A2($elm$json$Json$Decode$field, 'windowWidth', $elm$json$Json$Decode$float)))(0)}});}(this));