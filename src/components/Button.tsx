import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
   // variant?: 'solid' | 'outline';
    color: string;
    textColor: string;
    pressedColor: string;
}

export function Button({ title, color, textColor,pressedColor, ...rest }: Props) {
    return (
        <ButtonNativeBase
            w="72"
            h="12"
            //bg={variant === "outline" ? "transparent" : "green.700"}
            bg={color}
           // borderWidth={variant === "outline" ? 1 : 0}
            borderColor="green.500"
            rounded="md"
            _pressed={{
                // bg: variant === "outline" ? "gray.500" : "green.500"
                bg: pressedColor
            }}
            {...rest}
        >
            <Text
                fontWeight='semibold'
                color={textColor}
                fontFamily="heading"
                fontSize="md">
                {title}
            </Text>
        </ButtonNativeBase>
    );
}