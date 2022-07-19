import { Box , Flex, Img, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';

const PostBox = ({ blogTitle , blogBrief  }) => {

    return (
        <>
        
            <Box bg={'#fff'} p={'em'} width={['100%','80%']}>
                
                <Box>
                   
                   <Box display={'flex'} gap={'1em'}>
                        <Avatar />
                        <Box>
                            <Text fontWeight={'bold'} my={'em'}>Header </Text>
                            <Text text={'grey'}> 18 July 2022 </Text>
                        </Box>

                   </Box>

                   <Flex flexDir={['column' , 'row']} my={'1em'} alignItems={'center'}>
                    
                   <Box my={'1em'}>
                        <Text fontWeight={'bold'} fontSize={['1.2em','1.5em']}>This is the title for your post goes here </Text>
                        <Text my={'1em'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus nam sapiente debitis laborum omnis, nesciunt dignissimos eveniet, minima cupiditate perferendis voluptas cumque qui est earum ducimus dolorum dolores deserunt.</Text>
                   </Box>

                   <Box>
                        <Img src='https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1658157776331%2FLISXFyyPo.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75' />
                    </Box>
                    </Flex>  

                  <Box>
                     
                  </Box>
                   
                </Box>

            </Box>
        
        </>
    )
}

export default PostBox;