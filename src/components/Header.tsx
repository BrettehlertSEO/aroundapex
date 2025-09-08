export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Around Apex
            </h1>
          </div>
          <div className="text-sm text-white/80">
            Your Local Newsletter
          </div>
        </div>
      </div>
    </header>
  );
};