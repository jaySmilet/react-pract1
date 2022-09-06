import * as React from 'react';
import Custom from './custom-hook/custom';
import Memo from './memo/Memo';
import UseRefTrack from './useRef-Hook/UseRefTrack';
// import UseRefAccessDomElement from './useRef-Hook/UseRefAccessDomElement';
import './style.css';
import UseRefTrackingStateChanges from './useRef-Hook/UseRefTrackingStateChanges';
import DocTitleTwo from './custom-hook/Title/DocTitleTwo';
import DocTitleOne from './custom-hook/Title/DocTitleOne';

export default function App() {
  return (
    <div>
      {/* <Memo/> */}
      {/* <Custom/> */}
      {/* <UseRefTrack /> */}
      {/* <UseRefAccessDomElement /> */}
      {/* <UseRefTrackingStateChanges /> */}
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  );
  React.PureComponent;
}
