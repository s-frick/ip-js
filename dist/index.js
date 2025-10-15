"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ipv4_1 = require("./ipv4");
var h = {
    version: 4,
    ihl: 5,
    tos: 0,
    totalLength: 65535,
    identification: 0,
    flags: { df: false, mf: false },
    fragmentOffset: 0,
    ttl: 500,
    protocol: 1,
    headerChecksum: 0,
    src: 1,
    dst: 2,
};
var out = new DataView(new ArrayBuffer(64));
(0, ipv4_1.writeIpv4Header)(h, out);
var hex = Array.from({ length: out.byteLength }, function (_, i) {
    return out.getUint8(i).toString(16).padStart(2, "0");
}).join(" ");
console.log(hex);
