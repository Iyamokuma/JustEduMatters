import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Components/Layout/Navbar';
import logopic from '../Components/images/pic1.png';
import Footer from '../Components/Footer';

const ResourcesPage = () => {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);

  // Define resources dynamically based on translations
  const resources = [
    {
      id: 1,
      title: t("resource_1_title"),
      description: t("resource_1_description"),
      date: t("resource_1_date"),
      color: "bg-pink-400",
      textColor: "text-white",
      formFields: ['name', 'email', 'phone', 'query'],
    },
    {
      id: 2,
      title: t("resource_2_title"),
      description: t("resource_2_description"),
      date: t("resource_2_date"),
      color: "bg-yellow-300",
      textColor: "text-black",
      formFields: ['name', 'email', 'phone', 'query'],
    },
    // Add more resources here
  ];

  // Modal for each resource
  const Modal = ({ resource, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-2xl w-full ${resource.title === t('resource_1_title') ? 'max-w-2xl max-h-[90vh]' : 'max-w-md'} relative flex flex-col`}>
        <div className="p-6 border-b sticky top-0 bg-white rounded-t-2xl z-10 flex justify-between items-center">
          <h3 className="text-2xl font-bold">{resource.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="overflow-y-auto p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resource.formFields.map((field) => (
                <div key={field} className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">{t(`forms.${field}`)}</label>
                  {field === 'query' || field === 'message' ? (
                    <textarea className="w-full p-3 border rounded-md" rows="4" />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      className="w-full p-3 border rounded-md"
                    />
                  )}
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">{t("forms.message")}</label>
              <textarea className="w-full p-3 border rounded-md" rows="4" />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">{t("forms.query")}</label>
              <textarea className="w-full p-3 border rounded-md" rows="4" />
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md w-full text-lg font-medium"
              >
                {t('forms.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />

      <div className="overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">{t("resources_title")}</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">{t("resources_description")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className={`${resource.color} rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[280px]`}
          >
            <div>
              <h3 className={`${resource.textColor} text-xl font-semibold mb-3`}>{resource.title}</h3>
              <p className={`${resource.textColor} text-sm opacity-90 mb-4`}>{resource.description}</p>
              <p className={`${resource.textColor} text-sm`}>{resource.date}</p>
            </div>
            <div className="flex justify-between items-center mt-4 ">
              <div className="flex -space-x-2">
                <img
                  src={logopic}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <button
                onClick={() => setActiveModal(resource.id)}
                className={`${resource.color === "bg-white" ? "text-gray-600" : "text-white"} hover:opacity-75 transition-opacity flex items-center`}
              >
                <ArrowUpRight className="w-5 h-5 mr-1" />
                {t("download")}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />

      {activeModal !== null && (
        <Modal
          resource={resources[activeModal - 1]}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
};

export default ResourcesPage;
