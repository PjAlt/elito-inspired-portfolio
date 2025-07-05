
import { Code, Smartphone, Palette, Server, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Creating responsive and dynamic websites using modern technologies like React, TypeScript, and Node.js.',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications with React Native and Flutter for iOS and Android.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Deployment']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building scalable server-side applications and APIs using Node.js, Python, and cloud services.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration']
    },
    {
      icon: Globe,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development services from concept to deployment and maintenance.',
      features: ['Complete Solutions', 'DevOps', 'Maintenance']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, performance, and search engine visibility.',
      features: ['Speed Optimization', 'SEO', 'Code Splitting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of development services to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
