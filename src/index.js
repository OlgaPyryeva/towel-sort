// You should implement your task here.    module.exports = function towelSort(matrix)
module.exports = function towelSort(matrix) {
    let str = "";

    if (arguments.length == 0 || matrix.length == 0) {
        return [];
    } else {
        for (i = 0; i < matrix.length; ) {
            str += matrix[i].join();

            if (i < matrix.length - 1) {
                str += "," + matrix[i + 1].reverse().join() + ",";
            }
            i += 2;
        }
        matrix = str.split(",").map(Number);
        matrix = matrix.filter(Boolean);
    }
    return matrix;
};
