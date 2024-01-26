export class ArrayBufferConverter {
    constructor (buffer) {
        this.buffer = buffer;
        this.output = null;
    }
    load() {
        const array= new Uint16Array(this.buffer);
        const decoder = new TextDecoder("utf-16");
        this.output = decoder.decode(array);
    }
    
    toString() {
        this.load();
        return this.output;
    }       
}