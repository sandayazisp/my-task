import TodoButton from "./TodoButton";

export default function TodoItem({id, title, deteleItem, editItem}) {    
    return (
        <>
            <div className="flex w-full h-full py-2 px-4 bg-white rounded-sm items-center justify-between ">
                <p className="text-base font-bold text-yellow text-left">{title}</p>
                <div className="md:space-x-2 flex flex-col md:flex-row space-y-2 md:space-y-0">
                    <TodoButton name="Edit" color="bg-green-700" action={() => editItem(id, title)} />
                    <TodoButton name="Delete" color="bg-red-500" action={() => deteleItem(id)} />
                </div>
            </div>
        </>
    )
};
