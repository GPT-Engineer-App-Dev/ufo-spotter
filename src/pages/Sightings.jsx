import { useState } from "react";
import { Input } from "@/components/ui/input";

function Sightings() {
  const [dateFilter, setDateFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const sightings = [
    { id: 1, date: "2023-09-15", location: "Nevada, USA", description: "Bright light in the sky", image: "/images/sighting1.jpg" },
    { id: 2, date: "2023-09-10", location: "Arizona, USA", description: "Flying saucer spotted", image: "/images/sighting2.jpg" },
    { id: 3, date: "2023-09-05", location: "Texas, USA", description: "Unidentified object hovering", image: "/images/sighting3.jpg" },
  ];

  const filteredSightings = sightings.filter(sighting => 
    (dateFilter ? sighting.date.includes(dateFilter) : true) &&
    (locationFilter ? sighting.location.toLowerCase().includes(locationFilter.toLowerCase()) : true)
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">UFO Sightings</h1>
      <div className="flex justify-center mb-8 space-x-4">
        <Input type="date" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} placeholder="Filter by date" />
        <Input type="text" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} placeholder="Filter by location" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSightings.map(sighting => (
          <div key={sighting.id} className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src={sighting.image} alt={`Sighting ${sighting.id}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{sighting.location}</h3>
              <p className="text-gray-600">Date: {sighting.date}</p>
              <p className="text-gray-600">{sighting.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sightings;