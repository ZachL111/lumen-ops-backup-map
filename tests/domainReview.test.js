import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 44, slack: 41, drag: 9, confidence: 58 };
assert.equal(domainReviewScore(item), 160);
assert.equal(domainReviewLane(item), "ship");
