'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Cloud, 
  Zap, 
  BarChart3, 
  GitBranch, 
  Shield, 
  Cpu, 
  Globe,
  ArrowRight,
  Play,
  Code,
  Server,
  Workflow,
  Brain,
  Lock,
  Monitor
} from 'lucide-react';

const dataEngineerTasks = [
  {
    id: 'ingestion',
    title: 'Data Ingestion & Collection',
    description: 'Collecte et ingestion de données depuis diverses sources en temps réel ou par batch',
    icon: Database,
    tools: ['Apache Kafka', 'Apache Airflow', 'Fivetran', 'Stitch', 'AWS Kinesis', 'Azure Event Hubs'],
    color: 'from-blue-500 to-cyan-500',
    tasks: [
      'Configuration de pipelines de données',
      'Intégration d\'APIs et bases de données',
      'Streaming de données en temps réel',
      'Gestion des formats de données (JSON, Parquet, Avro)'
    ]
  },
  {
    id: 'processing',
    title: 'Data Processing & Transformation',
    description: 'Transformation et nettoyage des données pour les rendre exploitables',
    icon: Cpu,
    tools: ['Apache Spark', 'dbt', 'Apache Beam', 'Pandas', 'Polars', 'Apache Flink'],
    color: 'from-purple-500 to-pink-500',
    tasks: [
      'ETL/ELT pipeline development',
      'Data cleaning et validation',
      'Transformation de schémas',
      'Optimisation des performances'
    ]
  },
  {
    id: 'storage',
    title: 'Data Storage & Architecture',
    description: 'Conception et gestion d\'architectures de stockage scalables',
    icon: Server,
    tools: ['Snowflake', 'BigQuery', 'Redshift', 'Databricks', 'Apache Iceberg', 'Delta Lake'],
    color: 'from-green-500 to-emerald-500',
    tasks: [
      'Design de data warehouses',
      'Modélisation dimensionnelle',
      'Partitioning et indexation',
      'Gestion des métadonnées'
    ]
  },
  {
    id: 'orchestration',
    title: 'Workflow Orchestration',
    description: 'Orchestration et automatisation des pipelines de données',
    icon: Workflow,
    tools: ['Apache Airflow', 'Prefect', 'Dagster', 'Azure Data Factory', 'AWS Step Functions'],
    color: 'from-orange-500 to-red-500',
    tasks: [
      'Scheduling de jobs',
      'Monitoring des pipelines',
      'Gestion des dépendances',
      'Error handling et retry logic'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Déploiement et gestion d\'infrastructures cloud natives',
    icon: Cloud,
    tools: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker'],
    color: 'from-indigo-500 to-blue-500',
    tasks: [
      'Infrastructure as Code',
      'Containerisation des applications',
      'Auto-scaling et load balancing',
      'Cost optimization'
    ]
  },
  {
    id: 'ml-ops',
    title: 'ML Engineering & MLOps',
    description: 'Support des initiatives ML et déploiement de modèles en production',
    icon: Brain,
    tools: ['MLflow', 'Kubeflow', 'Feast', 'Great Expectations', 'Weights & Biases'],
    color: 'from-teal-500 to-green-500',
    tasks: [
      'Feature engineering',
      'Model serving infrastructure',
      'A/B testing frameworks',
      'Model monitoring et drift detection'
    ]
  },
  {
    id: 'security',
    title: 'Data Security & Governance',
    description: 'Sécurisation des données et mise en place de la gouvernance',
    icon: Shield,
    tools: ['Apache Ranger', 'Collibra', 'Alation', 'Privacera', 'AWS IAM', 'Azure AD'],
    color: 'from-red-500 to-pink-500',
    tasks: [
      'Data lineage tracking',
      'Access control et permissions',
      'GDPR compliance',
      'Data quality monitoring'
    ]
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Observability',
    description: 'Surveillance et observabilité des systèmes de données',
    icon: Monitor,
    tools: ['Datadog', 'Grafana', 'Prometheus', 'New Relic', 'Monte Carlo', 'Soda'],
    color: 'from-yellow-500 to-orange-500',
    tasks: [
      'Métriques de performance',
      'Alerting et notifications',
      'Log analysis',
      'SLA monitoring'
    ]
  }
];

const techStack2025 = [
  { name: 'Python', category: 'Language', popularity: 95 },
  { name: 'SQL', category: 'Language', popularity: 98 },
  { name: 'Scala', category: 'Language', popularity: 75 },
  { name: 'Apache Spark', category: 'Processing', popularity: 90 },
  { name: 'dbt', category: 'Transformation', popularity: 85 },
  { name: 'Snowflake', category: 'Storage', popularity: 80 },
  { name: 'Apache Airflow', category: 'Orchestration', popularity: 88 },
  { name: 'Kubernetes', category: 'Infrastructure', popularity: 82 },
  { name: 'Terraform', category: 'IaC', popularity: 78 },
  { name: 'Apache Kafka', category: 'Streaming', popularity: 85 }
];

export default function DataEngineeringPage() {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % techStack2025.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleTaskClick = (taskId: string) => {
    if (selectedTask === taskId) {
      setSelectedTask(null);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedTask(taskId);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleButtonClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Database className="w-16 h-16 text-cyan-400" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Data Engineering
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Découvrez l'écosystème moderne du Data Engineering : des pipelines temps réel 
              aux architectures cloud-native, explorez les compétences essentielles d'un 
              Data Engineer en 2025.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Explorer les compétences
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Ticker */}
      <section className="py-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-8">
            <span className="text-gray-400 font-medium">Tech Stack 2025:</span>
            <motion.div
              key={currentTechIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center space-x-2"
            >
              <Code className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold">
                {techStack2025[currentTechIndex].name}
              </span>
              <span className="text-gray-400">
                ({techStack2025[currentTechIndex].category})
              </span>
              <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${techStack2025[currentTechIndex].popularity}%` }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Tasks Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Domaines d'expertise
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Les 8 piliers fondamentaux du métier de Data Engineer moderne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataEngineerTasks.map((task, index) => {
              const Icon = task.icon;
              const isSelected = selectedTask === task.id;
              
              return (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isSelected ? 'lg:col-span-2' : ''
                  }`}
                  onClick={() => handleTaskClick(task.id)}
                >
                  <div className={`
                    relative p-6 rounded-2xl backdrop-blur-sm border border-white/10
                    bg-gradient-to-br ${task.color} bg-opacity-10
                    hover:bg-opacity-20 transition-all duration-300
                    ${isSelected ? 'ring-2 ring-cyan-400' : ''}
                  `}>
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 rounded-xl bg-gradient-to-br ${task.color}`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isSelected ? 'rotate-90' : ''
                      }`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {task.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {task.description}
                    </p>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <div>
                            <h4 className="text-cyan-400 font-semibold mb-2">Tâches principales:</h4>
                            <ul className="space-y-1">
                              {task.tasks.map((taskItem, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="text-gray-300 text-sm flex items-center"
                                >
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                                  {taskItem}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-purple-400 font-semibold mb-2">Outils populaires:</h4>
                            <div className="flex flex-wrap gap-2">
                              {task.tools.map((tool, idx) => (
                                <motion.span
                                  key={tool}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                                >
                                  {tool}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Compétences techniques 2025
            </h2>
            <p className="text-gray-300 text-lg">
              Les technologies les plus demandées sur le marché
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack2025.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-white/5 rounded-xl backdrop-blur-sm"
              >
                <div>
                  <h3 className="text-white font-semibold">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.category}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.popularity}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                    />
                  </div>
                  <span className="text-cyan-400 font-semibold text-sm">
                    {tech.popularity}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-12 rounded-3xl backdrop-blur-sm border border-white/10"
          >
            <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à devenir Data Engineer ?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Le métier de Data Engineer est en pleine expansion. Avec la croissance 
              exponentielle des données, les opportunités n'ont jamais été aussi nombreuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleButtonClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Commencer l'apprentissage
              </motion.button>
              <motion.button
                onClick={handleButtonClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400/10 transition-all duration-300"
              >
                Voir les ressources
              </motion.button>
            </div>
            
            <AnimatePresence>
              {showMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl backdrop-blur-sm"
                >
                  <p className="text-yellow-400 font-medium text-center">
                    📚 Pas disponible pour le moment, à bientôt !
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <p className="text-gray-400 text-center">
              Une vision moderne du Data Engineering<br />
              <span className="text-sm">Conçu pour les professionnels de demain</span><br />
              <span className="text-xs text-gray-500 mt-2 block">MANTSOUAKA MPINDOU Franck Arthur</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}