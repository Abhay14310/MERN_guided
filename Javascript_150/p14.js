// Function to get the file extension
function getFileExtension(filename) {
  // Split the filename by '.' and get the last part
  const parts = filename.split(".");
  if (parts.length > 1) {
    return parts[parts.length - 1]; // Return the file extension
  } else {
    return ""; // No extension found
  }
}

// Test cases
const filename1 = "example.txt";
const filename2 = "document.pdf";
const filename3 = "image.jpeg";
const filename4 = "no_extension";

console.log(`Extension of "${filename1}":`, getFileExtension(filename1)); // Output: txt
console.log(`Extension of "${filename2}":`, getFileExtension(filename2)); // Output: pdf
console.log(`Extension of "${filename3}":`, getFileExtension(filename3)); // Output: jpeg
console.log(`Extension of "${filename4}":`, getFileExtension(filename4)); // Output: ""
