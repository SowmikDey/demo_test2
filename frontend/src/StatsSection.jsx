import CountUp from './CountUp';

const StatsSection = () => {
  const stats = [
    {
      value: 45,
      suffix: '%',
      label: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      value: 15.5,
      suffix: 'K+',
      label: 'Lorem ipsum dolor sit amet consectetur'
    },
    {
      value: 20,
      suffix: 'B+',
      label: 'Lorem ipsum dolor sit amet consectetur'
    }
  ];

  return (
    <div className="bg-[#faf8f5] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center border-r border-gray-300 last:border-r-0"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#2c2416] mb-4">
                <CountUp
                  from={0}
                  to={stat.value}
                  duration={2}
                  delay={index * 0.2}
                  suffix={stat.suffix}
                  className="inline-block"
                />
              </div>
              <p className="text-base text-gray-600 max-w-xs mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;