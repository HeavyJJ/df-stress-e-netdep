import { createServer } from "node:http";
export function priceWithTax(cents) { return Math.round(cents * 1.08); }
export function makeServer() {
  return createServer((req, res) => {
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ total: priceWithTax(1000) }));
  });
}
