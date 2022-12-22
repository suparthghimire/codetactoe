import { Button, Flex, Text, Paper } from "@mantine/core";

export default function Lobby() {
  return (
    <Paper shadow="sm" p="sm">
      <Text size="xl" weight="bold">
        Lobby
      </Text>
      <Flex>
        <div className="w-1/2">
          <Text weight="bolder">X Team</Text>
          <ul>
            <li>Player 1 (host)</li>
            <li>Player 2</li>
          </ul>
        </div>
        <div className="w-1/2">
          <Text weight="bolder">O Team</Text>
          <ul>
            <li>PLayer 3</li>
            <li>PLayer 4</li>
          </ul>
        </div>
      </Flex>
      <Button mt="sm" fullWidth variant="light">
        Start Game
      </Button>
    </Paper>
  );
}
