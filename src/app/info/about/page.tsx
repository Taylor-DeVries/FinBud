export default function aboutUs() {
  return (
    <div className="flex-1 bg-light_blue_infoPage overflow-y-auto h-screen">
      <div className="flex flex-col items-left h-screen my-10 mx-10 text-gray-50 dark:text-[#333] max-w-4xl">
        <h1 className="lg:text-4xl md:text-4xl text-3xl font-bold">About Us</h1>
        <hr className="border-gray-50 dark:border-[#333] border-4 my-4" />
        
        <section className="mb-8">
          <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-xl font-bold mb-3">
            Our Mission
          </h2>
          <p className="mt-2 lg:text-lg md:text-base sm:text-sm text-sm leading-relaxed">
            At FinBud, our mission is to make personal finance simple, accessible,
            and stress-free for young Canadians. We empower individuals with
            step-by-step guidance, engaging content, and easy-to-understand
            financial advice, eliminating the need for confusing jargon or pushy
            finance bros. More than just education, we strive to be the ultimate
            one-stop shop for all things personal finance, offering tools,
            organization, and resources to help users manage their money
            effortlessly. From budgeting to investing, we bring everything
            finance-related into one seamless platform, making financial confidence
            easier than ever.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-xl font-bold mb-3">
            Our Approach
          </h2>
          <p className="mt-2 lg:text-lg md:text-base sm:text-sm text-sm leading-relaxed">
            We believe anyone can take control of their finances with FinBud. Our
            step-by-step guidance makes managing money simple, engaging, and
            stress-free—more like talking to a friend than a finance lecture.
          </p>
          <p className="mt-4 lg:text-lg md:text-base sm:text-sm text-sm leading-relaxed">
            FinBud is more than just education; it's a one-stop shop for all things
            personal finance, from budgeting and investing to organization and goal
            setting. We break down complex topics into easy, relatable content and
            provide the tools you need to take action. With personalized insights
            and continuous updates, FinBud evolves with you, making financial
            freedom not just a goal, but a reality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-xl font-bold mb-4">
            Our Tenets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="bg-white/5 dark:bg-black/5 rounded-lg p-4 border border-gray-50/20 dark:border-[#333]/20">
              <h3 className="font-bold text-lg mb-2 text-gray-50 dark:text-[#333]">
                Plan for the Future
              </h3>
              <p className="lg:text-base md:text-sm sm:text-xs text-xs text-gray-50/90 dark:text-[#333]/90">
                When making decisions, choose solutions that simplify future updates and
                enhancements.
              </p>
            </div>
            <div className="bg-white/5 dark:bg-black/5 rounded-lg p-4 border border-gray-50/20 dark:border-[#333]/20">
              <h3 className="font-bold text-lg mb-2 text-gray-50 dark:text-[#333]">
                Experiment and Explore
              </h3>
              <p className="lg:text-base md:text-sm sm:text-xs text-xs text-gray-50/90 dark:text-[#333]/90">
                Embrace all ideas and test them before dismissing them. Innovation is
                key.
              </p>
            </div>
            <div className="bg-white/5 dark:bg-black/5 rounded-lg p-4 border border-gray-50/20 dark:border-[#333]/20">
              <h3 className="font-bold text-lg mb-2 text-gray-50 dark:text-[#333]">
                Customer First
              </h3>
              <p className="lg:text-base md:text-sm sm:text-xs text-xs text-gray-50/90 dark:text-[#333]/90">
                Always prioritize the customer's needs, even when it conflicts with
                other interests.
              </p>
            </div>
            <div className="bg-white/5 dark:bg-black/5 rounded-lg p-4 border border-gray-50/20 dark:border-[#333]/20">
              <h3 className="font-bold text-lg mb-2 text-gray-50 dark:text-[#333]">
                Act Promptly
              </h3>
              <p className="lg:text-base md:text-sm sm:text-xs text-xs text-gray-50/90 dark:text-[#333]/90">
                The best time to start is yesterday, but today works too. There's no
                better time than now to begin.
              </p>
            </div>
            <div className="bg-white/5 dark:bg-black/5 rounded-lg p-4 border border-gray-50/20 dark:border-[#333]/20">
              <h3 className="font-bold text-lg mb-2 text-gray-50 dark:text-[#333]">
                Embrace Versatility
              </h3>
              <p className="lg:text-base md:text-sm sm:text-xs text-xs text-gray-50/90 dark:text-[#333]/90">
                Stay open to learning new skills and exploring new ideas. Flexibility
                enhances growth.
              </p>
            </div>
            <div className="bg-white/5 dark:bg-black/5 rounded-lg p-4 border border-gray-50/20 dark:border-[#333]/20">
              <h3 className="font-bold text-lg mb-2 text-gray-50 dark:text-[#333]">
                Enjoy Your Work
              </h3>
              <p className="lg:text-base md:text-sm sm:text-xs text-xs text-gray-50/90 dark:text-[#333]/90">
                Enjoyment leads to the most productive work. When you love what you do,
                everything else falls into place.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-xl font-bold mb-3">
            Our Team
          </h2>
          <div className="mt-2 lg:text-lg md:text-lg sm:text-md text-sm">
            <p className="mb-4">
              <span className="font-bold">Zarek Ting:</span>
              <br />
              As one of our founders, Zarek leads product development, strategy, and marketing. Finance and marketing student at the University of Windsor, Zarek is passionate about personal finance and strives to help as many people as he can to take control of their finances.
            </p>
            <p className="mb-4">
              <span className="font-bold">Taylor DeVries:</span>
              <br />
              As one of our founders, Taylor leads software development and operations. Software engineering student at the University of Waterloo, Taylor specializes in combining financial education and technological innovation, making her a strong leader for a FinTech organization.
            </p>
            <p className="mb-4">
              <span className="font-bold">Aiden Asprakis:</span>
              <br />
              As one of our founders, Aiden is crucial to FinBud's construction. Computer science student at the University of Windsor, Aiden specializes in setting up and engineering our backend code.
            </p>
            <p className="mb-4">
              <span className="font-bold">Michelle Chen:</span>
              <br />
              As a software developer, Michelle has a diverse skillset that is responsible for many aspects of FinBud's code. Computer engineering student at the University of Waterloo, Michelle is a key contributor to FinBud.
            </p>
            <p className="mb-4 italic">
              At FinBud, we're not just a team, we're a group of passionate individuals united by the goal of making finance accessible for everyone. Together, we work toward a future where financial literacy and confidence are within everyone's reach.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
