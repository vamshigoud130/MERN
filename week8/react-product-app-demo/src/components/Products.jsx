import { useState,useEffect } from "react"
import { useNavigate } from "react-router"
import {useForm} from "react-hook-form"



function Products() {

    let [products, setProducts] = useState([])
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)


    const navigate = useNavigate()

    const goToProductDetails = (product)=>{
        navigate('/product',{state:{product}})
    }
    
    useEffect(()=>{
        // setLoading(true)
        async function getProducts(){
            setLoading(true)
            try{
                let res = await fetch("https://fakestoreapi.com/products")
                if(res.status==200){
                    let data = await res.json()
                    setProducts(data)
                }
                else{
                    throw new Error("Unable to fetch products")
                }
                
            }
            catch(err){
                setError(true)
                
            }
            finally{
                setLoading(false)
            }
        }
            getProducts();
        },[])
          if(loading===true){
        return <p className='text-center text-2xl text-blue-400'>Loading...</p>
    }

    if(error!=null){
        return <p className='text-center text-red-500'>{error.message}</p>
    }
            
        


    
  return (
    <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10'>
        {
            
            products.map((productObj) => {
                    return (
                        <div onClick={()=>goToProductDetails(productObj)}  className='shadow-2xl  p-5 rounded-2xl cursor-pointer hover:scale-105 transition h text-center'>
                            <img src={productObj.image} className='w-[60%] m-auto object-contain h-44 mb-8 ' alt="" />
                            <h1>{productObj.title}</h1>
                            <h2>💲{productObj.price}</h2>
                            <button className='bg-gray-300 p-2 rounded-2xl cursor-pointer'>View details</button>
                        </div>
                    )
                })
        }
    </div>
  )
}

export default Products