

import { useState, useEffect } from "react"

interface Products {
    id: number,
    title:string,
    brand:string,
    price:number
    
};

function Products() {
    const [products, setProduct] = useState<Products[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    function getProdfuctsData() {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProduct(data.products);
                setIsLoading(!isLoading);
            })
            .catch((e) => {
                setError(e);
            });
    }

    useEffect(() => {
        getProdfuctsData();
    }, []);

    if(isLoading){
        return (
            <h1>Data is Loading...</h1>
        );
    }

    if(error){
        return (
            <h1>Error while fetching the data</h1>
        );
    }
    return (
        <div>
            <h1>Product Data</h1>
            {
                products.map((product) => (
                    <div key={product.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
                        <h2>{product.id}</h2>
                        <h2>{product.title}</h2>
                        <h2>{product.brand}</h2>
                        <h2>{product.price}</h2>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Products