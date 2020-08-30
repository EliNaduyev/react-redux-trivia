

const nameReducer = (state='init name', action) =>{

    switch(action.type){
        case 'NICKNAME':
            return action.payload
        default:
            return 'defualt value fsdf'
    }
}

export default nameReducer