import * as vscode from 'vscode';
import { migrate670To7 } from './migrate-6.7.0-to-7';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerTextEditorCommand('vscode-postcss-preset-env-migrations.migrate-selection', async (cmdEditor: vscode.TextEditor, cmdEdit: vscode.TextEditorEdit) => {
		const query = await vscode.window.showQuickPick(
			[
				"6.7.0 -> 7.x",
			],
			{
				canPickMany: false,
				title: "Select a migration",
			}
		);

		if (query === "6.7.0 -> 7.x") {
			migrate670To7(cmdEditor, cmdEdit);
			return;
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
