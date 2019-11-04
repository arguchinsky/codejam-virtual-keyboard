const KEYS = [
  [
    {
      code: 'Backqoute', defVal: '`', shiftVal: '~', altVal: 'ё', altShiftVal: 'Ё',
    },
    {
      code: 'Digit1', defVal: '1', shiftVal: '!', altVal: '1', altShiftVal: '!',
    },
    {
      code: 'Digit2', defVal: '2', shiftVal: '@', altVal: '2', altShiftVal: '"',
    },
    {
      code: 'Digit3', defVal: '3', shiftVal: '#', altVal: '3', altShiftVal: '№',
    },
    {
      code: 'Digit4', defVal: '4', shiftVal: '$', altVal: '4', altShiftVal: ';',
    },
    {
      code: 'Digit5', defVal: '5', shiftVal: '%', altVal: '5', altShiftVal: '%',
    },
    {
      code: 'Digit6', defVal: '6', shiftVal: '^', altVal: '6', altShiftVal: ':',
    },
    {
      code: 'Digit7', defVal: '7', shiftVal: '&', altVal: '7', altShiftVal: '?',
    },
    {
      code: 'Digit8', defVal: '8', shiftVal: '*', altVal: '8', altShiftVal: '*',
    },
    {
      code: 'Digit9', defVal: '9', shiftVal: '(', altVal: '9', altShiftVal: '(',
    },
    {
      code: 'Digit0', defVal: '0', shiftVal: ')', altVal: '0', altShiftVal: ')',
    },
    {
      code: 'Minus', defVal: '-', shiftVal: '_', altVal: '-', altShiftVal: '_',
    },
    {
      code: 'Equal', defVal: '=', shiftVal: '+', altVal: '=', altShiftVal: '+',
    },
    {
      code: 'Backspace', defVal: '&lArr;', shiftVal: '&lArr;', altVal: '&lArr;', altShiftVal: '&lArr;',
    },
  ],
  [
    {
      code: 'Tab', defVal: 'Tab', shiftVal: 'Tab', altVal: 'Tab', altShiftVal: 'Tab',
    },
    {
      code: 'KeyQ', defVal: 'q', shiftVal: 'Q', altVal: 'й', altShiftVal: 'Й',
    },
    {
      code: 'KeyW', defVal: 'w', shiftVal: 'W', altVal: 'ц', altShiftVal: 'Ц',
    },
    {
      code: 'KeyE', defVal: 'e', shiftVal: 'E', altVal: 'у', altShiftVal: 'У',
    },
    {
      code: 'KeyR', defVal: 'r', shiftVal: 'R', altVal: 'к', altShiftVal: 'К',
    },
    {
      code: 'KeyT', defVal: 't', shiftVal: 'T', altVal: 'е', altShiftVal: 'Е',
    },
    {
      code: 'KeyY', defVal: 'y', shiftVal: 'Y', altVal: 'н', altShiftVal: 'Н',
    },
    {
      code: 'KeyU', defVal: 'u', shiftVal: 'U', altVal: 'г', altShiftVal: 'Г',
    },
    {
      code: 'KeyI', defVal: 'i', shiftVal: 'I', altVal: 'ш', altShiftVal: 'Ш',
    },
    {
      code: 'KeyO', defVal: 'o', shiftVal: 'O', altVal: 'щ', altShiftVal: 'Щ',
    },
    {
      code: 'KeyP', defVal: 'p', shiftVal: 'P', altVal: 'з', altShiftVal: 'З',
    },
    {
      code: 'BracketLeft', defVal: '[', shiftVal: '{', altVal: 'х', altShiftVal: 'Х',
    },
    {
      code: 'BracketRight', defVal: ']', shiftVal: '}', altVal: 'ъ', altShiftVal: 'Ъ',
    },
    {
      code: 'Backslash', defVal: '\\', shiftVal: '|', altVal: '\\', altShiftVal: '/',
    },
    {
      code: 'Delete', defVal: 'Del', shiftVal: 'Del', altVal: 'Del', altShiftVal: 'Del',
    },
  ],
  [
    {
      code: 'CapsLock', defVal: 'Caps', shiftVal: 'Caps', altVal: 'Caps', altShiftVal: 'Caps',
    },
    {
      code: 'KeyA', defVal: 'a', shiftVal: 'A', altVal: 'ф', altShiftVal: 'Ф',
    },
    {
      code: 'KeyS', defVal: 's', shiftVal: 'S', altVal: 'ы', altShiftVal: 'Ы',
    },
    {
      code: 'KeyD', defVal: 'd', shiftVal: 'D', altVal: 'в', altShiftVal: 'В',
    },
    {
      code: 'KeyF', defVal: 'f', shiftVal: 'F', altVal: 'а', altShiftVal: 'А',
    },
    {
      code: 'KeyG', defVal: 'g', shiftVal: 'G', altVal: 'п', altShiftVal: 'П',
    },
    {
      code: 'KeyH', defVal: 'h', shiftVal: 'H', altVal: 'р', altShiftVal: 'Р',
    },
    {
      code: 'KeyJ', defVal: 'j', shiftVal: 'J', altVal: 'о', altShiftVal: 'О',
    },
    {
      code: 'KeyK', defVal: 'k', shiftVal: 'K', altVal: 'л', altShiftVal: 'Л',
    },
    {
      code: 'KeyL', defVal: 'l', shiftVal: 'L', altVal: 'д', altShiftVal: 'Д',
    },
    {
      code: 'Semicolon', defVal: ';', shiftVal: ':', altVal: 'ж', altShiftVal: 'Ж',
    },
    {
      code: 'Quote', defVal: '\'', shiftVal: '"', altVal: 'э', altShiftVal: 'Э',
    },
    {
      code: 'Enter', defVal: 'Enter', shiftVal: 'Enter', altVal: 'Enter', altShiftVal: 'Enter',
    },
  ],
  [
    {
      code: 'ShiftLeft', defVal: 'Shift', shiftVal: 'Shift', altVal: 'Shift', altShiftVal: 'Shift',
    },
    {
      code: 'KeyZ', defVal: 'z', shiftVal: 'Z', altVal: 'я', altShiftVal: 'Я',
    },
    {
      code: 'KeyX', defVal: 'x', shiftVal: 'X', altVal: 'ч', altShiftVal: 'Ч',
    },
    {
      code: 'KeyC', defVal: 'c', shiftVal: 'C', altVal: 'с', altShiftVal: 'С',
    },
    {
      code: 'KeyV', defVal: 'v', shiftVal: 'V', altVal: 'м', altShiftVal: 'М',
    },
    {
      code: 'KeyB', defVal: 'b', shiftVal: 'B', altVal: 'и', altShiftVal: 'И',
    },
    {
      code: 'KeyN', defVal: 'n', shiftVal: 'N', altVal: 'т', altShiftVal: 'Т',
    },
    {
      code: 'KeyM', defVal: 'm', shiftVal: 'M', altVal: 'ь', altShiftVal: 'Ь',
    },
    {
      code: 'Comma', defVal: ',', shiftVal: '<', altVal: 'б', altShiftVal: 'Б',
    },
    {
      code: 'Period', defVal: '.', shiftVal: '>', altVal: 'ю', altShiftVal: 'Ю',
    },
    {
      code: 'Slash', defVal: '/', shiftVal: '?', altVal: '.', altShiftVal: ',',
    },
    {
      code: 'ShiftRight', defVal: 'Shift', shiftVal: 'Shift', altVal: 'Shift', altShiftVal: 'Shift',
    },
    {
      code: 'ArrowUp', defVal: '&#9650;', shiftVal: '&#9650;', altVal: '&#9650;', altShiftVal: '&#9650;',
    },
  ],
  [
    {
      code: 'ControlLeft', defVal: 'Ctrl', shiftVal: 'Ctrl', altVal: 'Ctrl', altShiftVal: 'Ctrl',
    },
    {
      code: 'MetaLeft', defVal: 'Win', shiftVal: 'Win', altVal: 'Win', altShiftVal: 'Win',
    },
    {
      code: 'AltLeft', defVal: 'Alt', shiftVal: 'Alt', altVal: 'Alt', altShiftVal: 'Alt',
    },
    {
      code: 'Space', defVal: ' ', shiftVal: ' ', altVal: ' ', altShiftVal: ' ',
    },
    {
      code: 'AltRight', defVal: 'Alt', shiftVal: 'Alt', altVal: 'Alt', altShiftVal: 'Alt',
    },
    {
      code: 'ControlRight', defVal: 'Ctrl', shiftVal: 'Ctrl', altVal: 'Ctrl', altShiftVal: 'Ctrl',
    },
    {
      code: 'ArrowLeft', defVal: '&#9668;', shiftVal: '&#9668;', altVal: '&#9668;', altShiftVal: '&#9668;',
    },
    {
      code: 'ArrowDown', defVal: '&#9660;', shiftVal: '&#9660;', altVal: '&#9660;', altShiftVal: '&#9660;',
    },
    {
      code: 'ArrowRight', defVal: '&#9658;', shiftVal: '&#9658;', altVal: '&#9658;', altShiftVal: '&#9658;',
    },
  ],
];

let caps = false;
let shift = false;
let alt = false;

const btnCreate = ({
  code, defVal, shiftVal, altVal, altShiftVal,
}) => {
  const btn = document.createElement('div');
  btn.classList.add('btn');
  btn.code = code;
  if (shift) {
    btn.innerHTML = defVal.toUpperCase();
  }
  btn.innerHTML = defVal;
  if (code === 'Space') {
    btn.style.flexGrow = '20';
  }
  btn.addEventListener('click', handlerAdd(code));
  return btn;
};

const keyboardRow = (arr) => {
  const row = document.createElement('div');
  row.classList.add('keyboard--row');
  arr.map((el) => row.append(btnCreate(el)));
  return row;
};

const keyboardEl = () => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  KEYS.map((el) => keyboard.append(keyboardRow(el)));
  return keyboard;
};

const outputArea = () => {
  const area = document.createElement('textarea');
  area.classList.add('textarea');
  area.id = 'textarea';
  area.style.width = '99%';
  area.style.height = '200px';
  area.style.fontSize = '1.5em';
  return area;
};

const wrapperEl = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.append(outputArea(), keyboardEl());
  return wrapper;
};
const app = () => {
  document.querySelector('#page').prepend(wrapperEl());
};

function btnClickHandler() {
  const area = document.querySelector('#textarea');
  area.value += event.target.innerHTML;
}

function deleteHandler() {
  const area = document.querySelector('#textarea');
  area.value = '';
}

function backspaceHandler() {
  const area = document.querySelector('#textarea');
  const size = area.value.length;
  area.value = area.value.slice(0, size - 1);
}

function enterHandler() {
  const area = document.querySelector('#textarea');
  area.value = `${area.value}\n`;
}

function tabHandler() {
  const area = document.querySelector('#textarea');
  area.value = `${area.value}  `;
}

function capsHandler() {
  caps = !caps;
  if (caps) this.classList.add('active');
  else this.classList.remove('active');
}

function shiftHandler() {
  shift = !shift;
  document.querySelector('.keyboard').replaceWith(document.querySelector('.keyboard'), keyboardEl());
}

function altHandler() {
  alt = !alt;
}

function nothingHandler() {}

function handlerAdd(code) {
  switch (code) {
    case 'Delete':
      return deleteHandler;
    case 'Backspace':
      return backspaceHandler;
    case 'Enter':
      return enterHandler;
    case 'Tab':
      return tabHandler;
    case 'CapsLock':
      return capsHandler;
    case 'ShiftLeft':
      return shiftHandler;
    case 'ShiftRight':
      return shiftHandler;
    case 'AltLeft':
      return altHandler;
    case 'AltRight':
      return altHandler;
    case 'ControlLeft':
      return nothingHandler;
    case 'ControlRight':
      return nothingHandler;
    case 'MetaLeft':
      return nothingHandler;
    default:
      return btnClickHandler;
  }
}

document.addEventListener('DOMContentLoaded', app);
