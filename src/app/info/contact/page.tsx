import InfoPageLayout, {
  INFO_BODY,
  INFO_SECTION,
  INFO_SECTION_CONTENT,
  INFO_SECTION_HEADING,
} from "@/_components/info-page-layout/InfoPageLayout";

const linkClass =
  "text-link_color underline hover:text-dark_blue";

export default function ContactUs() {
  return (
    <InfoPageLayout title="Contact Us">
      <section className={INFO_SECTION}>
        <h2 className={INFO_SECTION_HEADING}>Our Socials</h2>
        <p className={`${INFO_SECTION_CONTENT} ${INFO_BODY}`}>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/fin_bud_/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Instagram.com/fin_bud_
          </a>
          <br />
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/company/fin-bud/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn.com/company/fin-bud/
          </a>
        </p>
      </section>

      <section className={INFO_SECTION}>
        <h2 className={INFO_SECTION_HEADING}>Our Email</h2>
        <p className={`${INFO_SECTION_CONTENT} ${INFO_BODY}`}>
          Any questions or concerns:{" "}
          <a href="mailto:finbud.team@gmail.com" className={linkClass}>
            finbud.team@gmail.com
          </a>
        </p>
      </section>
    </InfoPageLayout>
  );
}
