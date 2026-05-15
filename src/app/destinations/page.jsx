import DestinationCard from "@/components/DestinationCard";
import { getDestinations } from "@/lib/data";

const DestinationPage = async () => {
    const destinations = await getDestinations();
    console.log(destinations);
    


    return (
        <div className="max-w-7xl mx-auto">
            <h1>All destinations</h1>


            <div className="grid grid-cols-4 gap-5">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}/>)
                }

            </div>

        </div>
    );
};

export default DestinationPage;