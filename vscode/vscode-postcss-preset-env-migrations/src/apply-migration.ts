import * as vscode from 'vscode';
import { log } from './log';
const postcss = require('postcss');

export async function applyMigrations(
	cmdEditor: vscode.TextEditor,
	cmdEdit: vscode.TextEditorEdit,
	range: vscode.Range,
	plugins: Array<any>,
	source: string,
) {
	await postcss(plugins).process(source, {
		from: cmdEditor.document.uri.fsPath,
	}).then((result: {css: string}) => {
		log.appendLine('[postcss-preset-env-migration] migrated css');
		const transformed = result.css;
		cmdEditor.edit((editBuilder: vscode.TextEditorEdit) => {
			editBuilder.replace(range, transformed);
		});

	}).catch((err: { message: string; }) => {
		log.appendLine('[postcss-preset-env-migration] ' + err.message);	
	});
}
