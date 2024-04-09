import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Main = () => {
  const breadcrumbItems = [
    { text: "Home", url: "#" },
    { text: "Product", url: "#" },
    { text: "Integration", url: "#" },
  ];

  return (
    <div className="px-4 max-sm:mx-4 py-6 place-items-center justify-center bg-mainTheme   lg:mx-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex gap-x-4 ">
              {breadcrumbItems.map((item, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item ${
                    index === breadcrumbItems.length - 1 ? "active" : ""
                  }`}
                  aria-current={
                    index === breadcrumbItems.length - 1 ? "page" : null
                  }
                >
                  <a
                    href={item.url}
                    className={`max-sm:text-sm ${
                      index === breadcrumbItems.length - 1
                        ? "text-gray-500"
                        : "text-blue-500 font-semibold "
                    } hover:text-blue-700`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <p className="text-xs text-slate-600 font-medium my-6">
          APPS & INTEGRATIONS
        </p>
        <h2 className=" max-sm:text-4xl text-5xl font-extrabold leading-snug ">
          Integrate Calendly, <br className="max-sm:hidden" /> boost
          productivity
        </h2>
        <p className="max-sm:text-sm text-base my-6 text-slate-600">
          Smart scheduling automation will change the way you - and your{" "}
          <br className="max-sm:hidden" />
          tools - work.
        </p>
        <div className="flex space-x-4  mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for an integration"
              className="max-sm:pr-20 drop-shadow-lg py-4 pl-10 pr-24 rounded-full border  focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="w- lg:h-full rounded-lg" src="/main.png" alt="Main" />
      </div>
    </div>
  );
};

export default Main;
