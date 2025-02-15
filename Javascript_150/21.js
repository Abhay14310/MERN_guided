function addPy(str) {
    // Check if the string starts with "Py"
    if (str.startsWith("Py")) {
        return str; // Return the original string
    } else {
        return "Py" + str; // Add "Py" to the beginning
    }
}

// Test cases
console.log(addPy("Python")); // Output: Python (already starts with "Py")
console.log(addPy("thon")); // Output: Python (added "Py" to the beginning)
console.log(addPy("Pyramid")); // Output: Pyramid (already starts with "Py")
console.log(addPy("hello")); // Output: Pyhello (added "Py" to the beginning)
