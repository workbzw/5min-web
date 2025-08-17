export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                5min
              </h1>
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <a 
                href="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                首页
              </a>
              <a 
                href="/privacy" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                隐私协议
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              5min
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Beat Procrastination in Just 5 Minutes!
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you want to start studying, clean your room, write an article, or simply take a mindful breathing break, 
              5min is your ultimate quick-start tool. Just set a 5-minute countdown, and transform hesitation into action instantly.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Download Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beat Procrastination */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Beat Procrastination
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Break inertia and start tasks instantly
              </p>
            </div>

            {/* Focus Timer */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Focus Timer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay concentrated and reduce distractions
              </p>
            </div>

            {/* Meditation Mode */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🧘</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Meditation Mode
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Relax your mind and release stress in minutes
              </p>
            </div>

            {/* Habit Building */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Habit Building
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Make steady progress every single day
              </p>
            </div>

            {/* Simple & Fast */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Simple & Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No complex setup — open and start right away
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-6 py-16 sm:px-8 lg:px-12 bg-gray-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Perfect For
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              '📚 Studying',
              '💼 Working', 
              '🧹 Tidying up',
              '🏃 Exercising',
              '✍️ Writing',
              '🧘 Meditating',
              '📖 Reading',
              '🎯 More...'
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            5 minutes can change the way you take action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Make time management easy, effective, and sustainable — start today and get closer to your goals than you were yesterday!
          </p>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Start Your 5-Minute Journey
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="px-6 py-12 sm:px-8 lg:px-12 bg-gray-900 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-300 mb-6">Have questions or feedback? We'd love to hear from you!</p>
          
          <a 
            href="mailto:workbzw@gmail.com" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <span>📧</span>
            workbzw@gmail.com
          </a>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2024 5min App. Transform hesitation into action.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
