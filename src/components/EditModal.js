import TodoButton from "./TodoButton";
import '../index.css';

export default function EditModal({isModal, closeModal, data, onChange, update, konfirm}) {
    return (    
        <>
            {
            isModal 
            ?
            <div className={`bg-slate-500 bg-opacity-40 w-full h-full absolute flex justify-center items-center top-0 `}>
                <div className="bg-white p-6 space-y-5 rounded-lg modal-box text-center">
                    <h3 className="text-xl font-bold text-blue-500">Edit Task</h3>
                    <input type='text' className="border py-1 px-2" value={data.title} onChange={onChange} />
                    <div className="space-x-3">
                        <TodoButton name="Edit" color="bg-green-700" action={() => konfirm()} />
                        <TodoButton name="Batal" color="bg-red-500" action={() => closeModal()} />
                    </div>
                </div>
            </div>
            :
            null
            }
        </>
    )
};
