import { useState } from 'react';
import { VStack, Image, ScrollView, Center, Text, Button as ButtonNativeBase, HStack, IconButton, Icon } from "native-base";
import LogoImg from '@assets/logo.jpg';
import SelectImg from '@assets/selectImage.png';
import { Input } from "@components/Input";
import { useForm, Controller } from 'react-hook-form';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from '@components/Button';

type FormData = {
    name: string;
    email: string;
    password: string;
    phone: string;
    confirmPassword: string;
}

export function Signup() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            bg='#edecee'
            flex={1}
        >
            <VStack flex={1}>
                <VStack mt={10}>
                    <Center>
                        <Image
                            w={16}
                            source={LogoImg}
                            defaultSource={LogoImg}
                            alt='logo'
                            resizeMode='contain'
                        />
                        <Text fontSize='2xl' fontWeight='bold'>Boas vindas!</Text>
                        <Text color='#3E3A40'>Crie sua conta e use o espaço para comprar</Text>
                        <Text color='#3E3A40'>itens variados e vender seus produtos</Text>
                    </Center>
                </VStack>
                <VStack mt={10}>
                    <Center>
                        <ButtonNativeBase
                            backgroundColor='#edecee'
                        >
                            <Image
                                source={SelectImg}
                                defaultSource={SelectImg}
                                alt="select Image"
                            />
                        </ButtonNativeBase>

                        <Controller
                            control={control}
                            name='name'
                            render={({ field: { onChange } }) => (
                                <Input
                                    mt={4}
                                    placeholder='Nome'
                                    autoCapitalize='none'
                                    onChangeText={onChange}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='email'
                            render={({ field: { onChange } }) => (
                                <Input
                                    placeholder='E-mail'
                                    autoCapitalize='none'
                                    onChangeText={onChange}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='phone'
                            render={({ field: { onChange } }) => (
                                <Input
                                    placeholder='Telefone'
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
                                    />
                                    <IconButton
                                        position='absolute'
                                        right={10}
                                        bottom={3}
                                        icon={<Icon as={MaterialIcons}
                                            name={passwordVisibility ? 'visibility' : 'visibility-off'}
                                            size={7}
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

                        <Controller
                            control={control}
                            name='confirmPassword'
                            render={({ field: { onChange } }) => (
                                <HStack>
                                    <Input
                                        placeholder='Confirmar senha'
                                        secureTextEntry={confirmPasswordVisibility}
                                        onChangeText={onChange}
                                    />
                                    <IconButton
                                        position='absolute'
                                        right={10}
                                        bottom={3}
                                        icon={<Icon as={MaterialIcons}
                                            name={confirmPasswordVisibility ? 'visibility' : 'visibility-off'}
                                            size={7}
                                            color='#5F5B62' />
                                        }
                                        onPress={() => setConfirmPasswordVisibility(!confirmPasswordVisibility)}
                                        _pressed={{
                                            bg: 'none'
                                        }}
                                    />
                                </HStack>
                            )}
                        />

                        <Button
                            mt={4}
                            title="Criar"
                            color="#1A181B"
                            textColor='#fff'
                            pressedColor='#252525'
                        />

                    </Center>
                </VStack>
                <VStack mt={12}>
                    <Center>
                        <Text color='#3E3A40' fontWeight='semibold'>Já tem uma conta?</Text>

                        <Button
                            mt={3}
                            mb={10}
                            title="Ir para o login"
                            color="#D9D8DA"
                            textColor='#3E3A40'
                            pressedColor='#bebdbe'
                        />
                    </Center>
                </VStack>
            </VStack>
        </ScrollView>
    );
}