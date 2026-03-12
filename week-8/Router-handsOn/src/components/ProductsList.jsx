import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';


function ProductsList() {
    let [product, setProduct] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);
    let [input, setInput] = useState("");

    let {register , handleSubmit} = useForm();

    const navigate = useNavigate();

    // navigate to product component
    const gotoProduct = (productObj) => {
        // navigation logic
        // while navigating, transfer productObj too
        navigate('/product', { state: { product: productObj } });
    }

    const inputEntry = (data) => {
        // e.preventDefault();
        // const searchValue = e.target.elements.categorySearch.value;
        setInput(data.categorySearch);
        console.log(input);
        
    }

    useEffect(() => {
        setLoading(true);
        async function getProducts() {
            try {
                let res = await fetch("https://fakestoreapi.com/products");
                if (res.status === 200) {
                    let productsData = await res.json();
                    setProduct(productsData);
                } else {
                    throw new Error("failed to fetch");
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false); // Fix: Turn off loading state!
            }
        }
        getProducts();
    }, []);

    if (loading) return <p className='text-center text-2xl text-blue-200'>Loading ...</p>;
    if (error) return <p className='text-center text-2xl text-red-400'>{error.message}</p>;

    return (
        <div>
            {/* 1. Add the Outlet with context to share data with children */}
            {/* <Outlet context={{ product }} /> */}

            {/* 2. Your existing list */}
            <form className='items-center m-3' onSubmit={handleSubmit(inputEntry)}>
                <input  {...register("categorySearch")} type="text" placeholder='enter category ...' className='border-2 p-2' />
                <button type="submit" className='border-2 p-2 m-2'>Search</button>
            </form>

            {
           (input !== "") ?
            product.filter((productobj) => {
                return productobj.category === input;
            }).map((productobj) => (
                <div key={productobj.id} className='shadow-2xl' onClick={() => gotoProduct(productobj)}>
                    <img src={productobj.image} alt="" className="h-44 object-contain mx-auto p-2" />
                    <p className='text-center text-m p-2 font-bold'>{productobj.title}</p>
                </div>
            ))
            :
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-12 cursor-pointer">
                    {product.map((productobj =>
                        <div className='shadow-2xl' onClick={() => gotoProduct(productobj)}>
                            <img src={productobj.image} alt="" className="h-44  object-contain  mx-auto p-2" />
                            <p className='text-center text-m p-2 font-bold'>{productobj.title}</p>
                        </div>))}
                </div>
            }
        </div>
    )
}

export default ProductsList;
