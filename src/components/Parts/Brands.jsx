import Brand from "./Brand";
import axios from "axios";
import {useState, useEffect} from "react";

const Brands = ()=>{
    const [brands, setBrands]=useState([])

    useEffect(() => {
        axios.get(`http://localhost:3003/api/brands`).then((res) => {
          setBrands(res.data.brand);
        });
      }, []);
         

    return(
        <>
        <option>Pasirinkite markę</option>
        {brands.map(br => <Brand key={br.id} brand={br.brand}/>)}
        
        </>
    )
}
export default Brands;