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


// 4. remove duplicates
function remDup(str) {
    let temp = new hashmap
    temp.MAX_LOAD_RATIO = 0.5
    temp.SIZE_RATIO = 3

    for (let i = 0; i < str.length; i++) {
        temp.set(str[i],str[i])
    }

    let out = '';
    for (let i = 0; i < temp._capacity; i++) {
        if (temp._hashTable[i]) {
            out += temp._hashTable[i]['key']
        };
    }
    return out
}

//console.log(remDup('google'));


// 5. any permutation a palindrome

function perm(str) {
    let temp = new hashmap
    for (let i = 0; i < str.length; i++) {

        const index = temp._findSlot(str[i]);
        if (temp._hashTable[index] === undefined) {
            temp.set(str[i], 1)
        } else {
            temp.set(str[i], temp.get(str[i]) + 1)
        }
    }

    let out = '';
    for (let i = 0; i < temp._capacity; i++) {
        if (temp._hashTable[i]) {
            out += temp._hashTable[i]['value']
        };
    }

    let count = 0;
    for (let i = 0; i < out.length; i++) {
        if (out[i] % 2 != 0 ) {
            count += 1;
        };
    }
    
    if (count > 1) {
        return 'no permutations are palindromes'
    } else {
        return 'a permutation is a palindrome'
    }

}

//console.log(perm('racecar'));

// 6. anagram grouping

function ana(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let hash = new hashmap
        temp.MAX_LOAD_RATIO = 0.5
        temp.SIZE_RATIO = 3
    
        for (let j = 0; j < arr[i].length; j++) {
            let index = hash._findSlot(arr[i][j]);
            if (hash._hashTable[index] === undefined) {
                hash.set(arr[i][j], 1)
            } else {
                hash.set(arr[i][j], hash.get(arr[i][j] + 1))
            }
        }

        temp.push([arr[i], hash])
    }

    let out = []
    
    for (let i = 0; i < temp.length; i++) {
        let out1 = []
        if (temp[i][1]) {
            out1.push(temp[i][0])
        }
        for (let j = 0; j < temp.length; j++) {
            if (i != j) {
                if (JSON.stringify(temp[i][1]) == JSON.stringify(temp[j][1])) {
                    out1.push(temp[j][0])
                    temp[j] = [0,0]
                }
            }
        
        }
        if (out1[0] != 0) {
            out.push(out1)
        }
    }
    return out
}

console.log(ana(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))
