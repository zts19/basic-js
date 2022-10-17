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
    let stringEnc = string.toLowerCase().split('')
    key = key.toLowerCase().repeat(1000);
    let keyInd = 0;
    for (let i = 0; i < stringEnc.length; i++) {
      if (stringEnc[i] === ' ') {
        res.push(stringEnc[i])
      } else if (stringEnc[i].charCodeAt() < 97 || stringEnc[i].charCodeAt() > 122) {
        res.push(stringEnc[i]);
      } else {
        const code = ((stringEnc[i].charCodeAt() - 97) + (key[keyInd].charCodeAt()) - 97) % 26 + 97
        res.push(String.fromCharCode(code))
        keyInd++
      }
    } 
    if (this.rev) {
      return res.join("").toUpperCase()
    } else return res.reverse().join("").toUpperCase()   
  }
  decrypt(string,key) {
    if (string === undefined) throw Error("Incorrect arguments!");
    if (key === undefined) throw Error("Incorrect arguments!");
    let res = []
    let stringDec = string.toLowerCase().split('')
    key = key.toLowerCase().repeat(1000);
    let keyInd = 0;
    for (let i = 0; i < stringDec.length; i++) {
      if (stringDec[i] === ' ') {
        res.push(stringDec[i])
      } else if (stringDec[i].charCodeAt() < 97 || stringDec[i].charCodeAt() > 122) {
        res.push(stringDec[i]);
      } else {
        const code = ((stringDec[i].charCodeAt() - 97) - (key[keyInd].charCodeAt() - 97) + 26) % 26 + 97
        res.push(String.fromCharCode(code))
        keyInd++
      }
    }
    if (this.rev) {
      return res.join("").toUpperCase()
    } else return res.reverse().join("").toUpperCase()
  }
}

module.exports = {
  VigenereCipheringMachine
};
