import { Grid} from '@material-ui/core';
import React from 'react';
import ProductCard from '../layout/ProductCard';
import logoBianco from '../components/bianco-logo-white.png';
import flannelImg from '../components/images/flannel.jpg';



const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Frazada Stripes de Flannel y Corderito',
    subheader: '1 1/2 plaza',
    avatarSrc: logoBianco,
    productDescription: '    •Medidas Disponibles   -Medida Twin: 160x240cm     -Medida Queen: 230x240cm     -Medida King: 270x250cm',
    imgSrc: flannelImg,
    productDetail: 'Doble Faz: Frente: Flannel 300 gramos por m²     Reverso: Corderito 220 gramos por m²     •Tejido y Relleno: 100% Poliester.     •Lavable a máquina.     •Presentada en hermosa bolsa the PVC, ideal para regalo.         Características de la tela:     El Flannel de poliéster está constituido por fibras muy fuertes, lo que lo convierte en un tejido duradero y resistente a la mayoría de los productos químicos, las arrugas, el moho y la abrasión, así como al estiramiento y la contracción. Las frazadas de este tejido son muy fáciles de limpiar, no necesitan plancha, retienen su color y son excelentes aislantes térmicos.'
    
  },
  {
    id: 'p2',
    title: 'Frazada Stripes de Flannel y Corderito',
    subheader: '1 1/2 plaza',
    avatarSrc: logoBianco,
    productDescription: '    •Medidas Disponibles   -Medida Twin: 160x240cm     -Medida Queen: 230x240cm     -Medida King: 270x250cm',
    imgSrc: null,
    productDetail: 'Doble Faz: Frente: Flannel 300 gramos por m²     Reverso: Corderito 220 gramos por m²     •Tejido y Relleno: 100% Poliester.     •Lavable a máquina.     •Presentada en hermosa bolsa the PVC, ideal para regalo.         Características de la tela:     El Flannel de poliéster está constituido por fibras muy fuertes, lo que lo convierte en un tejido duradero y resistente a la mayoría de los productos químicos, las arrugas, el moho y la abrasión, así como al estiramiento y la contracción. Las frazadas de este tejido son muy fáciles de limpiar, no necesitan plancha, retienen su color y son excelentes aislantes térmicos.'
    
  },
  {
    id: 'p3',
    title: 'Frazada Stripes de Flannel y Corderito',
    subheader: '1 1/2 plaza',
    avatarSrc: logoBianco,
    productDescription: '    •Medidas Disponibles   -Medida Twin: 160x240cm     -Medida Queen: 230x240cm     -Medida King: 270x250cm',
    imgSrc: null,
    productDetail: 'Doble Faz: Frente: Flannel 300 gramos por m²     Reverso: Corderito 220 gramos por m²     •Tejido y Relleno: 100% Poliester.     •Lavable a máquina.     •Presentada en hermosa bolsa the PVC, ideal para regalo.         Características de la tela:     El Flannel de poliéster está constituido por fibras muy fuertes, lo que lo convierte en un tejido duradero y resistente a la mayoría de los productos químicos, las arrugas, el moho y la abrasión, así como al estiramiento y la contracción. Las frazadas de este tejido son muy fáciles de limpiar, no necesitan plancha, retienen su color y son excelentes aislantes térmicos.'
    
  },
]

  const Products = ()=> {
    return (
      <Grid container direction='column'>
        <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid container item xs={12} sm={8} spacing={2} >
                {DUMMY_PRODUCTS.map(product =>{
                  return (
                    <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
                    <ProductCard
                    key={product.id} 
                    title={product.title}
                    subheader={product.subheader}
                    avatarSrc={product.avatarSrc}
                    productDescription={product.productDescription}
                    imgSrc={product.imgSrc}
                    productDetail={product.productDetail}
                  />
                  </Grid>
                  )})}
            </Grid>
            
            <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    );
  }

export default Products;