import TodoButton from "./TodoButton";
import '../index.css';

export default function KonfirmasiModal({isModal, closeModal, data, onChange, update}) {
    return(
        <>
            {
            isModal
            ?
            <div className={`bg-slate-500 bg-opacity-40 w-full h-full absolute flex justify-center items-center top-0`}>
                <div className="bg-white p-6 space-y-5 rounded-lg modal-box text-center">
                    <h3 className="text-xl font-bold text-blue-500">Are You Sure ?</h3>                    
                    <div className="space-x-3">
                        <TodoButton name="Yes" color="bg-green-700" action={() => update()} />
                        <TodoButton name="Cancel" color="bg-red-500" action={() => closeModal()} />                        
                    </div>
                </div>
            </div>
            :
            null
            }
        </>
    )
};