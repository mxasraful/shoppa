import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import Layout from '../components/Layout/Layout'
import data from '../utlis/data'
import NextLink from 'next/link'

export default function Home() {
  return (
    <div className='main-app'>
      <Layout >
        <div className="products-items pt-4">
          <h3>Products</h3>
          <Grid container spacing={3}>
            {
              data.products.map(item => (
                <Grid item md={4} key={item.name}>
                  <Card>
                    <NextLink href={`/product/${item.slug}`} passHref>
                      <Link className='product-item-link' underline='none' style={{ color: "#000" }}>
                        <CardActionArea>
                          <CardMedia component="img" image={item.image} title={item.name} />
                        </CardActionArea>
                        <CardContent >
                          <Typography variant="h6">{item.name}</Typography>
                        </CardContent>
                      </Link>
                    </NextLink>
                    <CardActions>
                      <div className="d-flex w-100">
                        <div className="w-50 text-start">
                          <h6>$ {item.price}.00</h6>
                        </div>
                        <div className="w-50 text-end">
                          <Button className='px-4' size="small" color='primary'>Add To Cart</Button>
                        </div>
                      </div>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </div>
      </Layout>
    </div>
  )
}
