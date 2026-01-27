
interface Things  {
    name: string;
    quantity: number;
    category: string;
}


const Items = ({name = "George", quantity = 4, category = "breakfast"}: Things) => {
    return (<div className="border border-red-500 m-2 p-2 flex items-center justify-center ">
        <li className="text-orange-500 ">{name}, {quantity}, {category}</li></div>
        
    )
}


export default Items;