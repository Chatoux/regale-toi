import Header from '../components/Header';

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <section className="p-8">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <ul className="mt-4 list-disc list-inside">
          <li>Catering for events</li>
          <li>Private dining experiences</li>
          <li>Cooking classes</li>
        </ul>
      </section>
    </div>
  );
}