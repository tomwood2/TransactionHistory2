import { NgModule }         from '@angular/core';
import { FormsModule }		from '@angular/forms';
import { BrowserModule }    from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TransactionHistoryComponent }  from './transaction-history.component';
import { JhaDateStringPipe, JhaMoneyPipe } from './jha.pipe';
import { MockEpisysServer } from './mock-episys-server.service';

@NgModule({
    imports: [
        NgbModule,
		FormsModule,
        BrowserModule
    ],
    declarations: [
        TransactionHistoryComponent,
		JhaDateStringPipe,
		JhaMoneyPipe
    ],
    providers: [
        MockEpisysServer        // might be used anywhere in application
    ],
    bootstrap: [
        TransactionHistoryComponent
    ]

})
export class AppModule { }
