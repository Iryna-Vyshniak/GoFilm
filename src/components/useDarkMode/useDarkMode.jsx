import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);
  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  /*
  Мультимедійна функція використовується для виявлення того, чи попросив користувач сторінку використовувати тему світлого або темного кольору на основі налаштувань у своїй ОС.
  Перевіряємо, чи підтримує браузер медіа-запит, і встановлюємо відповідну тему. Для цього перевіримо, чи існує він і чи підтримується темний режим. Нам також потрібно пам'ятати про це, оскільки, якщо воно доступне - не хочемо перезаписувати його темним значенням, якщо, звичайно, значення не встановлено на світле.
Якщо всі перевірки будуть пройдені - встановимо темну тему. */

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light');
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
