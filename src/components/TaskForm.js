import styles from "./Taskform.module.css"
import Card from "./Card";
import img from "../images/add.png"
import { useContext, useRef, useState } from "react";
import { ListContext } from "../context/list-context";


let TaskForm = (props) => {

    let listCtx = useContext(ListContext)

    let titleRef = useRef()
    let descriptionRef = useRef()

    let submitHandler = (event) => {
        event.preventDefault()
        let body = {
            id : listCtx.list.length+1,
            title : titleRef.current.value,
            description : descriptionRef.current.value
        }
        listCtx.Add(body)
        console.log(listCtx.list)
    }

    return (
        <div className="d-flex justify-content-center mt-4 font-monospace fs-5">
            <Card>
                <form className="d-flex flex-column" onSubmit={submitHandler}>
                    <input ref={titleRef} placeholder="Title" style={{width:"25vw"}}></input>
                    <textarea id="text" ref={descriptionRef} name="largeText" placeholder="Take a note..."></textarea>
                    <div className="align-self-end me-5">
                        <button className="btn btn-lg btn-warning rounded-5" 
                        style={{boxShadow:"5px 0.5px 0.5px 0.5px rgba(0,0,0,0.5)"
                        }}>
                            <img src={img} style={{height:"16px"}} className="mb-1"/>
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default TaskForm;