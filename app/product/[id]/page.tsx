import React from 'react'

interface ProductDetailsProps {
  params: { id: string };
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {

    const id = (await params).id;

  return (
    <div>ProductDetails: {id}</div>
  )
}

export default ProductDetails