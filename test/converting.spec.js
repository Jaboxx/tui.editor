var mdInput = ['# HELLO\n\n',
    '## HELLO\n\n',
    '### HELLO\n\n',
    '#### HELLO\n\n',
    '##### HELLO\n\n',
    '###### HELLO _word_\n\n',
    '- - -\n\n',
    '* list1\n',
    '* list2\n',
    '* list3\n',
    '    1. list3-1\n',
    '    2. list3-2\n\n',
    '<strong>My Name</strong> is <em>toMark</em><br>and image <img src="https://www.google.co.kr/images/srpr/logo11w.png" alt="google logo"> and link <a href="http://google.com">to google</a><br>this is <code>code</code>\n\n',
    '> * list in blockquote\n',
    '> * list in blockquote2\n\n',
    '> > blockquote in blockquote\n',
    '> > and returned in blockquote\n',
    '> \n',
    '> content!!!\n\n',
    '``` javascript\n',
    'function test() {\n',
    '    var i = 123;\n',
    '    return i;\n',
    '}\n',
    '```\n\n',
    'line break comes next this sentence\n',
    'right?\n\n',
    'Nulla metus metus,   ullamcorper `vel,` tincidunt sed, euismod in, nibh. **Quisque** volutpat condimentum velit.\n',
    '_Class_ aptent taciti sociosqu ad litora torquent ',
    'per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque ',
    'adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi ',
    'a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus ',
    'suscipit. Sed lectus.\n\n',
    '| Left Align Head | Center Align Head | Right Align Head |\n',
    '| :-------------- | :---------------: | ---------------: |\n',
    '| _data_ | data | data |\n',
    '| ~~data~~ | data | data |\n' +
    '\\[link\\]\\(www\\.google\\.com\\)\n\n' +
    '\\| vertical bar\n\n' +
    '\\* list1\n\n' +
    '\\- list2\n\n' +
    '1\\. list3\n\n' +
    '\\*\\*strong\\*\\*\n\n' +
    '\\_\\_strong\\_\\_\n\n' +
    '\\*italic\\*\n\n' +
    '\\_italic\\_\n\n' +
    '\\# h1\n\n' +
    '\\#\\# h2\n\n' +
    '\\#\\#\\# h3\n\n' +
    '\\#\\#\\#\\# h4\n\n' +
    '\\#\\#\\#\\#\\# h5\n\n' +
    '\\#\\#\\#\\#\\#\\# h6\n\n' +
    '\\~\\~strikeThrought\\~\\~\n\n',
    '\\`\\`\\` javascript\n\n',
    'var a = 10;\n',
    '\\`\\`\\`'].join('');

var mdOutput = ['# HELLO\n\n',
    '## HELLO\n\n',
    '### HELLO\n\n',
    '#### HELLO\n\n',
    '##### HELLO\n\n',
    '###### HELLO _word_\n\n',
    '- - -\n\n',
    '* list1\n',
    '* list2\n',
    '* list3\n',
    '    1. list3-1\n',
    '    2. list3-2\n\n',
    '**My Name** is _toMark_\n',
    'and image ![google logo](https://www.google.co.kr/images/srpr/logo11w.png) and link [to google](http://google.com)\n',
    'this is `code`\n\n',
    '> * list in blockquote\n',
    '> \n',
    '> * list in blockquote2\n\n',
    '> > blockquote in blockquote\n',
    '> > and returned in blockquote\n',
    '> \n',
    '> content!!!\n\n',
    '``` javascript\n',
    'function test() {\n',
    '    var i = 123;\n',
    '    return i;\n',
    '}\n',
    '```\n\n',
    'line break comes next this sentence\n',
    'right?\n\n',
    'Nulla metus metus,   ullamcorper `vel,` tincidunt sed, euismod in, nibh. **Quisque** volutpat condimentum velit.\n',
    '_Class_ aptent taciti sociosqu ad litora torquent ',
    'per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque ',
    'adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi ',
    'a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus ',
    'suscipit. Sed lectus.\n\n',
    '| Left Align Head | Center Align Head | Right Align Head |\n',
    '| :-------------- | :---------------: | ---------------: |\n',
    '| _data_ | data | data |\n',
    '| ~~data~~ | data | data |\n\n' +
    '\\[link\\]\\(www\\.google\\.com\\)\n\n' +
    '\\| vertical bar\n\n' +
    '\\* list1\n\n' +
    '\\- list2\n\n' +
    '1\\. list3\n\n' +
    '\\*\\*strong\\*\\*\n\n' +
    '\\_\\_strong\\_\\_\n\n' +
    '\\*italic\\*\n\n' +
    '\\_italic\\_\n\n' +
    '\\# h1\n\n' +
    '\\#\\# h2\n\n' +
    '\\#\\#\\# h3\n\n' +
    '\\#\\#\\#\\# h4\n\n' +
    '\\#\\#\\#\\#\\# h5\n\n' +
    '\\#\\#\\#\\#\\#\\# h6\n\n' +
    '\\~\\~strikeThrought\\~\\~\n\n',
    '\\`\\`\\` javascript\n',
    ' var a = 10;\n',
    '\\`\\`\\`'].join('');

var Editor = require('../src/js/editor');

describe('converting', function() {
    var editor;
    jasmine.getFixtures().fixturesPath = 'base/test/fixtures/';

    beforeEach(function() {
        editor = new Editor({
            el: $('body'),
            height: 300,
            initialEditType: 'wysiwyg'
        });
    });

    afterEach(function() {
        $('body').empty();
    });

    describe('markdown to html', function() {
        it('converting markdown to html', function() {
            var htmlOutput = readFixtures('HTMLOutput.html');

            editor.setValue(mdInput);
            expect(compare(editor.wwEditor.getValue(), htmlOutput)).toEqual(true);
        });
    });

    describe('html to markdown', function() {
        it('converting html to markdown', function() {
            var htmlInput = readFixtures('HTMLInput.html');

            editor.wwEditor.setValue(htmlInput);
            expect(compare(editor.getValue(), mdOutput)).toEqual(true);
        });
    });
});

function compare(resultString, expectedString) {
    var length = expectedString.length;
    var i = 0;
    var row = 0;
    var col = 0;
    var result = true;
    var flag;

    if (resultString.length === length) {
        for (; i < length; i += 1) {
            flag = resultString.charAt(i) !== expectedString.charAt(i);
            if (flag) {
                console.log(
                    '"' + expectedString.substring(i - 4, i) + '^' + expectedString.charAt(i) + '^'
                    + expectedString.substring(i + 1, i + 5)
                    + '" expected but "'
                    + resultString.substring(i - 4, i) + '^' + resultString.charAt(i) + '^'
                    + resultString.substring(i + 1, i + 5) + '"');
                console.log('at -> ' + row + ':' + col);
                result = false;
                break;
            }
            if (expectedString.charAt(i) === '\n') {
                row += 1;
                col = 0;
                i += 1;
            } else {
                col += 1;
            }
        }
    }

    return result;
}
