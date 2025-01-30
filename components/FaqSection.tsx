import { Accordion, Container, Title } from '@mantine/core';
import classes from './FaqSection.module.css';

const placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,';

export function FaqSection() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>How do you recommend I backup my data?</Accordion.Control>
          <Accordion.Panel>I recommend following the 3-2-1 backup rule: keep three copies of your data, stored on two different types of media, with one offsite backup (e.g., cloud storage). Using an external hard drive for local backups offers fast recovery, no ongoing costs, and protection from online threats like ransomware. </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>What are the benefits of managed IT services?</Accordion.Control>
          <Accordion.Panel>Managed IT services provide proactive monitoring, cybersecurity protection, and 24/7 support, reducing downtime and security risks. They also offer cost savings, scalable solutions, and expert management of IT infrastructure, allowing businesses to focus on growth while ensuring reliable technology performance.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>How do you protect against the growing threat of AI and hackers abroad?</Accordion.Control>
          <Accordion.Panel>To protect against AI-driven cyber threats and foreign hackers, I use next-generation firewalls with deep packet inspection and intrusion prevention to block malicious traffic. Additionally, an AI-powered security agent continuously monitors network activity and file downloads, detecting and responding to anomalies in real time.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Can you help resolve my IT issues even if I am out of the country on vacation?</Accordion.Control>
          <Accordion.Panel>Yes, I can provide real-time remote support using secure access tools. This allows me to diagnose and resolve IT issues no matter where you are, ensuring minimal downtime.</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}