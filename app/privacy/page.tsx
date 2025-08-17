export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            5min App Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Effective Date: August 17, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Thank you for using 5min App. We attach great importance to user privacy and are committed to protecting your personal information. This privacy policy explains how we handle your data.
            </p>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                Data Collection
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                5min App does not collect, store, or use any personal data. We do not track user behavior nor save any usage records.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                Permission Usage
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This App does not use any sensitive permissions, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>Camera</li>
                <li>Microphone</li>
                <li>Contacts</li>
                <li>Location</li>
                <li>Photo or media library</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                Data Sharing
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Since this App does not collect any user data, it will not share or sell user information with third parties.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                Children's Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                5min App is not intended for children under the age of 13, and will not collect personal information of children.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  5
                </span>
                Updates to Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This privacy policy may be updated from time to time. In case of significant changes, we will publish the updated version in the App or on the official website.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  6
                </span>
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions or suggestions regarding the privacy policy, please contact us through the following means:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email address:</strong>{' '}
                  <a 
                    href="mailto:workbzw@gmail.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    workbzw@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-12">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <span>←</span>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}