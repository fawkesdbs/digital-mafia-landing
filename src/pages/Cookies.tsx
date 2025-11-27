import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Cookie Policy
          </h1>
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. What are Cookies?
              </h2>
              <p className="text-muted-foreground">
                Cookies are small text files stored on your device to help our
                website function better and provide you with a personalized
                experience. We use local storage to remember your preferences
                (like your theme choice and cookie consent) and standard cookies
                for analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Types We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">
                    Essential (Local Storage)
                  </h3>
                  <p className="text-muted-foreground">
                    Necessary for the site to work. We use these to remember:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 ml-2">
                    <li>Your theme preference (Light/Dark mode)</li>
                    <li>Your decision to accept or decline cookies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">
                    Analytics Cookies (Google Analytics)
                  </h3>
                  <p className="text-muted-foreground">
                    If you click "Accept", we use Google Analytics to track
                    visitor numbers anonymously. This sets files named{" "}
                    <code>_ga</code> and
                    <code>_ga_CONTAINERID</code> on your device.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    These help us understand which pages are popular and how
                    users move through the site. IP addresses are anonymized.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">
                    Marketing Cookies
                  </h3>
                  <p className="text-muted-foreground">
                    We may use pixels (like the Facebook Pixel) to show you
                    relevant ads based on your interests.
                    <span className="italic opacity-80">
                      {" "}
                      (Note: Currently not active, but reserved for future use).
                    </span>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Managing Cookies
              </h2>
              <p className="text-muted-foreground">
                You can refuse non-essential cookies via our cookie consent
                banner. If you previously accepted and wish to change your mind,
                you can clear your browser's local storage or{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  contact us
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
