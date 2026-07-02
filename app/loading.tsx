export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Logo Placeholder */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-xl font-display">P</span>
          </div>
          <div className="absolute -inset-2 rounded-3xl border-2 border-primary/20 animate-ping" />
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-shimmer" style={{
            backgroundSize: '200% 100%',
          }} />
        </div>

        <p className="text-xs text-gray-400 font-medium tracking-wider uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}
