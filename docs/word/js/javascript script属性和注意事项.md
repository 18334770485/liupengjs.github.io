# javascript script属性和注意事项

## HTML为`<script>`定义了6个属性
1.async:可选。表示应该立即下载脚本，但不妨碍页面中的其他操作，<br/>
2.charset 可选。表示通过src属性指定的代码的字符集<br/>
3.defer: 可选。表示脚本可以延迟到文档完全被解析和显示之后在执行，只对外部脚本有效<br/>
4.language: 已废弃原来用于表示表写代码使用的脚本语言<br/>
5.src: 可选。表示包含要执行的代码的外部文件<br/>
6.type: 可选。可以看成是language的替代属性；表示编写代码使用的脚本语言的内容类型（也称为MINE类型）。虽然text/javascript 和 text/ecmascript 都已经不被推荐使用，但人们一直以来使用的都还是text/javascript。实际上，服务器在传送javascript文件时使用的MINE类型通常是application/x-javascript,但type中设置这个值却可能导致脚本被忽略。另外在非ie浏览器中还可以使用以下值:application/javascript和application/ecmascript。考虑到约定俗成和最大限度的浏览器兼容性，目前type属性的值还是text/javascript。不过这个属性也不是必须的，如果不写，默认为text/javascript

## 页面引用`<script>`标签的注意事项
1.在包含外部javascript文件时，必须将src属性设置为指向对应文件的URL。而这个文件既可以是与包含它的页面位于同一服务器上的文件，也可以是其他任意域中的文件</br>
2.所有的script元素都会按照它们在页面中出现的先后顺序依次被解析。在不使用defer和async属性的情况下，只有在解析完前面script元素中的代码后，才会解析后面script元素中的代码。</br>
3.由于浏览器会先解析完不使用defer属性的script元素中的代码，然后在解析后面的内容，所以一般应该把script元素放在页面的最后，即主要内容的后面，`</body>`标签前面</br>
4.使用defer属性可以让脚本在文档完全呈现之后在执行。延迟脚本总是按照它们的顺序执行</br>
5.使用async属性可以表示当前脚本不必等待其他脚本，也不必阻塞文档呈现，不能保证异步脚本按照它们在页面中出现的顺序执行
