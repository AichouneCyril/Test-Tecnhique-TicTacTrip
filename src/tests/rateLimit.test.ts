import request from 'supertest';
import app from '../../index';

// Test de la limite de taux
describe('Rate Limit API', () => {
    it('doit renvoyer un code 402 si la limite de taux est atteinte', async () => {
    
    
    const response = await request(app)
      .post('/justify')
      .set('Authorization', ` ${process.env.AUTH_TOKEN}`)
      .send({ text: 'Ceci est un exemple de texte' });

    expect(response.status).toBe(200);
    expect(response.text).toBe('Limite de mots atteinte');  });

});
