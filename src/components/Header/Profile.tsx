import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vinícius Mendite</Text>
          <Text color="gray.300" fontSize="small">
            vinicius.47289@outlook.com
        </Text>
        </Box>
      )}

      <Avatar size="md" name="Vinícius Mendite" src="https://github.com/viniciusmendite.png" />
    </Flex>
  );
}