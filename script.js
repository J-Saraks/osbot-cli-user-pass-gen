const generateButton = document.getElementById("generate-button");
const textarea = document.getElementById("textarea");

const generatePassword = () => {
    var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyz0123456789",
    retVal = "";
    
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    
    return retVal;
}

const generateUsername = () => {
    var a = ["small", "blue", "ugly", "preach", "redundant", "serious", "repulsive", "mark", "audit", "consort", "notebook", "manage", "escape", "brawny", "sea", "adhoc", "arch", "eye", "worship", "thank", "vivacious", "narrow", "zany", "hate", "wing", "undo", "lame", "absorb", "veil", "drop", "push", "corn", "form", "arm", "rub", "think", "whip", "trade", "want", "nose", "ritzy", "corn", "form", "straw", "point"];
    var b = ["bear", "dog", "banana", "dangerous", "five", "part", "challenge", "food", "read", "spin", "sip", "brawny", "face", "ski", "ply", "solid", "way", "rot", "deny", "work", "pain", "gold", "frog", "nutty"];
    var rA = Math.floor(Math.random()*a.length);
    var rB = Math.floor(Math.random()*b.length);
    var name = a[rA] + b[rB];
    if (name.length < 10) {
        return name
    }
    else {
        return generateUsername();
    }
}

const randomNumberHigh = () => {
    const numHigh = Math.floor(Math.random() * 100);
    return numHigh;
}

const randomNumberLow = () => {
    const numLow = Math.floor(Math.random() * 9);
    return numLow;
}

const bankPinGenerator = () => {
    const bankPin = Math.floor(Math.random() * 8999 + 1000)
    return bankPin;
}

generateButton.addEventListener("click", () => {
    const amountInput = document.getElementById("amountInput").value;
    const suffixInput = document.getElementById("suffixInput").value;
    const bankPinCheckbox = document.getElementById("bankPinCheckbox").checked;
    
    
    if (textarea.value != '') {
        textarea.value === '';
    }
    
    if (bankPinCheckbox === true) {
        for (let i = 0; i < amountInput; i++) {
            textarea.value += `${randomNumberLow()}${generateUsername()}${randomNumberHigh()}${suffixInput}:${generatePassword()}:${bankPinGenerator()} \n`;
        }
    }
    
    else {
        for (let i = 0; i < amountInput; i++) {
            textarea.value += `${randomNumberLow()}${generateUsername()}${randomNumberHigh()}${suffixInput}:${generatePassword()} \n`;
        }
    }
    
})