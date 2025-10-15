export interface Ipv4Header {
  version: 4;
  ihl: number; // Internet Header Length; min 5
  tos: number; // Type Of Service
  totalLength: number;
  identification: number;
  flags: { df: boolean; mf: boolean };
  fragmentOffset: number;
  ttl: number;
  protocol: number; // 1=ICMP, 6=TCP, 17=UDP
  headerChecksum: number;
  src: number; // IPv4 als 32-bit int (big-endian)
  dst: number;
}

interface IcmpEcho {
  type: 8; // Echo Request (Reply=0)
  code: 0;
  identifier: number; // 16-bit
  sequence: number; // 16-bit
  data: Uint8Array;
}

export function writeIpv4Header(h: Ipv4Header, out: DataView) {
  const ver = (h.version & 0xf) << 4; // mask 1111, shift left
  const ihl = h.ihl & 0xf;

  out.setUint8(0, ver | ihl);
  out.setUint8(1, h.tos & 0xff);

  // sanity check the length
  if (h.totalLength > 0xffff) console.error("Total length gt 65535");
  out.setUint16(2, h.totalLength & 0xffff, false);
}
