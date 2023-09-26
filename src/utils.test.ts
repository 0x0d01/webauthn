import { randomChallenge } from "./utils.js";

/*
test('Test challenges', async() => {
    expect((await randomChallenge()).length > 16)
    expect((await randomChallenge()) !== (await randomChallenge()))
});
*/
test('Test challenges', async() => {
    expect(randomChallenge().length > 16)
    expect(randomChallenge() !== randomChallenge())
});
