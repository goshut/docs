import e from"./html-CqhC7HHo.js";import n from"./ruby-CbbF_YDs.js";import"./javascript-Dch3xQiY.js";import"./css-CbYhyuC0.js";import"./xml-KWQaRJyt.js";import"./java-ClXEvkw9.js";import"./sql-DbK06e1c.js";import"./c-RCJZWN-0.js";import"./shellscript-BybOGaTu.js";import"./lua-wmW0X3mg.js";const t=Object.freeze({displayName:"ERB",fileTypes:["erb","rhtml","html.erb"],injections:{"text.html.erb - (meta.embedded.block.erb | meta.embedded.line.erb | comment)":{patterns:[{begin:"(^\\s*)(?=<%+#(?![^%]*%>))",beginCaptures:{0:{name:"punctuation.whitespace.comment.leading.erb"}},end:"(?!\\G)(\\s*$\\n)?",endCaptures:{0:{name:"punctuation.whitespace.comment.trailing.erb"}},patterns:[{include:"#comment"}]},{begin:"(^\\s*)(?=<%(?![^%]*%>))",beginCaptures:{0:{name:"punctuation.whitespace.embedded.leading.erb"}},end:"(?!\\G)(\\s*$\\n)?",endCaptures:{0:{name:"punctuation.whitespace.embedded.trailing.erb"}},patterns:[{include:"#tags"}]},{include:"#comment"},{include:"#tags"}]}},name:"erb",patterns:[{include:"text.html.basic"}],repository:{comment:{patterns:[{begin:"<%+#",beginCaptures:{0:{name:"punctuation.definition.comment.begin.erb"}},end:"%>",endCaptures:{0:{name:"punctuation.definition.comment.end.erb"}},name:"comment.block.erb"}]},tags:{patterns:[{begin:"<%+(?!>)[-=]?(?![^%]*%>)",beginCaptures:{0:{name:"punctuation.section.embedded.begin.erb"}},contentName:"source.ruby",end:"(-?%)>",endCaptures:{0:{name:"punctuation.section.embedded.end.erb"},1:{name:"source.ruby"}},name:"meta.embedded.block.erb",patterns:[{captures:{1:{name:"punctuation.definition.comment.erb"}},match:"(#).*?(?=-?%>)",name:"comment.line.number-sign.erb"},{include:"source.ruby"}]},{begin:"<%+(?!>)[-=]?",beginCaptures:{0:{name:"punctuation.section.embedded.begin.erb"}},contentName:"source.ruby",end:"(-?%)>",endCaptures:{0:{name:"punctuation.section.embedded.end.erb"},1:{name:"source.ruby"}},name:"meta.embedded.line.erb",patterns:[{captures:{1:{name:"punctuation.definition.comment.erb"}},match:"(#).*?(?=-?%>)",name:"comment.line.number-sign.erb"},{include:"source.ruby"}]}]}},scopeName:"text.html.erb",embeddedLangs:["html","ruby"]});var p=[...e,...n,t];export{p as default};
