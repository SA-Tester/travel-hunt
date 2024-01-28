import React from 'react';

function Tripinfo() {
  const tripData = {
    tripName: 'Summer Vacation 2023',
    location: 'Paris, France',
    country: 'France',
    town: 'Paris',
    visitPlaces: ['Eiffel Tower', 'Louvre Museum', 'Montmartre'],
    startDate: '2023-07-01',
    endDate: '2023-07-10',
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-500 min-h-screen flex items-center justify-center">
      <section>
        <div className="container mx-auto py-5">
          <h2 className="text-3xl font-bold mb-6 text-white">Trip Details</h2>
          <div className="mb-8 shadow-lg p-8 bg-white rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">{tripData.tripName}</h3>
            <p className="text-lg text-gray-600">Location: {tripData.location}</p>
            <p className="text-lg text-gray-600">Country: {tripData.country}</p>
            <p className="text-lg text-gray-600">Town: {tripData.town}</p>
            <p className="text-lg text-gray-600">
              Visit Places: {tripData.visitPlaces.join(', ')}
            </p>
            <p className="text-lg text-gray-600">Start Date: {tripData.startDate}</p>
            <p className="text-lg text-gray-600">End Date: {tripData.endDate}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tripinfo;
