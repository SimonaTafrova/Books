const chai = require("chai")
const chaiHttp = require('chai-http')
const server = require('./server')
const expect = chai.expect;

chai.use(chaiHttp);

describe("Books API tests", () => {
    it('should CREATE a book', (done) => {
        const book = { id: "1", title: "Test Title" , author: "Test Author"}
        chai.request(server)
        .post("/books")
        .send(book)
        .end((err, res) => {
            expect(res.statusCode).to.be.equal(201)
            expect(res.body).to.have.property('id')
            done();

        })
    })

    it('should return 404 when trying to GET a non-existing book', (done) => {
        chai.request(server)
        .get('/books/999')
        .end((err, res) => {
            expect(res).to.have.status(404)
            done()
        })
    })
})
