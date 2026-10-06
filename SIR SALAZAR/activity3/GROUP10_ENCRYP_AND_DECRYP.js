// Encryption and Decryption Program

let message = "HELLO WORLD";
let shift = 3;

// ENCRYPTION
function encrypt(text, shift) {
    return text
        .split("")
        .map(char => {
            if (char >= "A" && char <= "Z") {
                return String.fromCharCode(
                    ((char.charCodeAt(0) - 65 + shift) % 26) + 65
                );
            }
            return char;
        })
        .join("");
}

// DECRYPTION
function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
}

let encryptedMessage = encrypt(message, shift);
let decryptedMessage = decrypt(encryptedMessage, shift);

console.log("Original Message:", message);
console.log("Encrypted Message:", encryptedMessage);
console.log("Decrypted Message:", decryptedMessage);