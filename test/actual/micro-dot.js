var actual = fn("**/a/*/b/c/.js");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/b\/c\/\.js)$/);

var actual = fn("**/a/*/b/c.d/.js");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/b\/c\.d\/\.js)$/);

var actual = fn("**/*.{*,gitignore}");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.((?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?|gitignore))$/);

var actual = fn("**/*.{js,gitignore}");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.(js|gitignore))$/);

var actual = fn("**/{a,/.gitignore}");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(a|\/\.gitignore))$/);

var actual = fn("**/{a..z..2}/*.js");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(a|c|e|g|i|k|m|o|q|s|u|w|y)\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("**/{a..c}/*.js");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[a-c]\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("**/{1..10}/*.js");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[1-10]\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("**/{1..10..2}/*.js");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(1|3|5|7|9)\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("a/{b..s}/xyz/*-{01..10}.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[b-s]\/xyz\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?-(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[01-10]\.js)$/);

var actual = fn("a");
actual.should.eql(/^(?:a)$/);

var actual = fn("a/");
actual.should.eql(/^(?:a\/)$/);

var actual = fn("a/*");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?)$/);

var actual = fn(".*");
actual.should.eql(/^(?:(?=.)\.[^/]*?)$/);

var actual = fn("**/**/.*");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?=.)\.[^/]*?)$/);

var actual = fn("**/**/.*");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?=.)\.[^/]*?)$/);

var actual = fn("**/.*/.*");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?=.)\.[^/]*?\/(?=.)\.[^/]*?)$/);

var actual = fn("**/.*");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?=.)\.[^/]*?)$/);

var actual = fn("**/*.*");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.[^/]*?)$/);

var actual = fn("**/*.");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.)$/);

var actual = fn("**/*.a");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.a)$/);

var actual = fn("**/*.js");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("**/*.md");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("**/.*");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?=.)\.[^/]*?)$/);

var actual = fn("**/.*.js");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?=.)\.[^/]*?\.js)$/);

var actual = fn("**/.*.md");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?=.)\.[^/]*?\.md)$/);

var actual = fn("**/.a");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/\.a)$/);

var actual = fn("**/.a.js");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/\.a\.js)$/);

var actual = fn("**/.gitignore");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/\.gitignore)$/);

var actual = fn("*.*");
actual.should.eql(/^(?:(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.[^/]*?)$/);

var actual = fn("*.a");
actual.should.eql(/^(?:(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.a)$/);

var actual = fn("*.gitignore");
actual.should.eql(/^(?:(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.gitignore)$/);

var actual = fn("*.{gitignore,*}");
actual.should.eql(/^(?:(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.(gitignore|(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?))$/);

var actual = fn("*.{*,gitignore,js}");
actual.should.eql(/^(?:(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.((?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?|gitignore|js))$/);

var actual = fn("*.{*,gitignore}");
actual.should.eql(/^(?:(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.((?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?|gitignore))$/);

var actual = fn(".{*,gitignore}");
actual.should.eql(/^(?:.((?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?|gitignore))$/);

var actual = fn("**/.{*,gitignore}");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/.((?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?|gitignore))$/);

var actual = fn("**/.{js,gitignore}");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/.(js|gitignore))$/);

var actual = fn("**/.{js,md}");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/.(js|md))$/);

var actual = fn("**/*.{js,md}");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.(js|md))$/);

var actual = fn("**/(a|b)/*.{js,md}");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(a|b)\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.(js|md))$/);

var actual = fn("**/[a-z]/*.{js,md}");
actual.should.eql(/^(?:(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[a-z]\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.(js|md))$/);

var actual = fn("*.js");
actual.should.eql(/^(?:(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("*.md");
actual.should.eql(/^(?:(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("*.{js,txt}");
actual.should.eql(/^(?:(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.(js|txt))$/);

var actual = fn("*/*.gitignore");
actual.should.eql(/^(?:(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.gitignore)$/);

var actual = fn("*/.gitignore");
actual.should.eql(/^(?:(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/\.gitignore)$/);

var actual = fn(".a");
actual.should.eql(/^(?:\.a)$/);

var actual = fn(".gitignore");
actual.should.eql(/^(?:\.gitignore)$/);

var actual = fn(".js");
actual.should.eql(/^(?:\.js)$/);

var actual = fn(".md");
actual.should.eql(/^(?:\.md)$/);

var actual = fn("a/**/c/*.js");
actual.should.eql(/^(?:a\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("a/**/c/*.md");
actual.should.eql(/^(?:a\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("a/**/j/**/z/*.js");
actual.should.eql(/^(?:a\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/j\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/z\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("a/**/j/**/z/*.md");
actual.should.eql(/^(?:a\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/j\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/z\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("a/**/z/*.js");
actual.should.eql(/^(?:a\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/z\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("a/**/z/*.md");
actual.should.eql(/^(?:a\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/z\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("a/*.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("a/*.md");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("a/*.txt");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.txt)$/);

var actual = fn("a/*/.b");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/\.b)$/);

var actual = fn("a/*/.b.a");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/\.b\.a)$/);

var actual = fn("a/*/?/**/e.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/e\.js)$/);

var actual = fn("a/*/?/**/e.md");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/e\.md)$/);

var actual = fn("a/*/b");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/b)$/);

var actual = fn("a/*/c/*.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("a/*/c/*.md");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("a/.*/b");
actual.should.eql(/^(?:a\/(?=.)\.[^/]*?\/b)$/);

var actual = fn("a/?/**/e.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/e\.js)$/);

var actual = fn("a/?/**/e.md");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/e\.md)$/);

var actual = fn("a/?/c.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/c\.js)$/);

var actual = fn("a/?/c.md");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/c\.md)$/);

var actual = fn("a/?/c/?/*/e.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/e\.js)$/);

var actual = fn("a/?/c/?/*/e.md");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\/e\.md)$/);

var actual = fn("a/?/c/?/e.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/e\.js)$/);

var actual = fn("a/?/c/?/e.md");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/e\.md)$/);

var actual = fn("a/?/c/???/e.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]..\/e\.js)$/);

var actual = fn("a/?/c/???/e.md");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]..\/e\.md)$/);

var actual = fn("a/??/c.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/].\/c\.js)$/);

var actual = fn("a/??/c.md");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/].\/c\.md)$/);

var actual = fn("a/???/c.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]..\/c\.js)$/);

var actual = fn("a/???/c.md");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]..\/c\.md)$/);

var actual = fn("a/????/c.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]...\/c\.js)$/);

var actual = fn("a/????/c.md");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]...\/c\.md)$/);

var actual = fn("a/b/**/c{d,e}/**/xyz.js");
actual.should.eql(/^(?:a\/b\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/c(d|e)\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/xyz\.js)$/);

var actual = fn("a/b/**/c{d,e}/**/xyz.md");
actual.should.eql(/^(?:a\/b\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/c(d|e)\/(?:(?!(?:\/|^)(?:\.{1,2})($|\/)).)*?\/xyz\.md)$/);

var actual = fn("a/b/c/*.js");
actual.should.eql(/^(?:a\/b\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("A/b/C/*.js");
actual.should.eql(/^(?:A\/b\/C\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("a/b/c/*.md");
actual.should.eql(/^(?:a\/b\/c\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("A/b/C/*.md");
actual.should.eql(/^(?:A\/b\/C\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("A/b/C/*.MD");
actual.should.eql(/^(?:A\/b\/C\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.MD)$/);

var actual = fn("a/b/c{d,e{f,g}}/*.js");
actual.should.eql(/^(?:a\/b\/cd\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js|a\/b\/ce(f|g)\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("a/b/c{d,e{f,g}}/*.md");
actual.should.eql(/^(?:a\/b\/cd\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md|a\/b\/ce(f|g)\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("a/b/c{d,e}/*.js");
actual.should.eql(/^(?:a\/b\/c(d|e)\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("a/b/c{d,e}/*.md");
actual.should.eql(/^(?:a\/b\/c(d|e)\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("a/b/c{d,e}/xyz.js");
actual.should.eql(/^(?:a\/b\/c(d|e)\/xyz\.js)$/);

var actual = fn("a/b/c{d,e}/xyz.md");
actual.should.eql(/^(?:a\/b\/c(d|e)\/xyz\.md)$/);

var actual = fn("a/{c..e}.js");
actual.should.eql(/^(?:a\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[c-e]\.js)$/);

var actual = fn("E:**/*.js");
actual.should.eql(/^(?:(?=.)E:[^/]*?[^/]*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("E:**/*.md");
actual.should.eql(/^(?:(?=.)E:[^/]*?[^/]*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);

var actual = fn("E:\\**/*.js");
actual.should.eql(/^(?:(?=.)E:\\[^/]*?[^/]*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.js)$/);

var actual = fn("E:\\**/*.md");
actual.should.eql(/^(?:(?=.)E:\\[^/]*?[^/]*?\/(?!(?:^|\/)\.{1,2}(?:$|\/))(?=.)[^/]*?\.md)$/);
