import { useState } from "react";
import TodoButton from "./TodoButton";

export default function TodoInput({addItem}) {
    const [item, setItem] = useState('')
    const inputData = (e) => {
        setItem(e.target.value)        
    }

    const submit = () => {
        if (item !== '') {
            addItem(item)
            setItem('')                
        }        
    }

    return (
        <>
            <div className="flex w-full py-2 px-4 bg-white space-x-5 rounded-md mb-8">
                <input type="text" className="w-full focus:outline-none" value={item} placeholder="Add new task..." onChange={inputData}  onKeyPress={e => e.key === 'Enter' && submit()} />
                <TodoButton name="Add" color="bg-teal-600" action={() => submit()} />
            </div>
        </>
    )
    
};
