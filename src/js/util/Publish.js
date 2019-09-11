
export default class Publish {

    constructor() {
        this._events = {};
    }

    on(eventName, cb)  {

        if(!this._events[eventName]) {
            this._events[eventName] = [cb];
        }

        this._events[eventName].push(cb);


    }


    emit(eventName, data) {
        const events = this._events[eventName];
        if(events && events.length) {
            events.forEach(event => {
                event(data);
            });
        }
    }



}