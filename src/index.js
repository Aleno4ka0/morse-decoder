const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function findSymbols(value){
    return Object.keys(MORSE_TABLE).find(key => MORSE_TABLE[key] === value)
}

function decode(expr) {
    var numStr = expr.split(/(.{10})/).filter(O=>O)
    var numDecode = []
    var result = ''

    for(var i = 0; i < numStr.length; i++){
        console.log(numStr[i]);
        if(numStr[i] == '**********'){
            result += ' '
        }else{
            numDecode = (numStr[i].split(/(.{2})/).filter(O=>O))
            var resDecode = ''
            for(var j = 0; j < numDecode.length; j++){

                if(numDecode[j] == 10){
                    resDecode += '.'
                }
                if(numDecode[j] == 11){
                    resDecode += '-'
                }
            }
            result += MORSE_TABLE[resDecode]
        }

    }
    return result
}

module.exports = {
    decode
}