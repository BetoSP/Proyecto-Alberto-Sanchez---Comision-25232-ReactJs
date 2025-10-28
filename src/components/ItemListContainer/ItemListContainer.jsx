import {useState, useEffect} from 'react';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
const [products, setProducts] = useState([])

useEffect(() => {
   fetch("/data/products.json")
   .then((res) => {
    if(!res.ok){
        throw new Error("Error al solicitar los productos");
    }
return res.json();
   })
   .then((data) => {
       setProducts(data);
    })
   .catch((err) => {
       console.error(err);
   });
},[]);

    return(  
    <section>
        <h1>Bienvenidos a nuestra tienda</h1>
        <p>Explora nuestra variedad de productos</p>
        <ItemList list={products} /> 
    </section>
    );  
};