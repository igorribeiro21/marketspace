import { Button as ButtonNativeBase, IButtonProps, Text, Icon, HStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

type Props = IButtonProps & {
    title: string;
    // variant?: 'solid' | 'outline';
    color: string;
    textColor: string;
    pressedColor: string;
}

export function SmallerButton({ title, color, textColor, pressedColor, ...rest }: Props) {
    return (
        <ButtonNativeBase
            w="32"
            h="12"
            bg={color}
            borderColor="green.500"
            rounded="md"
            _pressed={{
                bg: pressedColor
            }}
            {...rest}
        >
            <HStack>
                <Icon as={AntDesign}
                    name='plus'
                    size={5}
                    color='#EDECEE' />

                <Text
                    ml={2}
                    fontWeight='semibold'
                    color={textColor}
                    fontFamily="heading"
                    fontSize="sm">
                    {title}
                </Text>
            </HStack>
        </ButtonNativeBase>
    );
}