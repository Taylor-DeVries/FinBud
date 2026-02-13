import InfoPageLayout, {
  INFO_BODY,
  INFO_SECTION,
  INFO_SECTION_CONTENT,
  INFO_SECTION_HEADING,
} from "@/_components/info-page-layout/InfoPageLayout";

export default function AboutUs() {
  return (
    <InfoPageLayout title="About Us">
      <section className={INFO_SECTION}>
        <h2 className={INFO_SECTION_HEADING}>Our Mission</h2>
        <p className={`${INFO_SECTION_CONTENT} ${INFO_BODY}`}>
          At FinBud, our mission is to make personal finance simple, accessible,
          and stress-free for young Canadians. We empower individuals with
          step-by-step guidance, engaging content, and easy-to-understand
          financial advice, eliminating the need for confusing jargon or pushy
          finance bros. More than just education, we strive to be the ultimate
          one-stop shop for all things personal finance, offering tools,
          organization, and resources to help users manage their money
          effortlessly. From budgeting to investing, we bring everything
          finance-related into one seamless platform, making financial
          confidence easier than ever.
        </p>
      </section>

      <section className={INFO_SECTION}>
        <h2 className={INFO_SECTION_HEADING}>Our Approach</h2>
        <p className={`${INFO_SECTION_CONTENT} ${INFO_BODY}`}>
          We believe anyone can take control of their finances with FinBud. Our
          step-by-step guidance makes managing money simple, engaging, and
          stress-free—more like talking to a friend than a finance lecture.
        </p>
        <p className={`mt-4 ${INFO_BODY}`}>
          FinBud is more than just education; it&apos;s a one-stop shop for all
          things personal finance, from budgeting and investing to organization
          and goal setting. We break down complex topics into easy, relatable
          content and provide the tools you need to take action. With
          personalized insights and continuous updates, FinBud evolves with you,
          making financial freedom not just a goal, but a reality.
        </p>
      </section>

      <section className={INFO_SECTION}>
        <h2 className={INFO_SECTION_HEADING}>Our Tenets</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ${INFO_SECTION_CONTENT}`}>
          {[
            {
              title: "Plan for the Future",
              text: "When making decisions, choose solutions that simplify future updates and enhancements.",
            },
            {
              title: "Experiment and Explore",
              text: "Embrace all ideas and test them before dismissing them. Innovation is key.",
            },
            {
              title: "Customer First",
              text: "Always prioritize the customer's needs, even when it conflicts with other interests.",
            },
            {
              title: "Act Promptly",
              text: "The best time to start is yesterday, but today works too. There's no better time than now to begin.",
            },
            {
              title: "Embrace Versatility",
              text: "Stay open to learning new skills and exploring new ideas. Flexibility enhances growth.",
            },
            {
              title: "Enjoy Your Work",
              text: "Enjoyment leads to the most productive work. When you love what you do, everything else falls into place.",
            },
          ].map(({ title, text }) => (
            <div
              key={title}
              className="bg-white/5 dark:bg-black/5 rounded-lg p-4 border border-gray-50/20 dark:border-[#333]/20"
            >
              <h3 className="font-bold text-lg mb-2 text-gray-50 dark:text-[#333]">
                {title}
              </h3>
              <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-50/90 dark:text-[#333]/90">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={INFO_SECTION}>
        <h2 className={INFO_SECTION_HEADING}>Our Team</h2>
        <div className={`${INFO_SECTION_CONTENT} ${INFO_BODY}`}>
          <p className="mb-4">
            <span className="font-bold">Zarek Ting:</span>
            <br />
            As one of our founders, Zarek leads product development, strategy,
            and marketing. Finance and marketing student at the University of
            Windsor, Zarek is passionate about personal finance and strives to
            help as many people as he can to take control of their finances.
          </p>
          <p className="mb-4">
            <span className="font-bold">Taylor DeVries:</span>
            <br />
            As one of our founders, Taylor leads software development and
            operations. Software engineering student at the University of
            Waterloo, Taylor specializes in combining financial education and
            technological innovation, making her a strong leader for a FinTech
            organization.
          </p>
          <p className="mb-4">
            <span className="font-bold">Aiden Asprakis:</span>
            <br />
            As one of our founders, Aiden is crucial to FinBud&apos;s
            construction. Computer science student at the University of Windsor,
            Aiden specializes in setting up and engineering our backend code.
          </p>
          <p className="mb-4">
            <span className="font-bold">Michelle Chen:</span>
            <br />
            As a software developer, Michelle has a diverse skillset that is
            responsible for many aspects of FinBud&apos;s code. Computer
            engineering student at the University of Waterloo, Michelle is a key
            contributor to FinBud.
            </p>
          <p className="mb-4">
            <span className="font-bold">Michael Gibb:</span>
            <br />
            As a software developer with a background in finance, Michael is
            responsible for many aspects of FinBud. Computer science
            student at the University of Windsor, Michael is a key
            contributor to FinBud.
          </p>
          <p className="mb-4 italic">
            At FinBud, we&apos;re not just a team, we&apos;re a group of
            passionate individuals united by the goal of making finance
            accessible for everyone. Together, we work toward a future where
            financial literacy and confidence are within everyone&apos;s reach.
          </p>
        </div>
      </section>
    </InfoPageLayout>
  );
}
