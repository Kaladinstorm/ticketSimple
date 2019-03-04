module.exports.buscarBy = async (params) => {

    const { assigned, ticketNum, dateStart, dateEnd, priority, type, state } = params;
    let result;

    console.log( assigned, ticketNum, dateStart, dateEnd, priority, type, state);

    if (assigned !== undefined) {
        
        result = "asd";

    } else {
        result = "debe ingresar un asignado";        
    }

    return result;
}