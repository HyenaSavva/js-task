const colors = ["green", "blue", "red"];

const checkColor = (colors) => {
    return colors.findIndex((color) => color === "red")
}

console.log(checkColor(colors));
