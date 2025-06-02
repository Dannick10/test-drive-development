describe("calculator", () => {
    it("basic", () => {
        expect("developer").toMatch(/\w+/)
        expect("(21)91254-512").toMatch(/^\(\d{2}\)\d{5}-\d{3}$/)
    })
})