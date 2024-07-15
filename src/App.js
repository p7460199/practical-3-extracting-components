import Hello from './Hello.js';
import Hobby from './Hobby.js';
import TitleLi from './TitleLi.js';
import Age from './Age.js';

export default function App(props) {
    const name = 'Mok';
    return (
        <div>
            <Hello name={name}></Hello>
            <div>
                <ol>
                    <TitleLi title="Name" text={name} />
                    <Age value={19} />
                    <TitleLi title="Hobbies" />
                    <ol>
                        {props.hobbies.map(function (hobby) {
                            return <Hobby title={hobby.title} emoji={hobby.emoji} key={hobby.title} />;
                        })}
                    </ol>
                </ol>
            </div>
        </div>
    );
}
