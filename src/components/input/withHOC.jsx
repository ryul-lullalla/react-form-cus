import React, { Component } from 'react';

const withHOC = url => WrappedComponent => () => {
  //   console.log('WrappedComponent', WrappedComponent, 'url', url);
  //   const RenderComponent = withProps => {
  //     return <WrappedComponent url={withProps} />;
  //   };

  return <WrappedComponent url={url} />;

  //   return RenderComponent;
};
//   {
//     console.log('WrappedComponent', WrappedComponent, 'url', url);

//     return class extends Component {
//       render() {
//         return <WrappedComponent url={url} />;
//       }
//     };
//   };

export default withHOC;
