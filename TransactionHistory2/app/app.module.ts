import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { TransactionHistoryComponent }  from './transaction-history.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        TransactionHistoryComponent
    ],
    //providers: [
    //    HeroService
    //],
    bootstrap: [
        TransactionHistoryComponent
    ]

})
export class AppModule { }
