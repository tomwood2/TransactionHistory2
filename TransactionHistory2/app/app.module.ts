import { NgModule }         from '@angular/core';
import { FormsModule }		from '@angular/forms';
import { BrowserModule }    from '@angular/platform-browser';

import { TransactionHistoryComponent }  from './transaction-history.component';
import { JhaDateStringPipe, JhaMoneyPipe } from './jha.pipe';

@NgModule({
    imports: [
		FormsModule,
        BrowserModule
    ],
    declarations: [
        TransactionHistoryComponent,
		JhaDateStringPipe,
		JhaMoneyPipe
    ],
    //providers: [
    //    HeroService
    //],
    bootstrap: [
        TransactionHistoryComponent
    ]

})
export class AppModule { }
