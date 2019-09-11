import Photo from './Photo';

export default class Gallery {

    constructor(data) {
        this._data = data;
    }

    template() {

        console.log(this._data)
        return this._data.map(item => new Photo(item).template())
    }
}