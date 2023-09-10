import { VStack, ScrollView, Image, Text } from 'native-base';
import LogoImg from '@assets/logo.jpg'

export function Signin() {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack
                flex={1}
                px={10}
                pb={16}
            >                
                <Image
                    source={LogoImg}
                    defaultSource={LogoImg}
                    alt='logo'
                    resizeMode='contain'
                    position='absolute'
                />
            </VStack>
        </ScrollView>
    )
}