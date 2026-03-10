import ItemList from "./item-list"

export default function Page() {
    return <main>
        <div style={{backgroundColor: "black"}}>
        <h1 className="flex items-center justify-center text-pink-500"
        style={{fontSize: "25px"}}>Shopping List</h1>
        <ItemList />
        </div>

    </main>
}