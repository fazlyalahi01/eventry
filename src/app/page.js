import Header from "../components/landing/Header";
import EventList from "../components/landing/EventList";
import { Suspense } from "react";
import Loader from "../components/Loader";

export default function Home({ searchParams: { search } }) {
  return (
    <section className="container">
      <Header />
      <Suspense fallback={<Loader />}>
        <EventList query={search} />
      </Suspense>
    </section>
  );
}