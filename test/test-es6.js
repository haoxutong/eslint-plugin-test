
var2='test is over!!';//eslint-disable-line
alert('who are you!!!');
var foo = {
    bar: "baz",
    qux: "quux",  //eslint-disable-line
};


if (foo) foo++; /*error Expected { after 'if' condition.*/

while (bar)     /*error Expected { after 'while' condition.*/
    baz();

if (foo) {      /*error Expected { after 'else'.*/
    baz();
} else qux();
var a = someFunction();
b = 10;

// if ("" == text) { } 
// var o = {
//     set a(value) {
//         this.val = value;
//     }
// };
function foo() {
    if (x) {
        return y;
    }
}