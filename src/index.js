import { ArrayBufferConverter } from "./js/ArrayBufferConverter.js";
import { getBuffer } from "./js/app.js";

const converter = new ArrayBufferConverter(getBuffer());
console.log(converter.toString());
