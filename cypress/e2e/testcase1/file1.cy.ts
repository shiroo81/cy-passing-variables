describe('File 1: Set a value', () => {
  it('Stores a value using cy.task', () => {

    const demoValue = 'Hello from File 1!';

    cy.task('storeValue', demoValue).then(() => {
      cy.log('Value stored successfully');
    });
    
  });
});
