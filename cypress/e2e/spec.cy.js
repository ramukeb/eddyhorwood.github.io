
describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  afterEach(() => {
    cy.task('clear:data')
  })
  
  it('Can create a new todo and the ToDo exists in the page', () => {
    const text = "cypressTest"
    cy.get('[type="text"]').type(text)
    cy.get('.submitButton').click()
    cy.contains('.todo')
  })

  it('Clearing todos that are marked as completed works correctly', ()=>{
    
  })

})