const getI18nMessages = () => {
	const {localize} = i18n;

	return {
		Edit: localize({
			en: 'Edit',
			'zh-hans': '编辑',
			'zh-hant': '編輯',
		}),
		Log: localize({
			en: 'Log',
			ja: '折り畳み',
			'zh-hans': '日志',
			'zh-hant': '日誌',
		}),
		Subpages: localize({
			en: 'Subpage',
			'zh-hans': '子页面',
			'zh-hant': '子頁面',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};