import Frame from '../../components/Frame/Frame'
import '../../css/Frame.css'

function FrameContainer(): JSX.Element {
  return (
    <div id="frame-container">
      { [0, 0, 0, 0].map(el => <Frame />) }
    </div>
  );
}

export default FrameContainer