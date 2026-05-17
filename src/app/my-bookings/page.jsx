import BookingCancelAlert from '@/components/BookingCancelAlert';
import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { getBookingsByID } from '@/lib/data';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingsPage = async () => {
const session = await auth.api.getSession({
        headers: await headers()
    })    
    const userId = session?.user?.id;
    const bookings = await getBookingsByID(userId);
    return (
        <div className="max-w-7xl mx-auto my-20">
            <h1 className="text-3xl font-bold mb-5">My Bookings</h1>
            <div className="space-y-5">
                {bookings.map((booking) => (
                    <Card key={booking._id} className="flex flex-row gap-5 border p-5 min-w-3xl shadow-md">
                        <Image
                            src={booking.imageUrl}
                            alt={booking.destinationName}
                            height={200}
                            width={200}
                            className='rounded-xl'
                        />
                        <div className='space-y-1.5'>
                            <h1 className="font-bold text-2xl">{booking.destinationName}</h1>
                            <p>
                                {new Date(booking.departureDate).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>

                            <p>Booking Id: {booking._id}</p>

                            <p className="text-3xl font-bold text-cyan-500">
                                ${booking.price}
                            </p>

                            <BookingCancelAlert bookingId={booking._id} />
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default MyBookingsPage;