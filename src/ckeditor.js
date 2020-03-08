/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';

export default class Editor extends BalloonEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Bold,
	Italic,
	Underline,
	Code,
	Strikethrough,
	Highlight,
	Essentials,
	Paragraph
];

