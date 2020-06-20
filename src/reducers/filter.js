import moment from 'moment';

const fliterReduxDefaultState={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}

export default(state=fliterReduxDefaultState,action)=>{

    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:"amount"

            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'Date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.date
            };
        case 'SET_END_DA TE':
            return{
                ...state,
                endDate:action.date
            }


        default:
            return state;
    }

}

