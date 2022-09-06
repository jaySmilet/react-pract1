import * as React from 'react';
import Custom from './custom-hook/custom';
import Memo from './memo/Memo';
import UseRefTrack from './useRef-Hook/UseRefTrack';
// import UseRefAccessDomElement from './useRef-Hook/UseRefAccessDomElement';
import './style.css';
import UseRefTrackingStateChanges from './useRef-Hook/UseRefTrackingStateChanges';
import DocTitleTwo from './custom-hook/Title/DocTitleTwo';
import DocTitleOne from './custom-hook/Title/DocTitleOne';
import CounterOne from './custom-hook/Counter/CounterOne';
import CounterTwo from './custom-hook/Counter/CounterTwo';
import UserForm from './custom-hook/UserForm/UserForm';

export default function App() {
  return (
    <div>
      {/* <Memo/> */}
      {/* <Custom/> */}
      {/* <UseRefTrack /> */}
      {/* <UseRefAccessDomElement /> */}
      {/* <UseRefTrackingStateChanges /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      <UserForm />
    </div>
  );
  React.PureComponent;
}
