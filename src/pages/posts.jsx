import React, { useState } from "react";
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import Navbar from "./navbar";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // Import editor styles
import { Link } from 'react-router-dom';



function Posts () {

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);


    
};
const [tasks, setTasks] = useState("");
const [newTask,setNewtask] = useState("");

function handleInpputchange(event){
    setNewtask(event.target.value);
}



function addTask(){
    setTasks(t => [...tasks,newTask])
    setNewtask ("");
}

    return (
        <React.Fragment>
        <div>
            <Navbar/>
            <div className="div ">
                <input type="text" placeholder="title" value={newTask} onChange={handleInpputchange}className='post-title mb-5'/>
              
                
                <div onchange={handleInpputchange}> 
                    <Editor
                            editorState={editorState}
                            onEditorStateChange={onEditorStateChange}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            toolbar={{
                            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
                        }}
                    />
                </div>

                <Link to="/home" className="btn btn-primary" onclick={addTask}>Add</Link>
                    
                <button className="add-button" onclick={addTask}>Add

                </button>

            </div>
            
  
        </div>


  
      </React.Fragment>
    );
};

export default Posts;