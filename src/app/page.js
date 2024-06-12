import Header from "../components/landing/Header";
import EventList from "../components/landing/EventList";

export default function Home({ searchParams: { search } }) {
  return (
    <section className="container">
      <Header />
      <EventList query={search} />

    </section>
  );
}