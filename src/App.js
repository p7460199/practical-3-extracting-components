import Hello from './Hello.js';

export default function App() {
    const name = 'ENTER YOUR NAME';
    return (
        <div>
            <Hello name={name}></Hello>
            <div>
                <ol>
                    <li>
                        <b>Name:</b> {name}
                    </li>
                    <li>
                        <b>Age:</b> 18
                    </li>
                    <li>
                        <b>Hobbies:</b>
                        <ol>
                            <li>Swim</li>
                            <li>Run</li>
                            <li>Game</li>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    );
}
