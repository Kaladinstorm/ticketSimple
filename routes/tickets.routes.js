const express = require('express');
const router = express.Router();
const ticketCtlr = require('../controllers/ticket.controller');

const resTemplate = (code, message, response) => {
    response.send({ 'code' : code, 'message' : message})
};


/**
 * GET List all tickets
 */
router.get('/ticket/', (req, res, next) => {
    ticketCtlr.listTickets().then((ticket) => {
        resTemplate(200, ticket, res);
    }).catch((error) => {
        resTemplate(500, error, res);
    });
});

/**
 * Get a ticket by ID
 */
router.get('/ticket/:id', (req, res, next) => {
    ticketCtlr.getTicket(req.params.id).then((ticket) => {
        resTemplate(200, ticket, res);
    }).catch((error) => {
        resTemplate(500, error, res);
    });
});

/**
 * POST add a ticket
 */
router.post('/ticket', (req, res, next) => {
    ticketCtlr.addTicket(req).then((ticket) => {
        resTemplate(200, ticket, res);
    }).catch((error) => {
        resTemplate(500, error, res);
    });
});

/**
 * PUT update a ticket
 */
router.put('/ticket', (req, res, next) => {
    ticketCtlr.updateTicket(req).then((ticket) => {
        resTemplate(200, ticket, res);
    }).catch((error) => {
        resTemplate(500, error, res);
    });
});

/**
 * DELETE delete a ticket
 */
router.delete('/ticket', (req, res, next) => {
    ticketCtlr.deleteTicket(req).then((ticket) => {
        resTemplate(200, ticket, res);
    }).catch((error) => {
        resTemplate(500, error, res);
    });
});


module.exports = router;