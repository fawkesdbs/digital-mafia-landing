import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground">
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-6">
            Digital Mafia Solutions is committed to protecting your personal
            information. As a South African business, we comply with the
            Protection of Personal Information Act (POPIA).
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect information you provide directly to us when you fill out
            our contact forms, subscribe to our newsletter, or communicate with
            us. This may include your name, email address, phone number, and
            company details.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve
            our services, to communicate with you, and to comply with legal
            obligations.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            3. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            our Information Officer at: info@digital-mafia.co.za
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
