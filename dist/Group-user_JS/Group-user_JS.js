/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-SousPages.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-CleanDeleteReasons.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Group-user_JS}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/Group-user_JS/Group-user_JS.js
//! src/Group-user_JS/modules/constant.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var WG_ACTION = mw.config.get("wgAction");
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName");
var WG_CATEGORIES = mw.config.get("wgCategories");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/Group-user_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Log: (0, import_ext_gadget.localize)({
      en: "Log",
      ja: "ログ",
      "zh-hans": "日志",
      "zh-hant": "日誌"
    }),
    Subpages: (0, import_ext_gadget.localize)({
      en: "Subpage",
      ja: "子ページ",
      "zh-hans": "子页面",
      "zh-hant": "子頁面"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Group-user_JS/modules/addSubpageAndLog.ts
var addLog = () => {
  if ([-1, 2, 3].includes(WG_NAMESPACE_NUMBER)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:Logs", {
    page: WG_PAGE_NAME
  }), getMessage("Log"), "t-log");
};
var addSubpage = () => {
  if ([-1, 0, 14].includes(WG_NAMESPACE_NUMBER)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:PrefixIndex/".concat(WG_PAGE_NAME)), getMessage("Subpages"), "t-subpage");
};
//! src/Group-user_JS/modules/fixSummary.ts
var fixSummary = ($body) => {
  switch (WG_CANONICAL_SPECIAL_PAGE_NAME) {
    case "FileImporter-SpecialPage":
      $body.find("input[name=intendedRevisionSummary]").val("导入自[[commons:File:".concat($body.find("h2.mw-importfile-header-title").html(), "|此处]]［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；文件许可请参见页面描述］"));
      break;
    case "Import":
      $body.find("input[name=usernamePrefix]").val("zhwiki");
      $body.find("#mw-import-upload-form input[name=log-comment]").val("导入自[[zhwiki:|此网站]]的同名页面［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]］");
      $body.find("#mw-import-interwiki-form input[name=log-comment]").val("［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史］");
      $body.find("input[name=assignKnownUsers]").prop("checked", true);
      break;
    case "MassEditRegex":
      $body.find("#wpSummaryLabel").html($body.find("#wpSummaryLabel").text().replace(/\[\[#\.\|(.+?)]]/g, "$1"));
      break;
    case "ReplaceText":
      $body.find("input[name=doAnnounce]").prop({
        checked: false,
        disabled: true
      });
      break;
  }
  if (WG_ACTION === "delete") {
    const $wpReason = $body.find("#wpReason");
    if (!$wpReason.length) {
      return;
    }
    const autoSummaryRegExp = /(内容|page was empty|content before blanking was)/i;
    if (autoSummaryRegExp.test(String($wpReason.val()))) {
      $wpReason.val("");
    }
  }
};
//! src/Group-user_JS/Group-user_JS.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Group-user_JS/modules/linkSearchEditButton.ts
var linkSearchEditButton = ($body) => {
  if (mw.config.get("wgCanonicalSpecialPageName") !== "LinkSearch") {
    return;
  }
  var _iterator = _createForOfIteratorHelper($body.find('.mw-spcontent a[href^="/wiki"]')), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      $("<span>").append(" （", $("<a>").attr("href", "".concat(element.href, "?action=edit")).text(getMessage("Edit")), "）").insertAfter(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/Group-user_JS/modules/loadGadgetEditForm.ts
var usingEditFormJS = () => {
  void mw.loader.using(["ext.gadget.EditForm", "ext.gadget.EditForm_JS"]);
};
var loadGadgetEditForm = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
      usingEditFormJS();
    } else {
      yield mw.loader.using("ext.visualEditor.desktopArticleTarget.init");
      mw.libs["ve"].addPlugin(() => {
        usingEditFormJS();
      });
    }
  });
  return function loadGadgetEditForm2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/Group-user_JS/modules/smartEditIntro.ts
var smartEditIntro = ($body) => {
  if (!WG_CATEGORIES) {
    return;
  }
  const $target = $body.find(".mw-editsection, #ca-edit, #ca-addsection").find("a");
  const addEditIntro = (name) => {
    var _iterator2 = _createForOfIteratorHelper($target), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const element = _step2.value;
        element.href = "".concat(element.href, "&editintro=").concat(name);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  switch (WG_NAMESPACE_NUMBER) {
    case 0:
      if (WG_CATEGORIES.includes("全部消歧义页面")) {
        addEditIntro("Template:Disambig_editintro");
      }
      if (WG_CATEGORIES.includes("在世人物")) {
        addEditIntro("Template:BLP_editintro");
      }
      if (WG_CATEGORIES.some((element) => {
        return /抗日?[战戰][争爭]?[牺犧]牲|烈士|[战戰][斗鬥鬦]英雄|英雄?模[範范]?|英雄?烈士?|人民(教育家|[艺藝][术術]家|科[学學]家|英雄|楷模)|共和[国國][勋勳]章|[七八]一[勋勳]章[獲获]得者|[一特]等功臣/.test(element);
      })) {
        addEditIntro("Template:BLP_editintro");
      }
      break;
    case 4:
      if (WG_CATEGORIES.includes("求闻百科方针完整列表")) {
        addEditIntro("Template:Policy_editintro");
      }
      break;
    case 8:
    case 12: {
      if (WG_CATEGORIES.includes("CC-BY-NC-SA-4.0")) {
        addEditIntro("Template:NonCommercial_editintro");
      }
      if (WG_CATEGORIES.includes("GPL-3.0")) {
        addEditIntro("Template:GPL-3.0_editintro");
      }
      if (WG_CATEGORIES.includes("GPL-2.0-or-later")) {
        addEditIntro("Template:GPL-2.0-or-later_editintro");
      }
      if (WG_CATEGORIES.includes("MIT许可证")) {
        addEditIntro("Template:MIT_editintro");
      }
      const $copywarn = $body.find("#editpage-copywarn");
      const $editintro = $body.find(".mw-editintro");
      if (IS_WG_EDIT_OR_SUBMIT_ACTION && $copywarn && $editintro) {
        $editintro.appendTo($copywarn);
      }
      break;
    }
  }
};
//! src/Group-user_JS/modules/smartNewSection.ts
var smartNewSection = ($body) => {
  if (!mw.user.options.get("discussiontools-newtopictool") || !mw.user.options.get("discussiontools-betaenable")) {
    const $caTalk = $body.find("#ca-talk");
    if ($caTalk.hasClass("new") && WG_NAMESPACE_NUMBER !== 2) {
      const $a = $("a:first", $caTalk);
      $a.attr("href", "".concat($a.attr("href"), "&section=new"));
    }
  }
};
//! src/Group-user_JS/Group-user_JS.ts
(function userJS() {
  if (mw.config.get("wgUserJSInstalled")) {
    return;
  }
  mw.config.set("wgUserJSInstalled", true);
  void loadGadgetEditForm();
  void (0, import_ext_gadget2.getBody)().then(($body) => {
    addLog();
    addSubpage();
    fixSummary($body);
    linkSearchEditButton($body);
    smartEditIntro($body);
    smartNewSection($body);
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9hZGRTdWJwYWdlQW5kTG9nLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvZml4U3VtbWFyeS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9Hcm91cC11c2VyX0pTLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvbGlua1NlYXJjaEVkaXRCdXR0b24udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9sb2FkR2FkZ2V0RWRpdEZvcm0udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9zbWFydEVkaXRJbnRyby50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3NtYXJ0TmV3U2VjdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfQUNUSU9OOiBNZWRpYVdpa2lDb25maWdNYXBXZ0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5jb25zdCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUU6IHN0cmluZyB8IGZhbHNlID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKTtcbmNvbnN0IFdHX0NBVEVHT1JJRVM6IHN0cmluZ1tdID0gbXcuY29uZmlnLmdldCgnd2dDYXRlZ29yaWVzJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1xuXHRJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19DQVRFR09SSUVTLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZycsXG5cdFx0XHRqYTogJ+ODreOCsCcsXG5cdFx0XHQnemgtaGFucyc6ICfml6Xlv5cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pel6KqMJyxcblx0XHR9KSxcblx0XHRTdWJwYWdlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdWJwYWdlJyxcblx0XHRcdGphOiAn5a2Q44Oa44O844K4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtkOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZDpoIHpnaInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVIsIFdHX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZExvZyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFstMSwgMiwgM10uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLXRiJyxcblx0XHRtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2dzJywge1xuXHRcdFx0cGFnZTogV0dfUEFHRV9OQU1FLFxuXHRcdH0pLFxuXHRcdGdldE1lc3NhZ2UoJ0xvZycpLFxuXHRcdCd0LWxvZydcblx0KTtcbn07XG5cbi8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuY29uc3QgYWRkU3VicGFnZSA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFstMSwgMCwgMTRdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC10YicsXG5cdFx0bXcudXRpbC5nZXRVcmwoYFNwZWNpYWw6UHJlZml4SW5kZXgvJHtXR19QQUdFX05BTUV9YCksXG5cdFx0Z2V0TWVzc2FnZSgnU3VicGFnZXMnKSxcblx0XHQndC1zdWJwYWdlJ1xuXHQpO1xufTtcblxuZXhwb3J0IHthZGRMb2csIGFkZFN1YnBhZ2V9O1xuIiwgImltcG9ydCB7V0dfQUNUSU9OLCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBmaXhTdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRzd2l0Y2ggKFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSkge1xuXHRcdGNhc2UgJ0ZpbGVJbXBvcnRlci1TcGVjaWFsUGFnZSc6XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnaW5wdXRbbmFtZT1pbnRlbmRlZFJldmlzaW9uU3VtbWFyeV0nKVxuXHRcdFx0XHQudmFsKFxuXHRcdFx0XHRcdGDlr7zlhaXoh6pbW2NvbW1vbnM6RmlsZTokeyRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnaDIubXctaW1wb3J0ZmlsZS1oZWFkZXItdGl0bGUnKVxuXHRcdFx0XHRcdFx0Lmh0bWwoKX185q2k5aSEXV3vvLvpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+aWh+S7tuiuuOWPr+ivt+WPguingemhtemdouaPj+i/sO+8vWBcblx0XHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0ltcG9ydCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXVzZXJuYW1lUHJlZml4XScpLnZhbCgnemh3aWtpJyk7XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnI213LWltcG9ydC11cGxvYWQtZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XScpXG5cdFx0XHRcdC52YWwoJ+WvvOWFpeiHqltbemh3aWtpOnzmraTnvZHnq5ldXeeahOWQjOWQjemhtemdou+8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77y9Jyk7XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnI213LWltcG9ydC1pbnRlcndpa2ktZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XScpXG5cdFx0XHRcdC52YWwoJ++8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+y77y9Jyk7XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWFzc2lnbktub3duVXNlcnNdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnTWFzc0VkaXRSZWdleCc6XG5cdFx0XHQkYm9keS5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKS5odG1sKFxuXHRcdFx0XHQkYm9keVxuXHRcdFx0XHRcdC5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKVxuXHRcdFx0XHRcdC50ZXh0KClcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbI1xcLlxcfCguKz8pXV0vZywgJyQxJylcblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdSZXBsYWNlVGV4dCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWRvQW5ub3VuY2VdJykucHJvcCh7XG5cdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRpZiAoV0dfQUNUSU9OID09PSAnZGVsZXRlJykge1xuXHRcdGNvbnN0ICR3cFJlYXNvbjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3dwUmVhc29uJyk7XG5cdFx0aWYgKCEkd3BSZWFzb24ubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYXV0b1N1bW1hcnlSZWdFeHA6IFJlZ0V4cCA9IC8o5YaF5a65fHBhZ2Ugd2FzIGVtcHR5fGNvbnRlbnQgYmVmb3JlIGJsYW5raW5nIHdhcykvaTtcblx0XHRpZiAoYXV0b1N1bW1hcnlSZWdFeHAudGVzdChTdHJpbmcoJHdwUmVhc29uLnZhbCgpKSkpIHtcblx0XHRcdCR3cFJlYXNvbi52YWwoJycpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtmaXhTdW1tYXJ5fTtcbiIsICJpbXBvcnQge2FkZExvZywgYWRkU3VicGFnZX0gZnJvbSAnLi9tb2R1bGVzL2FkZFN1YnBhZ2VBbmRMb2cnO1xuaW1wb3J0IHtmaXhTdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvZml4U3VtbWFyeSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2xpbmtTZWFyY2hFZGl0QnV0dG9ufSBmcm9tICcuL21vZHVsZXMvbGlua1NlYXJjaEVkaXRCdXR0b24nO1xuaW1wb3J0IHtsb2FkR2FkZ2V0RWRpdEZvcm19IGZyb20gJy4vbW9kdWxlcy9sb2FkR2FkZ2V0RWRpdEZvcm0nO1xuaW1wb3J0IHtzbWFydEVkaXRJbnRyb30gZnJvbSAnLi9tb2R1bGVzL3NtYXJ0RWRpdEludHJvJztcbmltcG9ydCB7c21hcnROZXdTZWN0aW9ufSBmcm9tICcuL21vZHVsZXMvc21hcnROZXdTZWN0aW9uJztcblxuKGZ1bmN0aW9uIHVzZXJKUygpOiB2b2lkIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnVXNlckpTSW5zdGFsbGVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0bXcuY29uZmlnLnNldCgnd2dVc2VySlNJbnN0YWxsZWQnLCB0cnVlKTtcblxuXHQvKiDliqDovb3nvJbovpHnlYzpnaLohJrmnKwgKi9cblx0dm9pZCBsb2FkR2FkZ2V0RWRpdEZvcm0oKTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQvKiDlkJHkvqfovrnmoI/mt7vliqDigJzml6Xlv5figJ3oj5zljZUgKi9cblx0XHRhZGRMb2coKTtcblx0XHQvKiDlkJHkvqfovrnmoI/mt7vliqDigJzlrZDpobXpnaLigJ3oj5zljZUgKi9cblx0XHRhZGRTdWJwYWdlKCk7XG5cdFx0Lyog5L+u5pS557yW6L6R5pGY6KaBICovXG5cdFx0Zml4U3VtbWFyeSgkYm9keSk7XG5cdFx0Lyog5ZyoW1tTcGVjaWFsOkxpbmtTZWFyY2hdXeaYvuekuuKAnOe8lui+keKAneaMiemSriAqL1xuXHRcdGxpbmtTZWFyY2hFZGl0QnV0dG9uKCRib2R5KTtcblx0XHQvKiDnvJbovpHmj5DnpLrvvIhFZGl0SW50cm/vvIkgKi9cblx0XHRzbWFydEVkaXRJbnRybygkYm9keSk7XG5cdFx0Lyog5pm66IO96K6o6K666aG157yW6L6R77yI5paw5bu677yJICovXG5cdFx0c21hcnROZXdTZWN0aW9uKCRib2R5KTtcblx0fSk7XG59KSgpO1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuZXhwb3J0IGNvbnN0IGxpbmtTZWFyY2hFZGl0QnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKSAhPT0gJ0xpbmtTZWFyY2gnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCcubXctc3Bjb250ZW50IGFbaHJlZl49XCIvd2lraVwiXScpKSB7XG5cdFx0JCgnPHNwYW4+Jylcblx0XHRcdC5hcHBlbmQoJyDvvIgnLCAkKCc8YT4nKS5hdHRyKCdocmVmJywgYCR7ZWxlbWVudC5ocmVmfT9hY3Rpb249ZWRpdGApLnRleHQoZ2V0TWVzc2FnZSgnRWRpdCcpKSwgJ++8iScpXG5cdFx0XHQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT059IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCB1c2luZ0VkaXRGb3JtSlMgPSAoKTogdm9pZCA9PiB7XG5cdHZvaWQgbXcubG9hZGVyLnVzaW5nKFsnZXh0LmdhZGdldC5FZGl0Rm9ybScsICdleHQuZ2FkZ2V0LkVkaXRGb3JtX0pTJ10pO1xufTtcblxuY29uc3QgbG9hZEdhZGdldEVkaXRGb3JtID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRpZiAoSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OKSB7XG5cdFx0dXNpbmdFZGl0Rm9ybUpTKCk7XG5cdH0gZWxzZSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmRlc2t0b3BBcnRpY2xlVGFyZ2V0LmluaXQnKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRtdy5saWJzWyd2ZSddLmFkZFBsdWdpbigoKTogdm9pZCA9PiB7XG5cdFx0XHR1c2luZ0VkaXRGb3JtSlMoKTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtsb2FkR2FkZ2V0RWRpdEZvcm19O1xuIiwgImltcG9ydCB7SVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OLCBXR19DQVRFR09SSUVTLCBXR19OQU1FU1BBQ0VfTlVNQkVSfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3Qgc21hcnRFZGl0SW50cm8gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmICghV0dfQ0FURUdPUklFUykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYm9keS5maW5kKCcubXctZWRpdHNlY3Rpb24sICNjYS1lZGl0LCAjY2EtYWRkc2VjdGlvbicpLmZpbmQoJ2EnKTtcblx0Y29uc3QgYWRkRWRpdEludHJvID0gKG5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkdGFyZ2V0KSB7XG5cdFx0XHRlbGVtZW50LmhyZWYgPSBgJHtlbGVtZW50LmhyZWZ9JmVkaXRpbnRybz0ke25hbWV9YDtcblx0XHR9XG5cdH07XG5cblx0c3dpdGNoIChXR19OQU1FU1BBQ0VfTlVNQkVSKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ+WFqOmDqOa2iOatp+S5iemhtemdoicpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6RGlzYW1iaWdfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygn5Zyo5LiW5Lq654mpJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpCTFBfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdFdHX0NBVEVHT1JJRVMuc29tZSgoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIC/mipfml6U/W+aImOaIsF1b5LqJ54itXT9b54m654qnXeeJsnzng4jlo6t8W+aImOaIsF1b5paX6ayl6aymXeiLsembhHzoi7Hpm4Q/5qihW+evhOiMg10/fOiLsembhD/ng4jlo6s/fOS6uuawkSjmlZnogrLlrrZ8W+iJuuiXnV1b5pyv6KGTXeWutnznp5Fb5a2m5a24XeWutnzoi7Hpm4R85qW35qihKXzlhbHlkoxb5Zu95ZyLXVvli4vli7Nd56ugfFvkuIPlhatd5LiAW+WLi+WLs13nq6Bb542y6I63XeW+l+iAhXxb5LiA54m5XeetieWKn+iHoy8udGVzdChcblx0XHRcdFx0XHRcdGVsZW1lbnRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6QkxQX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ+axgumXu+eZvuenkeaWuemSiOWujOaVtOWIl+ihqCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6UG9saWN5X2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA4OlxuXHRcdGNhc2UgMTI6IHtcblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCdDQy1CWS1OQy1TQS00LjAnKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOk5vbkNvbW1lcmNpYWxfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygnR1BMLTMuMCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6R1BMLTMuMF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCdHUEwtMi4wLW9yLWxhdGVyJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpHUEwtMi4wLW9yLWxhdGVyX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ01JVOiuuOWPr+ivgScpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6TUlUX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgJGNvcHl3YXJuOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjZWRpdHBhZ2UtY29weXdhcm4nKTtcblx0XHRcdGNvbnN0ICRlZGl0aW50cm86IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5tdy1lZGl0aW50cm8nKTtcblx0XHRcdGlmIChJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04gJiYgJGNvcHl3YXJuICYmICRlZGl0aW50cm8pIHtcblx0XHRcdFx0JGVkaXRpbnRyby5hcHBlbmRUbygkY29weXdhcm4pO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3NtYXJ0RWRpdEludHJvfTtcbiIsICJpbXBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBzbWFydE5ld1NlY3Rpb24gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmICghbXcudXNlci5vcHRpb25zLmdldCgnZGlzY3Vzc2lvbnRvb2xzLW5ld3RvcGljdG9vbCcpIHx8ICFtdy51c2VyLm9wdGlvbnMuZ2V0KCdkaXNjdXNzaW9udG9vbHMtYmV0YWVuYWJsZScpKSB7XG5cdFx0Y29uc3QgJGNhVGFsazogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2NhLXRhbGsnKTtcblx0XHRpZiAoJGNhVGFsay5oYXNDbGFzcygnbmV3JykgJiYgV0dfTkFNRVNQQUNFX05VTUJFUiAhPT0gMikge1xuXHRcdFx0Y29uc3QgJGE6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKCdhOmZpcnN0JywgJGNhVGFsayk7XG5cdFx0XHQkYS5hdHRyKCdocmVmJywgYCR7JGEuYXR0cignaHJlZicpfSZzZWN0aW9uPW5ld2ApO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtzbWFydE5ld1NlY3Rpb259O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyxpQ0FBaURILEdBQUdDLE9BQU9DLElBQUksNEJBQTRCO0FBQ2pHLElBQU1FLGdCQUEwQkosR0FBR0MsT0FBT0MsSUFBSSxjQUFjO0FBQzVELElBQU1HLHNCQUE4QkwsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUI7QUFDckUsSUFBTUksZUFBdUJOLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUV2RCxJQUFNSyw4QkFBdUMsQ0FBQyxRQUFRLFFBQVEsRUFBRUMsU0FBU1QsU0FBUzs7QUNObEYsSUFBQVUsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE9BQUEsR0FBTUgsa0JBQUFJLFVBQVM7TUFDZEMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLE1BQUEsR0FBS1Asa0JBQUFJLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNY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UUMsU0FBUyxLQUFLLEtBQUtoRix3QkFBd0IsR0FBRztBQUN6RCxZQUFNaUYsS0FBZ0NqQyxFQUFFLFdBQVcrQixPQUFPO0FBQzFERSxTQUFHL0IsS0FBSyxRQUFBLEdBQUE1QixPQUFXMkQsR0FBRy9CLEtBQUssTUFBTSxHQUFDLGNBQUEsQ0FBYztJQUNqRDtFQUNEO0FBQ0Q7O0NKRkMsU0FBU2dDLFNBQWU7QUFDeEIsTUFBSXZGLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLEdBQUc7QUFDdkM7RUFDRDtBQUNBRixLQUFHQyxPQUFPdUYsSUFBSSxxQkFBcUIsSUFBSTtBQUd2QyxPQUFLeEIsbUJBQW1CO0FBRXhCLFFBQUEsR0FBS3JCLG1CQUFBOEMsU0FBUSxFQUFFQyxLQUFNN0QsV0FBeUM7QUFFN0RSLFdBQU87QUFFUEssZUFBVztBQUVYRSxlQUFXQyxLQUFLO0FBRWhCZSx5QkFBcUJmLEtBQUs7QUFFMUIwQyxtQkFBZTFDLEtBQUs7QUFFcEJvRCxvQkFBZ0JwRCxLQUFLO0VBQ3RCLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUiLCAiV0dfQ0FURUdPUklFUyIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIldHX1BBR0VfTkFNRSIsICJJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04iLCAiaW5jbHVkZXMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiRWRpdCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJMb2ciLCAiU3VicGFnZXMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFkZExvZyIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImdldFVybCIsICJwYWdlIiwgImFkZFN1YnBhZ2UiLCAiY29uY2F0IiwgImZpeFN1bW1hcnkiLCAiJGJvZHkiLCAiZmluZCIsICJ2YWwiLCAiaHRtbCIsICJwcm9wIiwgInRleHQiLCAicmVwbGFjZSIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgIiR3cFJlYXNvbiIsICJsZW5ndGgiLCAiYXV0b1N1bW1hcnlSZWdFeHAiLCAidGVzdCIsICJTdHJpbmciLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImxpbmtTZWFyY2hFZGl0QnV0dG9uIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIiQiLCAiYXBwZW5kIiwgImF0dHIiLCAiaHJlZiIsICJpbnNlcnRBZnRlciIsICJlcnIiLCAiZSIsICJmIiwgInVzaW5nRWRpdEZvcm1KUyIsICJsb2FkZXIiLCAidXNpbmciLCAibG9hZEdhZGdldEVkaXRGb3JtIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAibGlicyIsICJhZGRQbHVnaW4iLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInNtYXJ0RWRpdEludHJvIiwgIiR0YXJnZXQiLCAiYWRkRWRpdEludHJvIiwgIm5hbWUiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAic29tZSIsICIkY29weXdhcm4iLCAiJGVkaXRpbnRybyIsICJhcHBlbmRUbyIsICJzbWFydE5ld1NlY3Rpb24iLCAidXNlciIsICJvcHRpb25zIiwgIiRjYVRhbGsiLCAiaGFzQ2xhc3MiLCAiJGEiLCAidXNlckpTIiwgInNldCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==