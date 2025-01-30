import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

// Matt Key: Here is where the contact information can be added or removed.
const MATTDATA = [
  { title: 'Email', description: 'Loonsystems@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+1 (612) 801 9671', icon: IconPhone },
  { title: 'Address', description: 'PO Box', icon: IconMapPin },
  { title: 'Working hours', description: '9 a.m. – 6 p.m.', icon: IconSun },
];

export function ContactIconsList() {
  const items = MATTDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}