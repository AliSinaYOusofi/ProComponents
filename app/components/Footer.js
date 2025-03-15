"use client"
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 py-8 mt-20"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Pro Components</h3>
            <p className="text-gray-400">Building the future of web development</p>
          </div>
          
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center space-x-6"
            >
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
            </motion.div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">© 2024 Pro Components. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 