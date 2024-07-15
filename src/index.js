import App from './App.js';

const hobbies = [ 
    {emoji: "🏊", title: "Swim"},
    {emoji: "🏃", title: "Run"},
    {emoji: "🎮", title: "Games"},
];

const domElement = document.getElementById('root');
const root = ReactDOM.createRoot(domElement);
root.render(<App hobbies={hobbies} />);

