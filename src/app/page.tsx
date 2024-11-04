import Header from './components/Header';
import HeroSection from './components/HeroSection';

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <section className="text-center p-8">
        <h2 className="text-2xl font-bold">Welcome to Regale Toi</h2>
        <p className="mt-4">Experience the best French cuisine right at your doorstep. Explore our delightful menu and savor the magic of France.</p>
      </section>
    </div>
  );
}