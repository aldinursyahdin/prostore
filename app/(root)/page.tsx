import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  const products = latestProducts.map(product => ({
    ...product,
    rating: parseFloat(product.rating),
  }));

  return (
    <>
      <ProductList data={products} title='Newest Arrivals' limit={4} />
    </>
  );
};

export default Homepage;
