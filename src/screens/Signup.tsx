import { VStack, Image, ScrollView, Center, Text, Button as ButtonNativeBase } from "native-base";
import LogoImg from '@assets/logo.jpg';
import SelectImg from '@assets/selectImage.png';
import { Input } from "@components/Input";
import { useForm, Controller } from 'react-hook-form';

type FormData = {
    name: string;
    email: string;
    password: string;
    phone: string;
    confirmPassword: string;
}

export function Signup() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

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
                                <Input
                                    placeholder='Senha'
                                    secureTextEntry
                                    onChangeText={onChange}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='confirmPassword'
                            render={({ field: { onChange } }) => (
                                <Input
                                    placeholder='Confirmar senha'
                                    secureTextEntry
                                    onChangeText={onChange}
                                />
                            )}
                        />



                    </Center>
                </VStack>
            </VStack>
        </ScrollView>
    );
}