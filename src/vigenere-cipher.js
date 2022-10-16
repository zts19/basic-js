const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(rev = true) {
    this.rev = rev
  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) throw Error("Incorrect arguments!");
    let res = []
    string = string.toLowerCase().split('')
    key = key.toLowerCase().repeat(1000);
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        res.push(string(i))
      } else if (string[i].charCodeAt() < 97 || string[i].charCodeAt() > 122) {
        res.push(string[i]);
      } else {
        const code = ((string[i].charCodeAt() - 97) + (key[i].charCodeAt() - 97)) % 26
        res.push(String.fromCharCode(code + 97))
      }
      if (this.rev) {
        return res.join("").toUpperCase()
      } else return res.reverse().join("").toUpperCase()
    }    
  }
  decrypt(string,key) {
    if (string === undefined || key === undefined) throw Error("Incorrect arguments!");
    let res = []
    string = string.toLowerCase().split('')
    key = key.toLowerCase().repeat(1000);
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        res.push(string(i))
      } else if (string[i].charCodeAt() < 97 || string[i].charCodeAt() > 122) {
        res.push(string[i]);
      } else {
        const code = ((string[i].charCodeAt() - 97) - (key[i].charCodeAt() - 97)) % 26
        res.push(String.fromCharCode(code + 97))
      }
      if (this.rev) {
        return res.join("").toUpperCase()
      } else return res.reverse().join("").toUpperCase()
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
