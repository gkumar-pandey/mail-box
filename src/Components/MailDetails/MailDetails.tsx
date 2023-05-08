import React from "react";

const MailDetails = (props: any) => {
  const { subject, content } = props;
  return (
    <div className="mail-detail-container">
      <div>
        <p className="subject">{subject}</p>
      </div>
      <div>
        <p className="content">{content}</p>
      </div>
    </div>
  );
};

export default MailDetails;
