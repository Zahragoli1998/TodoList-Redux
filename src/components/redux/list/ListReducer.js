import { combineReducers } from "redux"
import { Add_To_List, Checked_Item,Delete_Item } from "./ListType"


const initialValue = {
   arr: []
}
    // {
    //     title: 'do homework',
    //     isdone: false
    // },
    // {
    //     title: 'read book',
    //     isdone: false
    // }


const ListReducer = (state =initialValue,action) => {
    const newarray = [...state.arr]
    switch (action.type) {
        case Add_To_List: 
            newarray.push(action.payload)
        return { 
            ...state,
            arr: [...newarray]
        }
        case Delete_Item:
            const index = newarray.findIndex(e => e.Id == action.i.id)
            newarray.splice(index,1)
            return{
                ...state,
                arr : [...newarray]
            }
        case Checked_Item :
            const i = newarray.findIndex((e)=>e.Id==action.id.id)
            newarray[i].isDone = !newarray[i].isDone
            return{
                ...state,
                arr : [...newarray]
            }
        default: return state
    }
}



 const rootReducer = combineReducers({
    list:ListReducer,
})
export default rootReducer
