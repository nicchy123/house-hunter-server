import nodemailer from "nodemailer"
import config from "../config";
export const sendEmail = async (body : string, email: string) => {

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      user: 'nasirchy252@gmail.com',
      pass: 'pvqz hwij rtxe mmpq',
    },
  });


  await transporter.sendMail({
    from: 'nasirchy252@gmail.com', // sender address
    to: `${email}`,
    subject: 'Reset your password within ten mins!', // Subject line
    text: 'Hello world?', // plain text body
    html: `<b>${body}</b>`, // html body
  });
};

