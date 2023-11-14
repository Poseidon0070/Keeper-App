import { useContext } from "react";
import { ListContext } from "../context/list-context";
import Card from "./Card";
import ListItem from "./ListItem";
import img from "../images/delete.png"
import styles from "./TaskList.module.css"

let TaskList = (props) => {
    let listCtx = useContext(ListContext)

    let deleteHandler = (id) => {
        // console.log(id)
        listCtx.Remove(id)
    }

    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 gx-5">
                {listCtx.list.map((item,index) => {
                    console.log(index)
                    return (
                        <div key={item.id} className="col d-flex flex-column" >
                            <ListItem title={item.title} description={item.description} />  
                            <div className={`align-self-end me-2 ${styles['delete']}`}>
                                <button className="btn btn-lg rounded-5"
                                style={{boxShadow:"5px 0.5px 0.5px 0.5px rgba(0,0,0,0.5)"}} onClick={deleteHandler.bind(null,item.id)}>
                                    <img src={img} style={{height:"20px"}} className="mb-1"/>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TaskList;