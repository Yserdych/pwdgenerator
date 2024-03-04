
const checkPasswordStrength = require('strongpwd');

// Function to generate a strong password
function generateStrongPassword() {
    // Define character sets for password generation
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Combine character sets
    const allChars = lowercaseChars + uppercaseChars + digitChars + specialChars;

    // Generate a random password of length 12
    let password = '';
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    // Check the strength of the generated password
    const strength = checkPasswordStrength(password);

    // If the password is not strong enough, regenerate it
    if (strength < 3) {
        return generateStrongPassword();
    }

    // Return the strong password
    return password;
}

// Export the function for external use
module.exports = generateStrongPassword;
