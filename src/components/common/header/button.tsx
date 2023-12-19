import { Center, Text } from "@chakra-ui/react";

interface IProps {
    name: string;
}

export default function Button({ name }: IProps) {
    return (
        <Center
            _hover={{
                cursor: "pointer",
                color: "teal",
                transition: "all 0.2s linear",
            }}
        >
            <Text fontSize="20px" fontWeight="bold">
                {name}
            </Text>
        </Center>
    );
}
