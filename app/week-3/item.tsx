
interface Things  {
    name: string;
    quantity: number;
    category: string;
}


const Items = ({name = "George", quantity = 4, category = "breakfast"}: Things) => {
    return (
    
   
    <li className="text-orange-500 p-1 border border-red-500 m-2 p-5 flex items-center justify-center flex-col">
        <span>Name: {name}</span>
        <span>Quantity: {quantity}</span> 
        <span>Category: {category}</span>
    </li>
    
        
    );
}


export default Items;