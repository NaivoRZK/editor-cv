import React from 'react';

const CVPreview = React.forwardRef(({ cvData }, ref) => {
  return (
    <div ref={ref} className="flex flex-col sm:flex-row border border-gray-300 w-full max-w-4xl mx-auto my-8 shadow-lg">
      <div className="bg-blue-900 text-white p-6 w-full sm:w-1/3">
        <div className="flex flex-col items-center mb-8">
          <img src={cvData.photo} alt="Photo" className="rounded-full w-32 h-32 mb-4"/>
          <h1 className="text-2xl font-bold">{cvData.nom}</h1>
          <p className="text-xs font-semibold">{cvData.email}</p>
          <p>{cvData.telephone}</p>
          <p>{cvData.adresse}</p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold border-b-2 border-white pb-1">Qualités</h2>
          {cvData.qualites.map((qualite, index) => (
            <p key={index} className="mt-2">{qualite}</p>
          ))}
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold border-b-2 border-white pb-1">Éducation</h2>
          {cvData.formations.map((formation, index) => (
            <div key={index} className="mt-2">
              <h3 className="font-bold">{formation.diplome}</h3>
              <p>{formation.etablissement}</p>
              <p>{formation.dateDebut} - {formation.dateFin}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 w-full sm:w-2/3">
        <div className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2">Profil</h2>
          <p className="mt-2">{cvData.profile}</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2">Expérience Professionnelle</h2>
          {cvData.experiences.map((experience, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-bold">{experience.poste}</h3>
              <p className="italic">{experience.entreprise}</p>
              <p>{experience.dateDebut} - {experience.dateFin}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default CVPreview;
