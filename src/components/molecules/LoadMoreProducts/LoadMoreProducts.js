import React from 'react'
import Button from '../../atoms/Button'
import './LoadMoreProducts.scss'

export default function LoadMoreProducts({loadMore}) {

  return (
    <Button children="Load More" className="load-more-btn" onClickHandler={loadMore}></Button>
  )
}
