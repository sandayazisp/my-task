export default function TodoButton({name, color, action}) {    
    // const test = () => {
    //     localStorage.setItem('myCat', 'Tom');
    // }
    return <button className={`${color} px-5 rounded-md py-1 text-white font-bold text-base`} onClick={action}>{name}</button>
};
