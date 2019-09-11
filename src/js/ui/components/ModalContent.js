export default class ModalContent {

    constructor(components) {
        this._components = components;
    }

    template() {
        return `<div class="modal__content">${components.map(component => component.template())}</div>`
    }


}