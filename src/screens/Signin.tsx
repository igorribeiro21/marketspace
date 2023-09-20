import { useState } from 'react';
import { VStack, ScrollView, Image, Text, Center, Icon, IconButton, HStack } from 'native-base';
import LogoImg from '@assets/logo.jpg';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { MaterialIcons } from '@expo/vector-icons';

type FormData = {
    email: string;
    password: string;
}

export function Signin() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [passwordVisibility, setPasswordVisibility] = useState(true);

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
                            <HStack>
                                <Input
                                    placeholder='Senha'
                                    secureTextEntry={passwordVisibility}
                                    onChangeText={onChange}
                                    mt={2}
                                />
                                <IconButton
                                        position='absolute'
                                        right={10}
                                        bottom={3}
                                        icon={<Icon as={MaterialIcons}
                                            name={passwordVisibility ? 'visibility' : 'visibility-off'}
                                            size={8}
                                            color='#5F5B62' />
                                        }
                                        onPress={() => setPasswordVisibility(!passwordVisibility)}
                                        _pressed={{
                                            bg: 'none'
                                        }}
                                    />
                            </HStack>
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