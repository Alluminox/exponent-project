export default ({src, alt}) => {
    return `
        <div class="modal-grid__item">

        <a data-fancybox="gallery" href="${src}">
            <img src="${src}" alt=${alt}>
        </a>

        </div>
    `;
}