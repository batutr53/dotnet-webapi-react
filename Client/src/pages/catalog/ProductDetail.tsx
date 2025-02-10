import { CircularProgress, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useParams } from "react-router";
import { IProduct } from "../../model/IProduct";
import { useEffect, useState } from "react";
import request from "../../api/request";

export default function ProductDetail() {
const {id} = useParams();
const [product, setProduct] = useState<IProduct | null>(null);
const [loading, setLoading] = useState<boolean>(true);
useEffect(() => {
   request.Catalog.details(Number(id))
    .then(response => setProduct(response.data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
},[id]);

if(loading) return <CircularProgress />;
if(!product) return <Typography variant="h1">Product not found</Typography>

return(
<Grid2 container spacing={6} >
    <Grid2 size={{xl: 3, lg: 4, md: 5, sm: 6, xs: 12}}>
        <img src={product.imageUrl} alt={product.name} width="300" />
    </Grid2>
    <Grid2 size={{xl: 9, lg: 8, md: 7, sm: 6, xs: 12}}>
        <Typography variant="h3">{product.name}</Typography>
        <Typography variant="h5">{product.price.toFixed(2)} </Typography>
        <Typography variant="body1">{product.descriptin}</Typography>
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{product.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>{product.descriptin}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Stock</TableCell>
                        <TableCell>{product.stock}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </Grid2>
</Grid2>
);

}