/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Editform_Patch2017}
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

// dist/Editform_Patch2017/Editform_Patch2017.js
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
//! src/Editform_Patch2017/Editform_Patch2017.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Editform_Patch2017/options.json
var dialogLicenseId = "ve-ui-mwSaveDialog-license";
var targetClass = "ve-ui-mwSaveDialog-checkboxes";
//! src/Editform_Patch2017/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    minoredit: (0, import_ext_gadget.localize)({
      en: "This is a minor edit",
      "zh-hans": "这是一次小编辑",
      "zh-hant": "這是次要編輯"
    }),
    watchthis: (0, import_ext_gadget.localize)({
      en: "Watch this page",
      "zh-hans": "监视此页面",
      "zh-hant": "監視此頁面"
    }),
    copyrightwarning: (0, import_ext_gadget.localize)({
      en: '<p>By clicking the "Save page" or "Save changes" button, you agree to the <i><a href="/wiki/QW:TOS" title="Terms of Use">Terms of Use</a></i>, <i><a href="/wiki/QW:GTGL" title="Common Program">Common Program</a></i>, and the <i><a href="/wiki/Qiuwen:CP" title="Copyright Policy">Copyright Policy</a></i>. You agree to released all your contributions under the <i><a href="/wiki/Qiuwen:CC-BY-SA-4.0" title="Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)">Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</a></i>. You promise to us that the content you submit does not involve in copyright infringement or infringement on legitimate rights and interests of others.<br><b>If you do not agree to terms and policies mentioned above, please do not submit your work.</b></p>',
      "zh-hans": '<p>点击“<b>保存页面</b>”或“<b>保存更改</b>”按钮，即表示您<b>同意</b>《<b><a href="/wiki/QW:TOS" title="求闻百科用户协议">求闻百科用户协议</a></b>》、《<b><a href="/wiki/QW:GTGL" title="求闻百科共同纲领">求闻百科共同纲领</a></b>》及本网站<b><a href="/wiki/Qiuwen:CP" title="著作权方针">著作权方针</a></b>，<b>同意</b>依据<b><a href="/wiki/Help:CC-BY-SA-4.0" title="知识共享 署名—相同方式共享 4.0 协议国际版">CC-BY-SA 4.0</a></b>协议授权他人使用您所发布的内容，并<b>承诺</b>所提交的内容不侵犯他人的著作权及其他合法权益。<br>若您不同意《用户协议》、《共同纲领》或本网站著作权方针，请勿点击按钮发布内容。</p>',
      "zh-hant": '<p>點擊“<b>儲存頁面</b>”或“<b>儲存變更</b>”按鈕，即表示您<b>同意</b>《<b><a href="/wiki/QW:TOS" title="求聞百科用戶協議">求聞百科用戶協議</a></b>》、《<b><a href="/wiki/QW:GTGL" title="求聞百科共同綱領">求聞百科共同綱領</a></b>》及本網站<b><a href="/wiki/Qiuwen:CP" title="著作權方針">著作權方針</a></b>，<b>同意</b>依據<b><a href="/wiki/Help:CC-BY-SA-4.0" title="創用CC 姓名標示─相同方式分享 4.0 國際">CC-BY-SA 4.0</a></b>協議授權他人使用您所發布的內容，並<b>承諾</b>所提交的內容不侵犯他人的著作權及其他合法權益。<br>若您不同意《用戶協議》、《共同綱領》或本網站著作權方針，請勿點擊按鈕發布內容。</p>'
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var setMessages = () => {
  mw.messages.set({
    minoredit: getMessage("minoredit"),
    watchthis: getMessage("watchthis")
  });
};
//! src/Editform_Patch2017/modules/processVisualEditor.ts
var processVisualEditor = ({
  $body
}) => {
  const $labels = $body.find(".".concat(targetClass)).find("label");
  var _iterator = _createForOfIteratorHelper($labels), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _label$textContent;
      const label = _step.value;
      if (!((_label$textContent = label.textContent) !== null && _label$textContent !== void 0 && _label$textContent.startsWith("⧼"))) {
        continue;
      }
      const labelName = label.textContent.replace("⧼", "").replace("⧽", "");
      if (["minoredit", "watchthis"].includes(labelName)) {
        label.textContent = getMessage(labelName);
        label.title = getMessage(labelName);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (!$body.find(".".concat(dialogLicenseId)).children().length) {
    $body.find(".".concat(dialogLicenseId)).append($("<div>").addClass("fmbox plainlinks fmbox-system").append($("<div>").addClass("mbox-text").html(getMessage("copyrightwarning"))));
  }
};
//! src/Editform_Patch2017/Editform_Patch2017.ts
void (0, import_ext_gadget2.getBody)().then(function editForm($body) {
  setMessages();
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor({
      $body
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9FZGl0Zm9ybV9QYXRjaDIwMTcudHMiLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtzZXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDkv67mraMyMDE354mI5rqQ5Luj56CB57yW6L6R5Zmo55WM6Z2i6ZSZ6K+vXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdHNldE1lc3NhZ2VzKCk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcImRpYWxvZ0xpY2Vuc2VJZFwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1saWNlbnNlXCIsXG5cdFwidGFyZ2V0Q2xhc3NcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlc1wiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdG1pbm9yZWRpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGlzIGEgbWlub3IgZWRpdCcsXG5cdFx0XHQnemgtaGFucyc6ICfov5nmmK/kuIDmrKHlsI/nvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6YCZ5piv5qyh6KaB57eo6LyvJyxcblx0XHR9KSxcblx0XHR3YXRjaHRoaXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2F0Y2ggdGhpcyBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeinhuatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PoppbmraTpoIHpnaInLFxuXHRcdH0pLFxuXHRcdGNvcHlyaWdodHdhcm5pbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnPHA+QnkgY2xpY2tpbmcgdGhlIFwiU2F2ZSBwYWdlXCIgb3IgXCJTYXZlIGNoYW5nZXNcIiBidXR0b24sIHlvdSBhZ3JlZSB0byB0aGUgPGk+PGEgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwiVGVybXMgb2YgVXNlXCI+VGVybXMgb2YgVXNlPC9hPjwvaT4sIDxpPjxhIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCJDb21tb24gUHJvZ3JhbVwiPkNvbW1vbiBQcm9ncmFtPC9hPjwvaT4sIGFuZCB0aGUgPGk+PGEgaHJlZj1cIi93aWtpL1FpdXdlbjpDUFwiIHRpdGxlPVwiQ29weXJpZ2h0IFBvbGljeVwiPkNvcHlyaWdodCBQb2xpY3k8L2E+PC9pPi4gWW91IGFncmVlIHRvIHJlbGVhc2VkIGFsbCB5b3VyIGNvbnRyaWJ1dGlvbnMgdW5kZXIgdGhlIDxpPjxhIGhyZWY9XCIvd2lraS9RaXV3ZW46Q0MtQlktU0EtNC4wXCIgdGl0bGU9XCJDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uLVNoYXJlQWxpa2UgNC4wIEludGVybmF0aW9uYWwgKENDIEJZLVNBIDQuMClcIj5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uLVNoYXJlQWxpa2UgNC4wIEludGVybmF0aW9uYWwgKENDIEJZLVNBIDQuMCk8L2E+PC9pPi4gWW91IHByb21pc2UgdG8gdXMgdGhhdCB0aGUgY29udGVudCB5b3Ugc3VibWl0IGRvZXMgbm90IGludm9sdmUgaW4gY29weXJpZ2h0IGluZnJpbmdlbWVudCBvciBpbmZyaW5nZW1lbnQgb24gbGVnaXRpbWF0ZSByaWdodHMgYW5kIGludGVyZXN0cyBvZiBvdGhlcnMuPGJyPjxiPklmIHlvdSBkbyBub3QgYWdyZWUgdG8gdGVybXMgYW5kIHBvbGljaWVzIG1lbnRpb25lZCBhYm92ZSwgcGxlYXNlIGRvIG5vdCBzdWJtaXQgeW91ciB3b3JrLjwvYj48L3A+Jyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0JzxwPueCueWHu+KAnDxiPuS/neWtmOmhtemdojwvYj7igJ3miJbigJw8Yj7kv53lrZjmm7TmlLk8L2I+4oCd5oyJ6ZKu77yM5Y2z6KGo56S65oKoPGI+5ZCM5oSPPC9iPuOAijxiPjxhIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIuaxgumXu+eZvuenkeeUqOaIt+WNj+iurlwiPuaxgumXu+eZvuenkeeUqOaIt+WNj+iurjwvYT48L2I+44CL44CB44CKPGI+PGEgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuaxgumXu+eZvuenkeWFseWQjOe6sumihlwiPuaxgumXu+eZvuenkeWFseWQjOe6sumihjwvYT48L2I+44CL5Y+K5pys572R56uZPGI+PGEgaHJlZj1cIi93aWtpL1FpdXdlbjpDUFwiIHRpdGxlPVwi6JGX5L2c5p2D5pa56ZKIXCI+6JGX5L2c5p2D5pa56ZKIPC9hPjwvYj7vvIw8Yj7lkIzmhI88L2I+5L6d5o2uPGI+PGEgaHJlZj1cIi93aWtpL0hlbHA6Q0MtQlktU0EtNC4wXCIgdGl0bGU9XCLnn6Xor4blhbHkuqsg572y5ZCN4oCU55u45ZCM5pa55byP5YWx5LqrIDQuMCDljY/orq7lm73pmYXniYhcIj5DQy1CWS1TQSA0LjA8L2E+PC9iPuWNj+iuruaOiOadg+S7luS6uuS9v+eUqOaCqOaJgOWPkeW4g+eahOWGheWuue+8jOW5tjxiPuaJv+ivujwvYj7miYDmj5DkuqTnmoTlhoXlrrnkuI3kvrXniq/ku5bkurrnmoTokZfkvZzmnYPlj4rlhbbku5blkIjms5XmnYPnm4rjgII8YnI+6Iul5oKo5LiN5ZCM5oSP44CK55So5oi35Y2P6K6u44CL44CB44CK5YWx5ZCM57qy6aKG44CL5oiW5pys572R56uZ6JGX5L2c5p2D5pa56ZKI77yM6K+35Yu/54K55Ye75oyJ6ZKu5Y+R5biD5YaF5a6544CCPC9wPicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCc8cD7pu57mk4rigJw8Yj7lhLLlrZjpoIHpnaI8L2I+4oCd5oiW4oCcPGI+5YSy5a2Y6K6K5pu0PC9iPuKAneaMiemIle+8jOWNs+ihqOekuuaCqDxiPuWQjOaEjzwvYj7jgIo8Yj48YSBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLmsYLogZ7nmb7np5HnlKjmiLbljZTorbBcIj7msYLogZ7nmb7np5HnlKjmiLbljZTorbA8L2E+PC9iPuOAi+OAgeOAijxiPjxhIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLmsYLogZ7nmb7np5HlhbHlkIzntrHpoJhcIj7msYLogZ7nmb7np5HlhbHlkIzntrHpoJg8L2E+PC9iPuOAi+WPiuacrOe2suermTxiPjxhIGhyZWY9XCIvd2lraS9RaXV3ZW46Q1BcIiB0aXRsZT1cIuiRl+S9nOasiuaWuemHnVwiPuiRl+S9nOasiuaWuemHnTwvYT48L2I+77yMPGI+5ZCM5oSPPC9iPuS+neaTmjxiPjxhIGhyZWY9XCIvd2lraS9IZWxwOkNDLUJZLVNBLTQuMFwiIHRpdGxlPVwi5Ym155SoQ0Mg5aeT5ZCN5qiZ56S64pSA55u45ZCM5pa55byP5YiG5LqrIDQuMCDlnIvpmptcIj5DQy1CWS1TQSA0LjA8L2E+PC9iPuWNlOitsOaOiOasiuS7luS6uuS9v+eUqOaCqOaJgOeZvOW4g+eahOWFp+Wuue+8jOS4pjxiPuaJv+irvjwvYj7miYDmj5DkuqTnmoTlhaflrrnkuI3kvrXniq/ku5bkurrnmoTokZfkvZzmrIrlj4rlhbbku5blkIjms5XmrIrnm4rjgII8YnI+6Iul5oKo5LiN5ZCM5oSP44CK55So5oi25Y2U6K2w44CL44CB44CK5YWx5ZCM57ax6aCY44CL5oiW5pys57ay56uZ6JGX5L2c5qyK5pa56Yed77yM6KuL5Yu/6bue5pOK5oyJ6YiV55m85biD5YWn5a6544CCPC9wPicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpID0+IHtcblx0bXcubWVzc2FnZXMuc2V0KHttaW5vcmVkaXQ6IGdldE1lc3NhZ2UoJ21pbm9yZWRpdCcpLCB3YXRjaHRoaXM6IGdldE1lc3NhZ2UoJ3dhdGNodGhpcycpfSk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2UsIHNldE1lc3NhZ2VzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fUGF0Y2gyMDE3L29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pID0+IHtcblx0Ly8gTWlzc2luZyBsYWJlbCBtZXNzYWdlc1xuXHRjb25zdCAkbGFiZWxzOiBKUXVlcnkgPSAkYm9keS5maW5kKGAuJHtPUFRJT05TLnRhcmdldENsYXNzfWApLmZpbmQoJ2xhYmVsJyk7XG5cdGZvciAoY29uc3QgbGFiZWwgb2YgJGxhYmVscykge1xuXHRcdGlmICghbGFiZWwudGV4dENvbnRlbnQ/LnN0YXJ0c1dpdGgoJ+KnvCcpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBsYWJlbE5hbWUgPSBsYWJlbC50ZXh0Q29udGVudC5yZXBsYWNlKCfip7wnLCAnJykucmVwbGFjZSgn4qe9JywgJycpO1xuXG5cdFx0aWYgKFsnbWlub3JlZGl0JywgJ3dhdGNodGhpcyddLmluY2x1ZGVzKGxhYmVsTmFtZSkpIHtcblx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gZ2V0TWVzc2FnZShsYWJlbE5hbWUgYXMgJ21pbm9yZWRpdCcgfCAnd2F0Y2h0aGlzJyk7XG5cdFx0XHRsYWJlbC50aXRsZSA9IGdldE1lc3NhZ2UobGFiZWxOYW1lIGFzICdtaW5vcmVkaXQnIHwgJ3dhdGNodGhpcycpO1xuXHRcdH1cblx0fVxuXG5cdC8vIE1pc3NpbmcgY29weXJpZ2h0IHdhcm5pbmdcblx0aWYgKCEkYm9keS5maW5kKGAuJHtPUFRJT05TLmRpYWxvZ0xpY2Vuc2VJZH1gKS5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdCRib2R5LmZpbmQoYC4ke09QVElPTlMuZGlhbG9nTGljZW5zZUlkfWApLmFwcGVuZChcblx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdmbWJveCBwbGFpbmxpbmtzIGZtYm94LXN5c3RlbScpXG5cdFx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnbWJveC10ZXh0JykuaHRtbChnZXRNZXNzYWdlKCdjb3B5cmlnaHR3YXJuaW5nJykpKVxuXHRcdCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLGtCQUFtQjtBQUNuQixJQUFBQyxjQUFlOztBQ0ZoQixJQUFBQyxvQkFBdUJILFFBQUEsaUJBQUE7QUFFdkIsSUFBTUksa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsWUFBQSxHQUFXRixrQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxZQUFBLEdBQVdMLGtCQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLG1CQUFBLEdBQWtCTixrQkFBQUcsVUFBUztNQUMxQkMsSUFBSTtNQUNKLFdBQ0M7TUFDRCxXQUNDO0lBQ0YsQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlTixnQkFBZ0I7QUFFckMsSUFBTU8sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3QjtBQUVBLElBQU1DLGNBQWNBLE1BQU07QUFDekJDLEtBQUdDLFNBQVNDLElBQUk7SUFBQ1gsV0FBV00sV0FBVyxXQUFXO0lBQUdILFdBQVdHLFdBQVcsV0FBVztFQUFDLENBQUM7QUFDekY7O0FDN0JBLElBQU1NLHNCQUFzQkEsQ0FBQztFQUFDQztBQUFLLE1BQXdDO0FBRTFFLFFBQU1DLFVBQWtCRCxNQUFNRSxLQUFBLElBQUFDLE9BQWlCbkIsV0FBVyxDQUFFLEVBQUVrQixLQUFLLE9BQU87QUFBQSxNQUFBRSxZQUFBQywyQkFDdERKLE9BQUEsR0FBQUs7QUFBQSxNQUFBO0FBQXBCLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQTZCO0FBQUEsVUFBQUM7QUFBQSxZQUFsQkMsUUFBQUwsTUFBQU07QUFDVixVQUFJLEdBQUFGLHFCQUFDQyxNQUFNRSxpQkFBQSxRQUFBSCx1QkFBQSxVQUFOQSxtQkFBbUJJLFdBQVcsR0FBRyxJQUFHO0FBQ3hDO01BQ0Q7QUFFQSxZQUFNQyxZQUFZSixNQUFNRSxZQUFZRyxRQUFRLEtBQUssRUFBRSxFQUFFQSxRQUFRLEtBQUssRUFBRTtBQUVwRSxVQUFJLENBQUMsYUFBYSxXQUFXLEVBQUVDLFNBQVNGLFNBQVMsR0FBRztBQUNuREosY0FBTUUsY0FBY3BCLFdBQVdzQixTQUFzQztBQUNyRUosY0FBTU8sUUFBUXpCLFdBQVdzQixTQUFzQztNQUNoRTtJQUNEO0VBQUEsU0FBQUksS0FBQTtBQUFBZixjQUFBZ0IsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWYsY0FBQWlCLEVBQUE7RUFBQTtBQUdBLE1BQUksQ0FBQ3JCLE1BQU1FLEtBQUEsSUFBQUMsT0FBaUJwQixlQUFlLENBQUUsRUFBRXVDLFNBQVMsRUFBRUMsUUFBUTtBQUNqRXZCLFVBQU1FLEtBQUEsSUFBQUMsT0FBaUJwQixlQUFlLENBQUUsRUFBRXlDLE9BQ3pDQyxFQUFFLE9BQU8sRUFDUEMsU0FBUywrQkFBK0IsRUFDeENGLE9BQU9DLEVBQUUsT0FBTyxFQUFFQyxTQUFTLFdBQVcsRUFBRUMsS0FBS2xDLFdBQVcsa0JBQWtCLENBQUMsQ0FBQyxDQUMvRTtFQUNEO0FBQ0Q7O0FIcEJBLE1BQUEsR0FBS1osbUJBQUErQyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsU0FBUzlCLE9BQXNDO0FBQzNFTCxjQUFZO0FBRVpDLEtBQUdtQyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRqQyx3QkFBb0I7TUFDbkJDO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJkaWFsb2dMaWNlbnNlSWQiLCAidGFyZ2V0Q2xhc3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIm1pbm9yZWRpdCIsICJsb2NhbGl6ZSIsICJlbiIsICJ3YXRjaHRoaXMiLCAiY29weXJpZ2h0d2FybmluZyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2V0TWVzc2FnZXMiLCAibXciLCAibWVzc2FnZXMiLCAic2V0IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJGJvZHkiLCAiJGxhYmVscyIsICJmaW5kIiwgImNvbmNhdCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiX2xhYmVsJHRleHRDb250ZW50IiwgImxhYmVsIiwgInZhbHVlIiwgInRleHRDb250ZW50IiwgInN0YXJ0c1dpdGgiLCAibGFiZWxOYW1lIiwgInJlcGxhY2UiLCAiaW5jbHVkZXMiLCAidGl0bGUiLCAiZXJyIiwgImUiLCAiZiIsICJjaGlsZHJlbiIsICJsZW5ndGgiLCAiYXBwZW5kIiwgIiQiLCAiYWRkQ2xhc3MiLCAiaHRtbCIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iLCAiaG9vayIsICJhZGQiXQp9Cg==
