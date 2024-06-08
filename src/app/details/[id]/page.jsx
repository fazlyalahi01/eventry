import HeroSection from "@/components/details/HeroSection"
import EventDetails from "@/components/details/EventDetails"
import EventVenue from "@/components/details/EventVenue"
import { getEventById } from "@/lib/queries"

const EventDetailsPage = async ({ params: { id } }) => {
  const event = await getEventById(id)
  console.log(event);
  return (
    <>
      <HeroSection event={event} />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails event={event} />
          <EventVenue event={event} />
        </div>
      </section>
    </>
  )
}

export default EventDetailsPage
