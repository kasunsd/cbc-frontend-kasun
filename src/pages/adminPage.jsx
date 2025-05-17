import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className='w-full h-screen flex'>
            <div className="h-full w-[200px] bg-[#606060] text-white flex flex-col">
                <div className="h-full w-full flex flex-col fixed left-[10px]">
                    <Link to='/admin/products'>Products</Link>
                    <Link to='/admin/users'>Users</Link>
                    <Link to='/admin/orders'>Orders</Link>
                    <Link to='/admin/reviews'>Reviews</Link>
                </div>
            </div>
            <div className="h-full w-[calc(100%-200px)] bg-[#DBDBDB]">
                <Routes path='/*'>
                    <Route path='/products' element={<h1>Product</h1>}/>
                    <Route path='/users' element={<h1>Users</h1>}/>
                    <Route path='/orders' element={<h1>Orders</h1>}/>
                    <Route path='/reviews' element={<h1>Reviews</h1>}/>
                </Routes>
            </div>
            
        </div>   
    ) 
}