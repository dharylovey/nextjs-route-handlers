import React from 'react'

const PhotoId = ({
    params: { id },
}: {
    params: { id: string }
}) => {
  return (
    <div className='card'>{id}</div>
  )
}

export default PhotoId
