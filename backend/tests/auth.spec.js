const request = require('supertest')
const { connect } = require('./database')
const app = require('../app')
const userModel = require('../models/user.model')



describe('Auth: Signup', () => {
    let conn;

    beforeAll(async () => {
        conn = await connect()
    });

    afterEach(async () => {
        await conn.cleanup()
    });

    afterAll(async () => {
        await conn.disconnect()
    });

    it('should signup a user', async () => {
        const response = await request(app).post('/signup').set('content-type', 'application/json').send({ 
            password: '12345678', 
            firstName: 'tobie',
            lastName: 'Augustina',
            email: 'tobi@mail.com'
        })

        console.log('i got here')
        expect(response.status).toBe(201)
        // expect(response.body).toHaveProperty(data)
        // expect(response.body.data).toHaveProperty(token)
        // expect(response.body).toHaveProperty('message')
        // expect(response.body).toHaveProperty('user')
        // expect(response.body.user).toHaveProperty('username', 'tobi')
        // expect(response.body.user).toHaveProperty('firstname', 'tobie')
        // expect(response.body.user).toHaveProperty('lastname', 'Augustina')
        // expect(response.body.user).toHaveProperty('email', 'tobi@mail.com')        
    })
})    