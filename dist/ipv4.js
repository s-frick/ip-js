"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeIpv4Header = writeIpv4Header;
function writeIpv4Header(h, out) {
    var ver = (h.version & 0xf) << 4; // mask 1111, shift left
    var ihl = h.ihl & 0xf;
    out.setUint8(0, ver | ihl);
    out.setUint8(1, h.tos & 0xff);
    // sanity check the length
    if (h.totalLength > 0xffff)
        console.error("Total length gt 65535");
    out.setUint16(2, h.totalLength & 0xffff, false);
}
