Bridge.assembly("Demo", function ($asm, globals) {
    "use strict";

    Bridge.define("Program", {
        main: function Main (args) {


            var input = Program.GetInput();

            var arrayOfRowsByNewlines = System.String.split(input, [10].map(function (i) {{ return String.fromCharCode(i); }}));

            var tableHolder = Program.FlattenTheTriangleIntoTable(arrayOfRowsByNewlines);

            var result = Program.WalkThroughTheNode(arrayOfRowsByNewlines, tableHolder);


            System.Console.WriteLine(System.String.format("The Maximum Total Sum Of Non-Prime Numbers From Top To Bottom Is:  {0}", [result.get([0, 0])]));



        },
        statics: {
            methods: {
                GetInput: function () {

                    var input0 = "\n   1 \n  8 4\n 2 6 9\n8 5 9 3";

                    var input = "   215\n                                   193 124\n                                  117 237 442\n                                218 935 347 235\n                              320 804 522 417 345\n                            229 601 723 835 133 124\n                          248 202 277 433 207 263 257\n                        359 464 504 528 516 716 871 182\n                      461 441 426 656 863 560 380 171 923\n                     381 348 573 533 447 632 387 176 975 449\n                   223 711 445 645 245 543 931 532 937 541 444\n                 330 131 333 928 377 733 017 778 839 168 197 197\n                131 171 522 137 217 224 291 413 528 520 227 229 928\n              223 626 034 683 839 053 627 310 713 999 629 817 410 121\n            924 622 911 233 325 139 721 218 253 223 107 233 230 124 233";

                    var input2 = "\n215\n193 124\n117 237 442\n218 935 347 235\n320 804 522 417 345\n229 601 723 835 133 124\n248 202 277 433 207 263 257\n359 464 504 528 516 716 871 182\n461 441 426 656 863 560 380 171 923\n381 348 573 533 447 632 387 176 975 449\n223 711 445 645 245 543 931 532 937 541 444\n330 131 333 928 377 733 017 778 839 168 197 197\n131 171 522 137 217 224 291 413 528 520 227 229 928\n223 626 034 683 839 053 627 310 713 999 629 817 410 121\n924 622 911 233 325 139 721 218 253 223 107 233 230 124 233";
                    return input;
                },
                WalkThroughTheNode: function (arrayOfRowsByNewlines, tableHolder) {
                    for (var i = (arrayOfRowsByNewlines.length - 2) | 0; i >= 0; i = (i - 1) | 0) {
                        for (var j = 0; j < arrayOfRowsByNewlines.length; j = (j + 1) | 0) {
                            if ((!Program.IsPrime(tableHolder.get([i, j])))) {
                                tableHolder.set([i, j], Math.max(((tableHolder.get([i, j]) + tableHolder.get([((i + 1) | 0), j])) | 0), ((tableHolder.get([i, j]) + tableHolder.get([((i + 1) | 0), ((j + 1) | 0)])) | 0)));
                            }
                        }
                    }
                    return tableHolder;
                },
                FlattenTheTriangleIntoTable: function (arrayOfRowsByNewlines) {
                    var tableHolder = System.Array.create(0, null, System.Int32, arrayOfRowsByNewlines.length, ((arrayOfRowsByNewlines.length + 1) | 0));

                    for (var row = 0; row < arrayOfRowsByNewlines.length; row = (row + 1) | 0) {
                        var eachCharactersInRow = System.String.split(arrayOfRowsByNewlines[System.Array.index(row, arrayOfRowsByNewlines)].trim(), [32].map(function (i) {{ return String.fromCharCode(i); }}));

                        for (var column = 0; column < eachCharactersInRow.length; column = (column + 1) | 0) {
                            var number = { };
                            System.Int32.tryParse(eachCharactersInRow[System.Array.index(column, eachCharactersInRow)], number);
                            tableHolder.set([row, column], number.v);
                        }
                    }
                    return tableHolder;
                },
                IsPrime: function (number) {
                    if ((number & 1) === 0) {
                        if (number === 2) {
                            return true;
                        }
                        return false;
                    }

                    for (var i = 3; (Bridge.Int.mul(i, i)) <= number; i = (i + 2) | 0) {
                        if ((number % i) === 0) {
                            return false;
                        }
                    }
                    return number !== 1;
                }
            }
        }
    });
});

