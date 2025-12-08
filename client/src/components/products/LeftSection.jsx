import googlePlayBadge from "../../assets/googlePlayBadge.svg";
import appStoreBadge from "../../assets/appstoreBadge.svg";
import { HiArrowLongRight } from "react-icons/hi2";

const LeftSection = ({
  imageUrl,
  title,
  description,
  Urls,
  googlePlay,
  appStore,
}) => {
  return (
    <section className="px-4 md:px-8 lg:px-20 py-16 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="w-full md:w-3/5 flex justify-center md:justify-end">
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full h-auto drop-shadow-sm cursor-pointer hover:opacity-80 transition-opacity duration-300"
          />
        </div>
        <div className="w-full md:w-2/5 flex flex-col gap-6 md:pl-10">
          <h1 className="text-2xl font-medium text-[#444] mb-2">{title}</h1>
          <p className="text-base text-gray-600 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center gap-4 mt-1">
            {Urls &&
              Urls.map((url, index) => (
                <a
                  key={index}
                  href={url.url}
                  className="flex items-center gap-1 text-[#397ed1] hover:text-gray-800 transition-colors duration-300 font-medium"
                >
                  {url.title} <HiArrowLongRight />
                </a>
              ))}
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {googlePlay && (
              <a href={googlePlay}>
                <img src={googlePlayBadge} alt="" />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img src={appStoreBadge} alt="" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
