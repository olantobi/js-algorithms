
exports.capitalizeString = str => str.toUpperCase();

const capitalist = (string) => {
    return string.charAt(0).toUpperCase + string.slice(1);
}

export default capitalist ;

// export const foo = "bar";
// export const bar = "foo";