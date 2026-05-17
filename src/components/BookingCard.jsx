"use client"
import { Button, Card, DateField, Label } from '@heroui/react';
import React from 'react';

const BookingCard = ({ destination }) => {
    const { price } = destination
    return (
        <Card className="w-60 p-5 border mt-5">
            <p className="text-sm text-muted">Starting from</p>
            <h2 className="text-3xl font-bold text-cyan-500">${price}</h2>
            <p className="text-sm text-muted">per person</p>

            <DateField className="w-full" name="date">
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField>



            <Button className={"w-full bg-cyan-500"}>Book Now</Button>
        </Card>
    );
};

export default BookingCard;