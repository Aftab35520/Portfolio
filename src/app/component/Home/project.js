'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI-Powered Movie Streaming Platform',
    description: 'Built a recommendation engine using deep learning to personalize content suggestions',
    tech: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
    features: [
      'Real-time streaming infrastructure',
      'Content-based filtering system',
      'User behavior analytics dashboard'
    ],
    link: 'https://streaming-front-cozu.vercel.app/',
    github: 'https://github.com/Aftab35520/StreamingFront.git'
  },
  {
    title: 'Employee Attendance System',
    description: 'Automated attendance tracking',
    tech: ['Python', 'OpenCV', 'React', 'Flask'],
    features: [
      
      'Attendance reports generation',
      'Multi-class classification model'
    ],
    link: 'https://employee-attendance-xi.vercel.app/',
    github: 'https://github.com/Aftab35520/EmployeeAttendance.git'
  },
  {
    title: 'E-Commerce Platform with ML Insights',
    description: 'Full-stack marketplace with predictive analytics for sales forecasting',
    tech: ['Next.js', 'Django', 'Scikit-learn', 'PostgreSQL'],
    features: [
      'Product recommendation engine',
      'Dynamic pricing model',
      'Customer segmentation clustering'
    ],
    link: 'https://ecom-platform.com',
    github: 'https://github.com/Aftab35520/ecom_front.git'
  },
  {
    title: 'Natural Language Processing API',
    description: 'Transformer-based models for text classification and generation tasks',
    tech: ['HuggingFace', 'FastAPI', 'PyTorch', 'Docker'],
    features: [
      'BERT fine-tuning pipeline',
      'Text summarization endpoints',
      'Sentiment analysis service'
    ],
    link: 'https://nlp-api.com',
    github: 'https://github.com/yourusername/nlp-api'
  },
  {
    title: 'Leaf Condition Prediction',
    description: 'AI-powered system to detect plant diseases through leaf image classification',
    tech: ['TensorFlow', 'Keras', 'Flask', 'OpenCV'],
    features: [
      'Deep learning-based classification',
      'Image preprocessing pipeline',
      'Real-time prediction API'
    ],
    link: 'https://leaf-predictor.com',
    github: 'https://github.com/yourusername/leaf-prediction'
  },
  {
    title: 'Image Classification with ML',
    description: 'Custom deep learning model for classifying various image datasets',
    tech: ['PyTorch', 'FastAPI', 'Docker', 'Streamlit'],
    features: [
      'Convolutional Neural Network (CNN)',
      'Real-time inference',
      'Dataset augmentation techniques'
    ],
    link: 'https://image-classifier.com',
    github: 'https://github.com/yourusername/image-classification'
  },
  {
    title: 'Spam Email Detection',
    description: 'Machine learning model to classify emails as spam or not spam',
    tech: ['Scikit-learn', 'Flask', 'NLTK', 'Pandas'],
    features: [
      'Naïve Bayes classifier',
      'Feature extraction with TF-IDF',
      'Web-based prediction service'
    ],
    link: 'https://spam-detector.com',
    github: 'https://github.com/yourusername/spam-detection'
  }
]

const Projects = () => {
  return (
    <section className="min-h-screen w-full py-20 px-4 ">
      <div className="max-w-[90%] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all"
            >
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-purple-400 mb-2">KEY FEATURES</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li 
                        key={feature}
                        className="text-gray-300 text-sm before:content-['▹'] before:text-purple-400 before:mr-2"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-purple-400 mb-2">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-600 hover:border-purple-500 hover:text-purple-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="pointer-events-auto text-sm px-4 py-2 rounded-lg bg-purple-600/30 text-purple-400 hover:bg-purple-600/50 transition-colors border border-purple-500/30">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="pointer-events-auto text-sm px-4 py-2 rounded-lg bg-gray-700/30 text-gray-400 hover:bg-gray-700/50 transition-colors border border-gray-600">View Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
