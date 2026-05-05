import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 73,
    "capacity": 104,
    "latency": 11,
    "risk": 23,
    "weight": 4,
    "score": 110,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 98,
    "capacity": 77,
    "latency": 9,
    "risk": 18,
    "weight": 10,
    "score": 197,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 71,
    "capacity": 99,
    "latency": 17,
    "risk": 14,
    "weight": 11,
    "score": 178,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
