import { Add_To_List } from "./ListType"
import { Delete_Item } from "./ListType"
import { Checked_Item } from "./ListType"

export const AddToList = (e) =>{
    return{
        type: Add_To_List,
        payload:e
    }
}
export const DeleteItem = (index) =>{
    return{
        type: Delete_Item,
        i :index
    }
}
export const CheckedItem = (id) =>{
    return{
        type: Checked_Item,
        id :id
    }
}
