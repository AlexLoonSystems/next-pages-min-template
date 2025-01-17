import { Avatar, Group, Text } from '@mantine/core';

export function CommentSimple() {
  return (
    <div>
      <Group style={{borderBottom: "1px solid #e3e3e3", paddingBottom: 20, paddingTop: 40}}>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
          alt="Sally Tescase"
          radius="xl"
        />
        <div>
          <Text size="sm">Sally Tescase</Text>
          <Text size="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
        <Text pl={54} pt="sm" size="sm">
            These guys are the best! These guys are the best! These guys are the best! These guys are the best! These guys are the best! These guys are the best! These guys are the best! 
        </Text>
      </Group>
      <Group style={{borderBottom: "1px solid #e3e3e3", paddingBottom: 20, paddingTop: 40}}>
        <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        alt="John Doe"
        radius="xl"
        />
        <div>
        <Text size="sm">John Doe</Text>
        <Text size="xs" c="dimmed">
            20 minutes ago
        </Text>
        </div>
        <Text pl={54} pt="sm" size="sm">
            Loon Systems Rocks
        </Text>
      </Group>
    </div>
  );
}