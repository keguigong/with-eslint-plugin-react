/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const Font = props => (
  <div>
    <h1 onClick={props.handleClick}>桃树，杏树，梨树，Hello World! <span>How are you!</span></h1>
    <p>The static directory has been deprecated in favor of the public directory. https://err.sh/zeit/next.js/static-dir-deprecated</p>
    <p>桃树，杏树，梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味；闭了眼，树上仿佛已经满是桃儿，杏儿，梨儿。花下成千成百的蜜蜂嗡嗡的闹着，大小的蝴蝶飞来飞去。野花遍地是：杂样儿，有名字的，没名字的，散在草丛里像眼睛像星星，还眨呀眨。</p>
    <p>设置字体的时候，先英后中，保证中英字体兼容到。font-family: Arial, &quot;Microsoft YaHei&quot;</p>
    <p>{props.content}</p>
    <ul>
      {props.arr.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)

Font.defaultProps = {
  content: 'default content',
  arr: [1, 2, 3],
  handleClick: f => f
}

Font.propTypes = {
  content: PropTypes.string,
  arr: PropTypes.array,
  handleClick: PropTypes.func
}

const App = () => (
  <div>
    <Font content='asdasdasd' arr={[2, 3, 4]} />
  </div>
)
export default App