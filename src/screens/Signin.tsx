import { VStack, ScrollView, Image, Text, Center, Input } from 'native-base';
import LogoImg from '@assets/logo.jpg';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
    email: string;
    password: string;
}

export function Signin() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack>
                <Center>
                    <VStack
                        mt={10}
                        alignItems='center'
                    >
                        <Image
                            source={LogoImg}
                            defaultSource={LogoImg}
                            alt='logo'
                            resizeMode='contain'
                        />
                        <Text fontWeight='bold' fontSize='3xl' lineHeight='xs'>
                            marketspace
                        </Text>
                        <Text color='blueGray.500'>
                            Seu espaço de compra e venda
                        </Text>
                    </VStack>
                </Center>
            </VStack>

            <VStack mt={10}>
                <Center>
                    <Text fontWeight='semibold' color='blueGray.500'>
                        Acesse sua conta
                    </Text>
                    <Controller
                        control={control}
                        name='email'
                        render={({ field: { onChange } }) => (
                            <Input
                                mt={4}
                                placeholder='E-mail'
                                keyboardType='email-address'
                                autoCapitalize='none'
                                onChangeText={onChange}
                                ml={10}
                                mr={10}                                
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name='password'
                        render={({ field: { onChange } }) => (
                            <Input                                
                                placeholder='Senha'
                                secureTextEntry
                                onChangeText={onChange}
                                ml={10}
                                mr={10}   
                                mt={4}                             
                            />
                        )}
                    />
                </Center>
            </VStack>
        </ScrollView>
    )
}