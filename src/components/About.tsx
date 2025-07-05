
import { Code, Coffee, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Users, value: '20+', label: 'Happy Clients' },
    { icon: Award, value: '3+', label: 'Years Experience' },
  ];

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'UI/UX Design', level: 70 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              I'm a passionate developer who loves creating amazing digital experiences
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating 
              modern, responsive, and user-friendly applications. I'm passionate about 
              clean code, beautiful design, and solving complex problems.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying a good cup of coffee 
              while planning my next creative project.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-4 rounded-lg mb-3 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <stat.icon className="w-8 h-8 mx-auto text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <h4 className="text-xl font-semibold mb-8 text-white">Skills & Expertise</h4>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
