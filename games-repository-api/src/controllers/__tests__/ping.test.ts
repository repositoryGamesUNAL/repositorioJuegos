import { pingController } from '../ping';
import { Request, Response } from 'express';

describe('pingController', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let sendMock: jest.Mock;

    beforeEach(() => {
        // Crear mocks para Request y Response
        mockRequest = {};
        sendMock = jest.fn(); // Mock para la función `send`
        mockResponse = {
            send: sendMock,
        };
    });

    it('should respond with "pong"', () => {
        // Llamar al método del controlador
        pingController.getPing(mockRequest as Request, mockResponse as Response);

        // Verificar que `res.send` se llame con "pong"
        expect(sendMock).toHaveBeenCalledWith('pong');
        expect(sendMock).toHaveBeenCalledTimes(1);
    });
});
