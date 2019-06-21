// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "pascal-snake-casify" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.pascal-snake-casify', () => {
		const editor: any = vscode.window.activeTextEditor;
		const text = editor.document.getText(editor.selection);
		const words: any = text.match(/[\d\.]+|\D+/g);
		let result: any = [];
		words.forEach((word: any) => {
			result = result.concat(word.split(/(?=[A-Z])/));
		});
		editor.edit((editBuilder: any) => {
			const selection = editor.selection;
			editBuilder.replace(selection, result.join('_'));
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
