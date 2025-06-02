
const users =["daniel", "developer"]

describe("Match arrays", () => {
    it("verify arrays elements", () => {

        expect(users).not.toContainEqual('daniel2')
        expect(users).toContainEqual('daniel')

        expect(users).toContain(users[1])
        expect(users).not.toContain(users[3])
    })
})