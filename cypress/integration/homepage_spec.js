describe('Test add task header', () => {
    const randomNumber = Math.floor(Math.random() * 50)
    it('Can Add Tasks', () => {
        cy.visit('http://localhost:4200/');
        cy.get("button[aria-label='add-task']").click();
        cy.get("input[name='text']").type(`Try adding tasks no ${randomNumber}`);
        cy.get("input[name='day']").type(`Time Limit: ${randomNumber}`);
        cy.get("input[name='reminder']").click();
        cy.get("input[type='submit']").click();
        cy.contains(`Try adding tasks no ${randomNumber}`);
        cy.contains(`Time Limit: ${randomNumber}`);
    });
});
