// 1. Write a function that takes two arguments. This function should return the concatenated value of the two arguments.
// 2. Call the function with your first name and last name as the two arguments.
// 3. Console log the return value.

const naming = (first, last) => {
    const name = first + " " + last;
    return name;
}

console.log(naming("leah", "gwin"));