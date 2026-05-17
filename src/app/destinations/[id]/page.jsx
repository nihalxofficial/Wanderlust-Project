import BookingCard from '@/components/BookingCard';
import { DeleteAlert } from '@/components/DeleteAlert';
import { EditModal } from '@/components/EditModal';
import { getDestinationById } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa6';
import { LuMapPin } from 'react-icons/lu';

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params
  const destination = await getDestinationById(id)

  const { imageUrl, price, destinationName, duration, country, description } = destination;

  return (
    <div className="max-w-4xl mx-auto my-20">
      <div className="flex  items-center gap-3 justify-end mt-5 mb-3">
        <EditModal destination={destination} />
        <DeleteAlert destination={destination} />
      </div>
      <Image
        className="w-full h-100 object-cover"
        alt={destinationName}
        src={imageUrl}
        height={500}
        width={500}
      />

      <div className="flex justify-between gap-4">
        <div className="p-2">
          <div className="flex items-center gap-1">
            <LuMapPin /> <span>{country}</span>
          </div>
          <div className="flex justify-between ">
            <div>
              <div>
                <h2 className="text-xl font-bold">{destinationName}</h2>
              </div>
              <div className="flex gap-1 items-center">
                <FaRegCalendar /> {duration}
              </div>
            </div>
          </div>

          <h1 className="mt-10 text-2xl font-bold">Overview</h1>

          <p className="">{description}</p>
        </div>
        <div>
          
        <BookingCard destination={destination} />
        </div>
      </div>
    </div>
  );
};


export default DestinationDetailsPage;