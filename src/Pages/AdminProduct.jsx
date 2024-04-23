    import React, {useState} from 'react'
    import ProductForm from './ProductForm'
    const AdminProduct = () => {
        const [products, setProducts] = useState([]);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };
    console.log(products)
    return (
        <div className="container mt-5">
        <h1 className='text-5xl text-center'>Admin Panel</h1>
        <ProductForm onAdd={handleAddProduct} />
        <hr />
        <h2 className='text-3xl text-center'>Products</h2>
        <ul className="list-group">
        {products.map((product, index) => (
            <li key={index} className="list-group-item">
            <strong>{product.name}</strong> - ${product.price.toFixed(2)} <br />
            {product.description} <br/>
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
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