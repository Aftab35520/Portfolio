'use client'
import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import Projects from './project'

const services = [
  {
    title: 'Full-Stack Development',
    description: 'Building modern web applications with end-to-end architecture',
    tech: ['React/Next.js', 'Node.js', 'ExpressJS', 'TypeScript', 'JavaScript'],
    tools: ['Docker', 'Jest', 'Webpack', 'Vercel'],
    specialties: [
      'Microservices architecture',
      'REST/GraphQL APIs',
      'Performance optimization'
    ]
  },
  {
    title: 'Machine Learning',
    description: 'Developing production-grade ML pipelines and systems',
    tech: ['Python', 'TensorFlow', 'Scikit-learn'],
    tools: ['Kubeflow', 'Airflow', 'BigQuery', 'Jupyter'],
    specialties: [
      'Feature engineering',
      'Model deployment',
      'MLOps pipelines'
    ]
  },
  {
    title: 'Deep Learning',
    description: 'Implementing complex neural network architectures',
    tech: ['PyTorch', 'Keras', "TensorFlow"],
    tools: ['TensorBoard', 'Weights & Biases', 'DVC'],
    specialties: [
      'Transfer learning',
      'Model quantization',
      'Neural architecture search'
    ]
  },
  {
    title: 'Spline 3D modeling',
    description: 'Creating interactive 3D experiences and UI components',
    tech: ['Spline', 'Three.js'],
    tools: ['Spline Editor', 'Figma'],
    specialties: [
     '3D asset creation',
      'Interactive web experiences',
      'Real-time rendering'
    ]
  }
]

const Service = () => {
  return (
    <section className="pt-[100px] relative flex items-center px-4 md:pt-[100px] p-7 min-h-screen w-full bg-gradient-to-br from-gray-900 to-black Pointer">
      {/* 3D Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas>
          <OrbitControls autoRotate enableZoom={false} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} />
        </Canvas>
      </div>

      {/* Services Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent border-b-2 border-purple-500 pb-2"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full px-2 md:max-w-[calc(100%-300px)] mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="glass-background p-4 md:p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all group relative overflow-hidden backdrop-blur-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Custom icon using SVG */}
                <div className="text-purple-400 mb-3 md:mb-4">
                  <svg 
                    className="w-6 h-6 md:w-8 md:h-8" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {service.title === 'Full-Stack Development' && (
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    )}
                    {service.title === 'Machine Learning' && (
                      <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    )}
                    {service.title === 'Deep Learning' && (
                      <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    )}
                    {service.title === 'Spline 3D modeling' && (
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    )}
                  </svg>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-3 md:mb-4">
                  <h4 className="text-[10px] md:text-xs font-semibold text-purple-400 mb-1 md:mb-2">SPECIALIZATIONS</h4>
                  <ul className="space-y-1">
                    {service.specialties.map((item) => (
                      <li 
                        key={item}
                        className="text-gray-300 text-xs md:text-sm before:content-['▹'] before:text-purple-400 before:mr-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3 md:mb-4">
                  <h4 className="text-[10px] md:text-xs font-semibold text-purple-400 mb-1 md:mb-2">TECH STACK</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {service.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-[10px] md:text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-600 hover:border-purple-500 hover:text-purple-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 md:mt-4">
                  <h4 className="text-[10px] md:text-xs font-semibold text-purple-400 mb-1 md:mb-2">TOOLS</h4>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {service.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs rounded bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-purple-500/50 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-full px-2 md:max-w-[calc(100%-160px)] mt-8 md:mt-12">
          <Projects />
        </div>
      </div>
    </section>
  )
}

export default Service