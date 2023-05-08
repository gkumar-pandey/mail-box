export const getMailById = (mails: any, id: string) =>
  mails.find((mail: any) => mail.mId === id);
