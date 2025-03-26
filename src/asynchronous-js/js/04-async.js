"use strict";

const oneMsFirst = () =>
	setTimeout(() => {
		console.log(`1_000 ms 1️⃣`);
	}, 1000);

const twoMs = () =>
	setTimeout(() => {
		console.log(`2_000 ms`);
	}, 2000);

const oneMsSecond = () =>
	setTimeout(() => {
		console.log(`1_000 ms 2️⃣`);
	}, 1000);

const zeroMs = () =>
	setTimeout(() => {
		console.log(`0 ms`);
	}, 0);

oneMsFirst();
twoMs();
oneMsSecond();
zeroMs();
