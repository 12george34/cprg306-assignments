
interface Item  {
    name: string;
    quantity: number;
    category: string;
}



const Items = ({name, quantity, category}: Item) => {
   
    return (<div className="border border-red-500 m-2 p-2 flex items-center justify-center">
        <p className="text-orange-500 ">{name}, {quantity}, {category}</p>
        </div>
        
    )
}


export default Items;