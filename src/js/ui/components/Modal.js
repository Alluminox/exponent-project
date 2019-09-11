import uuid  from 'uuid/v4';
import Component from './Component';


export default class Modal extends Component  {

    constructor(components) {
        super();
        this._components = components;
        this._generatedUiid = uuid();
    }

    template() {

        return `
        
        <div class="modal__wrapper">
            ${this._components.map(component => component.template()).join('')}
        </div>
        `

    }

    init() {
        
        const div = document.createElement('div');
        div.classList.add('modal');
        div.setAttribute("id", `modal__${this._generatedUiid}`)
        div.innerHTML = this.template();


        div.querySelector('.modal__close').addEventListener('click', (event) => {
            event.preventDefault();
            this.emit('closeModal', this._generatedUiid);
        });

        document.body.appendChild(div);



    }

    get componentId() {
        return this._generatedUiid;
    }

}