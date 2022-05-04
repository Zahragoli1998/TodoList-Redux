import { useState } from "react";
import { connect } from "react-redux";
import { AddToList,CheckedItem,DeleteItem } from "./redux/list/ListAction";
import addIcon from '../img/icons8-add-80.png'
import editIcon from '../img/icons8-edit-64.png'
import checkIcon from '../img/icons8-check-32.png'
import deleteIcon from '../img/icons8-cancel-32.png'
const UID= () => `${(new Date().getTime())}`


const ToDoList = (props) =>{

    console.log(props);

    const[input,setinput]=useState('')
    const[edit,setEdit] =useState(false)
    return(
        <div className="container">
            <div className="body">
                <h1>To Do List</h1>
                <div className="inputbox">
                    <input 
                    onKeyDown={(e)=>{
                        if(e.key==='Enter'){
                            if (input!=='') {
                                props.AddToList({
                                    Id:UID(),
                                    title:input,
                                    isDone:false
                                })
                                setinput('')
                            } 
                        }
                    }} 
                    value={input} onChange={(e)=>setinput(e.target.value)}></input>
                    <button
                    onClick={()=>{
                        if (input!=='') {
                            props.AddToList({
                                Id:UID(),
                                title:input,
                                isDone:false
                            })
                            setinput('')
                        }
                    }}><img className="addIcon" src={addIcon}/></button>
                </div>
                <div className="listBox">
                    {
                        props.list.list.arr.map((item,i)=>{
                            const id = item.Id
                            return(
                                <div className={`${item.isDone? 'itemIsDone' : 'listItems'}`} key={item.Id}>
                                    <div className='item'>
                                        <div>
                                            {
                                                edit? <input/>
                                                :
                                                <h2 className={`${item.isDone? 'done' : ''}`}>{item.title}</h2>
                                            }
                                        </div>  
                                        <div className="bottonBox">
                                            <img className="checkIcon" src={checkIcon}
                                            onClick={()=>props.CheckedItem({id})}/>
                                            <img className="deleteIcon" src={deleteIcon}
                                            onClick={()=>props.DeleteItem({id})}/>
                                            <img className="editIcon" src={editIcon}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{

    return{
        list : state
    }
}
const mapDispatchToProps = dispatch =>{
    return{
       AddToList :(obj)=> dispatch(AddToList(obj)),
       DeleteItem:(index)=> dispatch(DeleteItem(index)),
       CheckedItem :(id)=> dispatch(CheckedItem(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ToDoList)