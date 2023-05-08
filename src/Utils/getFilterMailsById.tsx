export const getFilterMailsById = (mails: any, id: any) =>
  mails.filter((mail: any) => mail.mId !== id);
