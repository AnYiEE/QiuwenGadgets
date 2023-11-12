import {getMessage} from './i18n';

const collapseCaption = getMessage('Hide');
const expandCaption = getMessage('Show');
const navigationBarHide = `<span title="${collapseCaption}" class="oo-ui-indicatorElement-indicator oo-ui-indicator-up" role="button" tabindex="0"></span>`;
const navigationBarShow = `<span title="${expandCaption}" class="oo-ui-indicatorElement-indicator oo-ui-indicator-down" role="button" tabindex="0"></span>`;

/**
 * Shows and hides content and picture (if available) of navigation bars.
 *
 * @param {number} indexNavigationBar The index of navigation bar to be toggled
 * @return {false | void}
 */
const toggleNavigationBar = (indexNavigationBar: number): false | void => {
	const $toggle: JQuery = $(`#NavToggle${indexNavigationBar}`);
	const $frame: JQuery = $(`#NavFrame${indexNavigationBar}`);
	if (!$frame || !$toggle) {
		return false;
	}
	const isFrameCollapsed: boolean = $frame.hasClass('collapsed');
	if (isFrameCollapsed) {
		$frame.find('> .NavPic, > .NavContent, > .toogleShow').each((_index: number, element: HTMLElement): void => {
			$(element).css('display', 'block');
		});
		$frame.find('> .toggleHide').each((_index: number, element: HTMLElement): void => {
			$(element).css('display', 'none');
		});
		$toggle.html(navigationBarHide);
		$frame.removeClass('collapsed');
	} else {
		$frame.find('> .NavPic, > .NavContent, > .toogleShow').each((_index: number, element: HTMLElement): void => {
			$(element).css('display', 'none');
		});
		$frame.find('> .toggleHide').each((_index: number, element: HTMLElement): void => {
			$(element).css('display', 'block');
		});
		$toggle.html(navigationBarShow);
		$frame.addClass('collapsed');
	}
};

/**
 * Adds show/hide-button to navigation bars.
 *
 * @param {JQuery} $content
 */
const createNavigationBarToggleButton = ($content: JQuery): void => {
	// Iterate over all (new) nav frames
	$content.find('div.NavFrame').each((indexNavigationBar: number, frameElement: HTMLElement): void => {
		const $frame = $(frameElement).attr('id', `NavFrame${indexNavigationBar}`);
		// If found a navigation bar
		const $navToggle: JQuery = $('<span>').addClass('NavToggle').attr('id', `NavToggle${indexNavigationBar}`);
		$frame.find('> .NavHead').each((_index: number, element: HTMLElement): false => {
			$(element).on('click', toggleNavigationBar.bind(undefined, indexNavigationBar));
			return false;
		});
		if ($frame.hasClass('collapsed')) {
			$frame
				.find('> .NavPic, > .NavContent, > .toggleHide')
				.each((_index: number, element: HTMLElement): void => {
					$(element).css('display', 'none');
				});
		} else {
			$frame.find('> .toggleShow').each((_index: number, element: HTMLElement): void => {
				$(element).css('display', 'none');
			});
		}
		let showNavigationBarHide = true;
		$frame.find('> .NavPic, > .NavContent').each((_index: number, element: HTMLElement): false | void => {
			if ($(element).css('display') === 'none') {
				showNavigationBarHide = false;
				return false;
			}
		});
		$navToggle.html(showNavigationBarHide ? navigationBarHide : navigationBarShow);
		$frame.find('> .NavHead').each((_index: number, element: HTMLElement): false => {
			$(element).append($navToggle);
			return false;
		});
	});
};

export const navFrameLoad = (): void => {
	mw.hook('wikipage.content').add(createNavigationBarToggleButton);
};