import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          Terms of Service
        </h1>
        <div className="prose prose-invert max-w-none text-muted-foreground">
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            1. Agreement to Terms
          </h2>
          <p className="mb-4">
            By accessing our website at Digital Mafia Solutions, you agree to be
            bound by these terms of service and all applicable laws and
            regulations.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            2. Use License
          </h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Digital Mafia Solutions'
            website for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            3. Disclaimer
          </h2>
          <p className="mb-4">
            The materials on Digital Mafia Solutions' website are provided on an
            'as is' basis. We make no warranties, expressed or implied, and
            hereby disclaim and negate all other warranties.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
