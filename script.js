function bind(fn, context /*, args*/) {
    var bindArgs = [].slice.call(arguments, 2);
    function wrapper() {                        
        var args = [].slice.call(arguments);
        return fn.apply(context, bindArgs.concat(args)); 
    }
    return wrapper;
}

function add(n) {

    var value = (this instanceof Number) ? this : 0;
    return value + n;

}
Number.prototype.add = add;

var o = {
    x: 1,
    foo: function (a, b) {
        return this.x + a + b;
    }
};


var f1 = o.foo.bind({x:2}, 1);
var f2 = bind(o.foo, {x:2}, 1);
var f3 = bind(bind(o.foo, {x:2}), {}, 1);
console.log(f1(5) === f2(5));
console.log(f1(5) === f3(5));

var acc = add(1).add(2).add(3).add(4);
console.log(acc + 5 === 15);

var acc1 = add(1).add(2);
var acc2 = acc1.add(1).add(2);
console.log(acc1 + 1 === 4);
console.log(acc2 + 1 === 7);
