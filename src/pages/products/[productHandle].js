import React, { useMemo } from 'react';

import dynamic from 'next/dynamic';

import { Stack } from '../../components/mui-components/MuiComponents';
import PATH from '../../constant/paths';
import { wrapper } from '../../services/redux/store/store';
import { getProductByHandle } from '../../services/shopify/api-queries/products';

const MetaTags = dynamic(() => import('../../components/meta-tags/MetaTags'), { ssr: true });
const ProductDetailContainer = dynamic(() => import('../../containers/product-detail-container/ProductDetailContainer'), { ssr: true });
const RecommendedProductsContainer = dynamic(() => import('../../containers/recommended-products-container/RecommendedProductsContainer'), {
  ssr: false,
});

function ProductDetailPage({ uniqueKey, product, productId, selectedLanguage }) {
  const metaProps = useMemo(
    () => ({
      canonical: `${PATH.products}/${product.handle}`,
      description: product.description,
      isProductPage: true,
      locale: selectedLanguage,
      product,
      title: product.title,
    }),
    [product, selectedLanguage]
  );

  return (
    <>
      <MetaTags {...metaProps} />
      <Stack spacing={4}>
        <ProductDetailContainer key={uniqueKey} product={product} />
        <RecommendedProductsContainer productId={productId} />
      </Stack>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params: { productHandle } }) => {
  const selectedLanguage = store.getState().shopInfo.selectedLanguage.isoCode;
  const selectedCountry = store.getState().shopInfo.selectedCountry.isoCode;
  const product = await getProductByHandle({ country: selectedCountry, handle: productHandle, language: selectedLanguage });

  if (!product) {
    return { notFound: true };
  }

  const uniqueKey = Date.now();

  return {
    props: { product, productId: product.id, selectedLanguage, uniqueKey },
  };
});

export default ProductDetailPage;
