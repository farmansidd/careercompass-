import React from 'react';
import { FiShield, FiKey, FiDollarSign, FiHome } from 'react-icons/fi';

const features = [
  {
    Icon: FiShield,
    title: 'Property Management',
    desc: 'Aliquam lacinia diam quis lacus euismod tristique. Nullam placerat ex eget velit tincidunt.',
  },
  {
    Icon: FiKey,
    title: 'Mortgage Services',
    desc: 'Aliquam lacinia diam quis lacus euismod tristique. Nullam placerat ex eget velit tincidunt.',
  },
  {
    Icon: FiDollarSign,
    title: 'Currency Services',
    desc: 'Aliquam lacinia diam quis lacus euismod tristique. Nullam placerat ex eget velit tincidunt.',
  },
  {
    Icon: FiHome,
    title: 'Smart Home',
    desc: 'Aliquam lacinia diam quis lacus euismod tristique. Nullam placerat ex eget velit tincidunt.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#181A20] py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start">
        {/* Left column */}
        <div className="w-full md:w-5/12 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
            Many Reason to Why <br />Choose Us
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            Aliquam lacinia diam quis lacus euismod
          </p>
        </div>

        {/* Right column grid */}
        <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-2">
              <Icon className="w-6 h-6 text-white" />
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;