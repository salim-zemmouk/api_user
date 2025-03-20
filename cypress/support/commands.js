Cypress.Commands.add('resetDatabase', () => {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:3001/reset-database', // URL de ton API
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('Failed to reset the database');
        }
    });
});