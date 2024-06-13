import { getAllEvents } from "../../lib/queries";
import EventCard from "./EventCard";

const EventList = async ({ query }) => {

  const allEvents = await getAllEvents(query);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {
        allEvents && allEvents?.length > 0 ? allEvents?.map((event) => (
          <EventCard key={event?.id} event={event} />
        )) : <p className="text-red-500">No events found</p>
      }

    </div>
  )
}

export default EventList