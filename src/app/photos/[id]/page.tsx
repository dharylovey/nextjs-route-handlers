import React from 'react'

const PhotoId = ({
    params: { id },
}: {
    params: { id: string }
}) => {
  return (
    <div className='flex justify-center items-center border w-[200px]'>{id}</div>
  )
}

export default PhotoId
