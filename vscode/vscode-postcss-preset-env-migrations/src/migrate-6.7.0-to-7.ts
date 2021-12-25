import * as vscode from 'vscode';
import { applyMigrations } from './apply-migration';
const migration = require('postcss-preset-env-migrate-6.7.0-to-7');

export async function migrate670To7(cmdEditor: vscode.TextEditor, cmdEdit: vscode.TextEditorEdit) {
	if (!cmdEditor) {
		return;
	}
	
	if (!cmdEditor.document) {
		return;
	}

	if (!cmdEditor.selections?.length) {
		return;
	}

	for (const selection of cmdEditor.selections) {
		const range = new vscode.Range(selection.start, selection.end);
		const source = cmdEditor.document.getText(range);

		await applyMigrations(cmdEditor, cmdEdit, range, [migration()], source);
	}
}
