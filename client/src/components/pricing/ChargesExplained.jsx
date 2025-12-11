import React from "react";

const ChargesExplained = () => {
  const row2Data = [
    {
      title: "GST",
      description:
        "Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)",
    },
    {
      title: "SEBI Charges",
      description:
        "Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.",
    },
    {
      title: "DP (Depository participant) charges",
      description: (
        <>
          <p className="mb-2">
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="mb-2">
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
        </>
      ),
    },
    {
      title: "Pledging charges",
      description: "₹30 + GST per pledge request per ISIN.",
    },
    {
      title: "AMC (Account maintenance charges)",
      description: (
        <>
          <p className="mb-2">
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA,{" "}
            <a href="#" className="text-[#387ed1] hover:text-gray-800">
              Click here
            </a>
          </p>
          <p>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC,{" "}
            <a href="#" className="text-[#387ed1] hover:text-gray-800">
              Click here
            </a>
          </p>
        </>
      ),
    },
    {
      title: "Corporate action order charges",
      description:
        "₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.",
    },
    {
      title: "Off-market transfer charges",
      description: "₹25 per transaction.",
    },
    {
      title: "Physical CMR request",
      description:
        "First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.",
    },
    {
      title: "Payment gateway charges",
      description: "₹9 + GST (Not levied on transfers done via UPI)",
    },
    {
      title: "Delayed Payment Charges",
      description: (
        <span>
          Interest is levied at 18% a year or 0.05% per day on the debit balance
          in your trading account.{" "}
          <a href="#" className="text-[#387ed1] hover:text-gray-800">
            Learn more.
          </a>
        </span>
      ),
    },
    {
      title: "Trading using 3-in-1 account with block functionality",
      description: (
        <ul className="list-disc list-inside space-y-1">
          <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
          <li>Intraday Brokerage: 0.05% per executed order.</li>
        </ul>
      ),
    },
  ];
  const row1Data = [
    {
      title: "Securities/Commodities transaction tax",
      description: (
        <>
          <p className="mb-2">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
        </>
      ),
    },
    {
      title: "Transaction/Turnover Charges",
      description: (
        <>
          <p className="mb-2">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="mb-2">
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="mb-2">
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p className="mb-2">
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
        </>
      ),
    },
    {
      title: "Call & trade",
      description:
        "Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.",
    },
    {
      title: "Stamp charges",
      description:
        "Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.",
    },
    {
      title: "NRI brokerage charges",
      description: (
        <ul className="list-disc list-inside space-y-1">
          <li>
            For a non-PIS account, 0.5% or ₹50 per executed order for equity and
            F&O (whichever is lower).
          </li>
          <li>
            For a PIS account, 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            ₹500 + GST as yearly account maintenance charges (AMC) charges.
          </li>
        </ul>
      ),
    },
    {
      title: "Account with debit balance",
      description:
        "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.",
    },
    {
      title: "Charges for Investor's Protection Fund Trust (IPFT) by NSE",
      description: (
        <ul className="list-disc list-inside space-y-1">
          <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
          <li>Options - ₹50 per crore + GST traded value (premium value).</li>
          <li>
            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
            lakh + GST of premium for Options.
          </li>
        </ul>
      ),
    },
    {
      title: "Margin Trading Facility (MTF)",
      description: (
        <ul className="list-disc list-inside space-y-1">
          <li>
            MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The
            interest is applied from T+1 day until the day MTF stocks are sold.
          </li>
          <li>
            MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
          </li>
          <li>
            MTF pledge charge: ₹15 + GST per pledge and unpledge request per
            ISIN.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-20 pb-16 mb-12">
      <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-10">
        Charges explained
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="w-full md:w-1/2 flex flex-col">
          {row1Data.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 ">
              <h4 className="text-sm md:text-base  text-gray-700 mt-4">
                {item.title}
              </h4>
              <div className="text-xs text-gray-500 leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          {row2Data.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 ">
              <h4 className="text-sm md:text-base text-gray-700 mt-4">
                {item.title}
              </h4>
              <div className="text-xs text-gray-500 leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-sm md:text-base font-normal text-gray-600 mb-3">
          Disclaimer
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </section>
  );
};

export default ChargesExplained;
