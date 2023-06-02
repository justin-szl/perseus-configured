// @flow
import React, {Component} from 'react';
import 'katex/dist/katex.css';
import './lib/perseus.css';

const Perseus = require('./perseus-configured.js').default;

type Props = {
  question: {
    data: QuestionDataType,
    attribution?: ?string,
  },
  setRef?: (node: any) => void,
  readOnly?: boolean,
};


export default class AnswerRenderer extends Component {
  props: Props;

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.question !== this.props.question ||
        nextProps.readOnly !== this.props.readOnly;
  }

  render() {
    const {
      question,
      setRef,
      readOnly,
      isMobile,
    } = this.props;
    // const questionContents = <Perseus.ItemRenderer
    //       controlPeripherals={true}
    //       item={question}
    //       apiOptions={{
    //         isMobile: isMobile,
    //         staticRender: false,
    //         readOnly: false,
    //         customKeypad: true,
    //       }}
    //       problemNum={0}
    //       hintsVisible={1}
    //       ref={n => (setRef ? setRef(n) : null)}
    //     />;
  
    return (
      <div>
        <Perseus.ServerItemRenderer
          controlPeripherals={true}
          item={question}
          apiOptions={{
            isMobile: isMobile,
            staticRender: true,
            readOnly: true,
            customKeypad: true,
          }}
          workAreaSelector="#workarea"
          hintsAreaSelector="#workarea"
          problemNum={0}
          hintsVisible={4}
          ref={n => (setRef ? setRef(n) : null)}
        />

        </div>
    );
  }
}
