export default function Footer() {
  return (
    <div className="text-white bg-v-dark-violet flex flex-col gap-12 p-12 items-center text-center lg:flex-row lg:items-start lg:text-start lg:justify-evenly lg:gap-0 lg:p-16">
      <h1 className="text-4xl lg:mr-40">Shortly</h1>
      <div>
        <h3 className="mb-6 lg:mt-2">Features</h3>
        <div className="text-grayish-violet flex flex-col gap-3">
          <a className="hover:text-cyan hover:cursor-pointer">
            Link Shortening
          </a>
          <a className="hover:text-cyan hover:cursor-pointer">Branded Links</a>
          <a className="hover:text-cyan hover:cursor-pointer">Analytics</a>
        </div>
      </div>

      <div>
        <h3 className="mb-6 lg:mt-2">Resources</h3>
        <div className="text-grayish-violet flex flex-col gap-3">
          <a className="hover:text-cyan hover:cursor-pointer">Blog</a>
          <a className="hover:text-cyan hover:cursor-pointer">Developers</a>
          <a className="hover:text-cyan hover:cursor-pointer">Support</a>
        </div>
      </div>

      <div>
        <h3 className="mb-6 lg:mt-2">Company</h3>
        <div className="text-grayish-violet flex flex-col gap-3">
          <a className="hover:text-cyan hover:cursor-pointer">About</a>
          <a className="hover:text-cyan hover:cursor-pointer">Our Team</a>
          <a className="hover:text-cyan hover:cursor-pointer">Careers</a>
          <a className="hover:text-cyan hover:cursor-pointer">Contact</a>
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
