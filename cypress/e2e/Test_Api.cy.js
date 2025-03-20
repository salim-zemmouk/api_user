describe('Test Api Users', () => {
    beforeEach(() => {
        cy.resetDatabase();
    });
    it('Should test data base reset ', () => {
        cy.request('GET', 'http://localhost:8081/api/users')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.length).to.eq(0);

            });
    });
    it('should creat user', () => {
        cy.fixture('users.json').then((users)=>{
                cy.request({
                    method: 'POST',
                    url: 'http://localhost:8081/api/users',
                    body: users
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    cy.log(response.body)
                    //expect(response.body.length).to.eq(4)
                    expect(response.body).to.have.property('id');
                    expect(response.body).to.have.property('username', 'kamal');
                    expect(response.body).to.have.property('password', 'password123');
                    expect(response.body).to.have.property('email', 'alice@example.com');
                    expect(response.body).to.have.property('name', 'Alice');

                })
            })
        })


});