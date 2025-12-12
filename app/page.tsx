export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 font-sans">
      <main className="flex flex-col items-center justify-center gap-8 py-16 px-8">
        <div className="text-center space-y-6 animate-bounce">
          <div className="text-8xl">🎉</div>
          <h1 className="text-6xl font-bold text-white drop-shadow-lg tracking-wide">
            Happy Birthday
          </h1>
          <h2 className="text-7xl font-extrabold text-yellow-300 drop-shadow-2xl animate-pulse">
            Om!
          </h2>
          <div className="flex gap-4 text-6xl justify-center">
            🎂🎈🎁
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl">
          <p className="text-2xl text-center text-gray-800 font-medium leading-relaxed">
            Wishing you an amazing day filled with joy, laughter, and wonderful memories!
            May this year bring you success, happiness, and all your dreams come true!
          </p>
        </div>

        <div className="flex gap-3 text-5xl animate-bounce">
          🎊✨🌟💫🎇
        </div>
      </main>
    </div>
  );
}
