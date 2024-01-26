import { ArrayBufferConverter } from "./js/ArrayBufferConverter.js";
import { getBuffer } from "./js/app.js";

const converter = new EArrayBufferConverter(getBuffer());
console.log(converter.toString());
