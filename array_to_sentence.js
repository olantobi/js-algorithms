
function capitalize(s) {
    const words = s.split(' ');
    return s.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

console.log(capitalize('cloud computing in nigeria'));

