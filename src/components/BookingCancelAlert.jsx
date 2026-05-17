"use client"
import { deleteBooking } from '@/lib/action';
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import { toast } from 'react-toastify';

const BookingCancelAlert = ({bookingId}) => {
    const handleCancelBooking = async()=>{
        const data = await deleteBooking(bookingId);
        if(data.deletedCount > 0){
            toast.warning("Booking Cancelled!")
        }
    }
    return (
        <AlertDialog>
            <Button
                className={"border-red-500 text-red-500"}
                variant="outline"
            >
                <TrashBin /> Cancel
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Cancel Booking permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default BookingCancelAlert;