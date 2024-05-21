import React, { useState, useRef } from 'react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import ReactToPrint from 'react-to-print';
import Header from './components/Header';

function App() {
  const [cvData, setCvData] = useState({
    nom: "Jean Dupont",
    email: "jean.dupont@example.com",
    telephone: "123-456-7890",
    adresse: "123 Rue Principale, Ville, Pays",
    photo: "url_de_la_photo.jpg",
    qualites: ["Rigoureux", "Autonome"],
    experiences: [
      {
        id: 1,
        poste: "Développeur Web",
        entreprise: "ABC Entreprise",
        dateDebut: "Janvier 2020",
        dateFin: "Présent",
        description: "Développement d'applications web utilisant React et Node.js."
      },
    ],
    formations: [
      {
        id: 1,
        diplome: "Baccalauréat en Génie Logiciel",
        etablissement: "Université XYZ",
        dateDebut: "Septembre 2016",
        dateFin: "Mai 2020"
      },
    ]
  });

  const handleFormationChange = (index, event) => {
    const { name, value } = event.target;
    const newFormations = cvData.formations.map((formation, i) => {
      if (i === index) {
        return { ...formation, [name]: value };
      }
      return formation;
    });
    setCvData({ ...cvData, formations: newFormations });
  };

  const addFormation = () => {
    const newFormation = { id: cvData.formations.length + 1, diplome: '', etablissement: '', dateDebut: '', dateFin: '' };
    setCvData({ ...cvData, formations: [...cvData.formations, newFormation] });
  };

  const handleExperienceChange = (index, event) => {
    const { name, value } = event.target;
    const newExperiences = cvData.experiences.map((experience, i) => {
      if (i === index) {
        return { ...experience, [name]: value };
      }
      return experience;
    });
    setCvData({ ...cvData, experiences: newExperiences });
  };

  const addExperience = () => {
    const newExperience = { id: cvData.experiences.length + 1, poste: '', entreprise: '', dateDebut: '', dateFin: '', description: '' };
    setCvData({ ...cvData, experiences: [...cvData.experiences, newExperience] });
  };

  const handleQualiteChange = (index, event) => {
    const newQualites = cvData.qualites.map((qualite, i) => {
      if (i === index) {
        return event.target.value;
      }
      return qualite;
    });
    setCvData({ ...cvData, qualites: newQualites });
  };

  const addQualite = () => {
    setCvData({ ...cvData, qualites: [...cvData.qualites, ""] });
  };

  const componentRef = useRef();

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <CVForm
            cvData={cvData}
            setCvData={setCvData}
            addFormation={addFormation}
            handleFormationChange={handleFormationChange}
            handleExperienceChange={handleExperienceChange}
            addExperience={addExperience}
            handleQualiteChange={handleQualiteChange}
            addQualite={addQualite}
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <CVPreview cvData={cvData} ref={componentRef} />
          <ReactToPrint
            trigger={() => <button className='bg-blue-500 hover:bg-green-600 text-white p-2 rounded mt-4'>Download as PDF</button>}
            content={() => componentRef.current}
          />
        </div>
      </div>
    </>
  );
}

export default App;
