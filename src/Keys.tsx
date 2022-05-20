import { useEffect, useState } from 'react';
import { IItem } from './index';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [inputId, setInputId] = useState(0);
    const [text, setText] = useState('');
    if (props.sorting === 'ASC')
        props.initialData.sort((a, b) => {
            if (a.name > b.name) return 1;
            else if (b.name > a.name) return -1;
            return 0;
        });
    if (props.sorting === 'DESC')
        props.initialData.sort((a, b) => {
            if (a.name > b.name) return -1;
            else if (b.name > a.name) return 1;
            return 0;
        });
    return (
        <ol>
            {props.initialData.map((item) => {
                if (inputId != item.id) {
                    return (
                        <li key={item.id}>
                            <span
                                onClick={() => {
                                    setInputId(item.id);
                                    setText(item.name);
                                }}
                            >
                                {item.name}
                            </span>
                        </li>
                    );
                } else {
                    return (
                        <li key={item.id}>
                            <input
                                value={text}
                                placeholder={item.name}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        item.name = text;
                                        setInputId(0);
                                    }
                                    if (e.key === 'Escape') {
                                        setInputId(0);
                                    }
                                }}
                                onChange={(e) => {
                                    setText(e.target.value);
                                }}
                                title="input"
                            />
                        </li>
                    );
                }
            })}
        </ol>
    );
}
