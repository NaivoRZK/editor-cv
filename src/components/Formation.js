import React from 'react';

function Formation({ cvData, handleFormationChange, addFormation }) {
  return (
    <>
    <button 
  type="button" 
  onClick={addFormation} 
  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded mt-4 flex items-center"
>
        +
        </button>
      {cvData.formations.map((formation, index) => (
        <div className="mb-4 border border-green-500 pL-500  " key={formation.id} >
          <label htmlFor={`diplome-${formation.id}`} className="block text-sm font-medium text-gray-700">Diplôme:</label>
          <input
            id={`diplome-${formation.id}`}
            name="diplome"
            value={formation.diplome}
            onChange={(event) => handleFormationChange(index, event)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />

          <label htmlFor={`etablissement-${formation.id}`} className="block text-sm font-medium text-gray-700">Établissement:</label>
          <input
            id={`etablissement-${formation.id}`}
            name="etablissement"
            value={formation.etablissement}
            onChange={(event) => handleFormationChange(index, event)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />

          <label htmlFor={`dateDebut-${formation.id}`} className="block text-sm font-medium text-gray-700">Date de début:</label>
          <input
            id={`dateDebut-${formation.id}`}
            name="dateDebut"
            value={formation.dateDebut}
            onChange={(event) => handleFormationChange(index, event)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />

          <label htmlFor={`dateFin-${formation.id}`} className="block text-sm font-medium text-gray-700">Date de fin:</label>
          <input
            id={`dateFin-${formation.id}`}
            name="dateFin"
            value={formation.dateFin}
            onChange={(event) => handleFormationChange(index, event)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
      ))}
    </>
  );
}

export default Formation;
