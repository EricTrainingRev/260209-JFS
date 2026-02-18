
class GenericWorker<T>{
    product: T;
    constructor(product: T){
        console.log(`GenericWorker is working with the type ${typeof product}`)
        this.product = product;
    }
}

const stringWorker = new GenericWorker<string>("This is a string!");
const numberWorker = new GenericWorker<number>(50);

type CustomType = {prop: string}
