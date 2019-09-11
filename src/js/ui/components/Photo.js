export default class Photo {


    constructor(data) {
        this._data = data;
    }


    template() {  
        const { url , label , albumId } = this._data;
 
        return `<figure class="photo" data-album="${albumId}">
            <img src="${url}" alt="${label}">
            <figcaption>${label}</figcaption>
        </figure> `
    }


}