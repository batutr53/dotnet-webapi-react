import { Grid2 } from '@mui/material';
import { IProduct } from '../../model/IProduct';
import Product from './Product';

export default function ProductList(props:any){
    return(
      <Grid2 container spacing={3}>
      {props.products.map((p:IProduct) =>(
         <Grid2 size={{xs:6,md:4,lg:3}}>
     <Product Key={p.id} product={p}/>
     </Grid2>
      ))}
     <button onClick={props.addProduct}>Ürün Ekle</button>
      </Grid2>
    );
  }