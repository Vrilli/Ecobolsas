import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Url } from '../helpers/Url';
import { Foto } from '../styles/BolsasStyles';

const Ecobolsas = () => {
  
    const [listar, setListar] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(Url)
            .then(response => {
                setListar(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }


  return (<div>

          {
           listar.map(product => (

               <Card key={product.id}>
                <Foto variant="top" src={product.imagen} />
                <Card.Body>
                 <Card.Text>
                   {product.precio}
                 </Card.Text>
                </Card.Body>
               </Card>
           )
           
           )
         };
    
  </div>);
};

export default Ecobolsas;
