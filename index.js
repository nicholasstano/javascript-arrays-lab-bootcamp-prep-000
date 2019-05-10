function destructivelyAppendKitten(name) {
  kittens.push(name) 
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  return [...kittens, name]
}
function prependKitten(name) {
  return [name, ...kittens]
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  return kittens.slice(1, kittens.length)
}































/* function destructivelyAppendKitten(name) {
  kittens.push(name) 
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop() 
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  return [...kittens, name]
}
function prependKitten(name) {
  return [name, ...kittens]
}
function removeLastKitten() {
  var x = []
  x = kittens.slice(0, kittens.length - 1)
  return x
}
function removeFirstKitten() {
  var x = []
  x = kittens.slice(1) 
  return x
}

*/






















/*function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
//takes an array and adds name to the end of the array

function destructivelyAppendKitten(name) {
  kittens.push(name)
}
//takes an array and adds name to the beginning of the array

function destructivelyRemoveLastKitten() {
  kittens.pop()
}
//takes an array and removes the last kitten from the array

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
//takes an array and removes the first kitten from the array

function appendKitten(name) {
  return [...kittens, name]
}
//non-destructively adds a name to the end of the kittens array without changing kittens.

function prependKitten(name) {
  return [name, ...kittens]
}
//non-destructively adds a name to the beginning of the kittens array without changing kittens.

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
//removes the last kitten from the array and returns the new array without altering kittens.  (Why 0?)

function removeFirstKitten() {
  var x = kittens.slice(1)
  return x
}
//removes the first kitten from the array and returns the remaining kittens in the array.  
*/