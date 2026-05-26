import {test, expect } from "@jest/globals";
import status from "../index.js"

test("status healthy", ()=> {
	const magic = {name: 'Маг', health: 90};
	const result = status(magic);
	expect(result).toBe("healthy")
})

test("status wounded", ()=> {
	const magic = {name: 'Roge', health: 30};
	const result = status(magic);
	expect(result).toBe("wounded")
})

test("status Critical", ()=> {
	const magic = {name: 'Warior', health: 10};
	const result = status(magic);
	expect(result).toBe("critical")
})