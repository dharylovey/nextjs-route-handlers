import React from 'react';
import Link from 'next/link';

interface Photo {
    id: number;
}

const Page: React.FC = () => {
    let photos: Photo[] = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }));
    return (
        <section className='flex flex-col gap-4 '>
            {photos.map((photo) => (
                <Link href={`/photos/${photo.id}`} key={photo.id} passHref>
                    {photo.id}
                </Link>
            ))}
        </section>
    );
};

export default Page;
