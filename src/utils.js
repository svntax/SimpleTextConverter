function textToBinary(plaintext){
    var output = "";
    for(var i = 0; i < plaintext.length; i++){
        var temp = plaintext[i].charCodeAt(0).toString(2);
        temp = "00000000".substr(temp.length) + temp;
        output += temp;
    }
    return output;
}

function textToHexadecimal(plaintext){
    var output = "";
    for(var i = 0; i < plaintext.length; i++){
        var temp = plaintext[i].charCodeAt(0).toString(16);
        output += temp;
    }
    return output;
}

function binaryToText(binarytext){
    binarytext = binarytext.trim();
    var output = "";
    for(var i = 0; i < binarytext.length; i+=8){
        var temp = binarytext.substr(i, 8);
        temp = String.fromCharCode(parseInt(temp, 2));
        output += temp;
    }
    return output;
}

function binaryToHexadecimal(binarytext){
    binarytext = binarytext.trim();
    var plaintext = binaryToText(binarytext);
    var hexadecimalText = textToHexadecimal(plaintext);
    return hexadecimalText;
}

function hexadecimalToText(hexadecimaltext){
    hexadecimaltext = hexadecimaltext.trim();
    var output = "";
    for(var i = 0; i < hexadecimaltext.length; i+=2){
        var temp = hexadecimaltext.substr(i, 2);
        temp = String.fromCharCode(parseInt(temp, 16));
        output += temp;
    }
    return output;
}

function hexadecimalToBinary(hexadecimaltext){
    hexadecimaltext = hexadecimaltext.trim();
    var plaintext = hexadecimalToText(hexadecimaltext);
    var binaryText = textToBinary(plaintext);
    return binaryText;
}

export default {textToBinary, textToHexadecimal, binaryToText, binaryToHexadecimal, hexadecimalToText, hexadecimalToBinary};