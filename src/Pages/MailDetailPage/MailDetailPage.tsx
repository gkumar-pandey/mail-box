import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useMail } from "../../Context";
import MailDetails from "../../Components/MailDetails/MailDetails";

const MailDetailPage = () => {
  const { id } = useParams();

  const {
    mails: { allMails }
  } = useMail();

  let mail = allMails.find((item: any) => item.mId === id);

  return (
    <div>
      <div className="search-bar-container">
        <h1>Mail</h1>
      </div>
      <MailDetails {...mail} />
    </div>
  );
};

export default MailDetailPage;
