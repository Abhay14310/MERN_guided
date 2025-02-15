function removeCharacter(str, position) {
    // Check if the position is valid
    if (position < 0 || position >= str.length) {
        return str; // Return the original string if the position is invalid
    }

    // Remove the character at the specified position
    return str.slice(0, position) + str.slice(position + 1);
}

// Test cases
console.log(removeCharacter("JavaScript", 4)); // Output: JavaSript (removed 'c' at position 4)
console.log(removeCharacter("Hello", 1)); // Output: Hllo (removed 'e' at position 1)
console.log(removeCharacter("World", 10)); // Output: World (position is invalid, returns original string)
console.log(removeCharacter("Example", 0)); // Output: xample (removed 'E' at position 0)
