export class Section {
    constructor( data, renderer , selector) {
        this.selector = selector;
        this.renderedItems = data;
        this.renderer = renderer;
    }

    addItem(element) {
        this.selector.prepend(element);
    }

    renderItems() {
        this.renderedItems.forEach((item) => {
            this.renderer(item);
        });
    }
}