import { AddShoppingCart, Search } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router";

export default function Product(props:any){
    return(
      <>
      <Card>
        <CardMedia sx={{height:250,backgroundSize:"contain"}} image={props.product?.imageUrl} />
      </Card>
      <CardContent>
        <Typography gutterBottom variant="h6" color="text.secondary">
        {props.product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.product?.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" startIcon={<AddShoppingCart/>} color="secondary"> Sepete Ekle </Button>
        <Button component={Link} to={`/catalog/${props.product.id}`} size="small" startIcon={<Search/>} color="info"> İncele </Button>
      </CardActions>
      </>
    )
  }