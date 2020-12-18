/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

interface Props {
  data: Object;
  save: (value: Object) => void;
  onChane: (value: string) => void;
}

class Editor extends React.Component<Props> {
  editor: any;
  constructor(props) {
    super(props);
    this.editor = null;
  }

  async componentDidMount() {
    this.initEditor();
  }

  initEditor = () => {
    const EditorJS = require('@editorjs/editorjs');
    const Header = require('@editorjs/header');
    const Embed = require('@editorjs/embed');
    const Delimiter = require('@editorjs/delimiter');
    const List = require('@editorjs/list');
    const InlineCode = require('@editorjs/inline-code');
    const Table = require('@editorjs/table');
    const Quote = require('@editorjs/quote');
    const Code = require('@editorjs/code');
    const Marker = require('@editorjs/marker');
    const Checklist = require('@editorjs/checklist');

    let content = null;
    if (this.props.data !== undefined) {
      content = this.props.data;
    }

    this.editor = new EditorJS({
      holder: 'editorjs',
      logLevel: 'ERROR',
      tools: {
        header: Header,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true,
            },
          },
        },
        list: List,
        inlineCode: InlineCode,
        code: Code,
        table: Table,
        quote: Quote,
        marker: Marker,
        checkList: Checklist,
        delimiter: Delimiter,
      },

      data: content,
    });
  };
  async onSave(e) {
    const data = await this.editor.saver.save();

    this.props.save(data);
  }

  render() {
    return (
      <div>
        <div id={'editorjs'}></div>
      </div>
    );
  }
}

export default Editor;
