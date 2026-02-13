import InfoPageLayout, {
  INFO_BODY,
  INFO_SECTION,
  INFO_SECTION_CONTENT,
  INFO_SECTION_HEADING,
} from "@/_components/info-page-layout/InfoPageLayout";

const linkClass = "text-link_color hover:text-dark_blue";
const contentClass = `${INFO_SECTION_CONTENT} ${INFO_BODY} [&>p]:mb-3 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:mb-3 [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:mb-3`;

function PrivacySection({
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
      <div className={contentClass}>{children}</div>
    </section>
  );
}

export default function Privacy() {
  return (
    <InfoPageLayout title="FinBud Privacy Policy">
      <div className="w-full">
        <p className={`${INFO_BODY} mb-4`}>
          <span className="underline">Effective Date:</span> May 31, 2025
        </p>
        <p className={`${INFO_BODY} mb-8`}>
          FinBud (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and protect
          your personal information when you use our website, mobile app, and
          other services (&quot;Services&quot;).
        </p>
      </div>

      <PrivacySection number={1} title="What Information We Collect">
        <p>We collect the following types of information:</p>
        <ol className="list-[upper-alpha] list-inside">
          <li className="font-bold mb-1">Information that you provide</li>
        </ol>
        <ul className="list-disc list-inside ml-4">
          <li>
            <span className="underline">Email Address</span> (e.g., when signing
            up or contacting us)
          </li>
          <li>
            <span className="underline">Feedback or messages</span> you send us
          </li>
        </ul>
        <p>
          We do <span className="underline">not</span> collect sensitive
          personal financial data unless explicitly stated and consented to in
          the future.
        </p>
        <ol className="list-[upper-alpha] list-inside" start={2}>
          <li className="font-bold mb-1">Information Collected Automatically</li>
        </ol>
        <p>We may collect limited non-personal information like:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Device type and browser</li>
          <li>IP address</li>
          <li>General usage data (e.g., which pages you visit)</li>
        </ul>
        <p>This is used to improve performance and user experience.</p>
      </PrivacySection>

      <PrivacySection number={2} title="How We Use Your Information">
        <p>We use your information to:</p>
        <ul>
          <li>Operate and improve FinBud&apos;s platform</li>
          <li>Respond to your messages or inquiries</li>
          <li>Send occasional updates (with your consent)</li>
          <li>Monitor performance and prevent abuse</li>
        </ul>
        <p>
          We do <span className="underline">not sell or rent</span> your
          personal information.
        </p>
      </PrivacySection>

      <PrivacySection number={3} title="Cookies and Analytics">
        <p>
          We may use cookies and third-party analytics tools (e.g., Google
          Analytics) to:
        </p>
        <ul>
          <li>Track how users interact with our Services</li>
          <li>Measure engagement and improve functionality</li>
        </ul>
        <p>You can control or disable cookies in your browser settings.</p>
      </PrivacySection>

      <PrivacySection number={4} title="How We Protect Your Data">
        <p>
          We take reasonable precautions to protect your personal information,
          including:
        </p>
        <ul>
          <li>Limiting access to team members</li>
          <li>Using secure services and encryption where possible</li>
          <li>Not collecting more information than needed</li>
        </ul>
        <p>
          However, no system is 100% secure. You use FinBud at your own risk.
        </p>
      </PrivacySection>

      <PrivacySection number={5} title="When We Share Information">
        <p>
          We do <span className="underline">not share personal information</span>{" "}
          except:
        </p>
        <ul>
          <li>
            With trusted service providers (e.g., email or analytics platforms)
            who help us operate the platform
          </li>
          <li>If required by law or legal process</li>
        </ul>
        <p>We will never share your info with advertisers or sell your data.</p>
      </PrivacySection>

      <PrivacySection number={6} title="Your Rights (Canadian Users)">
        <p>As a Canadian user, you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccuracies</li>
          <li>Withdraw consent for future collection</li>
          <li>Request deletion (subject to legal limits)</li>
        </ul>
        <p>
          To make a request, email us at{" "}
          <a href="mailto:finbud.team@gmail.com" className={linkClass}>
            finbud.team@gmail.com
          </a>
          .
        </p>
      </PrivacySection>

      <PrivacySection number={7} title="Children's Privacy">
        <p>
          FinBud is not intended for children under the age of 13. We do not
          knowingly collect data from anyone under that age.
        </p>
      </PrivacySection>

      <PrivacySection number={8} title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We&apos;ll notify
          users of material changes by posting an updated policy and adjusting
          the &quot;Effective Date&quot; above.
        </p>
      </PrivacySection>

      <PrivacySection number={9} title="Contact Us">
        <p>Have questions about this policy or your data?</p>
        <a href="mailto:finbud.team@gmail.com" className={linkClass}>
          finbud.team@gmail.com
        </a>
      </PrivacySection>
    </InfoPageLayout>
  );
}
