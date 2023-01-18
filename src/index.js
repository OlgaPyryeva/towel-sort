// You should implement your task here.    module.exports = function towelSort(matrix)

module.exports = function towelSort(matrix) {
    let str = "";

    if (arguments.length == 0 || matrix.length == 0) {
        let matrix = [];
        return matrix;
    } else {
        for (i = 0; i < matrix.length; ) {
            str += matrix[i].join();
            if (i < matrix.length - 1) {
                str += "," + matrix[i + 1].reverse().join() + ",";
            }
            i += 2;
        }
        let number = +str.match(/\d/g).join("");
        matrix = ("" + number).split("").map(Number);
    }

    return matrix;
};
