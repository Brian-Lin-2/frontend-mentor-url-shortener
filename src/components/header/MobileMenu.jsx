export default function MobileMenu() {
  return (
    <div className="fixed inset-0 bg-v-dark-blue text-white flex flex-col items-center gap-8 text-xl z-20">
      <img
        className="absolute right-0 p-6 w-20"
        src="./images/icon-close.svg"
        alt=""
      />
      <div className="mt-32 border-b flex flex-col items-center gap-6 pb-8 px-28">
        <a>Features</a>
        <a>Pricing</a>
        <a>Resources</a>
      </div>

      <button>Login</button>
      <button className="py-2 px-28 bg-cyan rounded-full">Sign Up</button>
    </div>
  );
}
