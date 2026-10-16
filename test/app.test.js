import test from "node:test";
import assert from "node:assert/strict";
import { makeServer } from "../src/app.js";
test("GET / returns the taxed total", async () => {
  const server = makeServer().listen(0);
  await new Promise((r) => server.once("listening", r));
  try {
    const res = await fetch(`http://127.0.0.1:${server.address().port}/`);
    const body = await res.json();
    assert.equal(body.total, 1080);
  } finally {
    server.close();
  }
});
