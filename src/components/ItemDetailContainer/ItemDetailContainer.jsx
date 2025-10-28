import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const { id } = useParams();

    useEffect(() => {
       fetch("/data/products.json")
       .then((res) => {
        if(!res.ok){
            throw new Error("Error al cargar los datos");
        }
    return res.json();
       })
       .then((data) => {
           const found = data.find((prod) => String(prod.id) === id);
           
           if (found) {
              setDetail(found);
            } else {
           throw new Error("Producto no encontrado");
            }    
        })
        .catch((err) => {console.error('Error cargando el producto:', err)});
       
    },[id]);
    return(
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail} />
            ) : (
                <p className="loading-text">Cargando...</p>
                
            )}
        </main>
    );
};
        
