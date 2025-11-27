import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ScrollArea } from "../components/ui/scroll-area";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Terms of Service
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Effective Date: November 27, 2025.
              <br />
              Welcome to Digital Mafia. Our terms are designed to be fair,
              transparent, and strictly enforced to ensure efficient delivery.
            </p>

            <ScrollArea className="h-[600px] w-full rounded-md border p-4 bg-card/50">
              <div className="space-y-8 p-4">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    1. The "Scope Gallop" Prevention
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Services provided are strictly limited to those itemized
                    in the Proposal/Invoice. Any request falling outside this
                    list will be classified as 'Out of Scope' and subject to a
                    separate quotation or billed at our standard hourly rate of{" "}
                    <span className="text-primary font-bold">R1,250</span>. We
                    do not accept scope changes via WhatsApp or informal
                    channels; all changes must be confirmed in formal writing
                    via our Change Request system.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    2. Payment & Non-Refundable Deposit
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A{" "}
                    <span className="text-primary font-bold">50% deposit</span>{" "}
                    is required to commence work. This deposit is non-refundable
                    and serves as a reservation fee to secure resource
                    allocation, software licensing, and initial consultation
                    time. In terms of the Consumer Protection Act (CPA), this
                    amount represents a reasonable cancellation penalty to
                    recoup costs incurred should the Client cancel the agreement
                    prior to completion.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    3. Revisions & "Ghosting" Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Revisions:</strong> Our standard packages include
                    two (2) rounds of revisions. Additional rounds of revisions
                    will be billed at our standard hourly rate.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Ghosting:</strong> If the Client fails to provide
                    feedback, assets, or approval for a period exceeding 10
                    business days, the project will be placed on hold. A{" "}
                    <span className="text-primary font-bold">
                      Reactivation Fee of R2,500
                    </span>{" "}
                    will apply to restart the project timeline.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    4. Intellectual Property (IP) Transfer
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Upon full payment of all outstanding invoices, Digital Mafia
                    grants the Client a perpetual, non-exclusive license to use
                    the final deliverables. Ownership of background technology,
                    frameworks, and pre-existing IP remains with Digital Mafia.
                  </p>
                </section>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
