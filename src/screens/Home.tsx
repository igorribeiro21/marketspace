import { VStack, Center, ScrollView, HStack, Text } from 'native-base';
import { UserPhoto } from '@components/UserPhoto';
import { SmallerButton } from '@components/SmallerButton';

export function Home() {
    return (
        <ScrollView
            flex={1}>
            <VStack mt={12}>
                <Center>
                    <HStack alignItems='center' alignSelf='stretch' ml={6} mr={6}>
                        <HStack>
                            <UserPhoto
                                source={{ uri: 'https://avatars.githubusercontent.com/u/51464697?s=400&u=5cce87dd7eb553166da6ed014b96e12f83c1808e&v=4' }}
                                size={16}
                                alt='Imagem do usuário logado'
                                left={0}
                            />

                            <VStack ml={3}>
                                <Text fontSize='16'>Boas vindas,</Text>
                                <Text fontSize='16' fontWeight='bold'>Igor!</Text>
                            </VStack>
                        </HStack>

                        <SmallerButton
                            ml={5}
                            title='Criar anúncio'
                            color='#1A181B'
                            textColor='#fff'
                            pressedColor='#202020'
                        />

                    </HStack>

                    <VStack mt={5}>
                        <Text color='#5F5B62'>Seus produtos anunciados para venda</Text>
                        <HStack padding='12 20 12 16' bgColor='#647ac71a'>
                            <Text>4</Text>
                            <Text>anúncios ativos</Text>
                        </HStack>
                    </VStack>
                </Center>
            </VStack>
        </ScrollView>
    );
}