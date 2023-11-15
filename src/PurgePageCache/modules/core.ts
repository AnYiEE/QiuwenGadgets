import {ding, initMwApi} from '../../util';
import {getMessage} from './i18n';

export const purgePageCache = (): void => {
	const purgePageCacheMain = (event: Event, title: string): void => {
		event.preventDefault();
		ding(getMessage('Purging'), false);
		const api: mw.Api = initMwApi(`Qiuwen/1.1 (PurgePageCache/1.1; ${mw.config.get('wgWikiID')})`);
		const params: ApiPurgeParams = {
			action: 'purge',
			format: 'json',
			formatversion: '2',
			titles: title,
			forcelinkupdate: true,
		};
		api.post(params)
			.then((): void => {
				localStorage.removeItem(`MediaWikiModuleStore:${mw.config.get('wgWikiID')}`);
				location.reload();
			})
			.catch((error: never): void => {
				console.error('[PurgePageCache] Ajax error:', error);
				ding(getMessage('Failed'), false, 'error');
			});
	};

	const element: HTMLLIElement | null = mw.util.addPortletLink(
		document.getElementById('p-cactions') ? 'p-cactions' : 'p-tb',
		'#',
		getMessage('Purge'),
		'ca-purge',
		getMessage('PurgeFromServer')
	);
	element?.querySelector('a')?.addEventListener('click', (event: MouseEvent): void => {
		purgePageCacheMain(event, mw.config.get('wgPageName'));
	});

	Array.prototype.forEach.call(
		document.querySelectorAll('a[href*="action=purge"]'),
		(_element: HTMLAnchorElement): void => {
			const title: string = mw.util.getParamValue('title', _element.href) ?? mw.config.get('wgPageName');
			_element.addEventListener('click', (event: MouseEvent): void => {
				purgePageCacheMain(event, title);
			});
		}
	);
};