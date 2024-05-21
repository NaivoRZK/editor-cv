import React from 'react';
import Formation from './Formation';
import Experience from './Experiences';

function CVForm({ cvData, setCvData, addFormation, addExperience, handleFormationChange, handleQualiteChange, handleExperienceChange, addQualite }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCvData((prevData) => ({
        ...prevData,
        photo: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <form className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-blue-600 text-3xl font-semibold mb-6">Créer votre CV efficace et rapide en ligne</h2>
      <div className="mb-6">
        <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom:</label>
        <input type="text" id="nom" name="nom" value={cvData.nom} onChange={handleChange} className="mt-1 p-3 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <input type="email" id="email" name="email" value={cvData.email} onChange={handleChange} className="mt-1 p-3 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-6">
        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Téléphone:</label>
        <input type="tel" id="telephone" name="telephone" value={cvData.telephone} onChange={handleChange} className="mt-1 p-3 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-6">
        <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">Adresse:</label>
        <input type="text" id="adresse" name="adresse" value={cvData.adresse} onChange={handleChange} className="mt-1 p-3 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-6">
        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo:</label>
        <input type="file" id="photo" name="photo" accept="image/*" onChange={handlePhotoChange} className="mt-1 p-3 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-6">
        <Experience
          cvData={cvData}
          handleExperienceChange={handleExperienceChange}
          addExperience={addExperience}
        />
      </div>
      <div className="mb-6">
        <Formation cvData={cvData} handleFormationChange={handleFormationChange} addFormation={addFormation} />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Qualités:</label>
        {cvData.qualites.map((qualite, index) => (
          <input 
            key={index} 
            type="text" 
            value={qualite} 
            onChange={(e) => handleQualiteChange(index, e)} 
            className="mt-1 p-3 border border-gray-300 rounded-md w-full" 
          />
        ))}
        <button 
          type="button" 
          onClick={addQualite} 
          className="mt-2 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Ajouter une qualité
        </button>
      </div>
    </form>
  );
}

export default CVForm;
