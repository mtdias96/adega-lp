"use client"

import { motion } from "framer-motion"
import { Award, BarChart3, DollarSign, Package, Store, Target, TrendingUp, Users, Zap } from "lucide-react"

export default function AnimatedDevices() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative z-20 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-64 sm:w-80 h-48 sm:h-64"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotateY: [0, 2, -2, 0],
          rotateX: [0, 1, -1, 0],
        }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          scale: { duration: 0.8, ease: "easeOut" },
          y: { duration: 0.8, ease: "easeOut" },
          rotateY: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotateX: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 },
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Store className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900 text-sm sm:text-base">AdegaTech</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>

        {/* Central Icon - Rocket equivalent */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center shadow-lg"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 10, -10, 0],
              boxShadow: [
                "0 10px 25px rgba(233, 190, 124, 0.3)",
                "0 20px 40px rgba(233, 190, 124, 0.5)",
                "0 10px 25px rgba(233, 190, 124, 0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <motion.div
              className="text-center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="text-sm sm:text-lg font-bold text-gray-900">R$ 12k</div>
              <div className="text-xs text-gray-600">Vendas</div>
            </motion.div>
            <motion.div
              className="text-center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <div className="text-sm sm:text-lg font-bold text-gray-900">247</div>
              <div className="text-xs text-gray-600">Produtos</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1 - Top Left */}
      <motion.div
        className="absolute top-4 sm:top-8 left-4 sm:left-8 z-10 bg-white rounded-xl shadow-lg p-3 sm:p-4 w-36 sm:w-48"
        initial={{ opacity: 0, x: -100, y: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -8, 0],
          rotateZ: [-1, 1, -1],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.2, ease: "easeOut" },
          x: { duration: 0.8, delay: 0.2, ease: "easeOut" },
          y: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.2,
          },
          rotateZ: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          },
        }}
      >
        <div className="flex items-center space-x-2 sm:space-x-3">
          <motion.div
            className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-100 rounded-lg flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent-600" />
          </motion.div>
          <div>
            <div className="text-xs sm:text-sm font-semibold text-gray-900">Crescimento</div>
            <div className="text-sm sm:text-lg font-bold text-accent-600">+24%</div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2 - Top Right */}
      <motion.div
        className="absolute top-6 sm:top-12 right-6 sm:right-12 z-10 bg-white rounded-xl shadow-lg p-3 sm:p-4 w-32 sm:w-44"
        initial={{ opacity: 0, x: 100, y: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -12, 0],
          rotateZ: [1, -1, 1],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4, ease: "easeOut" },
          x: { duration: 0.8, delay: 0.4, ease: "easeOut" },
          y: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          },
          rotateZ: {
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          },
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs sm:text-sm text-gray-600">Estoque</div>
            <div className="text-lg sm:text-xl font-bold text-gray-900">1.2k</div>
          </div>
          <motion.div
            className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary-100 rounded-lg flex items-center justify-center"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          >
            <Package className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-600" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-16 z-10 bg-white rounded-xl shadow-lg p-4 w-52"
        initial={{ opacity: 0, x: -100, y: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0],
          rotateZ: [-0.5, 0.5, -0.5],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6, ease: "easeOut" },
          x: { duration: 0.8, delay: 0.6, ease: "easeOut" },
          y: {
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          },
          rotateZ: {
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          },
        }}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Vendas Hoje</span>
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <DollarSign className="w-4 h-4 text-cyan-600" />
            </motion.div>
          </div>
          <div className="text-2xl font-bold text-gray-900">R$ 1.847</div>
          <div className="flex items-end space-x-1 h-8">
            {[40, 60, 35, 80, 55, 70].map((height, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-sm flex-1"
                animate={{
                  height: [`${height * 0.6}%`, `${height}%`, `${height * 0.8}%`],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 z-10 bg-white rounded-xl shadow-lg p-4 w-40"
        initial={{ opacity: 0, x: 100, y: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -15, 0],
          rotateZ: [0.5, -0.5, 0.5],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.8, ease: "easeOut" },
          x: { duration: 0.8, delay: 0.8, ease: "easeOut" },
          y: {
            duration: 5.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          },
          rotateZ: {
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          },
        }}
      >
        <div className="text-center">
          <motion.div
            className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          >
            <Users className="w-6 h-6 text-green-600" />
          </motion.div>
          <div className="text-lg font-bold text-gray-900">847</div>
          <div className="text-xs text-gray-600">Clientes Ativos</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-32 right-32 z-5 bg-secondary-500 rounded-lg p-2 shadow-md"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1 },
          scale: { duration: 0.5, delay: 1 },
          y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 },
          rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 1 },
        }}
      >
        <BarChart3 className="w-4 h-4 text-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-32 z-5 bg-accent-500 rounded-full p-2 shadow-md"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1.2 },
          scale: { duration: 0.5, delay: 1.2 },
          y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
          x: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 },
        }}
      >
        <Target className="w-4 h-4 text-white" />
      </motion.div>

      <motion.div
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-15 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 4px 6px rgba(34, 197, 94, 0.3)",
            "0 8px 25px rgba(34, 197, 94, 0.5)",
            "0 4px 6px rgba(34, 197, 94, 0.3)",
          ],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 1.4 },
          y: { duration: 0.6, delay: 1.4 },
          scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
          boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
        }}
      >
        <div className="flex items-center space-x-1">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Award className="w-3 h-3" />
          </motion.div>
          <span>100% Online</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-secondary-500/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-accent-500/5 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Connecting Lines - Subtle */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-1">
        <motion.path
          d="M 200 150 Q 300 200 400 250"
          stroke="rgba(233, 190, 124, 0.2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeDashoffset: [0, -20, 0],
          }}
          transition={{
            pathLength: { duration: 2, delay: 1.5 },
            strokeDashoffset: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 3 },
          }}
        />
        <motion.path
          d="M 500 100 Q 400 150 350 200"
          stroke="rgba(255, 107, 107, 0.2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            strokeDashoffset: [0, 20, 0],
          }}
          transition={{
            pathLength: { duration: 2, delay: 1.8 },
            strokeDashoffset: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 4 },
          }}
        />
      </svg>
    </div>
  )
}
