import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-lg text-muted-foreground">
              Digital Mafia (Pty) Ltd is committed to protecting your privacy in
              accordance with the Protection of Personal Information Act
              (POPIA).
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Information Officer
              </h2>
              <p className="text-muted-foreground">
                Our appointed Information Officer is responsible for ensuring
                compliance.
                <br />
                Contact:{" "}
                <a href="mailto:info@digitalmafia.co.za">
                  info@digitalmafia.co.za
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. What We Collect
              </h2>
              <p className="text-muted-foreground">
                We collect data you provide directly (Name, Email, Company
                Details) and data collected automatically (Cookies, IP address)
                to improve our service delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Purpose of Processing
              </h2>
              <p className="text-muted-foreground mb-2">
                We process your data to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Deliver requested digital services and proposals.</li>
                <li>Invoice and process payments.</li>
                <li>Communicate project updates and marketing information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Third-Party Sharing
              </h2>
              <p className="text-muted-foreground">
                We may share your data with trusted operators (e.g., Hosting
                providers like xneelo, Automation tools like Make.com) strictly
                for operational purposes. We have data processing agreements in
                place with these providers to ensure your data is secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to request access to, correction of, or
                deletion of your personal data at any time. Please contact our
                Information Officer to exercise these rights.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
