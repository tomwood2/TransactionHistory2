import { Component } from '@angular/core';
import { OnInit }   from '@angular/core';

import { TransactionHistoryService } from './transaction-history.service';

class View {
	showAdvanced: boolean = false;
	showDrafts: boolean = false;
	showFilter: boolean = true;
}

class Toolbar {
    fromDate: String = this.getFormatedDate(new Date(), false);
    toDate: String = this.fromDate;
    fromDatePicker: String = this.getFormatedDate(new Date(), true);
    toDatePicker: String = this.fromDatePicker;

    searchAmountType: number = 0;

    getFormatedDate(date: Date, datePicker: Boolean): String {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        if (datePicker) {
            return [this.pad(month, 2), this.pad(day, 2), year].join("/");
        }
        else {
            return [year, this.pad(month, 2), this.pad(day, 2)].join(":");
        }
    }

    pad(num: number, size: number): String {
        let s = "000000000" + num;
        return s.substr(s.length - size);
    }
}

@Component({
    selector: 'transaction-history',
    templateUrl: 'app/views/transaction-history.component.html',
    styleUrls: ['app/css/transaction-history.component.css'],
    providers: [TransactionHistoryService]      // only used in this component
})
export class TransactionHistoryComponent implements OnInit {

    constructor(private transactionHistoryService: TransactionHistoryService) { }

    ngOnInit(): void { this.getMessages(); }

	view = new View();
	toolbar = new Toolbar();
    messages = {};

    getMessages(): void {

        this.transactionHistoryService.getMessages().then(messages => this.messages = messages);
    }
}