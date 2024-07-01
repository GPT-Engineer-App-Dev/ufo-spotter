import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div>
      <section className="hero bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/images/ufo-banner.jpg')" }}>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to UFOs in USA</h1>
          <p className="text-2xl mt-4">Explore the unexplained</p>
        </div>
      </section>
      <section className="recent-sightings p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Sightings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/images/sighting1.jpg" alt="Sighting 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Sighting in Nevada</h3>
              <p className="text-gray-600">Date: 2023-09-15</p>
              <p className="text-gray-600">Location: Nevada, USA</p>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/images/sighting2.jpg" alt="Sighting 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Sighting in Arizona</h3>
              <p className="text-gray-600">Date: 2023-09-10</p>
              <p className="text-gray-600">Location: Arizona, USA</p>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/images/sighting3.jpg" alt="Sighting 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Sighting in Texas</h3>
              <p className="text-gray-600">Date: 2023-09-05</p>
              <p className="text-gray-600">Location: Texas, USA</p>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action text-center p-8">
        <Button variant="primary" size="lg">Report a Sighting</Button>
      </section>
    </div>
  );
}

export default Index;