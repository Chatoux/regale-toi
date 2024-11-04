import Header from '../components/Header';

export default function AboutPage() {
  return (
    <div>
      <Header />
      <section className="p-8">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4">At Regale Toi, our passion for French cuisine is at the heart of everything we do. Our chefs are dedicated to bringing traditional and modern French dishes to your table, using the freshest, often locally sourced ingredients.</p>
      </section>
    </div>
  );
}