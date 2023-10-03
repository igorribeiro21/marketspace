import { HStack, VStack, Image } from "native-base";
import { UserPhoto } from "./UserPhoto";

export function SalesAd() {
    return (
        <VStack>
            <HStack>
                <UserPhoto
                    source={{ uri: 'https://avatars.githubusercontent.com/u/51464697?s=400&u=5cce87dd7eb553166da6ed014b96e12f83c1808e&v=4' }}
                    size={8}
                    alt='Imagem do usuário do anúncio'
                    left={0}
                    position='absolute'
                />

                <Image
                    w='40'
                    h='32'
                    borderWidth={2}
                    borderColor="gray.400"
                    source={{ uri: 'https://avatars.githubusercontent.com/u/51464697?s=400&u=5cce87dd7eb553166da6ed014b96e12f83c1808e&v=4' }}                    
                    alt='Image do anúncio'
                />
            </HStack>
        </VStack>
    );
}