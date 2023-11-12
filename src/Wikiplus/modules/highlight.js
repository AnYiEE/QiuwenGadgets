(async () => {
	/*! Wikiplus-highlight | Bhsd, 机智的小鱼君 | GPL-3.0 <qwbk.cc/H:GPL-3.0> */
	'use strict';
	if (mw.libs.wphl && mw.libs.wphl.version) return;
	mw.libs.wphl = mw.libs.wphl || {};
	const i = '2.59.6';

	const c =
		'object' == typeof mw.storage && 'function' == typeof mw.storage.getObject
			? mw.storage
			: {
					getObject(e) {
						const i = localStorage.getItem(e);
						if (!1 === i) return !1;
						try {
							return JSON.parse(i);
						} catch (e) {
							return null;
						}
					},
					setObject(e, i) {
						try {
							return localStorage.setItem(e, JSON.stringify(i));
						} catch (e) {
							return !1;
						}
					},
			  };

	const s =
		((Object.fromEntries =
			Object.fromEntries ||
			((e) => {
				let i;
				let t;
				const a = {};
				for ([i, t] of e) a[i] = t;
				return a;
			})),
		(e = i) => e.split('.').map(Number));

	const m = (e, ...i) => mw.msg('wphl-' + e, ...i);
	const a = (...e) => $($.parseHTML(m(...e)));

	var e =
		(...i) =>
		() => {
			const e = $('<p>', {html: m(...i)});
			return mw.notify(e, {type: 'success', autoHideSeconds: 'long', tag: 'wikiplus-highlight'}), e;
		};

	let t = s().slice(0, 2).join('.');
	const p = '//fastly.jsdelivr.net';
	const g = 'npm/codemirror@5.65.3';
	const z = 'gh/bhsd-harry/codemirror-mediawiki@1.1.11';
	const D = 'npm/wikiparser-node@0.11.0-b';
	const o = 'gh/bhsd-harry/Wikiplus-highlight@' + t;

	const {
		wgPageName: N,
		wgNamespaceNumber: u,
		wgPageContentModel: U,
		wgServerName: H,
		wgScriptPath: F,
		wgUserLanguage: Q,
		skin: n,
	} = mw['config']['values'];

	const h = null !== mw.loader.getState('ext.CodeMirror');
	const V = mw.loader.getState('ext.CodeMirror.data') ? 'ext.CodeMirror.data' : 'ext.CodeMirror';
	const r = c.getObject('InPageEditMwConfig') || {};
	const B = '' + H + F;
	const k = r[B] || {};
	const f = !(k.time > Date.now() - 2592e6);
	const R = {css: 'css', 'sanitized-css': 'css', javascript: 'javascript', json: 'javascript', wikitext: 'mediawiki'};

	const d = h
		? {
				lib: 'ext.CodeMirror.lib',
				css: 'ext.CodeMirror.lib.mode.css',
				javascript: 'ext.CodeMirror.lib.mode.javascript',
				lua: g + '/mode/lua/lua.min.js',
				mediawiki: f ? V : [],
				htmlmixed: 'ext.CodeMirror.lib.mode.htmlmixed',
				xml: [],
		  }
		: {
				lib: g + '/lib/codemirror.min.js',
				css: g + '/mode/css/css.min.js',
				javascript: g + '/mode/javascript/javascript.min.js',
				lua: g + '/mode/lua/lua.min.js',
				mediawiki: [],
				htmlmixed: g + '/mode/htmlmixed/htmlmixed.min.js',
				xml: g + '/mode/xml/xml.min.js',
		  };

	const w = {
		searchcursor: g + '/addon/search/searchcursor.min.js',
		search: o + '/search.min.js',
		markSelection: g + '/addon/selection/mark-selection.min.js',
		activeLine: g + '/addon/selection/active-line.min.js',
		trailingspace: g + '/addon/edit/trailingspace.min.js',
		matchBrackets: g + '/addon/edit/matchbrackets.min.js',
		closeBrackets: g + '/addon/edit/closebrackets.min.js',
		matchTags: o + '/matchtags.min.js',
		fold: o + '/fold.min.js',
		wikiEditor: 'ext.wikiEditor',
		contextmenu: 'mediawiki.Title',
		lint: g + '/addon/lint/lint.min.js',
		annotateScrollbar: g + '/addon/scroll/annotatescrollbar.min.js',
		parser: D + '/extensions/base.min.js',
		lintWikitext: o + '/lint.min.js',
	};

	const b = [
		{
			option: 'styleSelectedText',
			addon: 'search',
			download: 'markSelection',
			only: !0,
			complex: () => !x.has('wikiEditor'),
		},
		{option: 'styleActiveLine', addon: 'activeLine'},
		{option: 'showTrailingSpace', addon: 'trailingspace'},
		{option: 'matchBrackets', complex: (e, i) => ('mediawiki' !== e && !i) || {bracketRegex: /[{}[\]]/u}},
		{
			option: 'autoCloseBrackets',
			addon: 'closeBrackets',
			complex: (e, i) => ('mediawiki' !== e && !i) || '()[]{}""',
		},
		{option: 'matchTags', addon: ['matchTags', 'fold'], modes: new Set(['mediawiki', 'widget'])},
		{option: 'fold', modes: new Set(['mediawiki', 'widget'])},
	];

	const x = new Set(c.getObject('Wikiplus-highlight-addons') || ['search']);
	let y = c.getObject('Wikiplus-highlight-indent') || 4;
	const q = {'"': 'quot', "'": 'apos', '<': 'lt', '>': 'gt', '&': 'amp', ' ': 'nbsp'};

	const l = (i) => (e) => {
		e.replaceSelections(
			e.getSelections().map((e) => e.split('\n').map(i).join('\n')),
			'around'
		);
	};

	const K = l((e) =>
		[...e]
			.map((e) => {
				let i;
				return e in q ? `&${q[e]};` : (i = e.codePointAt()) < 256 ? `&#${i};` : `&#x${i.toString(16)};`;
			})
			.join('')
	);

	const J = l((e) => {
		if (e.includes('%'))
			try {
				return decodeURIComponent(e);
			} catch (e) {}
		return encodeURIComponent(e);
	});

	const G = l((i) => {
		try {
			return decodeURIComponent(i.replace(/\.([\da-f]{2})/giu, '%$1'));
		} catch (e) {
			return i;
		}
	});

	const v = ({keyMap: e}) => e.default === e.pcDefault;

	const X = (e) => {
		const i = v(e) ? 'Ctrl' : 'Cmd';
		return {[i + '-/']: K, [i + '-\\']: J, [`Shift-${i}-\\`]: G};
	};

	const j = (g, e) => {
		if (('mediawiki' === e || 'widget' === e) && x.has('contextmenu')) {
			const t = $(g.getWrapperElement()).addClass('CodeMirror-contextmenu'),
				[a] = (mw.config.get('extCodeMirrorConfig') || {
					functionSynonyms: [{invoke: 'invoke', 调用: 'invoke', widget: 'widget', 小工具: 'widget'}],
				})['functionSynonyms'];
			const i = (i) =>
				new Set(
					Object.keys(a)
						.filter((e) => a[e] === i)
						.map((e) => (e.startsWith('#') ? e : '#' + e))
				);
			const u = i('invoke'),
				w = i('widget');
			t.contextmenu(({pageX: e, pageY: i}) => {
				const t = g.coordsChar({left: e, top: i}),
					{line: a, ch: o} = t,
					n = g.getTokenTypeAt(t);
				if (/\bmw-(?:template-name|parserfunction)\b/u.test(n)) {
					const s = g.getLineTokens(a);
					for (let e = s.length - 1; 0 < e; e--) {
						const {type: r, end: d, string: l} = s[e];
						s[e - 1].type === r && ((s[e - 1].end = d), (s[e - 1].string += l), s.splice(e, 1));
					}
					const c = s.findIndex(({start: e, end: i}) => e < o && i >= o),
						m = s[c].string
							.replace(/\u200E/gu, '')
							.replace(/_/gu, ' ')
							.trim();
					if (/\bmw-template-name\b/u.test(n))
						return (
							0 !== (p = new mw.Title(m)).namespace || m.startsWith(':')
								? open(p.getUrl(), '_blank')
								: open(mw.util.getUrl('Template:' + m), '_blank'),
							!1
						);
					if (
						!(c < 2) &&
						/\bmw-parserfunction-delimiter\b/u.test(s[c - 1].type) &&
						/\bmw-parserfunction-name\b/u.test(s[c - 2].type)
					) {
						var p = s[c - 2].string.trim().toLowerCase();
						if (u.has(p)) open(mw.util.getUrl('Module:' + m), '_blank');
						else {
							if (!w.has(p)) return;
							open(mw.util.getUrl('Widget:' + m, {action: 'edit'}), '_blank');
						}
						return !1;
					}
				}
			});
		}
	};

	const C = c.getObject('Wikiplus-highlight-i18n') || {};
	let S;
	C['wphl-version']
		? ((e, i) => {
				const [t, a] = s(e);
				const [o, n] = s(i);
				return t < o || (t === o && a < n);
		  })(C['wphl-version'], i) && (S = e('welcome-upgrade', i, 0))
		: (S = e('welcome'));

	const M =
		{
			zh: 'zh-hans',
			'zh-hans': 'zh-hans',
			'zh-cn': 'zh-hans',
			'zh-my': 'zh-hans',
			'zh-sg': 'zh-hans',
			'zh-hant': 'zh-hant',
			'zh-tw': 'zh-hant',
			'zh-hk': 'zh-hant',
			'zh-mo': 'zh-hant',
			ka: 'ka',
		}[Q] || 'en';

	const Y = `${p}/${o}/i18n/${M}.json`;
	const Z = C['wphl-version'] === t;
	(e = async () => {
		(Z && C['wphl-lang'] === M) ||
			(Object.assign(C, await $.ajax(Y, {dataType: 'json', cache: !0})),
			c.setObject('Wikiplus-highlight-i18n', C)),
			mw.messages.set(C);
	}),
		(t = Promise.all([mw.loader.using('mediawiki.util'), e()]));
	const W = (e) => (0 < e.length ? mw.loader.using(e) : Promise.resolve());

	const ee = (e) =>
		0 < e.length
			? $.ajax(p + '/' + (1 < e.length ? 'combine/' : '') + e.join(), {dataType: 'script', cache: !0})
			: Promise.resolve();

	const ie = async (e, i) => {
		const t = e.filter((e) => !e.includes('/')),
			a = e.filter((e) => e.includes('/'));
		return !0 === i ? (await W(t), ee(a)) : !1 === i ? (await ee(a), W(t)) : Promise.all([W(t), ee(a)]);
	};

	let O;

	const te = (e, i = !1) => {
		let t;
		let a;
		let o;
		let n;
		const s = [];
		for ({option: t, addon: a = t, download: o = Array.isArray(a) ? t : a, only: n} of b)
			(n && i) || t in e.optionHandlers || !ae(a, x) || s.push(w[o]);
		return s;
	};

	const ae = (e, i) => (Array.isArray(e) ? e.some((e) => i.has(e)) : i.has(e));

	const oe = (e) => {
		let i = [];
		let t;
		const a = 'function' == typeof window.CodeMirror;
		const o = a ? window.CodeMirror : {modes: {}, prototype: {}, commands: {}, optionHandlers: {}, helpers: {}};
		if (
			(a || (i.push(d.lib), h) || mw.loader.load(`${p}/${g}/lib/codemirror.min.css`, 'text/css'),
			('mediawiki' !== (e = 'mediawiki' === e && k.config && k.config.tags.html ? 'html' : e) &&
				'widget' !== e) ||
				o.modes.mediawiki ||
				(mw.loader.load(`${p}/${z}/mediawiki.min.css`, 'text/css'), i.push(z + '/mediawiki.min.js')),
			'widget' === e || 'html' === e)
		)
			for (const n of ['css', 'javascript', 'mediawiki', 'htmlmixed', 'xml']) o.modes[n] || (i = i.concat(d[n]));
		else i = i.concat(d[e]);
		return (
			o.prototype.getSearchCursor || !x.has('search') || x.has('wikiEditor') || i.push(w.searchcursor),
			!o.prototype.annotateScrollbar && 'mediawiki' === e && x.has('lint') && i.push(w.annotateScrollbar),
			o.commands.find || !x.has('search') || x.has('wikiEditor') || i.push(w.search),
			!window.wikiparse && 'mediawiki' === e && x.has('lint') && i.push(w.parser),
			!o.optionHandlers.lint &&
				'mediawiki' === e &&
				x.has('lint') &&
				(mw.loader.load(`${p}/${g}/addon/lint/lint.min.css`, 'text/css'), i.push(w.lint)),
			(o.helpers.lint && o.helpers.lint.mediawiki) ||
				'mediawiki' !== e ||
				!x.has('lint') ||
				i.push(w.lintWikitext),
			x.has('wikiEditor') &&
				((t = mw.loader.getState('ext.wikiEditor'))
					? 'ready' !== t && i.push(w.wikiEditor)
					: x.delete('wikiEditor')),
			'ready' !== mw.loader.getState('mediawiki.Title') && x.has('contextmenu') && i.push(w.contextmenu),
			i.push(...te(o)),
			ie(i, a ? void 0 : h)
		);
	};

	const ne = (e) => {
		(r[B] = {config: e, time: Date.now()}), c.setObject('InPageEditMwConfig', r);
	};

	const E = (e) => e.flatMap(({aliases: e, name: i}) => e.map((e) => ({alias: e, name: i})));
	const _ = (e) => Object.fromEntries(e.map(({alias: e, name: i}) => [e.replace(/:$/u, ''), i]));

	const se = (e) => {
		for (const i of ['indicator', 'poem', 'ref', 'tabs', 'tab', 'poll'])
			e.tags[i] && (e.tagModes[i] = 'text/mediawiki');
	};

	const re = async (e, i) => {
		if ('mediawiki' === e || 'widget' === e) {
			h && f && (await i);
			let e = mw.config.get('extCodeMirrorConfig');
			e || f || !Z || (({config: e} = k), se(e), mw.config.set('extCodeMirrorConfig', e));
			const t = e && Object.values(e.functionSynonyms[0]).includes(!0);
			if (!(e && e.redirect && e.img && e.variants) || t) {
				const {
					general: {variants: a},
					magicwords: o,
					extensiontags: n,
					functionhooks: s,
					variables: r,
				} = (
					await new mw.Api().get({
						meta: 'siteinfo',
						siprop: 'general|magicwords' + (e && !t ? '' : '|extensiontags|functionhooks|variables'),
						formatversion: 2,
					})
				)['query'];
				const m = new Set(['msg', 'raw', 'msgnw', 'subst', 'safesubst']);
				if (e && !t) {
					let d;
					let l;
					const [c] = e['functionSynonyms'];
					if (!c.subst)
						for ({alias: d, name: l} of E(o.filter(({name: e}) => m.has(e)))) c[d.replace(/:$/u, '')] = l;
				} else {
					e = {
						tagModes: {pre: 'mw-tag-pre', nowiki: 'mw-tag-nowiki', ref: 'text/mediawiki'},
						tags: Object.fromEntries(n.map((e) => [e.slice(1, -1), !0])),
						urlProtocols: mw.config.get('wgUrlProtocols'),
					};
					const p = new Set([...s, ...r, ...m]),
						g = o.filter(({name: e, aliases: i}) => i.some((e) => /^__.+__$/u.test(e)) || p.has(e)),
						u = E(g.filter((e) => e['case-sensitive'])),
						w = E(g.filter((e) => !e['case-sensitive'])).map(({alias: e, name: i}) => ({
							alias: e.toLowerCase(),
							name: i,
						}));
					(e.doubleUnderscore = [
						_(w.filter(({alias: e}) => /^__.+__$/u.test(e))),
						_(u.filter(({alias: e}) => /^__.+__$/u.test(e))),
					]),
						(e.functionSynonyms = [
							_(w.filter(({alias: e}) => !/^__.+__|^#$/u.test(e))),
							_(u.filter(({alias: e}) => !/^__.+__|^#$/u.test(e))),
						]);
				}
				(e.redirect = o.find(({name: e}) => 'redirect' === e).aliases),
					(e.img = _(E(o.filter(({name: e}) => e.startsWith('img_'))))),
					(e.variants = a ? a.map(({code: e}) => e) : []),
					se(e),
					mw.config.set('extCodeMirrorConfig', e),
					ne(e);
			}
			return e;
		}
	};

	const de = {
		getContents() {
			return O.getValue();
		},
		setContents(e) {
			return O.setValue(e), this;
		},
		getSelection() {
			return O.getSelection();
		},
		setSelection(e) {
			return (
				O.setSelection(O.posFromIndex(e.start), 'end' in e ? O.posFromIndex(e.end) : void 0), O.focus(), this
			);
		},
		replaceSelection(e) {
			return O.replaceSelection(e), this;
		},
		getCaretPosition(e) {
			const i = O.indexFromPos(O.getCursor('from')),
				t = O.indexFromPos(O.getCursor('to'));
			return e.startAndEnd ? [i, t] : i;
		},
		scrollToCaretPosition() {
			return O.scrollIntoView(), this;
		},
	};

	const le = async (e, i) => {
		const n = i
				? 'javascript'
				: await (N.endsWith('/doc')
						? 'mediawiki'
						: 274 !== u && 828 !== u
						? R[U]
						: ((o = 274 === u ? 'Widget' : 'Lua'),
						  await mw.loader.using(['oojs-ui-windows', 'oojs-ui.styles.icons-content']),
						  (await OO.ui.confirm(m('contentmodel'), {
								actions: [{label: o}, {label: 'Wikitext', action: 'accept'}],
						  }))
								? 'mediawiki'
								: o.toLowerCase())),
			t = oe(n),
			[a] = await Promise.all([re(n, t), t]);
		if (!i && x.has('wikiEditor'))
			try {
				'function' == typeof mw.addWikiEditor
					? mw.addWikiEditor(e)
					: (({
							modules: {
								dialogs: {config: d},
							},
					  } = $['wikiEditor']),
					  e.wikiEditor('addModule', {
							...$.wikiEditor.modules.toolbar.config.getDefaultConfig(),
							...d.getDefaultConfig(),
					  }),
					  d.replaceIcons(e));
			} catch (e) {
				x.delete('wikiEditor'), mw.notify('WikiEditor工具栏加载失败。', {type: 'error'}), console.error(e);
			}
		'mediawiki' === n && a.tags.html
			? ((a.tagModes.html = 'htmlmixed'), await oe('html'))
			: 'widget' !== n ||
			  CodeMirror.mimeModes.widget ||
			  CodeMirror.defineMIME('widget', {name: 'htmlmixed', tags: {noinclude: [[null, null, 'mediawiki']]}});
		var o = e.height();
		O && O.toTextArea();
		const s = i || 'json' === U;
		(O = CodeMirror.fromTextArea(
			e[0],
			$.extend(
				{
					inputStyle: 'contenteditable',
					lineNumbers: !/Android\b/u.test(navigator.userAgent),
					lineWrapping: !0,
					mode: n,
					mwConfig: a,
					json: s,
				},
				Object.fromEntries(
					b.map(({option: e, addon: i = e, modes: t, complex: a = (e) => !t || t.has(e)}) => {
						const o = Array.isArray(i) ? i[0] : i;
						return [e, x.has(o) && a(n, s)];
					})
				),
				'mediawiki' === n
					? {extraKeys: x.has('escape') && X(CodeMirror)}
					: {indentUnit: x.has('indentWithSpace') ? y : 4, indentWithTabs: !x.has('indentWithSpace')}
			)
		)).setSize(null, o),
			(O.getWrapperElement().id = 'Wikiplus-CodeMirror'),
			$.fn.textSelection && e.textSelection('register', de);
		let r;
		var d = v(CodeMirror) ? 'Ctrl' : 'Cmd';
		if (x.has('wikiEditor')) {
			const l = e.data('wikiEditorContext');
			O.addKeyMap({
				[d + '-F']() {
					$.wikiEditor.modules.dialogs.api.openDialog(l, 'search-and-replace');
				},
			});
		}
		j(O, n),
			$('#Wikiplus-Quickedit-Jump').children('a').attr('href', '#Wikiplus-CodeMirror'),
			i ||
				((r = ((r = c.getObject('Wikiplus_Settings')) && r.esc_to_exit_quickedit) || r.escToExitQuickEdit),
				O.addKeyMap(
					$.extend(
						{
							[d + '-S']: () => {
								$('#Wikiplus-Quickedit-Submit').triggerHandler('click');
							},
							[`Shift-${d}-S`]: () => {
								$('#Wikiplus-Quickedit-MinorEdit').click(),
									$('#Wikiplus-Quickedit-Submit').triggerHandler('click');
							},
						},
						!0 === r || 'true' === r
							? {
									Esc() {
										$('#Wikiplus-Quickedit-Back').triggerHandler('click');
									},
							  }
							: {}
					)
				)),
			O.refresh(),
			mw.hook('wiki-codemirror').fire(O);
	};

	const ce = document['body'];

	const me =
		(new MutationObserver((e) => {
			const i = $(e.flatMap(({addedNodes: e}) => [...e])).find('#Wikiplus-Quickedit, #Wikiplus-Setting-Input');
			0 < i.length && le(i, 'Wikiplus-Setting-Input' === i.attr('id'));
		}).observe(ce, {childList: !0}),
		$(ce).on('keydown.wphl', '.ui-dialog', function (e) {
			let i;
			'Escape' === e.key &&
				(i = $(this).children('.ui-dialog-content').data('context')) &&
				i.$textarea &&
				'Wikiplus-Quickedit' === i.$textarea.attr('id') &&
				e.stopPropagation();
		}),
		(e) => 'Wikiplus-Quickedit' === e.id || 'Wikiplus-Setting-Input' === e.id);

	($.valHooks.textarea = {
		get(e) {
			return me(e) && O ? O.getValue() : e.value;
		},
		set(e, i) {
			me(e) && O ? O.setValue(i) : (e.value = i);
		},
	}),
		await t;
	let T;
	let A;
	let pe;
	let ge;
	let I;
	let ue;
	let P;
	const we = (e = [...x]) => {
		P.toggle(e.includes('indentWithSpace'));
	};
	t = $(
		mw.util.addPortletLink(
			{minerva: 'page-actions-overflow', moeskin: 'ca-more-actions'}[n] || 'p-cactions',
			'#',
			m('portlet'),
			'wphl-settings'
		)
	).click(async () => {
		T
			? (A.setValue([...x]), I.setValue(y))
			: (await mw.loader.using(['oojs-ui-windows', 'oojs-ui.styles.icons-content']),
			  (T = new OO.ui.MessageDialog({id: 'Wikiplus-highlight-dialog'})),
			  (e = ((e = new OO.ui.WindowManager()).$element.appendTo(ce),
			  e.addWindows([T]),
			  (A = new OO.ui.CheckboxMultiselectInputWidget({
					options: [
						...b.map(({option: e, addon: i = e}) => {
							const t = Array.isArray(i) ? i[0] : i;
							return {data: t, label: a('addon-' + t.toLowerCase())};
						}),
						...['wikiEditor', 'escape', 'contextmenu', 'lint', 'indentWithSpace', 'otherEditors'].map(
							(e) => ({data: e, label: a('addon-' + e.toLowerCase())})
						),
					],
					value: [...x],
			  }).on('change', we)))['checkboxMultiselectWidget']),
			  (pe = e.findItemFromData('search')),
			  (ge = e.findItemFromData('wikiEditor')),
			  (I = new OO.ui.NumberInputWidget({min: 0, value: y})),
			  (ue = new OO.ui.FieldLayout(A, {label: m('addon-label'), notices: [m('addon-notice')], align: 'top'})),
			  (P = new OO.ui.FieldLayout(I, {label: m('addon-indent')})),
			  we(),
			  Object.assign(mw.libs.wphl, {widget: A, indentWidget: I}));
		var e = 'object' == typeof window.Wikiplus || 'object' == typeof window._WikiplusPages;

		var e =
			(pe.setDisabled(!e),
			ge.setDisabled(!e || !mw.loader.getState('ext.wikiEditor')),
			await T.open({
				title: m('addon-title'),
				message: ue.$element.add(P.$element).add($('<p>', {html: m('feedback')})),
				actions: [
					{action: 'reject', label: mw.msg('ooui-dialog-message-reject')},
					{action: 'accept', label: mw.msg('ooui-dialog-message-accept'), flags: 'progressive'},
				],
				size: 'en' === M || 'minerva' === n ? 'medium' : 'small',
			}).closing);

		if ((ue.$element.detach(), P.$element.detach(), 'object' == typeof e && 'accept' === e.action)) {
			e = A.getValue();
			x.clear();
			for (const i of e) x.add(i);
			(y = Number(I.getValue())),
				c.setObject('Wikiplus-highlight-addons', e),
				c.setObject('Wikiplus-highlight-indent', y);
		}
	});
	'minerva' === n && t.find('.mw-ui-icon').addClass('mw-ui-icon-minerva-settings'),
		'function' == typeof S &&
			S()
				.find('#wphl-settings-notify')
				.click((e) => {
					e.preventDefault(), $('#wphl-settings').triggerHandler('click');
				});
	const L = async (e) => {
		if (x.has('otherEditors')) {
			let i = 'text/mediawiki' === (i = e.getOption('mode')) ? 'mediawiki' : i;
			const t = te(CodeMirror, !0);
			const a = e.getOption('json');

			const {
				prototype: o,
				optionHandlers: n,
				helpers: {lint: s},
			} = CodeMirror;

			!o.annotateScrollbar && 'mediawiki' === i && x.has('lint') && t.push(w.annotateScrollbar),
				!window.wikiparse && 'mediawiki' === i && x.has('lint') && t.push(w.parser),
				!n.lint &&
					'mediawiki' === i &&
					x.has('lint') &&
					(mw.loader.load(`${p}/${g}/addon/lint/lint.min.css`, 'text/css'), t.push(w.lint)),
				(s && s.mediawiki) || 'mediawiki' !== i || !x.has('lint') || t.push(w.lintWikitext),
				await ie(t);
			for (const {option: d, addon: l = d, modes: c, complex: m = (e) => !c || c.has(e)} of b.filter(
				({only: e}) => !e
			)) {
				const r = Array.isArray(l) ? l[0] : l;
				void 0 === e.getOption(d) && x.has(r) && e.setOption(d, m(i, a));
			}
			'mediawiki' === i && x.has('escape')
				? e.addKeyMap(X(CodeMirror), !0)
				: 'mediawiki' !== i &&
				  x.has('indentWithSpace') &&
				  (e.setOption('indentUnit', y), e.setOption('indentWithTabs', !1)),
				j(e, i);
		}
	};
	mw.hook('InPageEdit.quickEdit.codemirror').add(({cm: e}) => L(e)),
		mw.hook('inspector').add((e) => L(e)),
		mw.hook('wiki-codemirror').add((e) => {
			(e.getTextArea && me(e.getTextArea())) || L(e);
		}),
		mw.loader.load(p + `/${o}/styles.min.css`, 'text/css'),
		Object.assign(mw.libs.wphl, {
			version: i,
			options: b,
			addons: x,
			i18n: C,
			i18nLang: M,
			storage: c,
			$portlet: t,
			CDN: p,
			PARSER_CDN: D,
			USING_LOCAL: h,
			MODE_LIST: d,
			ADDON_LIST: w,
			msg: m,
			htmlMsg: a,
			escapeHTML: K,
			handleContextMenu: j,
			setI18N: e,
			getAddonScript: te,
			updateCachedConfig: ne,
			getMwConfig: re,
			renderEditor: le,
			handleOtherEditors: L,
			isPc: v,
		});
})();