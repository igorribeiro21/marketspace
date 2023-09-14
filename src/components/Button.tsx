import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
    variant?: 'solid' | 'outline';
    color: string;
}

export function Button({ title, variant = 'solid',color, ...rest }: Props) {
    return (
        <ButtonNativeBase
            w="72"
            h="12"
            //bg={variant === "outline" ? "transparent" : "green.700"}
            bg={color}
            borderWidth={variant === "outline" ? 1 : 0}
            borderColor="green.500"
            rounded="md"
            _pressed={{
               // bg: variant === "outline" ? "gray.500" : "green.500"
                bg: "#4b64c2"
            }}
            {...rest}
        >
            <Text
                fontWeight='semibold'
                color={variant === "outline" ? "green.500" : "white"}
                fontFamily="heading"
                fontSize="md">
                {title}
            </Text>
        </ButtonNativeBase>
    );
}