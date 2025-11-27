import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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
                experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Types We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-muted-foreground">
                    Necessary for the site to work securely (e.g., security
                    tokens, session identifiers). You cannot opt-out of these.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-muted-foreground">
                    We use tools like Google Analytics to track visitor numbers
                    anonymously. This helps us understand how people use our
                    site.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">
                    Marketing Cookies
                  </h3>
                  <p className="text-muted-foreground">
                    We use pixels (like the Facebook Pixel) to show you relevant
                    ads based on your interests and visits.
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
                banner or by changing your browser settings. Note that blocking
                some cookies may impact your experience on our website.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
