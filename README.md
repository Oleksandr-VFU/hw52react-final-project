# Final React JS Project — Car Sales App

## Опис проекту

Це фінальний навчальний проект з курсу **React JS** — "Розробка курсового проекту з React і Redux Toolkit". В додатку реалізовано пошук, перегляд та придбання сучасних автомобілів. Проект створено для закріплення навичок роботи з React, Redux Toolkit, хуками, компонентами, станами, слайсами та thunks. Весь код написано згідно принципів чистого коду та сучасних best practices.

- Проект створено за допомогою Vite
- Всі основні функції реалізовано через компоненти, хуки, Redux-слайси та thunks
- Дотримано структурованої архітектури та чистого коду

## Структура проекту

```
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── common/
│   │   │   └── Navbar.tsx
│   │   ├── form/
│   │   │   ├── InputField.tsx
│   │   │   ├── ProductForm.tsx
│   │   │   └── SelectField.tsx
│   │   ├── layout/
│   │   ├── modals/
│   │   │   └── Modal.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Posts.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── ToDos.tsx
│   │   │   └── Users.tsx
│   │   ├── products/
│   │   │   ├── AddProduct.tsx
│   │   │   ├── EditProduct.tsx
│   │   │   ├── Pagination.tsx
│   │   │   └── Product.tsx
│   ├── data/
│   │   └── mockData.ts
│   ├── hooks/
│   │   ├── useAdd.ts
│   │   ├── useDelete.ts
│   │   ├── useFetch.ts
│   │   └── useUpdate.ts
│   ├── redux/
│   │   ├── store.ts
│   │   └── slices/
│   │       ├── authSlice.ts
│   │       ├── createFetchSlice.ts
│   │       ├── createFetchThunk.ts
│   │       ├── postsSlice.ts
│   │       ├── productsSlice.ts
│   │       └── userSlice.ts
│   ├── types/
│   │   ├── common.ts
│   │   ├── Post.Interface.ts
│   │   ├── Product.Interface.ts
│   │   └── User.Interface.ts
│   ├── ui/
│   │   ├── loading.ts
│   │   └── Loading.tsx
│   ├── utils/
│   │   ├── debounce.ts
│   │   └── mockapi.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Деплой

- [Демо на Vercel](https://hw52react-final-project.vercel.app/)
- [GitHub репозиторій](https://github.com/Oleksandr-VFU/hw52react-final-project)

## Інструкція з встановлення та запуску

1. Клонувати репозиторій:
   ```bash
   git clone https://github.com/Oleksandr-VFU/hw52react-final-project.git
   ```
2. Перейти в папку проекту:
   ```bash
   cd hw52react-final-project/hw52-final-react-app
   ```
3. Встановити залежності:
   ```bash
   npm install
   # або
   yarn install
   ```
4. Запустити проект:
   ```bash
   npm run dev
   # або
   yarn dev
   ```
5. Відкрити у браузері [http://localhost:5173](http://localhost:5173)

---

**Автор:** Oleksandr Komnatskyi

Проект виконано в рамках фінального завдання курсу React JS. Всі права захищено.
