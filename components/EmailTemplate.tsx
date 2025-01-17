// import * as React from 'react';

// interface EmailTemplateProps {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   name,
//   email,
//   subject,
//   message,
// }) => (
//   <div>
//     <h1>Welcome, {name}!</h1>
//     <p><strong>Email:</strong> {email}</p>
//     <p><strong>Subject:</strong> {subject}</p>
//     <p><strong>Message:</strong> {message}</p>
//   </div>
// );

import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>Hello Matt, {name} needs your help!</h1>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Subject:</strong> {subject}</p>
    <p><strong>Message:</strong> {message}</p>
  </div>
);