/**
 * Use Case: Dictionary that allows insert and search.
 * Uses starts with pattern to search words from Dictionary.
 * e.g. Dictionary = ['Apps','Application'], WordToSearch = 'App' will return true.
 * 
 * Limitation: Only works for Alphabets
 */

/**
 * Trie Node Structure.
 * isEndOfWord = Last node for given string 
 * value = Value of node
 * chidren = chiildren of a node (e.g. a-z intially all are null)
 */
class TrieNode {
    constructor(value) {
        this.isEndOfWord = false;
        this.value = value;
        this.chidren = [];
        for (let i = 0; i < 26; i++) {
            this.chidren[i] = null;
        }
    }
}

/**
 * Implementation
 */
class Trie {

    constructor(){
        this.root = new TrieNode();
    }
    /**
     * Inserts a new word in Dictionary
     * @param {string} value Word to insert
     */
    insert(value) {
        let tempRoot = this.root;
        let index;

        for (let level = 0; level < value.length; level++) {
            index = value.charCodeAt(level) - 97;
            if (tempRoot.chidren[index] === null) {
                tempRoot.chidren[index] = new TrieNode(value[level]);
            }
            tempRoot = tempRoot.chidren[index];
        }
        tempRoot.isEndOfWord = true;
    }

    /**
     * Searches word in Dictionary
     * @param {string} value Word to search
     */
    search(value) {
        let tempRoot = this.root;
        let index;

        for (let level = 0; level < value.length; level++) {
            index = value.charCodeAt(level) - 97;

            if (tempRoot.chidren[index] === null) {
                return false;
            }
            tempRoot = tempRoot.chidren[index];
        }
        return (tempRoot !== null)
    }
}

let trie = new Trie();
trie.insert('application');
trie.insert('apps');
trie.insert('applicant');
trie.insert('apple');

console.log(trie.search('app'));        //True
console.log(trie.search('applet'));     //False

