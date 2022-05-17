import React from 'react'
import Button from './Button'
import styled from 'styled-components'
import Modal from './Modal'

const ProductList = styled.div`
  text-align: center;
`

const Box = styled.div`
  background-color: #0b132b;
  width: 300px;
  margin: 0 auto;
  color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
`

const ProductItem = styled.div`
  background-color: #003444;
  padding: 0.7rem;
  margin-bottom: 1rem;
  border: 0.3rem solid #fff;
  border-radius: 0.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`

function Product({
  storedProduct,
  setStoredProduct,
  onRemove,
  isModal,
  onEdit,
}) {
  return (
    <>
      {storedProduct.length >= 1 && (
        <>
          {isModal && <Modal />}
          <ProductList className="product-list">
            <h2>Product List</h2>
          </ProductList>
          <Box>
            {storedProduct?.map((it) => (
              <ProductItem className="product-item" key={it.id}>
                <h2>{it.title}</h2>
                <p>${it.price}</p>
                <p>{it.description}</p>
                <Button
                  storedProduct={storedProduct}
                  setStoredProduct={setStoredProduct}
                  onRemove={onRemove}
                  id={it.id}
                  onEdit={onEdit}
                />
              </ProductItem>
            ))}
          </Box>
        </>
      )}
    </>
  )
}

export default Product
