const hashmap = require('./hashmap');

function main() {
    let lotr = new hashmap
    lotr.MAX_LOAD_RATIO = 0.5
    lotr.SIZE_RATIO = 3
    lotr.set("Hobbit","Bilbo")
    lotr.set("Hobbit","Frodo")
    lotr.set("Wizard","Gandalf")
    lotr.set("Human","Aragorn")
    lotr.set("Elf","Legolas")
    lotr.set("Maiar","The Necromancer")
    lotr.set("Maiar","Sauron")
    lotr.set("RingBearer","Gollum")
    lotr.set("LadyOfLight","Galadriel")
    lotr.set("HalfElven","Arwen")
    lotr.set("Ent","Treebeard")
    return lotr
}

let lotr = main()
//console.log(lotr)

let Maiar = lotr.get("Maiar")
//console.log(Maiar)

// Maiar value is Sauron and hobbit value is Frodo. The Necromancer ad Bilbo were overwritten.
// capacity is 8

// 20 and 10

// 3.) 

// 1.)
// k % m
// m = length = 11
// hash map:
//
// 0: 22
// 1: 88
// 2: 
// 3: 
// 4: 4
// 5: 15
// 6: 28
// 7: 17
// 8: 59
// 9: 31
// 10: 10

// 2.)
// k % m
// m = length = 9
// hash map:
// 0: 
// 1: linked list: 28, 19, 10
// 2: 20
// 3: 12
// 4: 
// 5: 5
// 6: linked list: 15, 33
// 7: 
// 8: 17


