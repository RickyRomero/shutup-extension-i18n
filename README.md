# shutup-extension-i18n
Contains localizations for the Shut Up browser extensions. To contribute, you can find the file for your language in the `data` directory, make your changes, and submit a pull request.

When creating a new translation, please start from the base messages.json and description_from_webstore.txt files in the root of `data/chrome`.

## Don't speak JSON? No problem.
[File an issue](https://github.com/RickyRomero/shutup-extension-i18n/issues) and let me know what needs fixing.

## Testing files
You can test your changes to avoid syntax errors. Install node, then:

```
cd tests
node test-json-formatting.js
```
