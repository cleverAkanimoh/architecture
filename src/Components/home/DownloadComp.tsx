const DownloadComp = () => (
  <div className="w-full flex flex-col items-center justify-center md:flex-row md:gap-2">
    <input
      type="text"
      className="downloadInput-style"
      name="email"
      placeholder="Email"
    />
    <input
      type="text"
      className="downloadInput-style"
      name="name"
      placeholder="Name"
    />
    <button className="w-full bg-yellow-600 text-white h-9 mt-4 md:mt-0">
      Download Now
    </button>
  </div>
);

export default DownloadComp;
