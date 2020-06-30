(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{310:function(n,e,o){"use strict";o.r(e),e.default='<p>解析器是使用 <code>enhanced-resolve</code> 库创建的。<code>Resolver</code> 类\n拓展了 <code>tapable</code> 类，并使用 <code>tapable</code> 来提供了一些钩子。\n<code>enhanced-resolve</code> 可以直接用于创建新的解析器，\n但是，任何 <a href="/api/node/#compiler-instance"><code>compiler</code> 实例</a> 都有一些解析器实例，可以\n被 <code>tap</code> 进去。</p>\n<p>在继续阅读之前，请确保你已经读过\n<a href="https://github.com/webpack/enhanced-resolve"><code>enhanced-resolve</code></a> 和 <a href="/api/plugins/#tapable"><code>tapable</code></a> 文档。</p>\n<h2 id="类型">类型<a href="#%E7%B1%BB%E5%9E%8B" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>在 <code>compiler</code> 类中，提供了三种类型的内置解析器：</p>\n<ul>\n<li><code>normal</code>: 通过绝对或相对路径解析模块。</li>\n<li><code>context</code>: 在给定的上下文中解析模块。</li>\n<li><code>loader</code>: 解析 webpack <a href="/loaders">loader</a>。</li>\n</ul>\n<p>根据需要，任一个被使用在 <code>compiler</code> 中的内置解析器，\n可以通过插件进行定制：</p>\n<pre><code class="hljs language-js">compiler<span class="token punctuation">.</span>resolverFactory<span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span class="token string">\'resolver [type]\'</span><span class="token punctuation">,</span> resolver <span class="token operator">=></span> <span class="token punctuation">{</span>\n  resolver<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> params <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>其中，<code>[type]</code> 是上述三个解析器之一。</p>\n<p>请参阅 <a href="https://github.com/webpack/enhanced-resolve"><code>enhanced-resolve</code> documentation</a> 以获得钩子的完整列表以及它们的\n介绍。</p>\n<h2 id="配置选项">配置选项<a href="#%E9%85%8D%E7%BD%AE%E9%80%89%E9%A1%B9" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>上述解析器也可以\n利用 <a href="/configuration/resolve/"><code>resolve</code></a> or <a href="/configuration/resolve/#resolveloader"><code>resolveLoader</code></a> 选项，通过配置文件进行定制。这些选项允许\n用户可以通过多种选项来更改解析行为，包括\n通过解析 <code>plugins</code>。</p>\n<p>解析器插件，例如：<a href="https://github.com/shaketbaby/directory-named-webpack-plugin"><code>DirectoryNamedPlugin</code></a>，可以直接引入\n在 <code>resolve.plugins</code>，而不是直接在 <a href="/configuration/plugins/#plugins"><code>plugins</code> configuration option</a> 中使用。</p>\n<blockquote class="tip">\n<p>请注意，<code>resolve</code> 配置会影响 <code>normal</code> 解析器和 <code>context</code> 解析器，而“ <code>resolveLoader</code> 用于修改 <code>loader</code> 解析器。</p>\n</blockquote>\n'}}]);