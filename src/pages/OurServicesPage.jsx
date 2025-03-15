import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import services1 from '../Components/images/Image 2.png';
import services2 from '../Components/images/Image 4.png';
import services3 from '../Components/images/Img5.png';

const OurServices = () => {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      title: t('services.advice.title'),
      description: t('services.advice.description'),
      extraText: t('services.advice.extraText'),
      image: services1,
      alt: t('services.advice.alt'),
      color: 'bg-purple-200',
      buttonColor: 'bg-purple-600',
      formFields: ['name', 'email', 'phone', 'query'],
    },
    {
      title: t('services.advocacy.title'),
      description: t('services.advocacy.description'),
      extraText: t('services.advocacy.extraText'),
      image: services2,
      alt: t('services.advocacy.alt'),
      color: 'bg-blue-200',
      buttonColor: 'bg-blue-600',
      formFields: ['name', 'email', 'organization', 'advocacyType', 'message'],
    },
    {
      title: t('services.forums.title'),
      description: t('services.forums.description'),
      extraText: t('services.forums.extraText'),
      image: services3,
      alt: t('services.forums.alt'),
      color: 'bg-green-200',
      buttonColor: 'bg-green-600',
      formFields: ['name', 'email', 'childAge', 'topicOfInterest'],
    },
  ];

  const Modal = ({ service, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-2xl w-full ${service.title === t('services.advice.title') ? 'max-w-2xl max-h-[90vh]' : 'max-w-md'} relative flex flex-col`}>
        <div className="p-6 border-b sticky top-0 bg-white rounded-t-2xl z-10 flex justify-between items-center">
          <h3 className="text-2xl font-bold">{service.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className={`${service.title === t('services.advice.title') ? 'overflow-y-auto p-6' : 'p-8'}`}>
          {service.title === t('services.advice.title') ? (
            // Exclusion Support Form - now scrollable
            <form className="space-y-6">
              <div className="bg-purple-500 p-4 rounded-lg mb-6">
                <p className="text-gray-700">
                  Tell us about your situation - (we ask you to complete this form before the consultation to help us understand the issues your child is experiencing and what service you might want from us).
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Your Full Name</label>
                  <input type="text" className="w-full p-3 border rounded-md" />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Child's Full Name</label>
                  <input type="text" className="w-full p-3 border rounded-md" />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Your Email Address</label>
                  <input type="email" className="w-full p-3 border rounded-md" />
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Your Phone Number</label>
                  <input type="tel" className="w-full p-3 border rounded-md" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Child's Age</label>
                <input type="number" className="w-full p-3 border rounded-md" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Child's School Type</label>
                <select className="w-full p-3 border rounded-md">
                  <option>Academy</option>
                  <option>Local authority maintained mainstream</option>
                  <option>Special school</option>
                  <option>Independent school</option>
                  <option>Alternative provision</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Extent of Exclusion</label>
                <select className="w-full p-3 border rounded-md">
                  <option>Fixed Term</option>
                  <option>Permanent</option>
                  <option>Unofficial/Off-rolling</option>
                  <option>Reduced timetable</option>
                  <option>Not yet excluded but at risk</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Have you received an Exclusion Letter?</label>
                <div className="flex gap-6">
                  <label className="flex items-center"><input type="radio" name="letter" value="yes" className="mr-2" /> Yes</label>
                  <label className="flex items-center"><input type="radio" name="letter" value="no" className="mr-2" /> No</label>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Reason for Exclusion</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center"><input type="radio" name="reason" value="serious" className="mr-2" /> One-off serious incident</label>
                  <label className="flex items-center"><input type="radio" name="reason" value="persistent" className="mr-2" /> Persistent disruptive behaviour</label>
                  <label className="flex items-center"><input type="radio" name="reason" value="other" className="mr-2" /> Other (please specify)</label>
                </div>
                <input type="text" placeholder="If other, please specify" className="w-full p-3 border rounded-md mt-2" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Does your child have any diagnosed conditions?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center"><input type="checkbox" name="condition" value="sen" className="mr-2" /> Special Educational Needs</label>
                  <label className="flex items-center"><input type="checkbox" name="condition" value="ehcp" className="mr-2" /> EHCP</label>
                  <label className="flex items-center"><input type="checkbox" name="condition" value="asd" className="mr-2" /> Autism/ASD</label>
                  <label className="flex items-center"><input type="checkbox" name="condition" value="adhd" className="mr-2" /> ADHD</label>
                  <label className="flex items-center"><input type="checkbox" name="condition" value="other" className="mr-2" /> Other</label>
                </div>
                <input type="text" placeholder="If other, please specify" className="w-full p-3 border rounded-md mt-2" />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Please briefly describe the situation and what assistance you need</label>
                <textarea className="w-full p-3 border rounded-md" rows="6"></textarea>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
                <select className="w-full p-3 border rounded-md">
                  <option>Internet search</option>
                  <option>Social media</option>
                  <option>School referral</option>
                  <option>Friend/Family</option>
                  <option>Other organization</option>
                </select>
              </div>
            </form>
          ) : (
            // Original form for other services
            <form className="space-y-4">
              {service.formFields.map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {t(`forms.${field}`)}
                  </label>
                  {field === 'message' || field === 'query' ? (
                    <textarea
                      className="w-full p-2 border rounded-md"
                      rows="4"
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      className="w-full p-2 border rounded-md"
                    />
                  )}
                </div>
              ))}
            </form>
          )}
        </div>
        
        <div className="p-6 border-t sticky bottom-0 bg-white rounded-b-2xl">
          <button
            type="submit"
            className={`${service.buttonColor} text-white px-6 py-3 rounded-md w-full text-lg font-medium`}
          >
            {t('forms.submit')}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <div className="mb-6">
        <span className="text-purple-600 border border-purple-600 rounded-full px-8 py-3 text-base font-semibold">
          {t('services.tag')}
        </span>
      </div>

      <h2 className="text-4xl font-bold mb-6 text-gray-800">{t('services.heading')}</h2>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        {t('services.description')}
      </p>

      <div className="grid gap-12 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.color} p-6 rounded-3xl text-left relative overflow-hidden transition-transform hover:scale-105`}
          >
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-[280px] object-cover rounded-2xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-gray-600 mb-6">{service.extraText}</p>
            <button
              onClick={() => setActiveModal(index)}
              className={`${service.buttonColor} text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90`}
            >
              {t('services.requestService')} <ArrowUpRight size={20} />
            </button>
          </div>
        ))}
      </div>

      {activeModal !== null && (
        <Modal
          service={services[activeModal]}
          onClose={() => setActiveModal(null)}
        />
      )}
    </section>
  );
};

export default OurServices;