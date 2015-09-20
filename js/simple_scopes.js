let assert = require('assert');

let a = 1, b = 2;

function main() {
  assert(a === undefined);   // the local `a` is in scope
  assert(b === 2);           // we see the outer `b`

  if (true) {
    var a = 100;             // scoped to whole function!
    let b = 200;             // scoped only inside this block
    let c = 300;             // scoped only inside this block
  }
  assert(a === 100);         // it's been initialized
  assert(b === 2);           // outer, because local used `let`

  assert.throws(() => c);    // there's no `c` out here at all
}

main()
