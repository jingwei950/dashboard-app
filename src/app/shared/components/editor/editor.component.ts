import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import EditorJS from '@editorjs/editorjs';
// @ts-ignore
import Header from '@editorjs/header';
// @ts-ignore
import List from '@editorjs/list';
//@ts-ignore
import SimpleImage from '@editorjs/simple-image';
//@ts-ignore
import RawTool from '@editorjs/raw';
//@ts-ignore
import LinkTool from '@editorjs/link';
//@ts-ignore
import Embed from '@editorjs/embed';
//@ts-ignore
import Checklist from '@editorjs/checklist';
//@ts-ignore
import Quote from '@editorjs/quote';
//@ts-ignore
import CodeTool from '@editorjs/code';
//@ts-ignore
import NestedList from '@editorjs/nested-list';
//@ts-ignore
import InlineCode from '@editorjs/inline-code';
//@ts-ignore
import Underline from '@editorjs/underline';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent {
  @ViewChild('editor') editorEl?: ElementRef;

  editor?: EditorJS;

  ngAfterViewInit() {
    this.editor = new EditorJS({
      minHeight: 200,
      holder: this.editorEl?.nativeElement,
      placeholder: 'Let`s write an awesome story!',
      autofocus: true,

      /**
       * Available Tools list.
       * Pass Tool's class or Settings object for each Tool you want to use
       */
      tools: {
        header: Header,
        underline: Underline,
        raw: RawTool,
        embed: Embed,
        code: CodeTool,
        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: 'ordered',
          },
        },
        image: {
          class: SimpleImage,
          inlineToolbar: true,
          config: {
            placeholder: 'Paste image URL',
          },
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: 'http://localhost:4200', // Your backend endpoint for url data fetching,
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: "Quote's author",
          },
        },
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M',
        },
      },
      onReady: () => {
        console.log('Editor.js is ready to work!');
      },
    });
  }

  saveData() {
    this.editor
      ?.save()
      .then((outputData) => {
        console.log('Article data: ', outputData);
      })
      .catch((error) => {
        console.log('Saving failed: ', error);
      });
  }
}
