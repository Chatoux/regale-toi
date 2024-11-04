export default function HeroSection() {
  return (
    <section className="h-96 bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: 'url(/hero-cuisine.jpg)' }}>
      <div className="bg-black bg-opacity-50 p-8">
        <h1 className="text-4xl text-white font-bold">Discover the Art of French Cuisine</h1>
        <p className="mt-4 text-white">Join us for an unforgettable culinary journey.</p>
        <button className="mt-6 px-4 py-2 bg-gold-500 text-white rounded hover:bg-gold-600">Explore Menu</button>
      </div>
    </section>
  );
}