import { Injectable } from '@angular/core';

import { MockEpisysServer } from './mock-episys-server.service';

@Injectable()
export class TransactionHistoryService {

    constructor(private episysService: MockEpisysServer) { }
    // return the result of .then which is a promise
    getMessages(): Promise<Object> { return this.episysService.receiveMessages().then((messages) => this.getFilteredMessages(messages)); }

    getFilteredMessages(messages) {
        return {
            $items: messages.$items.filter((message) => message.Action == "AddSLTranHist")
        };
    }
}