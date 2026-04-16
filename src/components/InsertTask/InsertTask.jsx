import { useState } from 'react';
import './InsertTask.css';

export default function InsertTask(){
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);
    
    function insertTask(){
        if(input.trim() === '') return;

        setTasks([...tasks, input]);
        setInput('');
    }

    function removerTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
        return;
    }



    return(
        <div className="insertTask">
            <div className="field-insert">

                <input 
                    type="text" 
                    name="text" 
                    placeholder='task...'
                    className='insert'
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                />

                <button 
                    type="button"
                    className='add'
                    onClick={insertTask}
                >
                    ADD
                </button>

            </div>
            <div className="field-tasks">
                {
                    tasks.map((task, index)=>(
                        <div className="listTask">

                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                />
                                    <span className="checkmark"></span>
                            </label>

                            <p key={index}>{task} </p> 
                            <button 
                                type="button"
                                className="btn-x"
                                onClick={() => removerTask(index)}
                            >
                                🗑️
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}