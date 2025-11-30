import logo from "../../assets/logo.svg";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  const linkSections = [
    {
      title: "Account",
      links: [
        "Open demat account",
        "Minor demat account",
        "NRI demat account",
        "Commodity",
        "Dematerialisation",
        "Fund transfer",
        "MTF",
        "Referral program",
      ],
    },
    {
      title: "Support",
      links: [
        "Contact us",
        "Support portal",
        "How to file a complaint?",
        "Status of your complaints",
        "Bulletin",
        "Circular",
        "Z-Connect blog",
        "Downloads",
      ],
    },
    {
      title: "Company",
      links: [
        "About",
        "Philosophy",
        "Press & media",
        "Careers",
        "Zerodha Cares (CSR)",
        "Zerodha.tech",
        "Open source",
      ],
    },
    {
      title: "Quick links",
      links: [
        "Upcoming IPOs",
        "Brokerage charges",
        "Market holidays",
        "Economic calendar",
        "Calculators",
        "Markets",
        "Sectors",
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  const social = [
    { Icon: FaXTwitter, label: "X", href: "#" },
    { Icon: IoLogoFacebook, label: "Facebook", href: "#" },
    { Icon: FaInstagram, label: "Instagram", href: "#" },
    { Icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
    { Icon: FaYoutube, label: "Youtube", href: "#" },
    { Icon: FaWhatsapp, label: "Whatsapp", href: "#" },
    { Icon: FaTelegram, label: "Telegram", href: "#" },
  ];

  return (
    <div className="bg-[#fbfbfb] px-4 lg:px-20 text-[#9b9b9b] border-t border-gray-200">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10">
        <div className="md:w-1/3">
          <a href="/" area-label="Home">
            <img className="w-40" src={logo} alt="logo" loading="lazy" />
          </a>
          <p className="mt-6 text-sm text-gray-700">
            &copy; 2010-{currentYear}, Zerodha
            <br className="hidden md:block" /> Broking Ltd.
          </p>
          <p className="mt-1 text-sm text-gray-700">All rights reserved.</p>
          <div className="flex items-center gap-5 mt-4 text-xl text-gray-700">
            {social.slice(0, 4).map(({ Icon, label, href }, i) => (
              <a
                href={href}
                key={i}
                area-label={label}
                title={label}
                className="hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                <Icon />
              </a>
            ))}
          </div>
          <hr className="my-4 border-gray-500/40 rounded-full" />
          <div className="flex items-center gap-5 mt-4 text-xl text-gray-700">
            {social.slice(4).map(({ Icon, label, href }, i) => (
              <a
                href={href}
                key={i}
                area-label={label}
                title={label}
                className="hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {linkSections.map((section, index) => (
          <div key={index}>
            <h3 className="font-medium text-lg text-gray-800 md:mb-5 mb-2">
              {section.title}
            </h3>
            <ul className="text-sm space-y-1 tracking-tight">
              {section.links.map((link, i) => (
                <li className="mb-4 text-gray-700" key={i}>
                  <a href="#" className="hover:text-blue-500 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-left text-[10px] text-gray-500/80 tracking-wide">
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha
        Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
        School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
        any complaints pertaining to securities broking please write to{" "}
        <a href="" className="font-medium text-blue-700">
          complaints@zerodha.com
        </a>
        , for DP related to{" "}
        <a href="" className="font-medium text-blue-700">
          dp@zerodha.com
        </a>
        . Please ensure you carefully read the Risk Disclosure Document as
        prescribed by SEBI | ICF
      </p>
      <p className="text-left text-[10px] text-gray-500/80 tracking-wide mt-4">
        Procedure to file a complaint on{" "}
        <a href="" className="font-medium text-blue-700">
          SEBI SCORES
        </a>
        : Register on SCORES portal. Mandatory details for filing complaints on
        SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
        Effective Communication, Speedy redressal of the grievances
      </p>
      <p className="text-left text-[10px] text-gray-500/80 tracking-wide mt-4">
        <a href="" className="font-medium text-blue-700">
          Smart Online Dispute Resolution
        </a>{" "}
        |{" "}
        <a href="" className="font-medium text-blue-700">
          Grievances Redressal Mechanism
        </a>
      </p>
      <p className="text-left text-[10px] text-gray-500/80 tracking-wide mt-4">
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>
      <p className="text-left text-[10px] text-gray-500/80 tracking-wide mt-4">
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>
      <p className="text-left text-[10px] text-gray-500/80 tracking-wide mt-4">
        India's largest broker based on networth as per NSE.{" "}
        <a href="" className="font-medium text-blue-700">
          NSE broker factsheet
        </a>
      </p>
      <p className="text-left text-[10px] text-gray-500/80 tracking-wide mt-4">
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please{" "}
        <a href="" className="font-medium text-blue-700">
          create a ticket here
        </a>
        .
      </p>
      <p className="text-left text-[10px] text-gray-500/80 tracking-wide mt-4">
        *Customers availing insurance advisory services offered by Ditto
        (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent
        (Composite) License No CA0738) will not have access to the exchange
        investor grievance redressal forum, SEBI SCORES/ODR, or arbitration
        mechanism for such products.
      </p>
      <div className=" text-sm w-full py-6">
        <ul className="flex items-center gap-4 justify-center flex-wrap text-[#9b9b9b]">
          <li>NSE</li>
          <li>BSE</li>
          <li>MCX</li>
          <li>Terms & conditions</li>
          <li>Policies & procedures</li>
          <li>Privacy policy</li>
          <li>Disclosure</li>
          <li>For investor's attention</li>
          <li>Investor charter</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
