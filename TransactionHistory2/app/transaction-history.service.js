"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_episys_server_service_1 = require('./mock-episys-server.service');
var TransactionHistoryService = (function () {
    function TransactionHistoryService(episysService) {
        this.episysService = episysService;
    }
    //    constructor(private episysService: EpisysServer) { }
    // return the result of .then which is a promise
    TransactionHistoryService.prototype.getMessages = function () {
        var _this = this;
        return this.episysService.receiveMessages("serviceName", "methodName", "args").then(function (messages) { return _this.getFilteredMessages(messages); });
    };
    TransactionHistoryService.prototype.getFilteredMessages = function (messages) {
        return {
            $items: messages.$items.filter(function (message) { return message.Action == "AddSLTranHist"; })
        };
    };
    TransactionHistoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [mock_episys_server_service_1.MockEpisysServer])
    ], TransactionHistoryService);
    return TransactionHistoryService;
}());
exports.TransactionHistoryService = TransactionHistoryService;
//# sourceMappingURL=transaction-history.service.js.map