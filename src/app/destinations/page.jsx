import DestinationCard from "@/components/DestinationCard";
import { getDestinations } from "@/lib/data";

const DestinationPage = async () => {
    const destinations = await getDestinations();

    return (
        <div className="max-w-7xl mx-auto my-20">
            <h1 className="text-3xl text-cyan-500 font-bold text-center mb-5">All destinations</h1>


            <div className="grid grid-cols-4 gap-5">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}/>)
                }

            </div>

        </div>
    );
};

export default DestinationPage;