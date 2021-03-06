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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
//import { NgbModule }		from '@ng-bootstrap/ng-bootstrap';
var transaction_history_component_1 = require('./transaction-history.component');
var jha_pipe_1 = require('./jha.pipe');
var episys_server_service_1 = require('./episys-server.service');
var mock_episys_server_service_1 = require('./mock-episys-server.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule
            ],
            declarations: [
                transaction_history_component_1.TransactionHistoryComponent,
                jha_pipe_1.JhaDateStringPipe,
                jha_pipe_1.JhaMoneyPipe
            ],
            providers: [
                mock_episys_server_service_1.MockEpisysServerService,
                episys_server_service_1.EpisysServerService // accessible anywhere in application
            ],
            bootstrap: [
                transaction_history_component_1.TransactionHistoryComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map