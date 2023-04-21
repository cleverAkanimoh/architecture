import { BsMessenger, BsSearch, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function TopSection() {
  return (
    <div className="topsection">
      <section className="topsection-section">
        <Link to={"architecture-website"}>
          <h4 className="topsection-logo">
            <span className="architecture">architecture</span>
            <span className="com">.com</span>
          </h4>
        </Link>
        
        <div className="w-[160px] sm:w-[180px] flex justify-between">
          <div className="topsection-div">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="social-style"
            >
              <BsMessenger />
            </a>
            <span className="flex items-center ml-2 font-sans cursor-pointer">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="social-style"
              >
                <BsWhatsapp />
              </a>

              <span className="text-white pl-1 text-sm">+234 567 8901</span>
            </span>
          </div>

          <button>
            <BsSearch />
          </button>
        </div>
      </section>
    </div>
  );
}
