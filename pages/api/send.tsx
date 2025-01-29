// import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { data, error } = await resend.emails.send({
//     from: 'Acme <onboarding@resend.dev>',
//     to: 'alex@loonsystems.com',
//     subject: 'Hello world',
//     react: EmailTemplate({ firstName: 'John' }),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };

import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplate';
import ReactDOMServer from 'react-dom/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    const emailContent = ReactDOMServer.renderToStaticMarkup(
      <EmailTemplate name={name} email={email} subject={subject} message={message} />
    );

    try {
      const { data, error } = await resend.emails.send({
        from: 'Loon Systems <onboarding@resend.dev>',
        to: 'loonsystems@gmail.com',
        subject: subject,
        html: emailContent,
      });

      if (error) {
        return res.status(400).json(error);
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};