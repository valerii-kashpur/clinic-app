import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Указываем box sizing */
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
};

/* Убираем внутренние отступы */
ul,
ol {
  padding: 0;
};

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
};

/* Выставляем основные настройки по-умолчанию для body */
body {
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
};

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul,
ol {
  list-style: none;
};

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
  text-decoration-skip-ink: auto;
};

/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
};

body {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  color: #202225;
};

input:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
};
`;

export default GlobalStyle;
