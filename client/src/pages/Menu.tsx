import { Text, Flex, Button, TextInput, Paper } from "@mantine/core";

export default function Menu() {
  return (
    <Paper shadow="sm" p="sm">
      <Flex direction="column" gap="sm">
        <div>
          <TextInput
            name="join_room"
            placeholder="Enter Room ID"
            id="join_room"
            label="Join Room"
          />
          <Button mt="sm" variant="light">
            Join Room
          </Button>
        </div>
        <div>
          <Text>OR</Text>
        </div>
        <div>
          <Button color="red" variant="light">
            Create Room
          </Button>
        </div>
      </Flex>
    </Paper>
  );
}
