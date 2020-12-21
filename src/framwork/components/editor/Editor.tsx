/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import * as S from './style';

interface Props {
  data: Object;
  save: (value: Object) => void;
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
        paragraph: {
          config: {
            placeholder: '질문을 작성하세요.',
          },
        },
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
        checkList: Checklist,
      },

      data: content,
    });
  };
  async onSave(e) {
    console.log(this.editor);
    const data = await this.editor.saver.save();
    this.props.save(data);
  }

  render() {
    return (
      <div>
        <S.EditorWrapper>
          <div id={'editorjs'}></div>
        </S.EditorWrapper>
        <S.EditorSaveButtonWrapper>
          <S.EditorSaveButton onClick={this.onSave.bind(this)}>질문하기</S.EditorSaveButton>
        </S.EditorSaveButtonWrapper>
      </div>
    );
  }
}

export default Editor;
