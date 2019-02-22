const Ticket = require('../models/ticket.models');


module.exports.listTickets = async () => {
    return "lists of tickets";
}

module.exports.getTicket = async (id) => {
    return "ID: " + id;
}

module.exports.addTicket = async (ticket) => {
    console.log(ticket);
    return "adding ticket : ";
}

module.exports.updateTicket = async (ticket) => {
    console.log(ticket);
    return "updating ticket";
}

module.exports.deleteTicket = async (id) => {
    console.log(id);
    return "deleting ticket";
}