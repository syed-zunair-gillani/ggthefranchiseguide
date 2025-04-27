import React from 'react'
import BookTemplate from '../../templates/book'
import { bookPageQuery } from '@/services';

const Book = async () => {
  const page = await bookPageQuery();

  if (!page) {
    return notFound();
  }

  return (
    <>
      <BookTemplate data={page?.bookPageMeta}/>
    </>
  )
}

export default Book