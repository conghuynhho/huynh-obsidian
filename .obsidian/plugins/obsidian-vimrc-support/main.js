'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

const modifiers = /^(CommandOrControl|CmdOrCtrl|Command|Cmd|Control|Ctrl|AltGr|Option|Alt|Shift|Super)/i;
const keyCodes = /^(Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen|F24|F23|F22|F21|F20|F19|F18|F17|F16|F15|F14|F13|F12|F11|F10|F9|F8|F7|F6|F5|F4|F3|F2|F1|[0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]'])/i;
const UNSUPPORTED = {};

function _command(accelerator, event, modifier) {
	if (process.platform !== 'darwin') {
		return UNSUPPORTED;
	}

	if (event.metaKey) {
		throw new Error('Double `Command` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {metaKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _super(accelerator, event, modifier) {
	if (event.metaKey) {
		throw new Error('Double `Super` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {metaKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _commandorcontrol(accelerator, event, modifier) {
	if (process.platform === 'darwin') {
		if (event.metaKey) {
			throw new Error('Double `Command` modifier specified.');
		}

		return {
			event: Object.assign({}, event, {metaKey: true}),
			accelerator: accelerator.slice(modifier.length)
		};
	}

	if (event.ctrlKey) {
		throw new Error('Double `Control` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {ctrlKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _alt(accelerator, event, modifier) {
	if (modifier === 'option' && process.platform !== 'darwin') {
		return UNSUPPORTED;
	}

	if (event.altKey) {
		throw new Error('Double `Alt` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {altKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _shift(accelerator, event, modifier) {
	if (event.shiftKey) {
		throw new Error('Double `Shift` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {shiftKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _control(accelerator, event, modifier) {
	if (event.ctrlKey) {
		throw new Error('Double `Control` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {ctrlKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function reduceModifier({accelerator, event}, modifier) {
	switch (modifier) {
		case 'command':
		case 'cmd': {
			return _command(accelerator, event, modifier);
		}

		case 'super': {
			return _super(accelerator, event, modifier);
		}

		case 'control':
		case 'ctrl': {
			return _control(accelerator, event, modifier);
		}

		case 'commandorcontrol':
		case 'cmdorctrl': {
			return _commandorcontrol(accelerator, event, modifier);
		}

		case 'option':
		case 'altgr':
		case 'alt': {
			return _alt(accelerator, event, modifier);
		}

		case 'shift': {
			return _shift(accelerator, event, modifier);
		}

		default:
			console.error(modifier);
	}
}

function reducePlus({accelerator, event}) {
	return {
		event,
		accelerator: accelerator.trim().slice(1)
	};
}

const virtualKeyCodes = {
	0: 'Digit0',
	1: 'Digit1',
	2: 'Digit2',
	3: 'Digit3',
	4: 'Digit4',
	5: 'Digit5',
	6: 'Digit6',
	7: 'Digit7',
	8: 'Digit8',
	9: 'Digit9',
	'-': 'Minus',
	'=': 'Equal',
	Q: 'KeyQ',
	W: 'KeyW',
	E: 'KeyE',
	R: 'KeyR',
	T: 'KeyT',
	Y: 'KeyY',
	U: 'KeyU',
	I: 'KeyI',
	O: 'KeyO',
	P: 'KeyP',
	'[': 'BracketLeft',
	']': 'BracketRight',
	A: 'KeyA',
	S: 'KeyS',
	D: 'KeyD',
	F: 'KeyF',
	G: 'KeyG',
	H: 'KeyH',
	J: 'KeyJ',
	K: 'KeyK',
	L: 'KeyL',
	';': 'Semicolon',
	'\'': 'Quote',
	'`': 'Backquote',
	'/': 'Backslash',
	Z: 'KeyZ',
	X: 'KeyX',
	C: 'KeyC',
	V: 'KeyV',
	B: 'KeyB',
	N: 'KeyN',
	M: 'KeyM',
	',': 'Comma',
	'.': 'Period',
	'\\': 'Slash',
	' ': 'Space'
};

function reduceKey({accelerator, event}, key) {
	if (key.length > 1 || event.key) {
		throw new Error(`Unvalid keycode \`${key}\`.`);
	}

	const code =
		key.toUpperCase() in virtualKeyCodes ?
			virtualKeyCodes[key.toUpperCase()] :
			null;

	return {
		event: Object.assign({}, event, {key}, code ? {code} : null),
		accelerator: accelerator.trim().slice(key.length)
	};
}

const domKeys = Object.assign(Object.create(null), {
	plus: 'Add',
	space: 'Space',
	tab: 'Tab',
	backspace: 'Backspace',
	delete: 'Delete',
	insert: 'Insert',
	return: 'Return',
	enter: 'Return',
	up: 'ArrowUp',
	down: 'ArrowDown',
	left: 'ArrowLeft',
	right: 'ArrowRight',
	home: 'Home',
	end: 'End',
	pageup: 'PageUp',
	pagedown: 'PageDown',
	escape: 'Escape',
	esc: 'Escape',
	volumeup: 'AudioVolumeUp',
	volumedown: 'AudioVolumeDown',
	volumemute: 'AudioVolumeMute',
	medianexttrack: 'MediaTrackNext',
	mediaprevioustrack: 'MediaTrackPrevious',
	mediastop: 'MediaStop',
	mediaplaypause: 'MediaPlayPause',
	printscreen: 'PrintScreen'
});

// Add function keys
for (let i = 1; i <= 24; i++) {
	domKeys[`f${i}`] = `F${i}`;
}

function reduceCode({accelerator, event}, {code, key}) {
	if (event.code) {
		throw new Error(`Duplicated keycode \`${key}\`.`);
	}

	return {
		event: Object.assign({}, event, {key}, code ? {code} : null),
		accelerator: accelerator.trim().slice((key && key.length) || 0)
	};
}

/**
 * This function transform an Electron Accelerator string into
 * a DOM KeyboardEvent object.
 *
 * @param  {string} accelerator an Electron Accelerator string, e.g. `Ctrl+C` or `Shift+Space`.
 * @return {object} a DOM KeyboardEvent object derivate from the `accelerator` argument.
 */
function toKeyEvent(accelerator) {
	let state = {accelerator, event: {}};
	while (state.accelerator !== '') {
		const modifierMatch = state.accelerator.match(modifiers);
		if (modifierMatch) {
			const modifier = modifierMatch[0].toLowerCase();
			state = reduceModifier(state, modifier);
			if (state === UNSUPPORTED) {
				return {unsupportedKeyForPlatform: true};
			}
		} else if (state.accelerator.trim()[0] === '+') {
			state = reducePlus(state);
		} else {
			const codeMatch = state.accelerator.match(keyCodes);
			if (codeMatch) {
				const code = codeMatch[0].toLowerCase();
				if (code in domKeys) {
					state = reduceCode(state, {
						code: domKeys[code],
						key: code
					});
				} else {
					state = reduceKey(state, code);
				}
			} else {
				throw new Error(`Unvalid accelerator: "${state.accelerator}"`);
			}
		}
	}

	return state.event;
}

var keyboardeventFromElectronAccelerator = {
	UNSUPPORTED,
	reduceModifier,
	reducePlus,
	reduceKey,
	reduceCode,
	toKeyEvent
};

var DEFAULT_SETTINGS = {
    vimrcFileName: ".obsidian.vimrc",
    displayChord: false,
    displayVimMode: false,
    fixedNormalModeLayout: false,
    capturedKeyboardMap: {},
    supportJsCommands: false,
    vimStatusPromptMap: {
        normal: '🟢',
        insert: '🟠',
        visual: '🟡',
        replace: '🔴',
    },
};
var vimStatusPromptClass = "vimrc-support-vim-mode";
// NOTE: to future maintainers, please make sure all mapping commands are included in this array.
var mappingCommands = [
    "map",
    "nmap",
    "noremap",
    "iunmap",
    "nunmap",
    "vunmap",
];
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
var VimrcPlugin = /** @class */ (function (_super) {
    __extends(VimrcPlugin, _super);
    function VimrcPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codeMirrorVimObject = null;
        _this.initialized = false;
        _this.lastYankBuffer = [""];
        _this.lastSystemClipboard = "";
        _this.yankToSystemClipboard = false;
        _this.currentKeyChord = [];
        _this.vimChordStatusBar = null;
        _this.vimStatusBar = null;
        _this.currentVimStatus = "normal" /* vimStatus.normal */;
        _this.customVimKeybinds = {};
        _this.currentSelection = null;
        _this.isInsertMode = false;
        _this.logVimModeChange = function (cm) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!cm)
                    return [2 /*return*/];
                this.isInsertMode = cm.mode === 'insert';
                switch (cm.mode) {
                    case "insert":
                        this.currentVimStatus = "insert" /* vimStatus.insert */;
                        break;
                    case "normal":
                        this.currentVimStatus = "normal" /* vimStatus.normal */;
                        break;
                    case "visual":
                        this.currentVimStatus = "visual" /* vimStatus.visual */;
                        break;
                    case "replace":
                        this.currentVimStatus = "replace" /* vimStatus.replace */;
                        break;
                }
                if (this.settings.displayVimMode)
                    this.updateVimStatusBar();
                return [2 /*return*/];
            });
        }); };
        _this.onVimKeypress = function (vimKey) { return __awaiter(_this, void 0, void 0, function () {
            var tempS, _i, _a, s;
            var _b;
            return __generator(this, function (_c) {
                if (vimKey != "<Esc>") { // TODO figure out what to actually look for to exit commands.
                    this.currentKeyChord.push(vimKey);
                    if (this.customVimKeybinds[this.currentKeyChord.join("")] != undefined) { // Custom key chord exists.
                        this.currentKeyChord = [];
                    }
                }
                else {
                    this.currentKeyChord = [];
                }
                tempS = "";
                for (_i = 0, _a = this.currentKeyChord; _i < _a.length; _i++) {
                    s = _a[_i];
                    tempS += " " + s;
                }
                if (tempS != "") {
                    tempS += "-";
                }
                (_b = this.vimChordStatusBar) === null || _b === void 0 ? void 0 : _b.setText(tempS);
                return [2 /*return*/];
            });
        }); };
        _this.onVimCommandDone = function (reason) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                (_a = this.vimChordStatusBar) === null || _a === void 0 ? void 0 : _a.setText("");
                this.currentKeyChord = [];
                return [2 /*return*/];
            });
        }); };
        _this.onKeydown = function (ev) {
            if (_this.settings.fixedNormalModeLayout) {
                var keyMap = _this.settings.capturedKeyboardMap;
                if (!_this.isInsertMode && !ev.shiftKey &&
                    ev.code in keyMap && ev.key != keyMap[ev.code]) {
                    var view = _this.getActiveView();
                    if (view) {
                        var cmEditor = _this.getCodeMirror(view);
                        if (cmEditor) {
                            _this.codeMirrorVimObject.handleKey(cmEditor, keyMap[ev.code], 'mapping');
                        }
                    }
                    ev.preventDefault();
                    return false;
                }
            }
        };
        return _this;
    }
    VimrcPlugin.prototype.updateVimStatusBar = function () {
        this.vimStatusBar.setText(this.settings.vimStatusPromptMap[this.currentVimStatus]);
        this.vimStatusBar.dataset.vimMode = this.currentVimStatus;
    };
    VimrcPlugin.prototype.captureKeyboardLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keyMap, layout, doneIterating;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keyMap = {};
                        return [4 /*yield*/, navigator.keyboard.getLayoutMap()];
                    case 1:
                        layout = _a.sent();
                        doneIterating = new Promise(function (resolve, reject) {
                            var counted = 0;
                            layout.forEach(function (value, index) {
                                keyMap[index] = value;
                                counted += 1;
                                if (counted === layout.size)
                                    resolve();
                            });
                        });
                        return [4 /*yield*/, doneIterating];
                    case 2:
                        _a.sent();
                        new obsidian.Notice('Keyboard layout captured');
                        return [2 /*return*/, keyMap];
                }
            });
        });
    };
    VimrcPlugin.prototype.initialize = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_b) {
                if (this.initialized)
                    return [2 /*return*/];
                this.codeMirrorVimObject = (_a = window.CodeMirrorAdapter) === null || _a === void 0 ? void 0 : _a.Vim;
                this.registerYankEvents(activeWindow);
                this.app.workspace.on("window-open", function (workspaceWindow, w) {
                    _this.registerYankEvents(w);
                });
                // Two events cos
                // this don't trigger on loading/reloading obsidian with note opened
                this.app.workspace.on("active-leaf-change", function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.updateSelectionEvent();
                        this.updateVimEvents();
                        return [2 /*return*/];
                    });
                }); });
                // and this don't trigger on opening same file in new pane
                this.app.workspace.on("file-open", function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.updateSelectionEvent();
                        this.updateVimEvents();
                        return [2 /*return*/];
                    });
                }); });
                this.initialized = true;
                return [2 /*return*/];
            });
        });
    };
    VimrcPlugin.prototype.registerYankEvents = function (win) {
        var _this = this;
        this.registerDomEvent(win.document, 'click', function () {
            _this.captureYankBuffer(win);
        });
        this.registerDomEvent(win.document, 'keyup', function () {
            _this.captureYankBuffer(win);
        });
        this.registerDomEvent(win.document, 'focusin', function () {
            _this.captureYankBuffer(win);
        });
    };
    VimrcPlugin.prototype.updateSelectionEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var view, cm;
            var _this = this;
            return __generator(this, function (_a) {
                view = this.getActiveView();
                if (!view)
                    return [2 /*return*/];
                cm = this.getCodeMirror(view);
                if (this.getCursorActivityHandlers(cm).some(function (e) { return e.name === "updateSelection"; }))
                    return [2 /*return*/];
                cm.on("cursorActivity", function (cm) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, this.updateSelection(cm)];
                }); }); });
                return [2 /*return*/];
            });
        });
    };
    VimrcPlugin.prototype.updateSelection = function (cm) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.currentSelection = cm.listSelections();
                return [2 /*return*/];
            });
        });
    };
    VimrcPlugin.prototype.getCursorActivityHandlers = function (cm) {
        return cm._handlers.cursorActivity;
    };
    VimrcPlugin.prototype.updateVimEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var view, cmEditor;
            return __generator(this, function (_a) {
                view = this.getActiveView();
                if (view) {
                    cmEditor = this.getCodeMirror(view);
                    // See https://codemirror.net/doc/manual.html#vimapi_events for events.
                    this.isInsertMode = false;
                    this.currentVimStatus = "normal" /* vimStatus.normal */;
                    if (this.settings.displayVimMode)
                        this.updateVimStatusBar();
                    cmEditor.off('vim-mode-change', this.logVimModeChange);
                    cmEditor.on('vim-mode-change', this.logVimModeChange);
                    this.currentKeyChord = [];
                    cmEditor.off('vim-keypress', this.onVimKeypress);
                    cmEditor.on('vim-keypress', this.onVimKeypress);
                    cmEditor.off('vim-command-done', this.onVimCommandDone);
                    cmEditor.on('vim-command-done', this.onVimCommandDone);
                    CodeMirror.off(cmEditor.getInputField(), 'keydown', this.onKeydown);
                    CodeMirror.on(cmEditor.getInputField(), 'keydown', this.onKeydown);
                }
                return [2 /*return*/];
            });
        });
    };
    VimrcPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new SettingsTab(this.app, this));
                        console.log('loading Vimrc plugin');
                        this.app.workspace.on('active-leaf-change', function () { return __awaiter(_this, void 0, void 0, function () {
                            var fileName, vimrcContent, e_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!!this.initialized) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.initialize()];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (this.codeMirrorVimObject.loadedVimrc)
                                            return [2 /*return*/];
                                        fileName = this.settings.vimrcFileName;
                                        if (!fileName || fileName.trim().length === 0) {
                                            fileName = DEFAULT_SETTINGS.vimrcFileName;
                                            console.log('Configured Vimrc file name is illegal, falling-back to default');
                                        }
                                        vimrcContent = '';
                                        _a.label = 3;
                                    case 3:
                                        _a.trys.push([3, 5, , 6]);
                                        return [4 /*yield*/, this.app.vault.adapter.read(fileName)];
                                    case 4:
                                        vimrcContent = _a.sent();
                                        return [3 /*break*/, 6];
                                    case 5:
                                        e_1 = _a.sent();
                                        console.log('Error loading vimrc file', fileName, 'from the vault root', e_1.message);
                                        return [3 /*break*/, 6];
                                    case 6:
                                        this.readVimInit(vimrcContent);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    VimrcPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        data = _a.sent();
                        this.settings = Object.assign({}, DEFAULT_SETTINGS, data);
                        return [2 /*return*/];
                }
            });
        });
    };
    VimrcPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VimrcPlugin.prototype.onunload = function () {
        console.log('unloading Vimrc plugin (but Vim commands that were already loaded will still work)');
    };
    VimrcPlugin.prototype.getActiveView = function () {
        return this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
    };
    VimrcPlugin.prototype.getCodeMirror = function (view) {
        var _a, _b, _c;
        return (_c = (_b = (_a = view.editMode) === null || _a === void 0 ? void 0 : _a.editor) === null || _b === void 0 ? void 0 : _b.cm) === null || _c === void 0 ? void 0 : _c.cm;
    };
    VimrcPlugin.prototype.readVimInit = function (vimCommands) {
        var view = this.getActiveView();
        if (view) {
            var cmEditor = this.getCodeMirror(view);
            if (cmEditor && !this.codeMirrorVimObject.loadedVimrc) {
                this.defineBasicCommands(this.codeMirrorVimObject);
                this.defineSendKeys(this.codeMirrorVimObject);
                this.defineObCommand(this.codeMirrorVimObject);
                this.defineSurround(this.codeMirrorVimObject);
                this.defineJsCommand(this.codeMirrorVimObject);
                this.defineJsFile(this.codeMirrorVimObject);
                this.defineSource(this.codeMirrorVimObject);
                this.loadVimCommands(vimCommands);
                this.prepareChordDisplay();
                this.prepareVimModeDisplay();
                // Make sure that we load it just once per CodeMirror instance.
                // This is supposed to work because the Vim state is kept at the keymap level, hopefully
                // there will not be bugs caused by operations that are kept at the object level instead
                this.codeMirrorVimObject.loadedVimrc = true;
            }
            if (cmEditor) {
                cmEditor.off('vim-mode-change', this.logVimModeChange);
                cmEditor.on('vim-mode-change', this.logVimModeChange);
                CodeMirror.off(cmEditor.getInputField(), 'keydown', this.onKeydown);
                CodeMirror.on(cmEditor.getInputField(), 'keydown', this.onKeydown);
            }
        }
    };
    VimrcPlugin.prototype.loadVimCommands = function (vimCommands) {
        var view = this.getActiveView();
        if (view) {
            var cmEditor = this.getCodeMirror(view);
            vimCommands.split("\n").forEach(function (line, index, arr) {
                if (line.trim().length > 0 && line.trim()[0] != '"') {
                    var split = line.split(" ");
                    if (mappingCommands.includes(split[0])) {
                        // Have to do this because "vim-command-done" event doesn't actually work properly, or something.
                        this.customVimKeybinds[split[1]] = true;
                    }
                    this.codeMirrorVimObject.handleEx(cmEditor, line);
                }
            }.bind(this) // Faster than an arrow function. https://stackoverflow.com/questions/50375440/binding-vs-arrow-function-for-react-onclick-event
            );
        }
    };
    VimrcPlugin.prototype.defineBasicCommands = function (vimObject) {
        var _this = this;
        vimObject.defineOption('clipboard', '', 'string', ['clip'], function (value, cm) {
            if (value) {
                if (value.trim() == 'unnamed' || value.trim() == 'unnamedplus') {
                    if (!_this.yankToSystemClipboard) {
                        _this.yankToSystemClipboard = true;
                        console.log("Vim is now set to yank to system clipboard.");
                    }
                }
                else {
                    throw new Error("Unrecognized clipboard option, supported are 'unnamed' and 'unnamedplus' (and they do the same)");
                }
            }
        });
        vimObject.defineOption('tabstop', 4, 'number', [], function (value, cm) {
            if (value && cm) {
                cm.setOption('tabSize', value);
            }
        });
        vimObject.defineEx('iunmap', '', function (cm, params) {
            if (params.argString.trim()) {
                _this.codeMirrorVimObject.unmap(params.argString.trim(), 'insert');
            }
        });
        vimObject.defineEx('nunmap', '', function (cm, params) {
            if (params.argString.trim()) {
                _this.codeMirrorVimObject.unmap(params.argString.trim(), 'normal');
            }
        });
        vimObject.defineEx('vunmap', '', function (cm, params) {
            if (params.argString.trim()) {
                _this.codeMirrorVimObject.unmap(params.argString.trim(), 'visual');
            }
        });
        vimObject.defineEx('noremap', '', function (cm, params) {
            var _a;
            if (!((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length)) {
                throw new Error('Invalid mapping: noremap');
            }
            if (params.argString.trim()) {
                _this.codeMirrorVimObject.noremap.apply(_this.codeMirrorVimObject, params.args);
            }
        });
        // Allow the user to register an Ex command
        vimObject.defineEx('exmap', '', function (cm, params) {
            var _a;
            if (((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length) && params.args.length < 2) {
                throw new Error("exmap requires at least 2 parameters: [name] [actions...]");
            }
            var commandName = params.args[0];
            params.args.shift();
            var commandContent = params.args.join(' ');
            // The content of the user's Ex command is just the remaining parameters of the exmap command
            _this.codeMirrorVimObject.defineEx(commandName, '', function (cm, params) {
                _this.codeMirrorVimObject.handleEx(cm, commandContent);
            });
        });
    };
    VimrcPlugin.prototype.defineSendKeys = function (vimObject) {
        var _this = this;
        vimObject.defineEx('sendkeys', '', function (cm, params) { return __awaiter(_this, void 0, void 0, function () {
            var allGood, events, _i, _a, key, delay, keyEvent, _b, events_1;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!((_c = params === null || params === void 0 ? void 0 : params.args) === null || _c === void 0 ? void 0 : _c.length)) {
                            console.log(params);
                            throw new Error("The sendkeys command requires a list of keys, e.g. sendKeys Ctrl+p a b Enter");
                        }
                        allGood = true;
                        events = [];
                        _i = 0, _a = params.args;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        key = _a[_i];
                        if (!key.startsWith('wait')) return [3 /*break*/, 3];
                        delay = key.slice(4);
                        return [4 /*yield*/, sleep(delay * 1000)];
                    case 2:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        keyEvent = null;
                        try {
                            keyEvent = new KeyboardEvent('keydown', keyboardeventFromElectronAccelerator.toKeyEvent(key));
                            events.push(keyEvent);
                        }
                        catch (e) {
                            allGood = false;
                            throw new Error("Key '".concat(key, "' couldn't be read as an Electron Accelerator"));
                        }
                        if (allGood) {
                            for (_b = 0, events_1 = events; _b < events_1.length; _b++) {
                                keyEvent = events_1[_b];
                                window.postMessage(JSON.parse(JSON.stringify(keyEvent)), '*');
                            }
                            // view.containerEl.dispatchEvent(keyEvent);
                        }
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    VimrcPlugin.prototype.defineObCommand = function (vimObject) {
        var _this = this;
        vimObject.defineEx('obcommand', '', function (cm, params) { return __awaiter(_this, void 0, void 0, function () {
            var availableCommands, view, editor, command, callback, checkCallback, editorCallback, editorCheckCallback;
            var _a;
            return __generator(this, function (_b) {
                availableCommands = this.app.commands.commands;
                if (!((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length) || params.args.length != 1) {
                    console.log("Available commands: ".concat(Object.keys(availableCommands).join('\n')));
                    throw new Error("obcommand requires exactly 1 parameter");
                }
                view = this.getActiveView();
                editor = view.editor;
                command = params.args[0];
                if (command in availableCommands) {
                    callback = availableCommands[command].callback;
                    checkCallback = availableCommands[command].checkCallback;
                    editorCallback = availableCommands[command].editorCallback;
                    editorCheckCallback = availableCommands[command].editorCheckCallback;
                    if (editorCheckCallback)
                        editorCheckCallback(false, editor, view);
                    else if (editorCallback)
                        editorCallback(editor, view);
                    else if (checkCallback)
                        checkCallback(false);
                    else if (callback)
                        callback();
                    else
                        throw new Error("Command ".concat(command, " doesn't have an Obsidian callback"));
                }
                else
                    throw new Error("Command ".concat(command, " was not found, try 'obcommand' with no params to see in the developer console what's available"));
                return [2 /*return*/];
            });
        }); });
    };
    VimrcPlugin.prototype.defineSurround = function (vimObject) {
        var _this = this;
        // Function to surround selected text or highlighted word.
        var surroundFunc = function (params) {
            var _a;
            var editor = _this.getActiveView().editor;
            if (!params.length) {
                throw new Error("surround requires exactly 2 parameters: prefix and postfix text.");
            }
            var newArgs = params.join(" ").match(/(\\.|[^\s\\\\]+)+/g);
            if (newArgs.length != 2) {
                throw new Error("surround requires exactly 2 parameters: prefix and postfix text.");
            }
            var beginning = newArgs[0].replace("\\\\", "\\").replace("\\ ", " "); // Get the beginning surround text
            var ending = newArgs[1].replace("\\\\", "\\").replace("\\ ", " "); // Get the ending surround text
            var currentSelections = _this.currentSelection;
            var chosenSelection = currentSelections && currentSelections.length > 0 ? currentSelections[0] : null;
            if (_this.currentSelection && (currentSelections === null || currentSelections === void 0 ? void 0 : currentSelections.length) > 1) {
                console.log("WARNING: Multiple selections in surround. Attempt to select matching cursor. (obsidian-vimrc-support)");
                var cursorPos = editor.getCursor();
                for (var _i = 0, currentSelections_1 = currentSelections; _i < currentSelections_1.length; _i++) {
                    var selection = currentSelections_1[_i];
                    if (selection.head.line == cursorPos.line && selection.head.ch == cursorPos.ch) {
                        console.log("RESOLVED: Selection matching cursor found. (obsidian-vimrc-support)");
                        chosenSelection = selection;
                        break;
                    }
                }
            }
            if (JSON.stringify(chosenSelection.anchor) === JSON.stringify(chosenSelection.head)) {
                // No range of selected text, so select word.
                var line = editor.getLine(chosenSelection.anchor.line);
                if (line.length === 0)
                    throw new Error("can't surround on an empty line");
                // Go to the beginning of the word
                var wordStart = chosenSelection.anchor.ch;
                for (; wordStart >= 0; wordStart--)
                    if (line[wordStart].match(/\s/))
                        break;
                wordStart++;
                var wordEnd = chosenSelection.anchor.ch;
                for (; wordEnd < line.length; wordEnd++)
                    if (line[wordEnd].match(/\s/))
                        break;
                line.substring(wordStart, wordEnd);
                chosenSelection.anchor.ch = wordStart;
                chosenSelection.head.ch = wordEnd;
                chosenSelection = {
                    anchor: { line: chosenSelection.anchor.line, ch: wordStart },
                    head: { line: chosenSelection.head.line, ch: wordEnd }
                };
            }
            // If the selection is reverse, switch the variables
            if (chosenSelection.anchor.line > chosenSelection.head.line ||
                (chosenSelection.anchor.line == chosenSelection.head.line && chosenSelection.anchor.ch > chosenSelection.head.ch))
                _a = [chosenSelection.head, chosenSelection.anchor], chosenSelection.anchor = _a[0], chosenSelection.head = _a[1];
            var currText = editor.getRange(chosenSelection.anchor, chosenSelection.head);
            editor.replaceRange(beginning + currText + ending, chosenSelection.anchor, chosenSelection.head);
        };
        vimObject.defineEx("surround", "", function (cm, params) { surroundFunc(params.args); });
        vimObject.defineEx("pasteinto", "", function (cm, params) {
            // Using the register for when this.yankToSystemClipboard == false
            surroundFunc(['[',
                '](' + vimObject.getRegisterController().getRegister('yank').keyBuffer + ")"]);
        });
        this.getActiveView().editor;
        // Handle the surround dialog input
        var surroundDialogCallback = function (value) {
            if ((/^\[+$/).test(value)) { // check for 1-inf [ and match them with ]
                surroundFunc([value, "]".repeat(value.length)]);
            }
            else if ((/^\(+$/).test(value)) { // check for 1-inf ( and match them with )
                surroundFunc([value, ")".repeat(value.length)]);
            }
            else if ((/^\{+$/).test(value)) { // check for 1-inf { and match them with }
                surroundFunc([value, "}".repeat(value.length)]);
            }
            else { // Else, just put it before and after.
                surroundFunc([value, value]);
            }
        };
        vimObject.defineOperator("surroundOperator", function () {
            var p = "<span>Surround with: <input type='text'></span>";
            CodeMirror.openDialog(p, surroundDialogCallback, { bottom: true, selectValueOnOpen: false });
        });
        vimObject.mapCommand("<A-y>s", "operator", "surroundOperator");
    };
    VimrcPlugin.prototype.captureYankBuffer = function (win) {
        return __awaiter(this, void 0, void 0, function () {
            var yankRegister, currentYankBuffer, buf, _a, currentClipboardText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.yankToSystemClipboard) {
                            return [2 /*return*/];
                        }
                        yankRegister = this.codeMirrorVimObject.getRegisterController().getRegister('yank');
                        currentYankBuffer = yankRegister.keyBuffer;
                        buf = currentYankBuffer[0];
                        if (!(buf !== this.lastYankBuffer[0])) return [3 /*break*/, 3];
                        return [4 /*yield*/, win.navigator.clipboard.writeText(buf)];
                    case 1:
                        _b.sent();
                        this.lastYankBuffer = currentYankBuffer;
                        _a = this;
                        return [4 /*yield*/, win.navigator.clipboard.readText()];
                    case 2:
                        _a.lastSystemClipboard = _b.sent();
                        return [2 /*return*/];
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, win.navigator.clipboard.readText()];
                    case 4:
                        currentClipboardText = _b.sent();
                        if (currentClipboardText !== this.lastSystemClipboard) {
                            yankRegister.setText(currentClipboardText);
                            this.lastYankBuffer = yankRegister.keyBuffer;
                            this.lastSystemClipboard = currentClipboardText;
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    VimrcPlugin.prototype.prepareChordDisplay = function () {
        if (this.settings.displayChord) {
            // Add status bar item
            this.vimChordStatusBar = this.addStatusBarItem();
            // Move vimChordStatusBar to the leftmost position and center it.
            var parent_1 = this.vimChordStatusBar.parentElement;
            this.vimChordStatusBar.parentElement.insertBefore(this.vimChordStatusBar, parent_1.firstChild);
            this.vimChordStatusBar.style.marginRight = "auto";
            var cmEditor = this.getCodeMirror(this.getActiveView());
            // See https://codemirror.net/doc/manual.html#vimapi_events for events.
            cmEditor.off('vim-keypress', this.onVimKeypress);
            cmEditor.on('vim-keypress', this.onVimKeypress);
            cmEditor.off('vim-command-done', this.onVimCommandDone);
            cmEditor.on('vim-command-done', this.onVimCommandDone);
        }
    };
    VimrcPlugin.prototype.prepareVimModeDisplay = function () {
        if (this.settings.displayVimMode) {
            this.vimStatusBar = this.addStatusBarItem(); // Add status bar item
            this.vimStatusBar.setText(this.settings.vimStatusPromptMap["normal" /* vimStatus.normal */]); // Init the vimStatusBar with normal mode
            this.vimStatusBar.addClass(vimStatusPromptClass);
            this.vimStatusBar.dataset.vimMode = this.currentVimStatus;
        }
    };
    VimrcPlugin.prototype.defineJsCommand = function (vimObject) {
        var _this = this;
        vimObject.defineEx('jscommand', '', function (cm, params) {
            if (!_this.settings.supportJsCommands)
                throw new Error("JS commands are turned off; enable them via the Vimrc plugin configuration if you're sure you know what you're doing");
            var jsCode = params.argString.trim();
            if (jsCode[0] != '{' || jsCode[jsCode.length - 1] != '}')
                throw new Error("Expected an argument which is JS code surrounded by curly brackets: {...}");
            var currentSelections = _this.currentSelection;
            var chosenSelection = currentSelections && currentSelections.length > 0 ? currentSelections[0] : null;
            var command = Function('editor', 'view', 'selection', jsCode);
            var view = _this.getActiveView();
            command(view.editor, view, chosenSelection);
        });
    };
    VimrcPlugin.prototype.defineJsFile = function (vimObject) {
        var _this = this;
        vimObject.defineEx('jsfile', '', function (cm, params) { return __awaiter(_this, void 0, void 0, function () {
            var extraCode, fileName, currentSelections, chosenSelection, content, e_3, command, view;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.settings.supportJsCommands)
                            throw new Error("JS commands are turned off; enable them via the Vimrc plugin configuration if you're sure you know what you're doing");
                        if (((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length) < 1)
                            throw new Error("Expected format: fileName {extraCode}");
                        extraCode = '';
                        fileName = params.args[0];
                        if (params.args.length > 1) {
                            params.args.shift();
                            extraCode = params.args.join(' ').trim();
                            if (extraCode[0] != '{' || extraCode[extraCode.length - 1] != '}')
                                throw new Error("Expected an extra code argument which is JS code surrounded by curly brackets: {...}");
                        }
                        currentSelections = this.currentSelection;
                        chosenSelection = currentSelections && currentSelections.length > 0 ? currentSelections[0] : null;
                        content = '';
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.app.vault.adapter.read(fileName)];
                    case 2:
                        content = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _b.sent();
                        throw new Error("Cannot read file ".concat(params.args[0], " from vault root: ").concat(e_3.message));
                    case 4:
                        command = Function('editor', 'view', 'selection', content + extraCode);
                        view = this.getActiveView();
                        command(view.editor, view, chosenSelection);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    VimrcPlugin.prototype.defineSource = function (vimObject) {
        var _this = this;
        vimObject.defineEx('source', '', function (cm, params) { return __awaiter(_this, void 0, void 0, function () {
            var fileName;
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                if (((_a = params === null || params === void 0 ? void 0 : params.args) === null || _a === void 0 ? void 0 : _a.length) > 1)
                    throw new Error("Expected format: source [fileName]");
                fileName = params.argString.trim();
                try {
                    this.app.vault.adapter.read(fileName).then(function (vimrcContent) {
                        _this.loadVimCommands(vimrcContent);
                    });
                }
                catch (e) {
                    console.log('Error loading vimrc file', fileName, 'from the vault root', e.message);
                }
                return [2 /*return*/];
            });
        }); });
    };
    return VimrcPlugin;
}(obsidian.Plugin));
var SettingsTab = /** @class */ (function (_super) {
    __extends(SettingsTab, _super);
    function SettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    SettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Vimrc Settings' });
        new obsidian.Setting(containerEl)
            .setName('Vimrc file name')
            .setDesc('Relative to vault directory (requires restart)')
            .addText(function (text) {
            text.setPlaceholder(DEFAULT_SETTINGS.vimrcFileName);
            text.setValue(_this.plugin.settings.vimrcFileName || DEFAULT_SETTINGS.vimrcFileName);
            text.onChange(function (value) {
                _this.plugin.settings.vimrcFileName = value;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Vim chord display')
            .setDesc('Displays the current chord until completion. Ex: "<Space> f-" (requires restart)')
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.displayChord || DEFAULT_SETTINGS.displayChord);
            toggle.onChange(function (value) {
                _this.plugin.settings.displayChord = value;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Vim mode display')
            .setDesc('Displays the current vim mode (requires restart)')
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.displayVimMode || DEFAULT_SETTINGS.displayVimMode);
            toggle.onChange(function (value) {
                _this.plugin.settings.displayVimMode = value;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Use a fixed keyboard layout for Normal mode')
            .setDesc('Define a keyboard layout to always use when in Normal mode, regardless of the input language (experimental).')
            .addButton(function (button) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                button.setButtonText('Capture current layout');
                button.onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this.plugin.settings;
                                return [4 /*yield*/, this.plugin.captureKeyboardLayout()];
                            case 1:
                                _a.capturedKeyboardMap = _b.sent();
                                this.plugin.saveSettings();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); })
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.fixedNormalModeLayout || DEFAULT_SETTINGS.fixedNormalModeLayout);
            toggle.onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.plugin.settings.fixedNormalModeLayout = value;
                            if (!(value && Object.keys(this.plugin.settings.capturedKeyboardMap).length === 0)) return [3 /*break*/, 2];
                            _a = this.plugin.settings;
                            return [4 /*yield*/, this.plugin.captureKeyboardLayout()];
                        case 1:
                            _a.capturedKeyboardMap = _b.sent();
                            _b.label = 2;
                        case 2:
                            this.plugin.saveSettings();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName('Support JS commands (beware!)')
            .setDesc("Support the 'jscommand' and 'jsfile' commands, which allow defining Ex commands using Javascript. WARNING! Review the README to understand why this may be dangerous before enabling.")
            .addToggle(function (toggle) {
            var _a;
            toggle.setValue((_a = _this.plugin.settings.supportJsCommands) !== null && _a !== void 0 ? _a : DEFAULT_SETTINGS.supportJsCommands);
            toggle.onChange(function (value) {
                _this.plugin.settings.supportJsCommands = value;
                _this.plugin.saveSettings();
            });
        });
        containerEl.createEl('h2', { text: 'Vim Mode Display Prompt' });
        new obsidian.Setting(containerEl)
            .setName('Normal mode prompt')
            .setDesc('Set the status prompt text for normal mode.')
            .addText(function (text) {
            text.setPlaceholder('Default: 🟢');
            text.setValue(_this.plugin.settings.vimStatusPromptMap.normal ||
                DEFAULT_SETTINGS.vimStatusPromptMap.normal);
            text.onChange(function (value) {
                _this.plugin.settings.vimStatusPromptMap.normal = value ||
                    DEFAULT_SETTINGS.vimStatusPromptMap.normal;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Insert mode prompt')
            .setDesc('Set the status prompt text for insert mode.')
            .addText(function (text) {
            text.setPlaceholder('Default: 🟠');
            text.setValue(_this.plugin.settings.vimStatusPromptMap.insert ||
                DEFAULT_SETTINGS.vimStatusPromptMap.insert);
            text.onChange(function (value) {
                _this.plugin.settings.vimStatusPromptMap.insert = value ||
                    DEFAULT_SETTINGS.vimStatusPromptMap.insert;
                console.log(_this.plugin.settings.vimStatusPromptMap);
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Visual mode prompt')
            .setDesc('Set the status prompt text for visual mode.')
            .addText(function (text) {
            text.setPlaceholder('Default: 🟡');
            text.setValue(_this.plugin.settings.vimStatusPromptMap.visual ||
                DEFAULT_SETTINGS.vimStatusPromptMap.visual);
            text.onChange(function (value) {
                _this.plugin.settings.vimStatusPromptMap.visual = value ||
                    DEFAULT_SETTINGS.vimStatusPromptMap.visual;
                _this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Replace mode prompt')
            .setDesc('Set the status prompt text for replace mode.')
            .addText(function (text) {
            text.setPlaceholder('Default: 🔴');
            text.setValue(_this.plugin.settings.vimStatusPromptMap.replace ||
                DEFAULT_SETTINGS.vimStatusPromptMap.replace);
            text.onChange(function (value) {
                _this.plugin.settings.vimStatusPromptMap.replace = value ||
                    DEFAULT_SETTINGS.vimStatusPromptMap.replace;
                _this.plugin.saveSettings();
            });
        });
    };
    return SettingsTab;
}(obsidian.PluginSettingTab));

module.exports = VimrcPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9rZXlib2FyZGV2ZW50LWZyb20tZWxlY3Ryb24tYWNjZWxlcmF0b3IvaW5kZXguanMiLCJtYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XHJcbiAgICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cclxuICAgIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XHJcbiAgICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcclxuICAgIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xyXG4gICAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcclxuICAgICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xyXG4gICAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xyXG4gICAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XHJcbiAgICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XHJcbiAgICBkb25lID0gdHJ1ZTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XHJcbiAgICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcclxuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XHJcbiAgICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcclxuICAgIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIF9fZXh0ZW5kcyxcclxuICAgIF9fYXNzaWduLFxyXG4gICAgX19yZXN0LFxyXG4gICAgX19kZWNvcmF0ZSxcclxuICAgIF9fcGFyYW0sXHJcbiAgICBfX21ldGFkYXRhLFxyXG4gICAgX19hd2FpdGVyLFxyXG4gICAgX19nZW5lcmF0b3IsXHJcbiAgICBfX2NyZWF0ZUJpbmRpbmcsXHJcbiAgICBfX2V4cG9ydFN0YXIsXHJcbiAgICBfX3ZhbHVlcyxcclxuICAgIF9fcmVhZCxcclxuICAgIF9fc3ByZWFkLFxyXG4gICAgX19zcHJlYWRBcnJheXMsXHJcbiAgICBfX3NwcmVhZEFycmF5LFxyXG4gICAgX19hd2FpdCxcclxuICAgIF9fYXN5bmNHZW5lcmF0b3IsXHJcbiAgICBfX2FzeW5jRGVsZWdhdG9yLFxyXG4gICAgX19hc3luY1ZhbHVlcyxcclxuICAgIF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxyXG4gICAgX19pbXBvcnRTdGFyLFxyXG4gICAgX19pbXBvcnREZWZhdWx0LFxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXHJcbn07XHJcbiIsImNvbnN0IG1vZGlmaWVycyA9IC9eKENvbW1hbmRPckNvbnRyb2x8Q21kT3JDdHJsfENvbW1hbmR8Q21kfENvbnRyb2x8Q3RybHxBbHRHcnxPcHRpb258QWx0fFNoaWZ0fFN1cGVyKS9pO1xuY29uc3Qga2V5Q29kZXMgPSAvXihQbHVzfFNwYWNlfFRhYnxCYWNrc3BhY2V8RGVsZXRlfEluc2VydHxSZXR1cm58RW50ZXJ8VXB8RG93bnxMZWZ0fFJpZ2h0fEhvbWV8RW5kfFBhZ2VVcHxQYWdlRG93bnxFc2NhcGV8RXNjfFZvbHVtZVVwfFZvbHVtZURvd258Vm9sdW1lTXV0ZXxNZWRpYU5leHRUcmFja3xNZWRpYVByZXZpb3VzVHJhY2t8TWVkaWFTdG9wfE1lZGlhUGxheVBhdXNlfFByaW50U2NyZWVufEYyNHxGMjN8RjIyfEYyMXxGMjB8RjE5fEYxOHxGMTd8RjE2fEYxNXxGMTR8RjEzfEYxMnxGMTF8RjEwfEY5fEY4fEY3fEY2fEY1fEY0fEYzfEYyfEYxfFswLTlBLVopIUAjJCVeJiooOis8Xz4/fnt8fVwiOz0sXFwtLi9gW1xcXFxcXF0nXSkvaTtcbmNvbnN0IFVOU1VQUE9SVEVEID0ge307XG5cbmZ1bmN0aW9uIF9jb21tYW5kKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0cmV0dXJuIFVOU1VQUE9SVEVEO1xuXHR9XG5cblx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RvdWJsZSBgQ29tbWFuZGAgbW9kaWZpZXIgc3BlY2lmaWVkLicpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRldmVudDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQsIHttZXRhS2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX3N1cGVyKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RvdWJsZSBgU3VwZXJgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7bWV0YUtleTogdHJ1ZX0pLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9jb21tYW5kb3Jjb250cm9sKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG5cdFx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBDb21tYW5kYCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge21ldGFLZXk6IHRydWV9KSxcblx0XHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdFx0fTtcblx0fVxuXG5cdGlmIChldmVudC5jdHJsS2V5KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEb3VibGUgYENvbnRyb2xgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7Y3RybEtleTogdHJ1ZX0pLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9hbHQoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcikge1xuXHRpZiAobW9kaWZpZXIgPT09ICdvcHRpb24nICYmIHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0cmV0dXJuIFVOU1VQUE9SVEVEO1xuXHR9XG5cblx0aWYgKGV2ZW50LmFsdEtleSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBBbHRgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7YWx0S2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX3NoaWZ0KGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEb3VibGUgYFNoaWZ0YCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge3NoaWZ0S2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX2NvbnRyb2woYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcikge1xuXHRpZiAoZXZlbnQuY3RybEtleSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBDb250cm9sYCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge2N0cmxLZXk6IHRydWV9KSxcblx0XHRhY2NlbGVyYXRvcjogYWNjZWxlcmF0b3Iuc2xpY2UobW9kaWZpZXIubGVuZ3RoKVxuXHR9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VNb2RpZmllcih7YWNjZWxlcmF0b3IsIGV2ZW50fSwgbW9kaWZpZXIpIHtcblx0c3dpdGNoIChtb2RpZmllcikge1xuXHRcdGNhc2UgJ2NvbW1hbmQnOlxuXHRcdGNhc2UgJ2NtZCc6IHtcblx0XHRcdHJldHVybiBfY29tbWFuZChhY2NlbGVyYXRvciwgZXZlbnQsIG1vZGlmaWVyKTtcblx0XHR9XG5cblx0XHRjYXNlICdzdXBlcic6IHtcblx0XHRcdHJldHVybiBfc3VwZXIoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnY29udHJvbCc6XG5cdFx0Y2FzZSAnY3RybCc6IHtcblx0XHRcdHJldHVybiBfY29udHJvbChhY2NlbGVyYXRvciwgZXZlbnQsIG1vZGlmaWVyKTtcblx0XHR9XG5cblx0XHRjYXNlICdjb21tYW5kb3Jjb250cm9sJzpcblx0XHRjYXNlICdjbWRvcmN0cmwnOiB7XG5cdFx0XHRyZXR1cm4gX2NvbW1hbmRvcmNvbnRyb2woYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnb3B0aW9uJzpcblx0XHRjYXNlICdhbHRncic6XG5cdFx0Y2FzZSAnYWx0Jzoge1xuXHRcdFx0cmV0dXJuIF9hbHQoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnc2hpZnQnOiB7XG5cdFx0XHRyZXR1cm4gX3NoaWZ0KGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpO1xuXHRcdH1cblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRjb25zb2xlLmVycm9yKG1vZGlmaWVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWR1Y2VQbHVzKHthY2NlbGVyYXRvciwgZXZlbnR9KSB7XG5cdHJldHVybiB7XG5cdFx0ZXZlbnQsXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnRyaW0oKS5zbGljZSgxKVxuXHR9O1xufVxuXG5jb25zdCB2aXJ0dWFsS2V5Q29kZXMgPSB7XG5cdDA6ICdEaWdpdDAnLFxuXHQxOiAnRGlnaXQxJyxcblx0MjogJ0RpZ2l0MicsXG5cdDM6ICdEaWdpdDMnLFxuXHQ0OiAnRGlnaXQ0Jyxcblx0NTogJ0RpZ2l0NScsXG5cdDY6ICdEaWdpdDYnLFxuXHQ3OiAnRGlnaXQ3Jyxcblx0ODogJ0RpZ2l0OCcsXG5cdDk6ICdEaWdpdDknLFxuXHQnLSc6ICdNaW51cycsXG5cdCc9JzogJ0VxdWFsJyxcblx0UTogJ0tleVEnLFxuXHRXOiAnS2V5VycsXG5cdEU6ICdLZXlFJyxcblx0UjogJ0tleVInLFxuXHRUOiAnS2V5VCcsXG5cdFk6ICdLZXlZJyxcblx0VTogJ0tleVUnLFxuXHRJOiAnS2V5SScsXG5cdE86ICdLZXlPJyxcblx0UDogJ0tleVAnLFxuXHQnWyc6ICdCcmFja2V0TGVmdCcsXG5cdCddJzogJ0JyYWNrZXRSaWdodCcsXG5cdEE6ICdLZXlBJyxcblx0UzogJ0tleVMnLFxuXHREOiAnS2V5RCcsXG5cdEY6ICdLZXlGJyxcblx0RzogJ0tleUcnLFxuXHRIOiAnS2V5SCcsXG5cdEo6ICdLZXlKJyxcblx0SzogJ0tleUsnLFxuXHRMOiAnS2V5TCcsXG5cdCc7JzogJ1NlbWljb2xvbicsXG5cdCdcXCcnOiAnUXVvdGUnLFxuXHQnYCc6ICdCYWNrcXVvdGUnLFxuXHQnLyc6ICdCYWNrc2xhc2gnLFxuXHRaOiAnS2V5WicsXG5cdFg6ICdLZXlYJyxcblx0QzogJ0tleUMnLFxuXHRWOiAnS2V5VicsXG5cdEI6ICdLZXlCJyxcblx0TjogJ0tleU4nLFxuXHRNOiAnS2V5TScsXG5cdCcsJzogJ0NvbW1hJyxcblx0Jy4nOiAnUGVyaW9kJyxcblx0J1xcXFwnOiAnU2xhc2gnLFxuXHQnICc6ICdTcGFjZSdcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZUtleSh7YWNjZWxlcmF0b3IsIGV2ZW50fSwga2V5KSB7XG5cdGlmIChrZXkubGVuZ3RoID4gMSB8fCBldmVudC5rZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYFVudmFsaWQga2V5Y29kZSBcXGAke2tleX1cXGAuYCk7XG5cdH1cblxuXHRjb25zdCBjb2RlID1cblx0XHRrZXkudG9VcHBlckNhc2UoKSBpbiB2aXJ0dWFsS2V5Q29kZXMgP1xuXHRcdFx0dmlydHVhbEtleUNvZGVzW2tleS50b1VwcGVyQ2FzZSgpXSA6XG5cdFx0XHRudWxsO1xuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7a2V5fSwgY29kZSA/IHtjb2RlfSA6IG51bGwpLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci50cmltKCkuc2xpY2Uoa2V5Lmxlbmd0aClcblx0fTtcbn1cblxuY29uc3QgZG9tS2V5cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwge1xuXHRwbHVzOiAnQWRkJyxcblx0c3BhY2U6ICdTcGFjZScsXG5cdHRhYjogJ1RhYicsXG5cdGJhY2tzcGFjZTogJ0JhY2tzcGFjZScsXG5cdGRlbGV0ZTogJ0RlbGV0ZScsXG5cdGluc2VydDogJ0luc2VydCcsXG5cdHJldHVybjogJ1JldHVybicsXG5cdGVudGVyOiAnUmV0dXJuJyxcblx0dXA6ICdBcnJvd1VwJyxcblx0ZG93bjogJ0Fycm93RG93bicsXG5cdGxlZnQ6ICdBcnJvd0xlZnQnLFxuXHRyaWdodDogJ0Fycm93UmlnaHQnLFxuXHRob21lOiAnSG9tZScsXG5cdGVuZDogJ0VuZCcsXG5cdHBhZ2V1cDogJ1BhZ2VVcCcsXG5cdHBhZ2Vkb3duOiAnUGFnZURvd24nLFxuXHRlc2NhcGU6ICdFc2NhcGUnLFxuXHRlc2M6ICdFc2NhcGUnLFxuXHR2b2x1bWV1cDogJ0F1ZGlvVm9sdW1lVXAnLFxuXHR2b2x1bWVkb3duOiAnQXVkaW9Wb2x1bWVEb3duJyxcblx0dm9sdW1lbXV0ZTogJ0F1ZGlvVm9sdW1lTXV0ZScsXG5cdG1lZGlhbmV4dHRyYWNrOiAnTWVkaWFUcmFja05leHQnLFxuXHRtZWRpYXByZXZpb3VzdHJhY2s6ICdNZWRpYVRyYWNrUHJldmlvdXMnLFxuXHRtZWRpYXN0b3A6ICdNZWRpYVN0b3AnLFxuXHRtZWRpYXBsYXlwYXVzZTogJ01lZGlhUGxheVBhdXNlJyxcblx0cHJpbnRzY3JlZW46ICdQcmludFNjcmVlbidcbn0pO1xuXG4vLyBBZGQgZnVuY3Rpb24ga2V5c1xuZm9yIChsZXQgaSA9IDE7IGkgPD0gMjQ7IGkrKykge1xuXHRkb21LZXlzW2BmJHtpfWBdID0gYEYke2l9YDtcbn1cblxuZnVuY3Rpb24gcmVkdWNlQ29kZSh7YWNjZWxlcmF0b3IsIGV2ZW50fSwge2NvZGUsIGtleX0pIHtcblx0aWYgKGV2ZW50LmNvZGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZWQga2V5Y29kZSBcXGAke2tleX1cXGAuYCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge2tleX0sIGNvZGUgPyB7Y29kZX0gOiBudWxsKSxcblx0XHRhY2NlbGVyYXRvcjogYWNjZWxlcmF0b3IudHJpbSgpLnNsaWNlKChrZXkgJiYga2V5Lmxlbmd0aCkgfHwgMClcblx0fTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRyYW5zZm9ybSBhbiBFbGVjdHJvbiBBY2NlbGVyYXRvciBzdHJpbmcgaW50b1xuICogYSBET00gS2V5Ym9hcmRFdmVudCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBhY2NlbGVyYXRvciBhbiBFbGVjdHJvbiBBY2NlbGVyYXRvciBzdHJpbmcsIGUuZy4gYEN0cmwrQ2Agb3IgYFNoaWZ0K1NwYWNlYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBET00gS2V5Ym9hcmRFdmVudCBvYmplY3QgZGVyaXZhdGUgZnJvbSB0aGUgYGFjY2VsZXJhdG9yYCBhcmd1bWVudC5cbiAqL1xuZnVuY3Rpb24gdG9LZXlFdmVudChhY2NlbGVyYXRvcikge1xuXHRsZXQgc3RhdGUgPSB7YWNjZWxlcmF0b3IsIGV2ZW50OiB7fX07XG5cdHdoaWxlIChzdGF0ZS5hY2NlbGVyYXRvciAhPT0gJycpIHtcblx0XHRjb25zdCBtb2RpZmllck1hdGNoID0gc3RhdGUuYWNjZWxlcmF0b3IubWF0Y2gobW9kaWZpZXJzKTtcblx0XHRpZiAobW9kaWZpZXJNYXRjaCkge1xuXHRcdFx0Y29uc3QgbW9kaWZpZXIgPSBtb2RpZmllck1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRzdGF0ZSA9IHJlZHVjZU1vZGlmaWVyKHN0YXRlLCBtb2RpZmllcik7XG5cdFx0XHRpZiAoc3RhdGUgPT09IFVOU1VQUE9SVEVEKSB7XG5cdFx0XHRcdHJldHVybiB7dW5zdXBwb3J0ZWRLZXlGb3JQbGF0Zm9ybTogdHJ1ZX07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzdGF0ZS5hY2NlbGVyYXRvci50cmltKClbMF0gPT09ICcrJykge1xuXHRcdFx0c3RhdGUgPSByZWR1Y2VQbHVzKHN0YXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY29kZU1hdGNoID0gc3RhdGUuYWNjZWxlcmF0b3IubWF0Y2goa2V5Q29kZXMpO1xuXHRcdFx0aWYgKGNvZGVNYXRjaCkge1xuXHRcdFx0XHRjb25zdCBjb2RlID0gY29kZU1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGlmIChjb2RlIGluIGRvbUtleXMpIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHJlZHVjZUNvZGUoc3RhdGUsIHtcblx0XHRcdFx0XHRcdGNvZGU6IGRvbUtleXNbY29kZV0sXG5cdFx0XHRcdFx0XHRrZXk6IGNvZGVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHJlZHVjZUtleShzdGF0ZSwgY29kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVW52YWxpZCBhY2NlbGVyYXRvcjogXCIke3N0YXRlLmFjY2VsZXJhdG9yfVwiYCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0YXRlLmV2ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0VU5TVVBQT1JURUQsXG5cdHJlZHVjZU1vZGlmaWVyLFxuXHRyZWR1Y2VQbHVzLFxuXHRyZWR1Y2VLZXksXG5cdHJlZHVjZUNvZGUsXG5cdHRvS2V5RXZlbnRcbn07XG4iLCJpbXBvcnQgKiBhcyBrZXlGcm9tQWNjZWxlcmF0b3IgZnJvbSAna2V5Ym9hcmRldmVudC1mcm9tLWVsZWN0cm9uLWFjY2VsZXJhdG9yJztcclxuaW1wb3J0IHsgRWRpdG9yU2VsZWN0aW9uLCBOb3RpY2UsIEFwcCwgTWFya2Rvd25WaWV3LCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIFRGaWxlIH0gZnJvbSAnb2JzaWRpYW4nO1xyXG5cclxuZGVjbGFyZSBjb25zdCBDb2RlTWlycm9yOiBhbnk7XHJcblxyXG5jb25zdCBlbnVtIHZpbVN0YXR1cyB7XHJcblx0bm9ybWFsID0gJ25vcm1hbCcsXHJcblx0aW5zZXJ0ID0gJ2luc2VydCcsXHJcblx0dmlzdWFsID0gJ3Zpc3VhbCcsXHJcblx0cmVwbGFjZSA9ICdyZXBsYWNlJyxcclxufVxyXG50eXBlIFZpbVN0YXR1c1Byb21wdCA9IHN0cmluZztcclxudHlwZSBWaW1TdGF0dXNQcm9tcHRNYXAgPSB7XHJcblx0W3N0YXR1cyBpbiB2aW1TdGF0dXNdOiBWaW1TdGF0dXNQcm9tcHQ7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgU2V0dGluZ3Mge1xyXG5cdHZpbXJjRmlsZU5hbWU6IHN0cmluZyxcclxuXHRkaXNwbGF5Q2hvcmQ6IGJvb2xlYW4sXHJcblx0ZGlzcGxheVZpbU1vZGU6IGJvb2xlYW4sXHJcblx0Zml4ZWROb3JtYWxNb2RlTGF5b3V0OiBib29sZWFuLFxyXG5cdGNhcHR1cmVkS2V5Ym9hcmRNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXHJcblx0c3VwcG9ydEpzQ29tbWFuZHM/OiBib29sZWFuXHJcblx0dmltU3RhdHVzUHJvbXB0TWFwOiBWaW1TdGF0dXNQcm9tcHRNYXA7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IFNldHRpbmdzID0ge1xyXG5cdHZpbXJjRmlsZU5hbWU6IFwiLm9ic2lkaWFuLnZpbXJjXCIsXHJcblx0ZGlzcGxheUNob3JkOiBmYWxzZSxcclxuXHRkaXNwbGF5VmltTW9kZTogZmFsc2UsXHJcblx0Zml4ZWROb3JtYWxNb2RlTGF5b3V0OiBmYWxzZSxcclxuXHRjYXB0dXJlZEtleWJvYXJkTWFwOiB7fSxcclxuXHRzdXBwb3J0SnNDb21tYW5kczogZmFsc2UsXHJcblx0dmltU3RhdHVzUHJvbXB0TWFwOiB7XHJcblx0XHRub3JtYWw6ICfwn5+iJyxcclxuXHRcdGluc2VydDogJ/Cfn6AnLFxyXG5cdFx0dmlzdWFsOiAn8J+foScsXHJcblx0XHRyZXBsYWNlOiAn8J+UtCcsXHJcblx0fSxcclxufVxyXG5cclxuY29uc3QgdmltU3RhdHVzUHJvbXB0Q2xhc3MgPSBcInZpbXJjLXN1cHBvcnQtdmltLW1vZGVcIjtcclxuXHJcbi8vIE5PVEU6IHRvIGZ1dHVyZSBtYWludGFpbmVycywgcGxlYXNlIG1ha2Ugc3VyZSBhbGwgbWFwcGluZyBjb21tYW5kcyBhcmUgaW5jbHVkZWQgaW4gdGhpcyBhcnJheS5cclxuY29uc3QgbWFwcGluZ0NvbW1hbmRzOiBTdHJpbmdbXSA9IFtcclxuXHRcIm1hcFwiLFxyXG5cdFwibm1hcFwiLFxyXG5cdFwibm9yZW1hcFwiLFxyXG5cdFwiaXVubWFwXCIsXHJcblx0XCJudW5tYXBcIixcclxuXHRcInZ1bm1hcFwiLFxyXG5dXHJcblxyXG5mdW5jdGlvbiBzbGVlcChtczogbnVtYmVyKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaW1yY1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0c2V0dGluZ3M6IFNldHRpbmdzO1xyXG5cclxuXHRwcml2YXRlIGNvZGVNaXJyb3JWaW1PYmplY3Q6IGFueSA9IG51bGw7XHJcblx0cHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIGxhc3RZYW5rQnVmZmVyOiBzdHJpbmdbXSA9IFtcIlwiXTtcclxuXHRwcml2YXRlIGxhc3RTeXN0ZW1DbGlwYm9hcmQgPSBcIlwiO1xyXG5cdHByaXZhdGUgeWFua1RvU3lzdGVtQ2xpcGJvYXJkOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBjdXJyZW50S2V5Q2hvcmQ6IGFueSA9IFtdO1xyXG5cdHByaXZhdGUgdmltQ2hvcmRTdGF0dXNCYXI6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuXHRwcml2YXRlIHZpbVN0YXR1c0JhcjogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG5cdHByaXZhdGUgY3VycmVudFZpbVN0YXR1czogdmltU3RhdHVzID0gdmltU3RhdHVzLm5vcm1hbDtcclxuXHRwcml2YXRlIGN1c3RvbVZpbUtleWJpbmRzOiB7IFtuYW1lOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuXHRwcml2YXRlIGN1cnJlbnRTZWxlY3Rpb246IFtFZGl0b3JTZWxlY3Rpb25dID0gbnVsbDtcclxuXHRwcml2YXRlIGlzSW5zZXJ0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHR1cGRhdGVWaW1TdGF0dXNCYXIoKSB7XHJcblx0XHR0aGlzLnZpbVN0YXR1c0Jhci5zZXRUZXh0KFxyXG5cdFx0XHR0aGlzLnNldHRpbmdzLnZpbVN0YXR1c1Byb21wdE1hcFt0aGlzLmN1cnJlbnRWaW1TdGF0dXNdXHJcblx0XHQpO1xyXG5cdFx0dGhpcy52aW1TdGF0dXNCYXIuZGF0YXNldC52aW1Nb2RlID0gdGhpcy5jdXJyZW50VmltU3RhdHVzO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgY2FwdHVyZUtleWJvYXJkTGF5b3V0KCkge1xyXG5cdFx0Ly8gVGhpcyBpcyBleHBlcmltZW50YWwgQVBJIGFuZCBpdCBtaWdodCBicmVhayBhdCBzb21lIHBvaW50OlxyXG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0tleWJvYXJkTGF5b3V0TWFwXHJcblx0XHRsZXQga2V5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XHJcblx0XHRsZXQgbGF5b3V0ID0gYXdhaXQgKG5hdmlnYXRvciBhcyBhbnkpLmtleWJvYXJkLmdldExheW91dE1hcCgpO1xyXG5cdFx0bGV0IGRvbmVJdGVyYXRpbmcgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGxldCBjb3VudGVkID0gMDtcclxuXHRcdFx0bGF5b3V0LmZvckVhY2goKHZhbHVlOiBhbnksIGluZGV4OiBhbnkpID0+IHtcclxuXHRcdFx0XHRrZXlNYXBbaW5kZXhdID0gdmFsdWU7XHJcblx0XHRcdFx0Y291bnRlZCArPSAxO1xyXG5cdFx0XHRcdGlmIChjb3VudGVkID09PSBsYXlvdXQuc2l6ZSlcclxuXHRcdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdGF3YWl0IGRvbmVJdGVyYXRpbmc7XHJcblx0XHRuZXcgTm90aWNlKCdLZXlib2FyZCBsYXlvdXQgY2FwdHVyZWQnKTtcclxuXHRcdHJldHVybiBrZXlNYXA7XHJcblx0fVxyXG5cclxuXHRhc3luYyBpbml0aWFsaXplKCkge1xyXG5cdFx0aWYgKHRoaXMuaW5pdGlhbGl6ZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QgPSAod2luZG93IGFzIGFueSkuQ29kZU1pcnJvckFkYXB0ZXI/LlZpbTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyWWFua0V2ZW50cyhhY3RpdmVXaW5kb3cpO1xyXG5cdFx0dGhpcy5hcHAud29ya3NwYWNlLm9uKFwid2luZG93LW9wZW5cIiwgKHdvcmtzcGFjZVdpbmRvdywgdykgPT4ge1xyXG5cdFx0XHR0aGlzLnJlZ2lzdGVyWWFua0V2ZW50cyh3KTtcclxuXHRcdH0pXHJcblxyXG5cdFx0Ly8gVHdvIGV2ZW50cyBjb3NcclxuXHRcdC8vIHRoaXMgZG9uJ3QgdHJpZ2dlciBvbiBsb2FkaW5nL3JlbG9hZGluZyBvYnNpZGlhbiB3aXRoIG5vdGUgb3BlbmVkXHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJhY3RpdmUtbGVhZi1jaGFuZ2VcIiwgYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGlvbkV2ZW50KCk7XHJcblxyXG5cdFx0XHR0aGlzLnVwZGF0ZVZpbUV2ZW50cygpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyBhbmQgdGhpcyBkb24ndCB0cmlnZ2VyIG9uIG9wZW5pbmcgc2FtZSBmaWxlIGluIG5ldyBwYW5lXHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJmaWxlLW9wZW5cIiwgYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGlvbkV2ZW50KCk7XHJcblxyXG5cdFx0XHR0aGlzLnVwZGF0ZVZpbUV2ZW50cygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRyZWdpc3RlcllhbmtFdmVudHMod2luOiBXaW5kb3cpIHtcclxuXHRcdHRoaXMucmVnaXN0ZXJEb21FdmVudCh3aW4uZG9jdW1lbnQsICdjbGljaycsICgpID0+IHtcclxuXHRcdFx0dGhpcy5jYXB0dXJlWWFua0J1ZmZlcih3aW4pO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnJlZ2lzdGVyRG9tRXZlbnQod2luLmRvY3VtZW50LCAna2V5dXAnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuY2FwdHVyZVlhbmtCdWZmZXIod2luKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5yZWdpc3RlckRvbUV2ZW50KHdpbi5kb2N1bWVudCwgJ2ZvY3VzaW4nLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuY2FwdHVyZVlhbmtCdWZmZXIod2luKTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRhc3luYyB1cGRhdGVTZWxlY3Rpb25FdmVudCgpIHtcclxuXHRcdGNvbnN0IHZpZXcgPSB0aGlzLmdldEFjdGl2ZVZpZXcoKTtcclxuXHRcdGlmICghdmlldykgcmV0dXJuO1xyXG5cclxuXHRcdGxldCBjbSA9IHRoaXMuZ2V0Q29kZU1pcnJvcih2aWV3KTtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy5nZXRDdXJzb3JBY3Rpdml0eUhhbmRsZXJzKGNtKS5zb21lKFxyXG5cdFx0XHRcdChlOiB7IG5hbWU6IHN0cmluZyB9KSA9PiBlLm5hbWUgPT09IFwidXBkYXRlU2VsZWN0aW9uXCIpXHJcblx0XHQpIHJldHVybjtcclxuXHRcdGNtLm9uKFwiY3Vyc29yQWN0aXZpdHlcIiwgYXN5bmMgKGNtOiBDb2RlTWlycm9yLkVkaXRvcikgPT4gdGhpcy51cGRhdGVTZWxlY3Rpb24oY20pKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHVwZGF0ZVNlbGVjdGlvbihjbTogYW55KSB7XHJcblx0XHR0aGlzLmN1cnJlbnRTZWxlY3Rpb24gPSBjbS5saXN0U2VsZWN0aW9ucygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRDdXJzb3JBY3Rpdml0eUhhbmRsZXJzKGNtOiBDb2RlTWlycm9yLkVkaXRvcikge1xyXG5cdFx0cmV0dXJuIChjbSBhcyBhbnkpLl9oYW5kbGVycy5jdXJzb3JBY3Rpdml0eTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHVwZGF0ZVZpbUV2ZW50cygpIHtcclxuXHRcdGxldCB2aWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XHJcblx0XHRpZiAodmlldykge1xyXG5cdFx0XHRjb25zdCBjbUVkaXRvciA9IHRoaXMuZ2V0Q29kZU1pcnJvcih2aWV3KTtcclxuXHJcblx0XHRcdC8vIFNlZSBodHRwczovL2NvZGVtaXJyb3IubmV0L2RvYy9tYW51YWwuaHRtbCN2aW1hcGlfZXZlbnRzIGZvciBldmVudHMuXHJcblx0XHRcdHRoaXMuaXNJbnNlcnRNb2RlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuY3VycmVudFZpbVN0YXR1cyA9IHZpbVN0YXR1cy5ub3JtYWw7XHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmRpc3BsYXlWaW1Nb2RlKVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlVmltU3RhdHVzQmFyKCk7XHJcblx0XHRcdGNtRWRpdG9yLm9mZigndmltLW1vZGUtY2hhbmdlJywgdGhpcy5sb2dWaW1Nb2RlQ2hhbmdlKTtcclxuXHRcdFx0Y21FZGl0b3Iub24oJ3ZpbS1tb2RlLWNoYW5nZScsIHRoaXMubG9nVmltTW9kZUNoYW5nZSk7XHJcblxyXG5cdFx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZCA9IFtdO1xyXG5cdFx0XHRjbUVkaXRvci5vZmYoJ3ZpbS1rZXlwcmVzcycsIHRoaXMub25WaW1LZXlwcmVzcyk7XHJcblx0XHRcdGNtRWRpdG9yLm9uKCd2aW0ta2V5cHJlc3MnLCB0aGlzLm9uVmltS2V5cHJlc3MpO1xyXG5cdFx0XHRjbUVkaXRvci5vZmYoJ3ZpbS1jb21tYW5kLWRvbmUnLCB0aGlzLm9uVmltQ29tbWFuZERvbmUpO1xyXG5cdFx0XHRjbUVkaXRvci5vbigndmltLWNvbW1hbmQtZG9uZScsIHRoaXMub25WaW1Db21tYW5kRG9uZSk7XHJcblx0XHRcdENvZGVNaXJyb3Iub2ZmKGNtRWRpdG9yLmdldElucHV0RmllbGQoKSwgJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XHJcblx0XHRcdENvZGVNaXJyb3Iub24oY21FZGl0b3IuZ2V0SW5wdXRGaWVsZCgpLCAna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIG9ubG9hZCgpIHtcclxuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XHJcblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IFNldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSlcclxuXHJcblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBWaW1yYyBwbHVnaW4nKTtcclxuXHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2FjdGl2ZS1sZWFmLWNoYW5nZScsIGFzeW5jICgpID0+IHtcclxuXHRcdFx0aWYgKCF0aGlzLmluaXRpYWxpemVkKVxyXG5cdFx0XHRcdGF3YWl0IHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdFx0XHRpZiAodGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmxvYWRlZFZpbXJjKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0bGV0IGZpbGVOYW1lID0gdGhpcy5zZXR0aW5ncy52aW1yY0ZpbGVOYW1lO1xyXG5cdFx0XHRpZiAoIWZpbGVOYW1lIHx8IGZpbGVOYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRmaWxlTmFtZSA9IERFRkFVTFRfU0VUVElOR1MudmltcmNGaWxlTmFtZTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnQ29uZmlndXJlZCBWaW1yYyBmaWxlIG5hbWUgaXMgaWxsZWdhbCwgZmFsbGluZy1iYWNrIHRvIGRlZmF1bHQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdmltcmNDb250ZW50ID0gJyc7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dmltcmNDb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci5yZWFkKGZpbGVOYW1lKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBsb2FkaW5nIHZpbXJjIGZpbGUnLCBmaWxlTmFtZSwgJ2Zyb20gdGhlIHZhdWx0IHJvb3QnLCBlLm1lc3NhZ2UpXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5yZWFkVmltSW5pdCh2aW1yY0NvbnRlbnQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuXHR9XHJcblxyXG5cdGxvZ1ZpbU1vZGVDaGFuZ2UgPSBhc3luYyAoY206IGFueSkgPT4ge1xyXG5cdFx0aWYgKCFjbSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5pc0luc2VydE1vZGUgPSBjbS5tb2RlID09PSAnaW5zZXJ0JztcclxuXHRcdHN3aXRjaCAoY20ubW9kZSkge1xyXG5cdFx0XHRjYXNlIFwiaW5zZXJ0XCI6XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VmltU3RhdHVzID0gdmltU3RhdHVzLmluc2VydDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIm5vcm1hbFwiOlxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFZpbVN0YXR1cyA9IHZpbVN0YXR1cy5ub3JtYWw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJ2aXN1YWxcIjpcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRWaW1TdGF0dXMgPSB2aW1TdGF0dXMudmlzdWFsO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwicmVwbGFjZVwiOlxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFZpbVN0YXR1cyA9IHZpbVN0YXR1cy5yZXBsYWNlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuZGlzcGxheVZpbU1vZGUpXHJcblx0XHRcdHRoaXMudXBkYXRlVmltU3RhdHVzQmFyKCk7XHJcblx0fVxyXG5cclxuXHRvbnVubG9hZCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCd1bmxvYWRpbmcgVmltcmMgcGx1Z2luIChidXQgVmltIGNvbW1hbmRzIHRoYXQgd2VyZSBhbHJlYWR5IGxvYWRlZCB3aWxsIHN0aWxsIHdvcmspJyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldEFjdGl2ZVZpZXcoKTogTWFya2Rvd25WaWV3IHtcclxuXHRcdHJldHVybiB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRDb2RlTWlycm9yKHZpZXc6IE1hcmtkb3duVmlldyk6IENvZGVNaXJyb3IuRWRpdG9yIHtcclxuXHRcdHJldHVybiAodmlldyBhcyBhbnkpLmVkaXRNb2RlPy5lZGl0b3I/LmNtPy5jbTtcclxuXHR9XHJcblxyXG5cdHJlYWRWaW1Jbml0KHZpbUNvbW1hbmRzOiBzdHJpbmcpIHtcclxuXHRcdGxldCB2aWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XHJcblx0XHRpZiAodmlldykge1xyXG5cdFx0XHR2YXIgY21FZGl0b3IgPSB0aGlzLmdldENvZGVNaXJyb3Iodmlldyk7XHJcblx0XHRcdGlmIChjbUVkaXRvciAmJiAhdGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmxvYWRlZFZpbXJjKSB7XHJcblx0XHRcdFx0dGhpcy5kZWZpbmVCYXNpY0NvbW1hbmRzKHRoaXMuY29kZU1pcnJvclZpbU9iamVjdCk7XHJcblx0XHRcdFx0dGhpcy5kZWZpbmVTZW5kS2V5cyh0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QpO1xyXG5cdFx0XHRcdHRoaXMuZGVmaW5lT2JDb21tYW5kKHRoaXMuY29kZU1pcnJvclZpbU9iamVjdCk7XHJcblx0XHRcdFx0dGhpcy5kZWZpbmVTdXJyb3VuZCh0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QpO1xyXG5cdFx0XHRcdHRoaXMuZGVmaW5lSnNDb21tYW5kKHRoaXMuY29kZU1pcnJvclZpbU9iamVjdCk7XHJcblx0XHRcdFx0dGhpcy5kZWZpbmVKc0ZpbGUodGhpcy5jb2RlTWlycm9yVmltT2JqZWN0KTtcclxuXHRcdFx0XHR0aGlzLmRlZmluZVNvdXJjZSh0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QpO1xyXG5cclxuXHRcdFx0XHR0aGlzLmxvYWRWaW1Db21tYW5kcyh2aW1Db21tYW5kcyk7XHJcblxyXG5cdFx0XHRcdHRoaXMucHJlcGFyZUNob3JkRGlzcGxheSgpO1xyXG5cdFx0XHRcdHRoaXMucHJlcGFyZVZpbU1vZGVEaXNwbGF5KCk7XHJcblxyXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlIGxvYWQgaXQganVzdCBvbmNlIHBlciBDb2RlTWlycm9yIGluc3RhbmNlLlxyXG5cdFx0XHRcdC8vIFRoaXMgaXMgc3VwcG9zZWQgdG8gd29yayBiZWNhdXNlIHRoZSBWaW0gc3RhdGUgaXMga2VwdCBhdCB0aGUga2V5bWFwIGxldmVsLCBob3BlZnVsbHlcclxuXHRcdFx0XHQvLyB0aGVyZSB3aWxsIG5vdCBiZSBidWdzIGNhdXNlZCBieSBvcGVyYXRpb25zIHRoYXQgYXJlIGtlcHQgYXQgdGhlIG9iamVjdCBsZXZlbCBpbnN0ZWFkXHJcblx0XHRcdFx0dGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmxvYWRlZFZpbXJjID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNtRWRpdG9yKSB7XHJcblx0XHRcdFx0Y21FZGl0b3Iub2ZmKCd2aW0tbW9kZS1jaGFuZ2UnLCB0aGlzLmxvZ1ZpbU1vZGVDaGFuZ2UpO1xyXG5cdFx0XHRcdGNtRWRpdG9yLm9uKCd2aW0tbW9kZS1jaGFuZ2UnLCB0aGlzLmxvZ1ZpbU1vZGVDaGFuZ2UpO1xyXG5cdFx0XHRcdENvZGVNaXJyb3Iub2ZmKGNtRWRpdG9yLmdldElucHV0RmllbGQoKSwgJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XHJcblx0XHRcdFx0Q29kZU1pcnJvci5vbihjbUVkaXRvci5nZXRJbnB1dEZpZWxkKCksICdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsb2FkVmltQ29tbWFuZHModmltQ29tbWFuZHM6IHN0cmluZykge1xyXG5cdFx0bGV0IHZpZXcgPSB0aGlzLmdldEFjdGl2ZVZpZXcoKTtcclxuXHRcdGlmICh2aWV3KSB7XHJcblx0XHRcdHZhciBjbUVkaXRvciA9IHRoaXMuZ2V0Q29kZU1pcnJvcih2aWV3KTtcclxuXHJcblx0XHRcdHZpbUNvbW1hbmRzLnNwbGl0KFwiXFxuXCIpLmZvckVhY2goXHJcblx0XHRcdFx0ZnVuY3Rpb24gKGxpbmU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgYXJyOiBbc3RyaW5nXSkge1xyXG5cdFx0XHRcdFx0aWYgKGxpbmUudHJpbSgpLmxlbmd0aCA+IDAgJiYgbGluZS50cmltKClbMF0gIT0gJ1wiJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgc3BsaXQgPSBsaW5lLnNwbGl0KFwiIFwiKVxyXG5cdFx0XHRcdFx0XHRpZiAobWFwcGluZ0NvbW1hbmRzLmluY2x1ZGVzKHNwbGl0WzBdKSkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIEhhdmUgdG8gZG8gdGhpcyBiZWNhdXNlIFwidmltLWNvbW1hbmQtZG9uZVwiIGV2ZW50IGRvZXNuJ3QgYWN0dWFsbHkgd29yayBwcm9wZXJseSwgb3Igc29tZXRoaW5nLlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VzdG9tVmltS2V5YmluZHNbc3BsaXRbMV1dID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoaXMuY29kZU1pcnJvclZpbU9iamVjdC5oYW5kbGVFeChjbUVkaXRvciwgbGluZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fS5iaW5kKHRoaXMpIC8vIEZhc3RlciB0aGFuIGFuIGFycm93IGZ1bmN0aW9uLiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MDM3NTQ0MC9iaW5kaW5nLXZzLWFycm93LWZ1bmN0aW9uLWZvci1yZWFjdC1vbmNsaWNrLWV2ZW50XHJcblx0XHRcdClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRlZmluZUJhc2ljQ29tbWFuZHModmltT2JqZWN0OiBhbnkpIHtcclxuXHRcdHZpbU9iamVjdC5kZWZpbmVPcHRpb24oJ2NsaXBib2FyZCcsICcnLCAnc3RyaW5nJywgWydjbGlwJ10sICh2YWx1ZTogc3RyaW5nLCBjbTogYW55KSA9PiB7XHJcblx0XHRcdGlmICh2YWx1ZSkge1xyXG5cdFx0XHRcdGlmICh2YWx1ZS50cmltKCkgPT0gJ3VubmFtZWQnIHx8IHZhbHVlLnRyaW0oKSA9PSAndW5uYW1lZHBsdXMnKSB7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMueWFua1RvU3lzdGVtQ2xpcGJvYXJkKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMueWFua1RvU3lzdGVtQ2xpcGJvYXJkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJWaW0gaXMgbm93IHNldCB0byB5YW5rIHRvIHN5c3RlbSBjbGlwYm9hcmQuXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbnJlY29nbml6ZWQgY2xpcGJvYXJkIG9wdGlvbiwgc3VwcG9ydGVkIGFyZSAndW5uYW1lZCcgYW5kICd1bm5hbWVkcGx1cycgKGFuZCB0aGV5IGRvIHRoZSBzYW1lKVwiKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmltT2JqZWN0LmRlZmluZU9wdGlvbigndGFic3RvcCcsIDQsICdudW1iZXInLCBbXSwgKHZhbHVlOiBudW1iZXIsIGNtOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKHZhbHVlICYmIGNtKSB7XHJcblx0XHRcdFx0Y20uc2V0T3B0aW9uKCd0YWJTaXplJywgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR2aW1PYmplY3QuZGVmaW5lRXgoJ2l1bm1hcCcsICcnLCAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKHBhcmFtcy5hcmdTdHJpbmcudHJpbSgpKSB7XHJcblx0XHRcdFx0dGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LnVubWFwKHBhcmFtcy5hcmdTdHJpbmcudHJpbSgpLCAnaW5zZXJ0Jyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeCgnbnVubWFwJywgJycsIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAocGFyYW1zLmFyZ1N0cmluZy50cmltKCkpIHtcclxuXHRcdFx0XHR0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QudW5tYXAocGFyYW1zLmFyZ1N0cmluZy50cmltKCksICdub3JtYWwnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCd2dW5tYXAnLCAnJywgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdGlmIChwYXJhbXMuYXJnU3RyaW5nLnRyaW0oKSkge1xyXG5cdFx0XHRcdHRoaXMuY29kZU1pcnJvclZpbU9iamVjdC51bm1hcChwYXJhbXMuYXJnU3RyaW5nLnRyaW0oKSwgJ3Zpc3VhbCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR2aW1PYmplY3QuZGVmaW5lRXgoJ25vcmVtYXAnLCAnJywgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdGlmICghcGFyYW1zPy5hcmdzPy5sZW5ndGgpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbWFwcGluZzogbm9yZW1hcCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocGFyYW1zLmFyZ1N0cmluZy50cmltKCkpIHtcclxuXHRcdFx0XHR0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3Qubm9yZW1hcC5hcHBseSh0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QsIHBhcmFtcy5hcmdzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gQWxsb3cgdGhlIHVzZXIgdG8gcmVnaXN0ZXIgYW4gRXggY29tbWFuZFxyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdleG1hcCcsICcnLCAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKHBhcmFtcz8uYXJncz8ubGVuZ3RoICYmIHBhcmFtcy5hcmdzLmxlbmd0aCA8IDIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYGV4bWFwIHJlcXVpcmVzIGF0IGxlYXN0IDIgcGFyYW1ldGVyczogW25hbWVdIFthY3Rpb25zLi4uXWApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCBjb21tYW5kTmFtZSA9IHBhcmFtcy5hcmdzWzBdO1xyXG5cdFx0XHRwYXJhbXMuYXJncy5zaGlmdCgpO1xyXG5cdFx0XHRsZXQgY29tbWFuZENvbnRlbnQgPSBwYXJhbXMuYXJncy5qb2luKCcgJyk7XHJcblx0XHRcdC8vIFRoZSBjb250ZW50IG9mIHRoZSB1c2VyJ3MgRXggY29tbWFuZCBpcyBqdXN0IHRoZSByZW1haW5pbmcgcGFyYW1ldGVycyBvZiB0aGUgZXhtYXAgY29tbWFuZFxyXG5cdFx0XHR0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QuZGVmaW5lRXgoY29tbWFuZE5hbWUsICcnLCAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QuaGFuZGxlRXgoY20sIGNvbW1hbmRDb250ZW50KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRlZmluZVNlbmRLZXlzKHZpbU9iamVjdDogYW55KSB7XHJcblx0XHR2aW1PYmplY3QuZGVmaW5lRXgoJ3NlbmRrZXlzJywgJycsIGFzeW5jIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAoIXBhcmFtcz8uYXJncz8ubGVuZ3RoKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocGFyYW1zKTtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFRoZSBzZW5ka2V5cyBjb21tYW5kIHJlcXVpcmVzIGEgbGlzdCBvZiBrZXlzLCBlLmcuIHNlbmRLZXlzIEN0cmwrcCBhIGIgRW50ZXJgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IGFsbEdvb2QgPSB0cnVlO1xyXG5cdFx0XHRsZXQgZXZlbnRzOiBLZXlib2FyZEV2ZW50W10gPSBbXTtcclxuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgcGFyYW1zLmFyZ3MpIHtcclxuXHRcdFx0XHRpZiAoa2V5LnN0YXJ0c1dpdGgoJ3dhaXQnKSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgZGVsYXkgPSBrZXkuc2xpY2UoNCk7XHJcblx0XHRcdFx0XHRhd2FpdCBzbGVlcChkZWxheSAqIDEwMDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGxldCBrZXlFdmVudDogS2V5Ym9hcmRFdmVudCA9IG51bGw7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRrZXlFdmVudCA9IG5ldyBLZXlib2FyZEV2ZW50KCdrZXlkb3duJywga2V5RnJvbUFjY2VsZXJhdG9yLnRvS2V5RXZlbnQoa2V5KSk7XHJcblx0XHRcdFx0XHRcdGV2ZW50cy5wdXNoKGtleUV2ZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRcdGFsbEdvb2QgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBLZXkgJyR7a2V5fScgY291bGRuJ3QgYmUgcmVhZCBhcyBhbiBFbGVjdHJvbiBBY2NlbGVyYXRvcmApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGFsbEdvb2QpIHtcclxuXHRcdFx0XHRcdFx0Zm9yIChrZXlFdmVudCBvZiBldmVudHMpXHJcblx0XHRcdFx0XHRcdFx0d2luZG93LnBvc3RNZXNzYWdlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoa2V5RXZlbnQpKSwgJyonKTtcclxuXHRcdFx0XHRcdFx0Ly8gdmlldy5jb250YWluZXJFbC5kaXNwYXRjaEV2ZW50KGtleUV2ZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZGVmaW5lT2JDb21tYW5kKHZpbU9iamVjdDogYW55KSB7XHJcblx0XHR2aW1PYmplY3QuZGVmaW5lRXgoJ29iY29tbWFuZCcsICcnLCBhc3luYyAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0Y29uc3QgYXZhaWxhYmxlQ29tbWFuZHMgPSAodGhpcy5hcHAgYXMgYW55KS5jb21tYW5kcy5jb21tYW5kcztcclxuXHRcdFx0aWYgKCFwYXJhbXM/LmFyZ3M/Lmxlbmd0aCB8fCBwYXJhbXMuYXJncy5sZW5ndGggIT0gMSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGBBdmFpbGFibGUgY29tbWFuZHM6ICR7T2JqZWN0LmtleXMoYXZhaWxhYmxlQ29tbWFuZHMpLmpvaW4oJ1xcbicpfWApXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBvYmNvbW1hbmQgcmVxdWlyZXMgZXhhY3RseSAxIHBhcmFtZXRlcmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2aWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XHJcblx0XHRcdGxldCBlZGl0b3IgPSB2aWV3LmVkaXRvcjtcclxuXHRcdFx0Y29uc3QgY29tbWFuZCA9IHBhcmFtcy5hcmdzWzBdO1xyXG5cdFx0XHRpZiAoY29tbWFuZCBpbiBhdmFpbGFibGVDb21tYW5kcykge1xyXG5cdFx0XHRcdGxldCBjYWxsYmFjayA9IGF2YWlsYWJsZUNvbW1hbmRzW2NvbW1hbmRdLmNhbGxiYWNrO1xyXG5cdFx0XHRcdGxldCBjaGVja0NhbGxiYWNrID0gYXZhaWxhYmxlQ29tbWFuZHNbY29tbWFuZF0uY2hlY2tDYWxsYmFjaztcclxuXHRcdFx0XHRsZXQgZWRpdG9yQ2FsbGJhY2sgPSBhdmFpbGFibGVDb21tYW5kc1tjb21tYW5kXS5lZGl0b3JDYWxsYmFjaztcclxuXHRcdFx0XHRsZXQgZWRpdG9yQ2hlY2tDYWxsYmFjayA9IGF2YWlsYWJsZUNvbW1hbmRzW2NvbW1hbmRdLmVkaXRvckNoZWNrQ2FsbGJhY2s7XHJcblx0XHRcdFx0aWYgKGVkaXRvckNoZWNrQ2FsbGJhY2spXHJcblx0XHRcdFx0XHRlZGl0b3JDaGVja0NhbGxiYWNrKGZhbHNlLCBlZGl0b3IsIHZpZXcpO1xyXG5cdFx0XHRcdGVsc2UgaWYgKGVkaXRvckNhbGxiYWNrKVxyXG5cdFx0XHRcdFx0ZWRpdG9yQ2FsbGJhY2soZWRpdG9yLCB2aWV3KTtcclxuXHRcdFx0XHRlbHNlIGlmIChjaGVja0NhbGxiYWNrKVxyXG5cdFx0XHRcdFx0Y2hlY2tDYWxsYmFjayhmYWxzZSk7XHJcblx0XHRcdFx0ZWxzZSBpZiAoY2FsbGJhY2spXHJcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgQ29tbWFuZCAke2NvbW1hbmR9IGRvZXNuJ3QgaGF2ZSBhbiBPYnNpZGlhbiBjYWxsYmFja2ApO1xyXG5cdFx0XHR9IGVsc2VcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbW1hbmQgJHtjb21tYW5kfSB3YXMgbm90IGZvdW5kLCB0cnkgJ29iY29tbWFuZCcgd2l0aCBubyBwYXJhbXMgdG8gc2VlIGluIHRoZSBkZXZlbG9wZXIgY29uc29sZSB3aGF0J3MgYXZhaWxhYmxlYCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRlZmluZVN1cnJvdW5kKHZpbU9iamVjdDogYW55KSB7XHJcblx0XHQvLyBGdW5jdGlvbiB0byBzdXJyb3VuZCBzZWxlY3RlZCB0ZXh0IG9yIGhpZ2hsaWdodGVkIHdvcmQuXHJcblx0XHR2YXIgc3Vycm91bmRGdW5jID0gKHBhcmFtczogc3RyaW5nW10pID0+IHtcclxuXHRcdFx0dmFyIGVkaXRvciA9IHRoaXMuZ2V0QWN0aXZlVmlldygpLmVkaXRvcjtcclxuXHRcdFx0aWYgKCFwYXJhbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwic3Vycm91bmQgcmVxdWlyZXMgZXhhY3RseSAyIHBhcmFtZXRlcnM6IHByZWZpeCBhbmQgcG9zdGZpeCB0ZXh0LlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgbmV3QXJncyA9IHBhcmFtcy5qb2luKFwiIFwiKS5tYXRjaCgvKFxcXFwufFteXFxzXFxcXFxcXFxdKykrL2cpO1xyXG5cdFx0XHRpZiAobmV3QXJncy5sZW5ndGggIT0gMikge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcInN1cnJvdW5kIHJlcXVpcmVzIGV4YWN0bHkgMiBwYXJhbWV0ZXJzOiBwcmVmaXggYW5kIHBvc3RmaXggdGV4dC5cIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBiZWdpbm5pbmcgPSBuZXdBcmdzWzBdLnJlcGxhY2UoXCJcXFxcXFxcXFwiLCBcIlxcXFxcIikucmVwbGFjZShcIlxcXFwgXCIsIFwiIFwiKTsgLy8gR2V0IHRoZSBiZWdpbm5pbmcgc3Vycm91bmQgdGV4dFxyXG5cdFx0XHRsZXQgZW5kaW5nID0gbmV3QXJnc1sxXS5yZXBsYWNlKFwiXFxcXFxcXFxcIiwgXCJcXFxcXCIpLnJlcGxhY2UoXCJcXFxcIFwiLCBcIiBcIik7IC8vIEdldCB0aGUgZW5kaW5nIHN1cnJvdW5kIHRleHRcclxuXHJcblx0XHRcdGxldCBjdXJyZW50U2VsZWN0aW9ucyA9IHRoaXMuY3VycmVudFNlbGVjdGlvbjtcclxuXHRcdFx0dmFyIGNob3NlblNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb25zICYmIGN1cnJlbnRTZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyBjdXJyZW50U2VsZWN0aW9uc1swXSA6IG51bGw7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRTZWxlY3Rpb24gJiYgY3VycmVudFNlbGVjdGlvbnM/Lmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIldBUk5JTkc6IE11bHRpcGxlIHNlbGVjdGlvbnMgaW4gc3Vycm91bmQuIEF0dGVtcHQgdG8gc2VsZWN0IG1hdGNoaW5nIGN1cnNvci4gKG9ic2lkaWFuLXZpbXJjLXN1cHBvcnQpXCIpXHJcblx0XHRcdFx0Y29uc3QgY3Vyc29yUG9zID0gZWRpdG9yLmdldEN1cnNvcigpO1xyXG5cdFx0XHRcdGZvciAoY29uc3Qgc2VsZWN0aW9uIG9mIGN1cnJlbnRTZWxlY3Rpb25zKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZWN0aW9uLmhlYWQubGluZSA9PSBjdXJzb3JQb3MubGluZSAmJiBzZWxlY3Rpb24uaGVhZC5jaCA9PSBjdXJzb3JQb3MuY2gpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJSRVNPTFZFRDogU2VsZWN0aW9uIG1hdGNoaW5nIGN1cnNvciBmb3VuZC4gKG9ic2lkaWFuLXZpbXJjLXN1cHBvcnQpXCIpXHJcblx0XHRcdFx0XHRcdGNob3NlblNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChKU09OLnN0cmluZ2lmeShjaG9zZW5TZWxlY3Rpb24uYW5jaG9yKSA9PT0gSlNPTi5zdHJpbmdpZnkoY2hvc2VuU2VsZWN0aW9uLmhlYWQpKSB7XHJcblx0XHRcdFx0Ly8gTm8gcmFuZ2Ugb2Ygc2VsZWN0ZWQgdGV4dCwgc28gc2VsZWN0IHdvcmQuXHJcblx0XHRcdFx0dmFyIGxpbmUgPSBlZGl0b3IuZ2V0TGluZShjaG9zZW5TZWxlY3Rpb24uYW5jaG9yLmxpbmUpO1xyXG5cdFx0XHRcdGlmIChsaW5lLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNhbid0IHN1cnJvdW5kIG9uIGFuIGVtcHR5IGxpbmVcIik7XHJcblx0XHRcdFx0Ly8gR28gdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgd29yZFxyXG5cdFx0XHRcdGxldCB3b3JkU3RhcnQgPSBjaG9zZW5TZWxlY3Rpb24uYW5jaG9yLmNoO1xyXG5cdFx0XHRcdGZvciAoIDsgd29yZFN0YXJ0ID49IDAgOyB3b3JkU3RhcnQtLSlcclxuXHRcdFx0XHRcdGlmIChsaW5lW3dvcmRTdGFydF0ubWF0Y2goL1xccy8pKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR3b3JkU3RhcnQrKztcclxuXHRcdFx0XHRsZXQgd29yZEVuZCA9IGNob3NlblNlbGVjdGlvbi5hbmNob3IuY2g7XHJcblx0XHRcdFx0Zm9yICggOyB3b3JkRW5kIDwgbGluZS5sZW5ndGggOyB3b3JkRW5kKyspXHJcblx0XHRcdFx0XHRpZiAobGluZVt3b3JkRW5kXS5tYXRjaCgvXFxzLykpXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdHZhciB3b3JkID0gbGluZS5zdWJzdHJpbmcod29yZFN0YXJ0LCB3b3JkRW5kKTtcclxuXHRcdFx0XHRjaG9zZW5TZWxlY3Rpb24uYW5jaG9yLmNoID0gd29yZFN0YXJ0O1xyXG5cdFx0XHRcdGNob3NlblNlbGVjdGlvbi5oZWFkLmNoID0gd29yZEVuZDtcclxuXHRcdFx0XHRjaG9zZW5TZWxlY3Rpb24gPSB7XHJcblx0XHRcdFx0XHRhbmNob3I6IHtsaW5lOiBjaG9zZW5TZWxlY3Rpb24uYW5jaG9yLmxpbmUsIGNoOiB3b3JkU3RhcnR9LFxyXG5cdFx0XHRcdFx0aGVhZDoge2xpbmU6IGNob3NlblNlbGVjdGlvbi5oZWFkLmxpbmUsIGNoOiB3b3JkRW5kfVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gSWYgdGhlIHNlbGVjdGlvbiBpcyByZXZlcnNlLCBzd2l0Y2ggdGhlIHZhcmlhYmxlc1xyXG5cdFx0XHRpZiAoY2hvc2VuU2VsZWN0aW9uLmFuY2hvci5saW5lID4gY2hvc2VuU2VsZWN0aW9uLmhlYWQubGluZSB8fFxyXG5cdFx0XHRcdFx0KGNob3NlblNlbGVjdGlvbi5hbmNob3IubGluZSA9PSBjaG9zZW5TZWxlY3Rpb24uaGVhZC5saW5lICYmIGNob3NlblNlbGVjdGlvbi5hbmNob3IuY2ggPiBjaG9zZW5TZWxlY3Rpb24uaGVhZC5jaCkpXHJcblx0XHRcdFx0W2Nob3NlblNlbGVjdGlvbi5hbmNob3IsIGNob3NlblNlbGVjdGlvbi5oZWFkXSA9IFtjaG9zZW5TZWxlY3Rpb24uaGVhZCwgY2hvc2VuU2VsZWN0aW9uLmFuY2hvcl07XHJcblx0XHRcdGxldCBjdXJyVGV4dCA9IGVkaXRvci5nZXRSYW5nZShjaG9zZW5TZWxlY3Rpb24uYW5jaG9yLCBjaG9zZW5TZWxlY3Rpb24uaGVhZCk7XHJcblx0XHRcdGVkaXRvci5yZXBsYWNlUmFuZ2UoYmVnaW5uaW5nICsgY3VyclRleHQgKyBlbmRpbmcsIGNob3NlblNlbGVjdGlvbi5hbmNob3IsIGNob3NlblNlbGVjdGlvbi5oZWFkKTtcclxuXHRcdH1cclxuXHJcblx0XHR2aW1PYmplY3QuZGVmaW5lRXgoXCJzdXJyb3VuZFwiLCBcIlwiLCAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHsgc3Vycm91bmRGdW5jKHBhcmFtcy5hcmdzKTsgfSk7XHJcblxyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KFwicGFzdGVpbnRvXCIsIFwiXCIsIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHQvLyBVc2luZyB0aGUgcmVnaXN0ZXIgZm9yIHdoZW4gdGhpcy55YW5rVG9TeXN0ZW1DbGlwYm9hcmQgPT0gZmFsc2VcclxuXHRcdFx0c3Vycm91bmRGdW5jKFxyXG5cdFx0XHRcdFsnWycsXHJcblx0XHRcdFx0ICddKCcgKyB2aW1PYmplY3QuZ2V0UmVnaXN0ZXJDb250cm9sbGVyKCkuZ2V0UmVnaXN0ZXIoJ3lhbmsnKS5rZXlCdWZmZXIgKyBcIilcIl0pO1xyXG5cdFx0fSlcclxuXHJcblx0XHR2YXIgZWRpdG9yID0gdGhpcy5nZXRBY3RpdmVWaWV3KCkuZWRpdG9yO1xyXG5cdFx0Ly8gSGFuZGxlIHRoZSBzdXJyb3VuZCBkaWFsb2cgaW5wdXRcclxuXHRcdHZhciBzdXJyb3VuZERpYWxvZ0NhbGxiYWNrID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0aWYgKCgvXlxcWyskLykudGVzdCh2YWx1ZSkpIHsgLy8gY2hlY2sgZm9yIDEtaW5mIFsgYW5kIG1hdGNoIHRoZW0gd2l0aCBdXHJcblx0XHRcdFx0c3Vycm91bmRGdW5jKFt2YWx1ZSwgXCJdXCIucmVwZWF0KHZhbHVlLmxlbmd0aCldKVxyXG5cdFx0XHR9IGVsc2UgaWYgKCgvXlxcKCskLykudGVzdCh2YWx1ZSkpIHsgLy8gY2hlY2sgZm9yIDEtaW5mICggYW5kIG1hdGNoIHRoZW0gd2l0aCApXHJcblx0XHRcdFx0c3Vycm91bmRGdW5jKFt2YWx1ZSwgXCIpXCIucmVwZWF0KHZhbHVlLmxlbmd0aCldKVxyXG5cdFx0XHR9IGVsc2UgaWYgKCgvXlxceyskLykudGVzdCh2YWx1ZSkpIHsgLy8gY2hlY2sgZm9yIDEtaW5mIHsgYW5kIG1hdGNoIHRoZW0gd2l0aCB9XHJcblx0XHRcdFx0c3Vycm91bmRGdW5jKFt2YWx1ZSwgXCJ9XCIucmVwZWF0KHZhbHVlLmxlbmd0aCldKVxyXG5cdFx0XHR9IGVsc2UgeyAvLyBFbHNlLCBqdXN0IHB1dCBpdCBiZWZvcmUgYW5kIGFmdGVyLlxyXG5cdFx0XHRcdHN1cnJvdW5kRnVuYyhbdmFsdWUsIHZhbHVlXSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZpbU9iamVjdC5kZWZpbmVPcGVyYXRvcihcInN1cnJvdW5kT3BlcmF0b3JcIiwgKCkgPT4ge1xyXG5cdFx0XHRsZXQgcCA9IFwiPHNwYW4+U3Vycm91bmQgd2l0aDogPGlucHV0IHR5cGU9J3RleHQnPjwvc3Bhbj5cIlxyXG5cdFx0XHRDb2RlTWlycm9yLm9wZW5EaWFsb2cocCwgc3Vycm91bmREaWFsb2dDYWxsYmFjaywgeyBib3R0b206IHRydWUsIHNlbGVjdFZhbHVlT25PcGVuOiBmYWxzZSB9KVxyXG5cdFx0fSlcclxuXHJcblxyXG5cdFx0dmltT2JqZWN0Lm1hcENvbW1hbmQoXCI8QS15PnNcIiwgXCJvcGVyYXRvclwiLCBcInN1cnJvdW5kT3BlcmF0b3JcIilcclxuXHJcblx0fVxyXG5cclxuXHRhc3luYyBjYXB0dXJlWWFua0J1ZmZlcih3aW46IFdpbmRvdykge1xyXG5cdFx0aWYgKCF0aGlzLnlhbmtUb1N5c3RlbUNsaXBib2FyZCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB5YW5rUmVnaXN0ZXIgPSB0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QuZ2V0UmVnaXN0ZXJDb250cm9sbGVyKCkuZ2V0UmVnaXN0ZXIoJ3lhbmsnKTtcclxuXHRcdGNvbnN0IGN1cnJlbnRZYW5rQnVmZmVyID0geWFua1JlZ2lzdGVyLmtleUJ1ZmZlcjtcclxuXHJcblx0XHQvLyB5YW5rIC0+IGNsaXBib2FyZFxyXG5cdFx0Y29uc3QgYnVmID0gY3VycmVudFlhbmtCdWZmZXJbMF1cclxuXHRcdGlmIChidWYgIT09IHRoaXMubGFzdFlhbmtCdWZmZXJbMF0pIHtcclxuXHRcdFx0YXdhaXQgd2luLm5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGJ1Zik7XHJcblx0XHRcdHRoaXMubGFzdFlhbmtCdWZmZXIgPSBjdXJyZW50WWFua0J1ZmZlcjtcclxuXHRcdFx0dGhpcy5sYXN0U3lzdGVtQ2xpcGJvYXJkID0gYXdhaXQgd2luLm5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKTtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY2xpcGJvYXJkIC0+IHlhbmtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnRDbGlwYm9hcmRUZXh0ID0gYXdhaXQgd2luLm5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKTtcclxuXHRcdFx0aWYgKGN1cnJlbnRDbGlwYm9hcmRUZXh0ICE9PSB0aGlzLmxhc3RTeXN0ZW1DbGlwYm9hcmQpIHtcclxuXHRcdFx0XHR5YW5rUmVnaXN0ZXIuc2V0VGV4dChjdXJyZW50Q2xpcGJvYXJkVGV4dCk7XHJcblx0XHRcdFx0dGhpcy5sYXN0WWFua0J1ZmZlciA9IHlhbmtSZWdpc3Rlci5rZXlCdWZmZXI7XHJcblx0XHRcdFx0dGhpcy5sYXN0U3lzdGVtQ2xpcGJvYXJkID0gY3VycmVudENsaXBib2FyZFRleHQ7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Ly8gWFhYOiBBdm9pZCBcIlVuY2F1Z2h0IChpbiBwcm9taXNlKSBET01FeGNlcHRpb246IERvY3VtZW50IGlzIG5vdCBmb2N1c2VkLlwiXHJcblx0XHRcdC8vIFhYWDogSXQgaXMgbm90IGdvb2QgYnV0IGVhc3kgd29ya2Fyb3VuZFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJlcGFyZUNob3JkRGlzcGxheSgpIHtcclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmRpc3BsYXlDaG9yZCkge1xyXG5cdFx0XHQvLyBBZGQgc3RhdHVzIGJhciBpdGVtXHJcblx0XHRcdHRoaXMudmltQ2hvcmRTdGF0dXNCYXIgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKTtcclxuXHJcblx0XHRcdC8vIE1vdmUgdmltQ2hvcmRTdGF0dXNCYXIgdG8gdGhlIGxlZnRtb3N0IHBvc2l0aW9uIGFuZCBjZW50ZXIgaXQuXHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnZpbUNob3JkU3RhdHVzQmFyLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdHRoaXMudmltQ2hvcmRTdGF0dXNCYXIucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy52aW1DaG9yZFN0YXR1c0JhciwgcGFyZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR0aGlzLnZpbUNob3JkU3RhdHVzQmFyLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJhdXRvXCI7XHJcblxyXG5cdFx0XHRsZXQgY21FZGl0b3IgPSB0aGlzLmdldENvZGVNaXJyb3IodGhpcy5nZXRBY3RpdmVWaWV3KCkpO1xyXG5cdFx0XHQvLyBTZWUgaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9kb2MvbWFudWFsLmh0bWwjdmltYXBpX2V2ZW50cyBmb3IgZXZlbnRzLlxyXG5cdFx0XHRjbUVkaXRvci5vZmYoJ3ZpbS1rZXlwcmVzcycsIHRoaXMub25WaW1LZXlwcmVzcyk7XHJcblx0XHRcdGNtRWRpdG9yLm9uKCd2aW0ta2V5cHJlc3MnLCB0aGlzLm9uVmltS2V5cHJlc3MpO1xyXG5cdFx0XHRjbUVkaXRvci5vZmYoJ3ZpbS1jb21tYW5kLWRvbmUnLCB0aGlzLm9uVmltQ29tbWFuZERvbmUpO1xyXG5cdFx0XHRjbUVkaXRvci5vbigndmltLWNvbW1hbmQtZG9uZScsIHRoaXMub25WaW1Db21tYW5kRG9uZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvblZpbUtleXByZXNzID0gYXN5bmMgKHZpbUtleTogYW55KSA9PiB7XHJcblx0XHRpZiAodmltS2V5ICE9IFwiPEVzYz5cIikgeyAvLyBUT0RPIGZpZ3VyZSBvdXQgd2hhdCB0byBhY3R1YWxseSBsb29rIGZvciB0byBleGl0IGNvbW1hbmRzLlxyXG5cdFx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZC5wdXNoKHZpbUtleSk7XHJcblx0XHRcdGlmICh0aGlzLmN1c3RvbVZpbUtleWJpbmRzW3RoaXMuY3VycmVudEtleUNob3JkLmpvaW4oXCJcIildICE9IHVuZGVmaW5lZCkgeyAvLyBDdXN0b20ga2V5IGNob3JkIGV4aXN0cy5cclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZCA9IFtdO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZCA9IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEJ1aWxkIGtleWNob3JkIHRleHRcclxuXHRcdGxldCB0ZW1wUyA9IFwiXCI7XHJcblx0XHRmb3IgKGNvbnN0IHMgb2YgdGhpcy5jdXJyZW50S2V5Q2hvcmQpIHtcclxuXHRcdFx0dGVtcFMgKz0gXCIgXCIgKyBzO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRlbXBTICE9IFwiXCIpIHtcclxuXHRcdFx0dGVtcFMgKz0gXCItXCI7XHJcblx0XHR9XHJcblx0XHR0aGlzLnZpbUNob3JkU3RhdHVzQmFyPy5zZXRUZXh0KHRlbXBTKTtcclxuXHR9XHJcblxyXG5cdG9uVmltQ29tbWFuZERvbmUgPSBhc3luYyAocmVhc29uOiBhbnkpID0+IHtcclxuXHRcdHRoaXMudmltQ2hvcmRTdGF0dXNCYXI/LnNldFRleHQoXCJcIik7XHJcblx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZCA9IFtdO1xyXG5cdH1cclxuXHJcblx0cHJlcGFyZVZpbU1vZGVEaXNwbGF5KCkge1xyXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuZGlzcGxheVZpbU1vZGUpIHtcclxuXHRcdFx0dGhpcy52aW1TdGF0dXNCYXIgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKSAvLyBBZGQgc3RhdHVzIGJhciBpdGVtXHJcblx0XHRcdHRoaXMudmltU3RhdHVzQmFyLnNldFRleHQoXHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy52aW1TdGF0dXNQcm9tcHRNYXBbdmltU3RhdHVzLm5vcm1hbF1cclxuXHRcdFx0KTsgLy8gSW5pdCB0aGUgdmltU3RhdHVzQmFyIHdpdGggbm9ybWFsIG1vZGVcclxuXHRcdFx0dGhpcy52aW1TdGF0dXNCYXIuYWRkQ2xhc3ModmltU3RhdHVzUHJvbXB0Q2xhc3MpO1xyXG5cdFx0XHR0aGlzLnZpbVN0YXR1c0Jhci5kYXRhc2V0LnZpbU1vZGUgPSB0aGlzLmN1cnJlbnRWaW1TdGF0dXM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbktleWRvd24gPSAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmZpeGVkTm9ybWFsTW9kZUxheW91dCkge1xyXG5cdFx0XHRjb25zdCBrZXlNYXAgPSB0aGlzLnNldHRpbmdzLmNhcHR1cmVkS2V5Ym9hcmRNYXA7XHJcblx0XHRcdGlmICghdGhpcy5pc0luc2VydE1vZGUgJiYgIWV2LnNoaWZ0S2V5ICYmXHJcblx0XHRcdFx0ZXYuY29kZSBpbiBrZXlNYXAgJiYgZXYua2V5ICE9IGtleU1hcFtldi5jb2RlXSkge1xyXG5cdFx0XHRcdGxldCB2aWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XHJcblx0XHRcdFx0aWYgKHZpZXcpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGNtRWRpdG9yID0gdGhpcy5nZXRDb2RlTWlycm9yKHZpZXcpO1xyXG5cdFx0XHRcdFx0aWYgKGNtRWRpdG9yKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY29kZU1pcnJvclZpbU9iamVjdC5oYW5kbGVLZXkoY21FZGl0b3IsIGtleU1hcFtldi5jb2RlXSwgJ21hcHBpbmcnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVmaW5lSnNDb21tYW5kKHZpbU9iamVjdDogYW55KSB7XHJcblx0XHR2aW1PYmplY3QuZGVmaW5lRXgoJ2pzY29tbWFuZCcsICcnLCAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKCF0aGlzLnNldHRpbmdzLnN1cHBvcnRKc0NvbW1hbmRzKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkpTIGNvbW1hbmRzIGFyZSB0dXJuZWQgb2ZmOyBlbmFibGUgdGhlbSB2aWEgdGhlIFZpbXJjIHBsdWdpbiBjb25maWd1cmF0aW9uIGlmIHlvdSdyZSBzdXJlIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nXCIpO1xyXG5cdFx0XHRjb25zdCBqc0NvZGUgPSBwYXJhbXMuYXJnU3RyaW5nLnRyaW0oKSBhcyBzdHJpbmc7XHJcblx0XHRcdGlmIChqc0NvZGVbMF0gIT0gJ3snIHx8IGpzQ29kZVtqc0NvZGUubGVuZ3RoIC0gMV0gIT0gJ30nKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGFuIGFyZ3VtZW50IHdoaWNoIGlzIEpTIGNvZGUgc3Vycm91bmRlZCBieSBjdXJseSBicmFja2V0czogey4uLn1cIik7XHJcblx0XHRcdGxldCBjdXJyZW50U2VsZWN0aW9ucyA9IHRoaXMuY3VycmVudFNlbGVjdGlvbjtcclxuXHRcdFx0dmFyIGNob3NlblNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb25zICYmIGN1cnJlbnRTZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyBjdXJyZW50U2VsZWN0aW9uc1swXSA6IG51bGw7XHJcblx0XHRcdGNvbnN0IGNvbW1hbmQgPSBGdW5jdGlvbignZWRpdG9yJywgJ3ZpZXcnLCAnc2VsZWN0aW9uJywganNDb2RlKTtcclxuXHRcdFx0Y29uc3QgdmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlldygpO1xyXG5cdFx0XHRjb21tYW5kKHZpZXcuZWRpdG9yLCB2aWV3LCBjaG9zZW5TZWxlY3Rpb24pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkZWZpbmVKc0ZpbGUodmltT2JqZWN0OiBhbnkpIHtcclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeCgnanNmaWxlJywgJycsIGFzeW5jIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2V0dGluZ3Muc3VwcG9ydEpzQ29tbWFuZHMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSlMgY29tbWFuZHMgYXJlIHR1cm5lZCBvZmY7IGVuYWJsZSB0aGVtIHZpYSB0aGUgVmltcmMgcGx1Z2luIGNvbmZpZ3VyYXRpb24gaWYgeW91J3JlIHN1cmUgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcIik7XHJcblx0XHRcdGlmIChwYXJhbXM/LmFyZ3M/Lmxlbmd0aCA8IDEpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgZm9ybWF0OiBmaWxlTmFtZSB7ZXh0cmFDb2RlfVwiKTtcclxuXHRcdFx0bGV0IGV4dHJhQ29kZSA9ICcnO1xyXG5cdFx0XHRjb25zdCBmaWxlTmFtZSA9IHBhcmFtcy5hcmdzWzBdO1xyXG5cdFx0XHRpZiAocGFyYW1zLmFyZ3MubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdHBhcmFtcy5hcmdzLnNoaWZ0KCk7XHJcblx0XHRcdFx0ZXh0cmFDb2RlID0gcGFyYW1zLmFyZ3Muam9pbignICcpLnRyaW0oKSBhcyBzdHJpbmc7XHJcblx0XHRcdFx0aWYgKGV4dHJhQ29kZVswXSAhPSAneycgfHwgZXh0cmFDb2RlW2V4dHJhQ29kZS5sZW5ndGggLSAxXSAhPSAnfScpXHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBhbiBleHRyYSBjb2RlIGFyZ3VtZW50IHdoaWNoIGlzIEpTIGNvZGUgc3Vycm91bmRlZCBieSBjdXJseSBicmFja2V0czogey4uLn1cIik7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGN1cnJlbnRTZWxlY3Rpb25zID0gdGhpcy5jdXJyZW50U2VsZWN0aW9uO1xyXG5cdFx0XHR2YXIgY2hvc2VuU2VsZWN0aW9uID0gY3VycmVudFNlbGVjdGlvbnMgJiYgY3VycmVudFNlbGVjdGlvbnMubGVuZ3RoID4gMCA/IGN1cnJlbnRTZWxlY3Rpb25zWzBdIDogbnVsbDtcclxuXHRcdFx0bGV0IGNvbnRlbnQgPSAnJztcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci5yZWFkKGZpbGVOYW1lKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHJlYWQgZmlsZSAke3BhcmFtcy5hcmdzWzBdfSBmcm9tIHZhdWx0IHJvb3Q6ICR7ZS5tZXNzYWdlfWApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGNvbW1hbmQgPSBGdW5jdGlvbignZWRpdG9yJywgJ3ZpZXcnLCAnc2VsZWN0aW9uJywgY29udGVudCArIGV4dHJhQ29kZSk7XHJcblx0XHRcdGNvbnN0IHZpZXcgPSB0aGlzLmdldEFjdGl2ZVZpZXcoKTtcclxuXHRcdFx0Y29tbWFuZCh2aWV3LmVkaXRvciwgdmlldywgY2hvc2VuU2VsZWN0aW9uKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZGVmaW5lU291cmNlKHZpbU9iamVjdDogYW55KSB7XHJcblx0XHR2aW1PYmplY3QuZGVmaW5lRXgoJ3NvdXJjZScsICcnLCBhc3luYyAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKHBhcmFtcz8uYXJncz8ubGVuZ3RoID4gMSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBmb3JtYXQ6IHNvdXJjZSBbZmlsZU5hbWVdXCIpO1xyXG5cdFx0XHRjb25zdCBmaWxlTmFtZSA9IHBhcmFtcy5hcmdTdHJpbmcudHJpbSgpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIucmVhZChmaWxlTmFtZSkudGhlbih2aW1yY0NvbnRlbnQgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkVmltQ29tbWFuZHModmltcmNDb250ZW50KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBsb2FkaW5nIHZpbXJjIGZpbGUnLCBmaWxlTmFtZSwgJ2Zyb20gdGhlIHZhdWx0IHJvb3QnLCBlLm1lc3NhZ2UpXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XHJcblx0cGx1Z2luOiBWaW1yY1BsdWdpbjtcclxuXHJcblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogVmltcmNQbHVnaW4pIHtcclxuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcclxuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG5cdH1cclxuXHJcblx0ZGlzcGxheSgpOiB2b2lkIHtcclxuXHRcdGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xyXG5cclxuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XHJcblxyXG5cdFx0Y29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnVmltcmMgU2V0dGluZ3MnIH0pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnVmltcmMgZmlsZSBuYW1lJylcclxuXHRcdFx0LnNldERlc2MoJ1JlbGF0aXZlIHRvIHZhdWx0IGRpcmVjdG9yeSAocmVxdWlyZXMgcmVzdGFydCknKVxyXG5cdFx0XHQuYWRkVGV4dCgodGV4dCkgPT4ge1xyXG5cdFx0XHRcdHRleHQuc2V0UGxhY2Vob2xkZXIoREVGQVVMVF9TRVRUSU5HUy52aW1yY0ZpbGVOYW1lKTtcclxuXHRcdFx0XHR0ZXh0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnZpbXJjRmlsZU5hbWUgfHwgREVGQVVMVF9TRVRUSU5HUy52aW1yY0ZpbGVOYW1lKTtcclxuXHRcdFx0XHR0ZXh0Lm9uQ2hhbmdlKHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZpbXJjRmlsZU5hbWUgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnVmltIGNob3JkIGRpc3BsYXknKVxyXG5cdFx0XHQuc2V0RGVzYygnRGlzcGxheXMgdGhlIGN1cnJlbnQgY2hvcmQgdW50aWwgY29tcGxldGlvbi4gRXg6IFwiPFNwYWNlPiBmLVwiIChyZXF1aXJlcyByZXN0YXJ0KScpXHJcblx0XHRcdC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4ge1xyXG5cdFx0XHRcdHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kaXNwbGF5Q2hvcmQgfHwgREVGQVVMVF9TRVRUSU5HUy5kaXNwbGF5Q2hvcmQpO1xyXG5cdFx0XHRcdHRvZ2dsZS5vbkNoYW5nZSh2YWx1ZSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5kaXNwbGF5Q2hvcmQgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnVmltIG1vZGUgZGlzcGxheScpXHJcblx0XHRcdC5zZXREZXNjKCdEaXNwbGF5cyB0aGUgY3VycmVudCB2aW0gbW9kZSAocmVxdWlyZXMgcmVzdGFydCknKVxyXG5cdFx0XHQuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcclxuXHRcdFx0XHR0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGlzcGxheVZpbU1vZGUgfHwgREVGQVVMVF9TRVRUSU5HUy5kaXNwbGF5VmltTW9kZSk7XHJcblx0XHRcdFx0dG9nZ2xlLm9uQ2hhbmdlKHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmRpc3BsYXlWaW1Nb2RlID0gdmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1VzZSBhIGZpeGVkIGtleWJvYXJkIGxheW91dCBmb3IgTm9ybWFsIG1vZGUnKVxyXG5cdFx0XHQuc2V0RGVzYygnRGVmaW5lIGEga2V5Ym9hcmQgbGF5b3V0IHRvIGFsd2F5cyB1c2Ugd2hlbiBpbiBOb3JtYWwgbW9kZSwgcmVnYXJkbGVzcyBvZiB0aGUgaW5wdXQgbGFuZ3VhZ2UgKGV4cGVyaW1lbnRhbCkuJylcclxuXHRcdFx0LmFkZEJ1dHRvbihhc3luYyAoYnV0dG9uKSA9PiB7XHJcblx0XHRcdFx0YnV0dG9uLnNldEJ1dHRvblRleHQoJ0NhcHR1cmUgY3VycmVudCBsYXlvdXQnKTtcclxuXHRcdFx0XHRidXR0b24ub25DbGljayhhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXB0dXJlZEtleWJvYXJkTWFwID0gYXdhaXQgdGhpcy5wbHVnaW4uY2FwdHVyZUtleWJvYXJkTGF5b3V0KCk7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XHJcblx0XHRcdFx0dG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmZpeGVkTm9ybWFsTW9kZUxheW91dCB8fCBERUZBVUxUX1NFVFRJTkdTLmZpeGVkTm9ybWFsTW9kZUxheW91dCk7XHJcblx0XHRcdFx0dG9nZ2xlLm9uQ2hhbmdlKGFzeW5jIHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmZpeGVkTm9ybWFsTW9kZUxheW91dCA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0aWYgKHZhbHVlICYmIE9iamVjdC5rZXlzKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhcHR1cmVkS2V5Ym9hcmRNYXApLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FwdHVyZWRLZXlib2FyZE1hcCA9IGF3YWl0IHRoaXMucGx1Z2luLmNhcHR1cmVLZXlib2FyZExheW91dCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pXHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdTdXBwb3J0IEpTIGNvbW1hbmRzIChiZXdhcmUhKScpXHJcblx0XHRcdC5zZXREZXNjKFwiU3VwcG9ydCB0aGUgJ2pzY29tbWFuZCcgYW5kICdqc2ZpbGUnIGNvbW1hbmRzLCB3aGljaCBhbGxvdyBkZWZpbmluZyBFeCBjb21tYW5kcyB1c2luZyBKYXZhc2NyaXB0LiBXQVJOSU5HISBSZXZpZXcgdGhlIFJFQURNRSB0byB1bmRlcnN0YW5kIHdoeSB0aGlzIG1heSBiZSBkYW5nZXJvdXMgYmVmb3JlIGVuYWJsaW5nLlwiKVxyXG5cdFx0XHQuYWRkVG9nZ2xlKHRvZ2dsZSA9PiB7XHJcblx0XHRcdFx0dG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnN1cHBvcnRKc0NvbW1hbmRzID8/IERFRkFVTFRfU0VUVElOR1Muc3VwcG9ydEpzQ29tbWFuZHMpO1xyXG5cdFx0XHRcdHRvZ2dsZS5vbkNoYW5nZSh2YWx1ZSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5zdXBwb3J0SnNDb21tYW5kcyA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Y29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywge3RleHQ6ICdWaW0gTW9kZSBEaXNwbGF5IFByb21wdCd9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ05vcm1hbCBtb2RlIHByb21wdCcpXHJcblx0XHRcdC5zZXREZXNjKCdTZXQgdGhlIHN0YXR1cyBwcm9tcHQgdGV4dCBmb3Igbm9ybWFsIG1vZGUuJylcclxuXHRcdFx0LmFkZFRleHQoKHRleHQpID0+IHtcclxuXHRcdFx0XHR0ZXh0LnNldFBsYWNlaG9sZGVyKCdEZWZhdWx0OiDwn5+iJyk7XHJcblx0XHRcdFx0dGV4dC5zZXRWYWx1ZShcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZpbVN0YXR1c1Byb21wdE1hcC5ub3JtYWwgfHxcclxuXHRcdFx0XHRcdFx0REVGQVVMVF9TRVRUSU5HUy52aW1TdGF0dXNQcm9tcHRNYXAubm9ybWFsXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0ZXh0Lm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmltU3RhdHVzUHJvbXB0TWFwLm5vcm1hbCA9IHZhbHVlIHx8XHJcblx0XHRcdFx0XHRcdERFRkFVTFRfU0VUVElOR1MudmltU3RhdHVzUHJvbXB0TWFwLm5vcm1hbDtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ0luc2VydCBtb2RlIHByb21wdCcpXHJcblx0XHRcdC5zZXREZXNjKCdTZXQgdGhlIHN0YXR1cyBwcm9tcHQgdGV4dCBmb3IgaW5zZXJ0IG1vZGUuJylcclxuXHRcdFx0LmFkZFRleHQoKHRleHQpID0+IHtcclxuXHRcdFx0XHR0ZXh0LnNldFBsYWNlaG9sZGVyKCdEZWZhdWx0OiDwn5+gJyk7XHJcblx0XHRcdFx0dGV4dC5zZXRWYWx1ZShcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZpbVN0YXR1c1Byb21wdE1hcC5pbnNlcnQgfHxcclxuXHRcdFx0XHRcdFx0REVGQVVMVF9TRVRUSU5HUy52aW1TdGF0dXNQcm9tcHRNYXAuaW5zZXJ0XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0ZXh0Lm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmltU3RhdHVzUHJvbXB0TWFwLmluc2VydCA9IHZhbHVlIHx8XHJcblx0XHRcdFx0XHRcdERFRkFVTFRfU0VUVElOR1MudmltU3RhdHVzUHJvbXB0TWFwLmluc2VydDtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMucGx1Z2luLnNldHRpbmdzLnZpbVN0YXR1c1Byb21wdE1hcCk7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdWaXN1YWwgbW9kZSBwcm9tcHQnKVxyXG5cdFx0XHQuc2V0RGVzYygnU2V0IHRoZSBzdGF0dXMgcHJvbXB0IHRleHQgZm9yIHZpc3VhbCBtb2RlLicpXHJcblx0XHRcdC5hZGRUZXh0KCh0ZXh0KSA9PiB7XHJcblx0XHRcdFx0dGV4dC5zZXRQbGFjZWhvbGRlcignRGVmYXVsdDog8J+foScpO1xyXG5cdFx0XHRcdHRleHQuc2V0VmFsdWUoXHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy52aW1TdGF0dXNQcm9tcHRNYXAudmlzdWFsIHx8XHJcblx0XHRcdFx0XHRcdERFRkFVTFRfU0VUVElOR1MudmltU3RhdHVzUHJvbXB0TWFwLnZpc3VhbFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGV4dC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZpbVN0YXR1c1Byb21wdE1hcC52aXN1YWwgPSB2YWx1ZSB8fFxyXG5cdFx0XHRcdFx0XHRERUZBVUxUX1NFVFRJTkdTLnZpbVN0YXR1c1Byb21wdE1hcC52aXN1YWw7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdSZXBsYWNlIG1vZGUgcHJvbXB0JylcclxuXHRcdFx0LnNldERlc2MoJ1NldCB0aGUgc3RhdHVzIHByb21wdCB0ZXh0IGZvciByZXBsYWNlIG1vZGUuJylcclxuXHRcdFx0LmFkZFRleHQoKHRleHQpID0+IHtcclxuXHRcdFx0XHR0ZXh0LnNldFBsYWNlaG9sZGVyKCdEZWZhdWx0OiDwn5S0Jyk7XHJcblx0XHRcdFx0dGV4dC5zZXRWYWx1ZShcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZpbVN0YXR1c1Byb21wdE1hcC5yZXBsYWNlIHx8XHJcblx0XHRcdFx0XHRcdERFRkFVTFRfU0VUVElOR1MudmltU3RhdHVzUHJvbXB0TWFwLnJlcGxhY2VcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRleHQub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy52aW1TdGF0dXNQcm9tcHRNYXAucmVwbGFjZSA9IHZhbHVlIHx8XHJcblx0XHRcdFx0XHRcdERFRkFVTFRfU0VUVElOR1MudmltU3RhdHVzUHJvbXB0TWFwLnJlcGxhY2U7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOb3RpY2UiLCJNYXJrZG93blZpZXciLCJrZXlGcm9tQWNjZWxlcmF0b3IudG9LZXlFdmVudCIsIlBsdWdpbiIsIlNldHRpbmciLCJQbHVnaW5TZXR0aW5nVGFiIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUFvRkQ7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUk7QUFDdEQsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFR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
