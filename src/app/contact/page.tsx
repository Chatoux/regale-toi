import Header from '../components/Header';

export default function ContactPage() {
  return (
    <div>
      <Header />
      <section className="p-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <form className="mt-4 flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="p-2 border rounded" />
          <textarea rows={4} placeholder="Your Message" className="p-2 border rounded"></textarea>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send Message</button>
        </form>
      </section>
    </div>
  );
}