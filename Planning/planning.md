## Recipes Instagram Mock Front End

<br>

#### Order of Opperations

- create react app
- install dependencies

| Dependency | CLI | 
| --- | --- |
| react app | `$ npx create-react-app` |
| react router | `$ npm install react-router-dom` |
| react icons | `$ npm install react-icons` |

<br>
- Set up basic file structure 

```
├── lib
│   ├── src
│   │   ├── Pages
│   │   │   ├── Components
│   │   │   │   ├─ Header.jsx
│   │   │   │   ├─ Header.css
│   │   │   │   ├─ Footer.jsx
│   │   │   │   ├─ Footer.css
│   │   │   │   ├─ index.js
│   │   │   │   
│   │   │   ├─ Home.jsx
│   │   │   ├─ Home.css
│   │   │   ├─ Layout.jsx
│   │   │   ├─ Layout.css
│   │   │   ├─ index.js
│   │   │
│   │   ├─ App.jsx
│   │   ├─ App.css
│   │
│   ├── Planning
│       ├─ planning.md
│
├── package.json
├── package-lock.json 
├── .gitignore
└── README.md
```

- Create wire frames for `app`, `home`, `layout`, `header`, `footer`
- Connect pages with `react router`
- Plan more components 
    - Ie: `cards`, `buttons`, `input fields`
- Wire frame out components
- Add simple styling to components
