import React from 'react';

function Experience({ cvData, handleExperienceChange, addExperience }) {
  return (
    <>
      <button 
  type="button" 
  onClick={addExperience} 
  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded mt-4 flex items-center"
>
      +
      </button>
      {cvData.experiences.map((experience, index) => (
        <div className="mb-4 border border-green-500 p-4" key={experience.id}>
          <label htmlFor={`poste-${experience.id}`} className="block text-sm font-medium text-gray-700">Poste:</label>
          <input
            id={`poste-${experience.id}`}
            name="poste"
            value={experience.poste}
            onChange={(event) => handleExperienceChange(index, event)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <label htmlFor={`entreprise-${experience.id}`} className="block text-sm font-medium text-gray-700">Entreprise:</label>
          <input
            id={`entreprise-${experience.id}`}
            name="entreprise"
            value={experience.entreprise}
            onChange={(event) => handleExperienceChange(index, event)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <label htmlFor={`dateDebut-${experience.id}`} className="block text-sm font-medium text-gray-700">Date de début:</label>
          <input
            id={`dateDebut-${experience.id}`}
            name="dateDebut"
            value={experience.dateDebut}
            onChange={(event) => handleExperienceChange(index, event)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <label htmlFor={`dateFin-${experience.id}`} className="block text-sm font-medium text-gray-700">Date de fin:</label>
          <input
            id={`dateFin-${experience.id}`}
            name="dateFin"
            value={experience.dateFin}
            onChange={(event) => handleExperienceChange(index, event)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <label htmlFor={`description-${experience.id}`} className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            id={`description-${experience.id}`}
            name="description"
            value={experience.description}
            onChange={(event) => handleExperienceChange(index, event)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
      ))}
    </>
  );
}

export default Experience;
