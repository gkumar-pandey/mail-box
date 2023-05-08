import React from "react";
import { useMail } from "../../Context";
import { EmailCard } from "../../Components";

const TrashPage = () => {
  const {
    mails: { trash }
  } = useMail();

  return (
    <div>
      <div className="search-bar-container">
        <h1>Trash Mails</h1>
      </div>
      <div>
        {trash.length > 0 ? (
          trash.map((mail: any) => <EmailCard key={mail.mId} {...mail} />)
        ) : (
          <div
            style={{
              padding: "1rem",
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold"
            }}
          >
            <h2>Trash is Empty</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrashPage;
