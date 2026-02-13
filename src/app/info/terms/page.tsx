import InfoPageLayout, {
  INFO_BODY,
  INFO_SECTION,
  INFO_SECTION_CONTENT,
  INFO_SECTION_HEADING,
} from "@/_components/info-page-layout/InfoPageLayout";

const linkClass = "text-link_color hover:text-dark_blue";

function TermsSection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={INFO_SECTION}>
      <h2 className={INFO_SECTION_HEADING}>
        {number}. {title}
      </h2>
      <div className={`${INFO_SECTION_CONTENT} ${INFO_BODY} [&>p]:mb-3 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:mb-3`}>
        {children}
      </div>
    </section>
  );
}

export default function Terms() {
  return (
    <InfoPageLayout title="Terms of Service">
      <div className="w-full">
        <p className={`${INFO_BODY} mb-4`}>
          <span className="underline">Effective Date:</span> May 31, 2025
        </p>
        <p className={`${INFO_BODY} mb-8`}>
        Welcome to FinBud! These Terms of Service (&quot;Terms&quot;) govern your
        use of our website, app, and related services (&quot;Services&quot;). By
        using FinBud, you agree to these Terms. If you don&apos;t agree, please
        don&apos;t use our platform.
        </p>
      </div>

      <TermsSection number={1} title="About FinBud">
        <p>
          FinBud is a financial education tool designed to help Canadians better
          understand personal finance. Our platform provides general, educational
          content and tools — <span className="underline">not</span> professional
          or regulated financial advice.
        </p>
      </TermsSection>

      <TermsSection number={2} title="Who Can Use FinBud">
        <p>
          You must be the age of majority in your province or territory to use
          FinBud. By using our Services, you confirm that you meet this
          requirement and are legally capable of entering into this agreement.
        </p>
      </TermsSection>

      <TermsSection number={3} title="Educational Purposes Only (Not Financial Advice)">
        <p>
          All content on FinBud is intended for{" "}
          <span className="underline">informational and educational purposes only</span>. We
          are not licensed financial planners, advisors, or investment
          professionals. You should not interpret anything on FinBud as
          financial, legal, or tax advice. Always consult a qualified
          professional before making financial decisions.
        </p>
      </TermsSection>

      <TermsSection number={4} title="Your Responsibilities">
        <p>You agree to use FinBud only for lawful purposes. You must not:</p>
        <ul>
          <li>Violate applicable laws or regulations</li>
          <li>Infringe on our intellectual property or that of others</li>
          <li>Attempt to reverse-engineer, scrape, or hack the platform</li>
          <li>Misrepresent yourself or impersonate others</li>
        </ul>
        <p>
          We reserve the right to suspend or terminate your access if you
          violate these Terms.
        </p>
      </TermsSection>

      <TermsSection number={5} title="Account and Security">
        <p>If you create an account with us:</p>
        <ul>
          <li>You are responsible for keeping your login credentials safe.</li>
          <li>You agree to notify us immediately if you suspect unauthorized access.</li>
          <li>You are responsible for all activity under your account.</li>
        </ul>
      </TermsSection>

      <TermsSection number={6} title="Intellectual Property">
        <p>
          All content on FinBud — including our name, educational materials,
          platform design, and our logo — is owned by us or licensed to us.
        </p>
        <ul>
          <li>
            Our logos and branding were created by our team and are protected by{" "}
            <span className="underline">automatic copyright</span> under Canadian law.
          </li>
          <li>
            You may not use, copy, or distribute any content from FinBud without
            our written permission.
          </li>
        </ul>
        <p>
          You may use FinBud to refer to our platform, but may not represent or
          repackage our work as your own.
        </p>
      </TermsSection>

      <TermsSection number={7} title="Third-Party Services">
        <p>
          FinBud may link to third-party websites or services. We are not
          responsible for their content, terms, or privacy practices. Use them
          at your own risk.
        </p>
      </TermsSection>

      <TermsSection number={8} title="Disclaimer of Warranties">
        <p>
          FinBud is provided &quot;as is&quot; and &quot;as available.&quot; We make no
          guarantees that the platform will be error-free, secure, or accurate.
          We disclaim all warranties to the maximum extent allowed by law.
        </p>
      </TermsSection>

      <TermsSection number={9} title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, FinBud and its team will not
          be liable for any damages, losses, or costs arising from your use of
          our Services — including any financial decisions you make based on our
          content.
        </p>
      </TermsSection>

      <TermsSection number={10} title="Changes to Terms">
        <p>
          We may update these Terms at any time. If changes are significant,
          we&apos;ll notify users. Your continued use of FinBud means you accept the
          new Terms.
        </p>
      </TermsSection>

      <TermsSection number={11} title="Contact Us">
        <p>
          If you have questions about these Terms or anything else, feel free to
          contact us:{" "}
          <a href="mailto:finbud.team@gmail.com" className={linkClass}>
            finbud.team@gmail.com
          </a>
        </p>
      </TermsSection>
    </InfoPageLayout>
  );
}
