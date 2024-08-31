import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  //implement the get products function
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  //implement the delete function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id)); 
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container >
      <Typography variant="h4" align="center" gutterBottom>
        Simple Card List
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="140"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <IconButton
                onClick={() => handleDelete(product.id)}
                sx={{ //trash bin logo should appear on the top left and be red
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  color: 'red',
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;