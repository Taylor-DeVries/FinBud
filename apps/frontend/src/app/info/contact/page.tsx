export default function contactUs() {
  return (
    <div className="flex flex-col items-left h-screen my-10 mx-10 text-gray-50 dark:text-[#333]">
      <h1 className="lg:text-4xl md:text-4xl text-3xl font-bold">Contact Us</h1>
      <hr className="border-gray-50 dark:border-[#333] border-4 my-4" />
      <h2 className="lg:text-2xl md:text-xl sm:text-lg text-lg font-bold">
        Our Socials
      </h2>
      <p className="mt-2 lg:text-lg md:text-lg sm:text-md text-sm">
        Instagram:{'  '}
        <a
          href="https://www.instagram.com/fin_bud_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link_color underline hover:text-dark_blue"
        >
          Instagram.com/fin_bud_
        </a>
        <br />
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/company/fin-bud/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link_color underline hover:text-dark_blue"
        >
          LinkedIn.com/company/fin-bud/
        </a>
      </p>
      <h2 className="mt-4 lg:text-2xl md:text-xl sm:text-lg text-lg font-bold">
        Our Email
      </h2>
      <p className="mt-2 lg:text-lg md:text-lg sm:text-md text-sm">
        Any questions or concerns:{' '}
        <a
          href="mailto:finbud.team@gmail.com"
          className="text-link_color hover:text-dark_blue"
        >
          finbud.team@gmail.com
        </a>
      </p>
    </div>
  );
}
