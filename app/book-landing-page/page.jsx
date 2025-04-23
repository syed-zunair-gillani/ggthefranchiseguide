import React from 'react'
import BookTemplate from '../../templates/book'
import { bookPageQuery } from '@/services';

const Book = async () => {
  const page = await bookPageQuery();
  console.log("🚀 ~ Book ~ page:", page);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <BookTemplate />
    </>
  )
}

export default Book