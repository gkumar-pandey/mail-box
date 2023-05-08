import React from "react";
import { useMail } from "../../Context";
import { EmailCard } from "../../Components";

const SpamPage = () => {
  const {
    mails: { spam }
  } = useMail();

  return (
    <div>
      <div className="search-bar-container">
        <h1>Spam Mails</h1>
      </div>
      <div>
        {spam.length > 0 ? (
          spam.map((mail: any) => <EmailCard key={mail.mId} {...mail} />)
        ) : (
          <div style={{ textAlign: "center", padding: "1.2rem" }}>
            <h2 style={{ color: "#fff" }}>No Mails in Spam </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpamPage;
