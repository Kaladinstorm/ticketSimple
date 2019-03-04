const Ticket = require('../models/ticket.models');
const searchEngine = require('../utils/search-engine');


module.exports.listTickets = async () => {
    return new Promise((resolve, reject) => {
        Ticket.find({}, (err, tickets) => {
            if(err) {
                reject(err);
            } else {
                resolve(tickets);
            }
        });
    }) 
}

module.exports.getTicket = async (query) => {

    const res = await searchEngine.buscarBy(query);
    return res;
}

module.exports.addTicket = async (ticket) => {

    const newTicket = new Ticket({
        ticketNum: ticket.body.ticketNum,
        title: ticket.body.title,
        dateStart: ticket.body.dateStart,
        dateEnd: new Date(ticket.body.dateEnd),
        description: ticket.body.description,
        assigned: ticket.body.assigned,
        priority: ticket.body.priority,
        type: ticket.body.type,
        state: ticket.body.state,
        resolution: ticket.body.resolution,
        progress: ticket.body.progress
    });

    newTicket.save((err, data) => {
        if(err) {
            throw err;
        }
    });

    return ticket.body;
}

module.exports.updateTicket = async (ticket) => {
    console.log(ticket);
    return "updating ticket";
}

module.exports.deleteTicket = async (id) => {
    console.log(id);
    return "deleting ticket";
}