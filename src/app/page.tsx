import Features from "@/components/landing/Featured/Featured";
import Hero from "@/components/landing/Hero";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features/>
      </main>
    </>
  );
}
