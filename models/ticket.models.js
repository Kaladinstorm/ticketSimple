const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketSchema = Schema({
    ticketNum: String,
    title: {
        type: String,
        required: true
    },
    dateStart: {
        type: Date,
        default: Date.now
    },
    dateEnd: {
        type: Date
    },
    description: String,
    assigned: String,
    priority: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    resolution: String,
    progress: [String]
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;