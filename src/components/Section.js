export class Section {
    constructor( data, renderer , selector) {
        this.selector = selector;
        this.renderedItems = data;
        this.renderer = renderer;
    }

    addItem(element, newCard) {
        if (newCard === true) {
            this.selector.prepend(element);
        } else if (newCard === false) {
            this.selector.append(element);
        }
    }

    renderItems() {
        this.renderedItems.forEach((item) => {
            this.renderer(item);
        });
    }
}