class GenericWorker {
    constructor(product) {
        console.log(`GenericWorker is working with the type ${typeof product}`);
        this.product = product;
    }
}
const stringWorker = new GenericWorker("This is a string!");
const numberWorker = new GenericWorker(50);
export {};
//# sourceMappingURL=mapping.js.map