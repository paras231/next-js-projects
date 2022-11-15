import React from 'react'
import { useRouter } from 'next/router'

const Slug = () => {
  const router = useRouter();
  console.log(router.query)
 
  const {slug} = router.query;
  return (
    <div>Slug  :{slug}</div>
  )
}

export default Slug