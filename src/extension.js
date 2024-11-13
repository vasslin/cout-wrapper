const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.addCout', () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);

            if (selectedText) {
                const newText = `std::cout << ${selectedText} << std::endl;`;
                editor.edit((editBuilder) => {
                    editBuilder.replace(selection, newText);
                });
            } else {
                vscode.window.showInformationMessage('Пожалуйста, выделите переменную.');
            }
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};