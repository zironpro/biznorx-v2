import { GlobalCta } from "@/components/GlobalCta";

export function PrivacyView() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-12 md:pt-24 pb-10 md:pb-20 bg-neutral-50 text-slate-700">
      <div className="container-master max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-biznorx-navy mb-4 font-[family-name:var(--font-playfair)]">
          Privacy Policy
        </h1>
        <p className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-12">
          Effective Date: October 1, 2026
        </p>

        <div className="prose prose-slate max-w-none prose-headings:text-biznorx-navy prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-p:mb-6">
          <p>
            BiznorX ("we", "our", or "us") is deeply committed to safeguarding the privacy, integrity, and security of your personal and corporate data. This comprehensive Privacy Policy delineates our rigorous methodologies regarding the collection, computational processing, storage, and dissemination of information when you interact with our digital infrastructure, advisory services, and recruitment platforms.
          </p>

          <h2>1. Data Acquisition Architecture</h2>
          <p>
            We collect data through multiple vectors to optimize our platform and enhance platform security. This includes:
            <br/><br/>
            <strong>Provided Data:</strong> Personal identifiers (e.g., name, contact matrices), professional dossiers (e.g., resumes, employment chronologies, educational certifications), and corporate requirements submitted directly through our secure portals.
          </p>

          <h2>2. Cryptographic Security and Storage Protocols</h2>
          <p>
            Our infrastructure employs military-grade security architectures to defend against unauthorized extraction. Data at rest is encrypted using AES-256 block ciphers, and data in transit is protected via TLS 1.3 cryptographic protocols. We enforce strict role-based access control (RBAC), multi-factor authentication (MFA) for internal administrative portals, and conduct continuous penetration testing to identify and patch zero-day vulnerabilities.
          </p>

          <h2>3. Cross-Border Data Transmissions</h2>
          <p>
            As a global entity, BiznorX processes data across distributed cloud nodes worldwide. By utilizing our services, you consent to the cross-border transmission of your data. We strictly adhere to the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and employ Standard Contractual Clauses (SCCs) to ensure data sovereignty and regulatory compliance regardless of geographical location.
          </p>

          <h2>4. User Rights and Data Autonomy</h2>
          <p>
            Depending on your jurisdiction, you possess explicit rights regarding your digital footprint. You may request cryptographic extraction (data portability), rectification of inaccuracies, or the absolute erasure of your profile from our databases ("Right to be Forgotten"). To initiate a data sovereignty request, please interact with our compliance officers via the contact portal. We execute such requests within standard legal timeframes, subject to necessary identity verification protocols.
          </p>

          <h2>5. Revisions to this Policy</h2>
          <p>
            We reserve the right to iterate and deploy modifications to this Privacy Policy in response to evolving legal paradigms and technological advancements. Substantive policy shifts will be communicated via active platform notifications or direct email correspondence. Continued use of our infrastructure post-deployment implies acceptance of the revised policy structure.
          </p>
        </div>
      </div>
      <GlobalCta />
    </div>
  );
}
