/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from 'theme-ui'
import theme from '../styles/theme'
import { Box, Heading, Flex, Button } from '@theme-ui/components'

import ColorToggleButton from '../components/color-mode-toggle'

const Font = props => (
  <ThemeProvider theme={theme}>
    <Box sx={{
      m: '-8px',
      p: '30px',
      bg: 'background',
      minHeight: '100vh'
    }}>
      <Box p={4} bg='highlight'>
        <Flex sx={{ alignItems: 'cester' }}>
          <Heading>Components</Heading>
          <Button ml='auto'>Beep</Button>
        </Flex>
      </Box>
      <ColorToggleButton></ColorToggleButton>
      <Styled.h1>故都的秋</Styled.h1>
      <Styled.p>秋天，无论在什么地方的秋天，总是好的；可是啊，北国的秋，却特别地来得清，来得静，来得悲凉。我的不远千里，要从杭州赶上青岛，更要从青岛赶上北平来的理由，也不过想饱尝一尝这“秋”，这故都的秋味</Styled.p>
      <Styled.p>Autumn, wherever it is, always has something to recommend itself. In North China, however, it is particularly limpid, serene and melancholy. To enjoy its atmosphere to the full in the onetime capital, I have, therefore, made light of travelling a long distance from Hangzhou to Qingdao, and thence to Peiping.</Styled.p>
      <Styled.p>江南，秋当然也是有的，但草木凋得慢，空气来得润，天的颜色显得淡，并且又时常多雨而少风；一个人夹在苏州上海杭州，或厦门香港广州的市民中间，混混沌沌地过去，只能感到一点点清凉，秋的味，秋的色，秋的意境与姿态，总看不饱，尝不透，赏玩不到十足。秋并不是名花，也并不是美酒，那一种半开、半醉的状态，在领略秋的过程上，是不合适的。</Styled.p>
      <Styled.p sx={{ variant: 'text.blueskystandard' }}>There is of course autumn in the South too, but over there plants wither slowly, the air is moist, the sky pallid, and it is more often rainy than windy. While muddling along all by myself among the urban dwellers of Suzhou, Shanghai, Xianmen, Hong Kong or Guangzhou, I feel nothing but a little chill in the air, without ever relishing to my heart's content the flavour, colour, mood and style of the season. Unlike famous flowers which are most attractive when half opening, good wine which is most tempting when one is half drunk, autumn, however, is best appreciated in its entirety.</Styled.p>
      <Styled.p sx={{ variant: 'text.blueskycondensed' }}>There is of course autumn in the South too, but over there plants wither slowly, the air is moist, the sky pallid, and it is more often rainy than windy. While muddling along all by myself among the urban dwellers of Suzhou, Shanghai, Xianmen, Hong Kong or Guangzhou, I feel nothing but a little chill in the air, without ever relishing to my heart's content the flavour, colour, mood and style of the season. Unlike famous flowers which are most attractive when half opening, good wine which is most tempting when one is half drunk, autumn, however, is best appreciated in its entirety.</Styled.p>
    </Box>
  </ThemeProvider>
)

export default Font