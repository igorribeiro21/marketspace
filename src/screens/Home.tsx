import { VStack, Center, ScrollView, HStack, Text, Icon } from 'native-base';
import { UserPhoto } from '@components/UserPhoto';
import { SmallerButton } from '@components/SmallerButton';
import { Feather } from '@expo/vector-icons';

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
                        <Text color='#5F5B62' fontWeight='semibold'>Seus produtos anunciados para venda</Text>
                        <HStack mt={3} w={320} h={60} alignItems='center' bgColor='#647ac71a'>
                            <Icon as={Feather}
                                name='bookmark'
                                size={6}
                                color='#364D9D'
                                ml={2}
                            />
                            <VStack ml={3}>
                                <Text
                                    fontWeight='bold'
                                    fontSize='lg'
                                >4</Text>
                                <Text
                                    fontSize='md'
                                >anúncios ativos</Text>
                            </VStack>
                            <Text 
                            color='#364D9D'
                             fontWeight='bold'
                             ml={8}
                             >Meus anúncios</Text>
                            <Icon as={Feather}
                                name='arrow-right'
                                size={5}
                                color='#364D9D'
                                ml={1}
                            />
                        </HStack>
                    </VStack>
                </Center>
            </VStack>
        </ScrollView>
    );
}