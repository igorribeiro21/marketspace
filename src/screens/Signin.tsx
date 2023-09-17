import { VStack, ScrollView, Image, Text, Center } from 'native-base';
import LogoImg from '@assets/logo.jpg';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

type FormData = {
    email: string;
    password: string;
}

export function Signin() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            bg='#edecee'
        >
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
                                mt={2}
                            />
                        )}
                    />

                    <Button
                        mt={4}
                        title="Entrar"
                        color="#4b64c2"
                        textColor='#fff'
                        pressedColor='#1f42b3'
                    />
                </Center>
            </VStack>
            <VStack
                bg='#fff'
                mt={12}
                flex={1}
            >
                <VStack>
                    <Center>
                        <Text mt={12} color='#3E3A40' fontWeight='semibold'>
                            Ainda não tem acesso?
                        </Text>
                        <Button
                            mt={5}
                            title="Criar uma conta"
                            color="#D9D8DA"
                            textColor='#3E3A40'
                            pressedColor='#bebdbe'
                        />
                    </Center>
                </VStack>
            </VStack>
        </ScrollView>
    )
}