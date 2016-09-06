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
var transaction_history_service_1 = require('./transaction-history.service');
var View = (function () {
    function View() {
        this.showAdvanced = false;
        this.showDrafts = false;
    }
    return View;
}());
var Toolbar = (function () {
    function Toolbar() {
        this.fromDate = this.getFormatedDate(new Date());
        this.toDate = this.fromDate;
        this.searchAmountType = 0;
    }
    Toolbar.prototype.getFormatedDate = function (date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return [year, this.pad(month, 2), this.pad(day, 2)].join("-");
    };
    Toolbar.prototype.pad = function (num, size) {
        var s = "000000000" + num;
        return s.substr(s.length - size);
    };
    return Toolbar;
}());
var TransactionHistoryComponent = (function () {
    function TransactionHistoryComponent(transactionHistoryService) {
        this.transactionHistoryService = transactionHistoryService;
        this.view = new View();
        this.toolbar = new Toolbar();
        this.messages = {};
        this.refresh = function () {
        };
    }
    TransactionHistoryComponent.prototype.ngOnInit = function () { this.getMessages(); };
    TransactionHistoryComponent.prototype.getMessages = function () {
        var _this = this;
        this.transactionHistoryService.getMessages().then(function (messages) { return _this.messages = messages; });
        //this.messages = this.transactionHistoryService.getMessages();
    };
    TransactionHistoryComponent = __decorate([
        core_1.Component({
            selector: 'transaction-history',
            templateUrl: 'app/views/transaction-history.component.html',
            styleUrls: ['app/styles/transaction-history.component.css'],
            providers: [transaction_history_service_1.TransactionHistoryService] // only used in this component
        }), 
        __metadata('design:paramtypes', [transaction_history_service_1.TransactionHistoryService])
    ], TransactionHistoryComponent);
    return TransactionHistoryComponent;
}());
exports.TransactionHistoryComponent = TransactionHistoryComponent;
//# sourceMappingURL=transaction-history.component.js.map