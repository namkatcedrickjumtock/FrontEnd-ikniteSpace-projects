// ############ Xmas Tree 7 kyu


// Complete the function that returns a christmas tree of the given height. The height is passed through to the function and the function should return a list containing each line of the tree.


// XMasTree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']
// XMasTree(3) should return : ['__#__', '_###_', '#####', '__#__', '__#__']


// Pad with underscores (_) so each line is the same length. Also remember the trunk/stem of the tree.

// steps 
// 1- considering the heigh to be n+2 and

function xMasTree(n){
    let finalTree = [];
    for (let index = 1, widthLen = 1; index <= n; index++, widthLen+=2)
    {
      finalTree.push(`_`.repeat(n-index)+`#`.repeat(widthLen)+`_`.repeat(n-index))
    }
    finalTree.push(`_`.repeat(n-1)+`#`.repeat(1)+`_`.repeat(n-1))
    finalTree.push(`_`.repeat(n-1)+`#`.repeat(1)+`_`.repeat(n-1))
    return finalTree
 }


// solution 2
let xMasTree = n => {
    let r = [];
    for (let i = 0; i < n; i++) r.push(Array(n - i).join('_') + Array(2 * i + 2).join('#') + Array(n - i).join('_'));
    r.push(Array(n).join('_') + '#' + Array(n).join('_'));
    r.push(Array(n).join('_') + '#' + Array(n).join('_'));
    return r;
  }

// test
console.log(xMasTree(3)),//['__#__', '_###_', '#####', '__#__', '__#__']
console.log(xMasTree(7)),//['______#______', '_____###_____', '____#####____', '___#######___', '__#########__', '_###########_', '#############', '______#______', '______#______']
console.log(xMasTree(2)), //['_#_', '###', '_#_', '_#_'] 
console.log(xMasTree(4)),//['___#___', '__###__', '_#####_', '#######', '___#___', '___#___'] 
console.log(xMasTree(6))// ['_____#_____', '____###____', '___#####___', '__#######__', '_#########_', '###########', '_____#_____', '_____#_____']