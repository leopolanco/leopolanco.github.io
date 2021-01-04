import uuid from 'uuid'

export const addExpense = (
    { //parametros a tomar
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {} 
) => ({
type: 'ADD_EXPENSE', //tipo de accion
expense: { //definicion de objeto gasto
    id:uuid(),
    description,
    note,
    amount,
    createdAt
}
})

export const removeExpense = (id = {}) => ({
type: 'REMOVE_EXPENSE',
id//se toma el id para saber a cual gasto eliminar
})  

export const editExpense = (id, updates) => ({
type: 'EDIT_EXPENSE',
id, // se toma id para saber a cual gasto editar
updates //se toma objeto updates para combinar con el objeto raiz
})