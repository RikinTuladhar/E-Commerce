    import React, {useEffect, useState} from 'react'
    import ProductForm from './ProductForm'
    import ProductApi from "../API/ProductApi"
import { useOutletContext } from 'react-router-dom';
    const AdminProduct = () => {
        const {getProduct} =  ProductApi();
        const {reload,setReload} = useOutletContext();

        const [products, setProducts] = useState([]);
        
        useEffect(()=>{
            getProduct("/products").then((res)=>{
                setProducts(res)
            }).catch((err)=>{console.error( "Error when fetching " +err)});
        },[reload])

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };
    console.log(products)
    return (
        <div className="container mt-5">
        <h1 className='text-5xl text-center'>Admin Panel</h1>
        <ProductForm  />
        <hr />
        <h2 className='text-3xl text-center'>Products</h2>
        <ul className="list-group">
        {products.map((product, index) => (
            <li key={index} className="list-group-item">
            <strong>{product.name}</strong> - ${product.price.toFixed(2)} <br />
            {product.description} <br/>
            {product.images && (
              <img
                src={product.image}
                alt={product.name}
                onError={e => e.target.src ="/Images/ImageNotFound.jpg"}
                className="h-40 mt-3 w-30 bg-slate-950"
              />
            )}
            </li>
        ))}
        </ul>
    </div>
    )
    }

    export default AdminProduct