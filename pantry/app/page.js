
import {Box,Stack} from '@mui/material'

const item={'tomato','apples','peas'}
export default function Home() {
  return(
    <Box 
  width="100vw" 
  height="100vh"
  display={'flex'}
  justifyContents={'center'}
  alignment={'center'}

  >
    <Stack width="800px" height="600px" spacing={2}overflow={'auto'}>
       {item.map((i) => (
        <Box 
        key={i}
        width="100vw" 
        height="100vh"
        
        bgcolor={'#f0f0f0'}      
        >
          </Box>
       ))}</Stack>
    
    </Box>

  ) 

}
