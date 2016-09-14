import { Injectable } from '@angular/core';

import { EpisysServer } from './episys-server.service';
import { MockEpisysServer } from './mock-episys-server.service';

@Injectable()
export class TransactionHistoryService {

//    constructor(private episysService: MockEpisysServer) { }
    constructor(private episysService: EpisysServer) { }

    // return the result of .then which is a promise
    getMessages(): Promise<Object> { return this.episysService.receiveMessages("serviceName", "methodName", "args").then((messages) => this.getFilteredMessages(messages)); }

    getFilteredMessages(messages) {
        return {
            $items: messages.$items.filter((message) => message.Action == "AddSLTranHist")
        };
    }
}