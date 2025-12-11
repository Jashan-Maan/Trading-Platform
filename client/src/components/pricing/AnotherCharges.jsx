const AnotherCharges = () => {
  const accountOpeningData = [
    {
      type: "Online account",
      charge: "FREE",
      isFree: true,
    },
    {
      type: "Offline account",
      charge: "FREE",
      isFree: true,
    },
    {
      type: "NRI account (offline only)",
      charge: "₹ 500",
      isFree: false,
    },
    {
      type: "Partnership, LLP, HUF, or Corporate accounts (offline only)",
      charge: "₹ 500",
      isFree: false,
    },
  ];

  const amcData = [
    {
      holdings: "Up to ₹4 lakh",
      amc: "FREE*",
      isFree: true,
    },
    {
      holdings: "₹4 lakh - ₹10 lakh",
      amc: "₹ 100 per year, charged quarterly*",
      isFree: false,
    },
    {
      holdings: "Above ₹10 lakh",
      amc: "₹ 300 per year, charged quarterly",
      isFree: false,
    },
  ];

  const optionalServicesData = [
    {
      service: "Tickertape",
      frequency: "Monthly / Annual",
      charge: "Free: 0 | Pro: 249/2399",
    },
    {
      service: "Smallcase",
      frequency: "Per transaction",
      charge: "Buy & Invest More: 100 | SIP: 10",
    },
    {
      service: "Kite Connect",
      frequency: "Monthly",
      charge: "Connect: 500 | Personal: Free",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-20 py-12">
      {/* Section 1: Charges for account opening */}
      <div className="mb-16">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Charges for account opening
        </h2>
        <div className="border border-gray-200 rounded overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 bg-white">
                <th className="p-4 text-base font-medium text-gray-800 w-3/4">
                  Type of account
                </th>
                <th className="p-4 text-base font-medium text-gray-800">
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              {accountOpeningData.map((item, index) => (
                <tr key={index} className="not-odd:bg-gray-50">
                  <td className="p-4 text-gray-600 text-sm">{item.type}</td>
                  <td className="p-4">
                    {item.isFree ? (
                      <span className="bg-[#4caf50] text-white text-xs font-bold px-2 py-1 rounded uppercase">
                        {item.charge}
                      </span>
                    ) : (
                      <span className="text-gray-600 text-sm">
                        {item.charge}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- Section 2: Demat AMC --- */}
      <div className="mb-16">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Demat AMC (Annual Maintenance Charge)
        </h2>
        <div className="border border-gray-200 rounded overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-white">
                <th className="p-4 text-base font-medium text-gray-800 w-1/2">
                  Value of holdings
                </th>
                <th className="p-4 text-base font-medium text-gray-800">AMC</th>
              </tr>
            </thead>
            <tbody>
              {amcData.map((item, index) => (
                <tr key={index} className="not-odd:bg-gray-50">
                  <td className="p-4 text-gray-600 text-sm">{item.holdings}</td>
                  <td className="p-4">
                    {item.isFree ? (
                      <span className="bg-[#4caf50] text-white text-xs font-bold px-2 py-1 rounded uppercase">
                        {item.amc}
                      </span>
                    ) : (
                      <span className="text-gray-600 text-sm">{item.amc}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <a
            href="#"
            className="text-[#387ed1] hover:text-gray-800 transition-colors"
          >
            click here.
          </a>
        </p>
      </div>

      {/* --- Section 3: Charges for optional value added services --- */}
      <div className="mb-12">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">
          Charges for optional value added services
        </h2>
        <div className="border border-gray-200 rounded overflow-x-auto">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 bg-white">
                <th className="p-4 text-base font-medium text-gray-800">
                  Service
                </th>
                <th className="p-4 text-base font-medium text-gray-800">
                  Billing Frequency
                </th>
                <th className="p-4 text-base font-medium text-gray-800">
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              {optionalServicesData.map((item, index) => (
                <tr key={index} className="not-odd:bg-gray-50 ">
                  <td className="p-4 text-gray-600 text-sm">{item.service}</td>
                  <td className="p-4 text-gray-600 text-sm">
                    {item.frequency}
                  </td>
                  <td className="p-4 text-gray-600 text-sm">{item.charge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AnotherCharges;
