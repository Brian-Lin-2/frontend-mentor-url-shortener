export default function Footer() {
  return (
    <div className="text-white bg-v-dark-violet flex flex-col gap-12 p-12 items-center text-center lg:flex-row lg:items-start lg:text-start lg:justify-evenly lg:gap-0 lg:p-16">
      <h1 className="text-4xl lg:mr-40">Shortly</h1>
      <div>
        <h3 className="mb-6 lg:mt-2">Features</h3>
        <div className="text-grayish-violet flex flex-col gap-3">
          <a>Link Shortening</a>
          <a>Branded Links</a>
          <a>Analytics</a>
        </div>
      </div>

      <div>
        <h3 className="mb-6 lg:mt-2">Resources</h3>
        <div className="text-grayish-violet flex flex-col gap-3">
          <a>Blog</a>
          <a>Developers</a>
          <a>Support</a>
        </div>
      </div>

      <div>
        <h3 className="mb-6 lg:mt-2">Company</h3>
        <div className="text-grayish-violet flex flex-col gap-3">
          <a>About</a>
          <a>Our Team</a>
          <a>Careers</a>
          <a>Contact</a>
        </div>
      </div>

      <div className="flex gap-6 lg:ml-6 lg:mt-2">
        <img src="./images/icon-facebook.svg" alt="" />
        <img src="./images/icon-twitter.svg" alt="" />
        <img src="./images/icon-pinterest.svg" alt="" />
        <img src="./images/icon-instagram.svg" alt="" />
      </div>
    </div>
  );
}
