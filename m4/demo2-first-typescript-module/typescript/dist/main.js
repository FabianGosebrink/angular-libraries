define(["require", "exports", "./printmodule"], function (require, exports, printmodule_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var printModule = new printmodule_1.PrintModule();
    printModule.printMessage('hello world');
});
