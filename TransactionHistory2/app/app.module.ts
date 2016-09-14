import { NgModule }         from '@angular/core';
import { FormsModule }		from '@angular/forms';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }		from '@angular/http';
//import { NgbModule }		from '@ng-bootstrap/ng-bootstrap';

import { TransactionHistoryComponent }  from './transaction-history.component';
import { JhaDateStringPipe, JhaMoneyPipe } from './jha.pipe';
import { EpisysServerService } from './episys-server.service';
import { MockEpisysServerService } from './mock-episys-server.service';

@NgModule({
    imports: [
		FormsModule,
        BrowserModule,
		HttpModule
//        NgbModule			// for angular2 bootstrap component directives
    ],
    declarations: [
        TransactionHistoryComponent,
		JhaDateStringPipe,
		JhaMoneyPipe
    ],
    providers: [
        MockEpisysServerService,        // accessible anywhere in application
        EpisysServerService        // accessible anywhere in application
    ],
    bootstrap: [
        TransactionHistoryComponent
    ]

})
export class AppModule { }
