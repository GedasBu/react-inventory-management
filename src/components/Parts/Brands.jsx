import Brand from "./Brand";
import axios from "axios";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3003/api/brands`).then((res) => {
      setBrands(res.data.brand);
    });
  }, []);

  return (
    <>
     
        <option>Pasirinkite markę</option>
        {brands.map((br) => (
          <option key={br.id}>{br.brand}</option>
        ))}
    
    </>
  );
};
export default Brands;
