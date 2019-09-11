export default class ModalHeader {

    constructor(data) {
        this._data = data;
    }


    template() {
    
        return `<div class="modal__header">
                <span class="modal__close"><i class="material-icons">close</i></span>
                <span class="modal__title">${this._data.title}</span>  
            </div>`
    }


}