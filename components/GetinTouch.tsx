import { useState, useRef } from 'react';
import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import { ContactIconsList } from './ContactIcon';
import  ReCAPTCHA  from 'react-google-recaptcha';
import classes from './GetInTouch.module.css';

export function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, recaptchaToken }),
    });

    if (response.ok) {
      alert('Email sent successfully');
    } else {
      alert('Failed to send email');
    }
  };

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                label="Your name"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextInput
                label="Your email"
                placeholder="hello@Loonsystems.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Subject"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              name="message"
              value={formData.message}
              onChange={handleChange}
              minRows={3}
            />

            

            <Group justify="flex-end" mt="md">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
              onChange={handleRecaptchaChange}
              ref={captchaRef}
            />
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}