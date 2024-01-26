import { ArrayBufferConverter } from "../ArrayBufferConverter.js";
import { getBuffer } from "../app.js";

test('should convert the ArrayBuffer to a string', () => {
    const converter = new ArrayBufferConverter(getBuffer());
    expect(converter.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});