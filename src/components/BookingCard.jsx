"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Calendar, Card, DateField, DatePicker, Label } from '@heroui/react';
import { useState } from 'react';
import { addBooking } from '@/lib/action';
import { toast } from 'react-toastify';


const BookingCard = ({ destination }) => {
    const { data: session } = authClient.useSession()
    const user = session?.user;

    const [departureDate, setDepartureDate] = useState(null);

    const { price, _id, destinationName, imageUrl, country } = destination;
    
    const handleBooking = async()=>{
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate)
        }
        const data = await addBooking(bookingData);
        if(data.insertedId){
            toast.success("Booking Confirmed! 🎉")
        }
        
    }
    return (
        <Card className="w-60 p-5 border mt-5">
            <p className="text-sm text-muted">Starting from</p>
            <h2 className="text-3xl font-bold text-cyan-500">${price}</h2>
            <p className="text-sm text-muted">per person</p>

            {/* <DateField className="w-full" name="date" value={departureDate} onChange={setDepartureDate}>
                <Label>Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                </DateField.Group>
            </DateField> */}

            <DatePicker name="date" value={departureDate} onChange={setDepartureDate}>
                <Label>Departure Date</Label>
                <DateField.Group fullWidth>
                    <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    <DateField.Suffix>
                        <DatePicker.Trigger>
                            <DatePicker.TriggerIndicator />
                        </DatePicker.Trigger>
                    </DateField.Suffix>
                </DateField.Group>
                <DatePicker.Popover>
                    <Calendar aria-label="Event date">
                        <Calendar.Header>
                            <Calendar.YearPickerTrigger>
                                <Calendar.YearPickerTriggerHeading />
                                <Calendar.YearPickerTriggerIndicator />
                            </Calendar.YearPickerTrigger>
                            <Calendar.NavButton slot="previous" />
                            <Calendar.NavButton slot="next" />
                        </Calendar.Header>
                        <Calendar.Grid>
                            <Calendar.GridHeader>
                                {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                            </Calendar.GridHeader>
                            <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                        </Calendar.Grid>
                        <Calendar.YearPickerGrid>
                            <Calendar.YearPickerGridBody>
                                {({ year }) => <Calendar.YearPickerCell year={year} />}
                            </Calendar.YearPickerGridBody>
                        </Calendar.YearPickerGrid>
                    </Calendar>
                </DatePicker.Popover>
            </DatePicker>



            <Button onClick={handleBooking} className={"w-full bg-cyan-500"}>Book Now</Button>
        </Card>
    );
};

export default BookingCard;