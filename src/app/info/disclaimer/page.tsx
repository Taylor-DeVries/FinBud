import InfoPageLayout, {
  INFO_BODY,
  INFO_SECTION,
  INFO_SECTION_CONTENT,
} from "@/_components/info-page-layout/InfoPageLayout";

export default function DisclaimerPage() {
  return (
    <InfoPageLayout title="Disclaimer">
      <section className={INFO_SECTION}>
        <p className={`${INFO_SECTION_CONTENT} ${INFO_BODY}`}>
          This website is strictly for Canadian users and is for educational and
          entertainment purposes only. We are not financial advisors, and the
          content should not be considered professional financial advice. The
          content is designed to be simple and may not meet everyone&apos;s
          financial needs or goals. Please note that the website is still in
          development, and content may change. Consult a certified financial
          professional before making any financial decisions.
        </p>
      </section>
    </InfoPageLayout>
  );
}
