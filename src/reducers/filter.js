import moment from 'moment'


const filterReducerDefaultState = {
    text:'',
    sortBy:'date', //date or amount
    startDate: moment().startOf('month'), //para que siempre empiece con el 1ro del mes y termine en el ultimo del mes actual
    endDate: moment().endOf('month')
}
//Filter reducer
const filterReducer = (state = filterReducerDefaultState, action) => {
    
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                    ...state,  //DE ESTA MANERA SE CAMBIA EL VALOR DE UN ITEM DENTRO DE UN OBJETO, SE INVOCA AL OBJECTO Y LUEGO SE DEFINE EL QUE SE VA A CAMBIAR
                    text:action.text  //CON LO QUE SE VA A CAMBIAR  
                };
        case 'SET_START_DATE':
            return {
                    ...state,  //DE ESTA MANERA SE CAMBIA EL VALOR DE UN ITEM DENTRO DE UN OBJETO, SE INVOCA AL OBJECTO Y LUEGO SE DEFINE EL QUE SE VA A CAMBIAR
                    startDate:action.startDate  //CON LO QUE SE VA A CAMBIAR  
                };
        case 'SET_END_DATE':
            return {
                    ...state,  //DE ESTA MANERA SE CAMBIA EL VALOR DE UN ITEM DENTRO DE UN OBJETO, SE INVOCA AL OBJECTO Y LUEGO SE DEFINE EL QUE SE VA A CAMBIAR
                    endDate:action.endDate  //CON LO QUE SE VA A CAMBIAR  
                };
        case 'SORT_BY_AMOUNT':
            return {
                    ...state,  //DE ESTA MANERA SE CAMBIA EL VALOR DE UN ITEM DENTRO DE UN OBJETO, SE INVOCA AL OBJECTO Y LUEGO SE DEFINE EL QUE SE VA A CAMBIAR
                    sortBy:'amount'  //CON LO QUE SE VA A CAMBIAR  
                };
        case 'SORT_BY_DATE':
            return {
                    ...state,  //DE ESTA MANERA SE CAMBIA EL VALOR DE UN ITEM DENTRO DE UN OBJETO, SE INVOCA AL OBJECTO Y LUEGO SE DEFINE EL QUE SE VA A CAMBIAR
                    sortBy:'date'  //CON LO QUE SE VA A CAMBIAR  
                };
        default: 
            return state;
    };
};
export default filterReducer;