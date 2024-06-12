import HeroSection from "/src/components/details/HeroSection"
import EventDetails from "/src/components/details/EventDetails"
import EventVenue from "/src/components/details/EventVenue"
import { getEventById } from "/src/lib/queries"

export async function generateMetadata({params: {id}}) {
  const eventInfo = await getEventById(id);

  return {
    title: `Eventry - ${eventInfo?.name}`,
    description: eventInfo?.details,
    openGraph: {
      images: [eventInfo?.imageUrl]
    }
  }
}

const EventDetailsPage = async ({ params: { id } }) => {
  const event = await getEventById(id)
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
