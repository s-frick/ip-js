import { Ipv4Header, writeIpv4Header } from "./ipv4";

const h: Ipv4Header = {
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

const out: DataView = new DataView(new ArrayBuffer(64));
writeIpv4Header(h, out);

const hex = Array.from({ length: out.byteLength }, (_, i) =>
  out.getUint8(i).toString(16).padStart(2, "0"),
).join(" ");

console.log(hex);
