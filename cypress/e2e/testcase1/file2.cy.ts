describe('File 2: Get a value', () => {
    it('Retrieves the value using cy.task', () => {

    // Retrieve the variable with the value in Node.
      cy.task('getValue').then((value) => {
        cy.log('Retrieved value: ' + value);
        expect(value).to.equal('Hello from File 1!');
      });

    });
  });
  