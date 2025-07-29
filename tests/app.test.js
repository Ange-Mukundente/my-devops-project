// tests/app.test.js

const request = require('supertest');
const app = require('../src/app'); // Import your app

describe('GET /', () => {
    it('should respond with a 200 status code and contain the welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('Welcome');
    });
});