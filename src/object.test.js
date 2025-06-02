const users = {
    name: "Daniel",
    email: "yktest@test.com"
}


describe("match object", () => {
    it("basic usage", () => {
        expect(users.name).toBeDefined() //verificar propriedade
        expect(users.idade).not.toBeDefined()
    })
})