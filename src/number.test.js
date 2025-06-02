describe("compare numbers",() => {
    it("basic usage",() => {
        expect(1+1).toBeGreaterThan(1) // maior  que 
        expect(1+1).toBeGreaterThanOrEqual(2) // maior ou igual

        expect(1+1).toBeLessThan(3) // menor que 
        expect(1+1).toBeLessThanOrEqual(2) // menor ou igual 
    })
})