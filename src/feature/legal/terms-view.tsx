import { GlobalCta } from "@/components/GlobalCta";

export function TermsView() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-12 md:pt-24 pb-10 md:pb-20 bg-neutral-50 text-slate-700">
      <div className="container-master max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-biznorx-navy mb-4 font-[family-name:var(--font-playfair)]">
          Terms of Service
        </h1>
        <p className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-12">
          Effective Date: October 1, 2026
        </p>

        <div className="prose prose-slate max-w-none prose-headings:text-biznorx-navy prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-p:mb-6">
          <p>
            Welcome to BiznorX. These Terms of Service ("Terms") govern your access to and use of our digital platforms, workforce management tools, and related advisory services. By accessing or utilizing the BiznorX ecosystem, you agree to be bound by these Terms and our associated Privacy Policy. If you are accepting these Terms on behalf of a corporate entity or other organization, you represent and warrant that you possess the requisite authority to bind such entity to these provisions.
          </p>

          <h2>1. Service Architecture and Scope</h2>
          <p>
            BiznorX provides an integrated suite of human capital solutions, encompassing executive search, technical recruitment, and workforce strategy consultation. Our platform employs sophisticated algorithmic matching and data-driven methodologies to facilitate optimal talent placement. We reserve the right to modify, suspend, or discontinue any facet of our infrastructure—including underlying API structures, user interfaces, and data processing methodologies—without prior notice, provided such modifications do not materially degrade the core functionality utilized by our enterprise partners.
          </p>

          <h2>2. User Obligations and Permitted Use</h2>
          <p>
            As a user of the BiznorX platform, you agree to utilize our services strictly for lawful purposes and in accordance with these Terms. You are prohibited from: (a) reverse-engineering, decompiling, or otherwise attempting to extract the source code of our proprietary algorithms; (b) utilizing automated scraping, bot-driven data extraction, or similar mechanisms to harvest candidate profiles or intellectual property; (c) introducing malicious code, payloads, or executing unauthorized penetration testing against our server infrastructure; and (d) engaging in any activity that compromises the integrity or performance of the BiznorX network.
          </p>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            All content, computational models, database schemas, trademarks, and technological innovations hosted on the BiznorX platform remain the exclusive intellectual property of BiznorX, Inc. and its licensors. The provision of our services does not constitute a transfer of ownership rights. Users are granted a limited, non-exclusive, revocable license to access and interact with our platform solely for the purpose of utilizing our recruitment and advisory services. Unauthorized reproduction, sublicensing, or commercial exploitation of our intellectual assets is strictly prohibited and subject to immediate legal remediation.
          </p>

          <h2>4. Data Integrity and Confidentiality</h2>
          <p>
            BiznorX acts as an intermediary connecting enterprises with highly qualified professionals. While we deploy rigorous vetting protocols, we do not explicitly guarantee the absolute accuracy of credentials supplied by third parties. Both employers and candidates are obligated to maintain the strict confidentiality of any proprietary information, trade secrets, or personal data exchanged during the recruitment lifecycle. Breaches of confidentiality may result in immediate suspension of platform access and associated contractual liabilities.
          </p>

          <h2>5. Limitation of Liability and Disclaimers</h2>
          <p>
            To the maximum extent permitted by applicable jurisdiction, BiznorX disclaims all warranties, whether express or implied, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. Under no circumstances shall BiznorX, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data corruption, or business interruption, arising from your utilization of, or inability to utilize, our platform. Our cumulative liability shall in no event exceed the total fees paid by you to BiznorX in the twelve (12) months preceding the incident giving rise to the claim.
          </p>

          <h2>6. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless BiznorX and its respective officers, directors, and agents from any and all third-party claims, liabilities, damages, and operational costs (including reasonable legal jurisprudence fees) arising out of your violation of these Terms, your infringement of any third-party rights, or your misuse of our computational resources and services.
          </p>

          <h2>7. Dispute Resolution and Governing Law</h2>
          <p>
            Any disputes arising from or relating to these Terms or the BiznorX platform shall be governed by the laws of the State of Delaware, excluding its conflict of law principles. Both parties agree to submit to the exclusive jurisdiction of the state and federal courts located within Delaware. Prior to initiating formal litigation, the parties agree to engage in good-faith binding arbitration under the rules of the American Arbitration Association (AAA) to resolve technological or contractual discrepancies.
          </p>
        </div>
      </div>
      <GlobalCta />
    </div>
  );
}
