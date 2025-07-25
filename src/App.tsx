import React from 'react';
import { UserPresence } from './components/UserPresence';
import { Whiteboard } from './components/Whiteboard';


function App() {
  const [onlineCount, setOnlineCount] = React.useState(1); // Start with 1 for the current user
  
  return (
    <div className="relative min-h-screen flex flex-col h-full p-4 gap-4">
      {/* Layered Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] max-w-[100vw] max-h-[100vh] bg-indigo-200 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] max-w-[100vw] max-h-[100vh] bg-pink-200 rounded-full filter blur-2xl opacity-40" />
        <div className="absolute top-[30%] left-[30%] w-[300px] h-[300px] max-w-[100vw] max-h-[100vh] bg-blue-200 rounded-full filter blur-2xl opacity-30 animate-pulse" />
      </div>
      {/* Header */}
      <header className="bg-[#0D1120] border-b border-gray-800 shadow-sm rounded-xl">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              {/* Enhanced Collaborative Whiteboard Logo */}
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 group">
                {/* Main board background */}
                <div className="absolute inset-1 bg-white rounded-lg opacity-90"></div>
                
                {/* Drawing elements */}
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  {/* Pen/brush stroke */}
                  <div className="absolute top-2 left-2 w-4 h-0.5 bg-blue-600 rounded-full transform rotate-45 group-hover:rotate-12 transition-transform duration-300"></div>
                  
                  {/* Collaborative dots representing multiple users */}
                  <div className="absolute bottom-2 right-2 flex space-x-0.5">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  
                  {/* Central drawing/collaboration icon */}
                  <svg 
                    className="w-5 h-5 text-indigo-600 group-hover:text-blue-700 transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" 
                    />
                  </svg>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div>
                <h1 className="text-xl font-bold text-white-900 leading-tight">
                  WhiteBoard
                </h1>
                <p className="text-xs text-gray-400 font-medium">
                  Collaborative Drawing
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center">
              <UserPresence onlineCount={onlineCount} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow min-h-0 h-[calc(100vh-89px)] overflow-hidden">
        <Whiteboard setOnlineCount={setOnlineCount} />
      </main>
    </div>
  );
}

export default App;