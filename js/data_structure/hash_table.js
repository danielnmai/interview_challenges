function HashTable(size) {
  this.size = size
  this.values = Array(size)
}

HashTable.prototype.add = function(key, value) {
  let hashedKey = this.hash(key)
  this.values[hashedKey] = value
}l
HashTable.prototype.hash = function(key) {
  let total = 0
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i)
  }
  let hashedKey = total % this.size
  return hashedKey
}
HashTable.prototype.retrieve = function(key) {
  let hashedKey = this.hash(key)
  return this.values[hashedKey]
}

let ht = new HashTable(30)
ht.add('long', 'haha')
console.log(ht.retrieve('long'))
