import React from "react";

const policies = [
  {
    category: "Education",
    items: [
      "The School Discipline (Pupil Exclusions and Reviews) (England) Regulations 2012",
      "School Standards Framework Act",
      "The Education Act 2002, as Amended by the Education Act 2011",
      "The Education and Inspections Act 2006",
      "The Education Act 1996",
      "The Education (Provision of Full-Time Education for Excluded Pupils) (England) Regulations 2007, as Amended by the Education (Provision of Full-Time Education for Excluded Pupils) (England) (Amendment) Regulations 2014",
      "Department for Education (DfE) – Exclusion from Maintained Schools, Academies and Pupil Referral Units (PRUs) in England September 2017",
      "Changes to the School Exclusions Process During the Coronavirus Outbreak",
      "Keeping Children Safe in Education: Statutory Guidance for Schools and Colleges 2021",
    ],
  },
  {
    category: "Admissions",
    items: [
      "School Admissions Code Mandatory Requirements and Statutory Guidance for Admission Authorities, Governing Bodies, Local Authorities, Schools Adjudicators and Admission Appeals Panels September 2021",
      "School Admission Appeals Code Statutory Guidance for School Leaders, Governing Bodies and Local Authorities February 2012",
    ],
  },
  {
    category: "Home Education",
    items: [
      "Elective Home Education Departmental Guidance for Parents 2019",
    ],
  },
];

const EducationPolicies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Education Policies & Guidance</h1>
      {policies.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">{section.category}</h2>
          <ul className="list-disc pl-6">
            {section.items.map((item, idx) => (
              <li key={idx} className="text-lg mb-2">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EducationPolicies;
