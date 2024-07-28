'use client'

import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";

interface Props {
    key: number;
    id: number;
    question: string;
    imageURL: string;
    answerExpected: string[];
    isAnswerCorrect: boolean;
    onNumberClicked(id: number, question: string) : void;
    // onAnswered(id: number, isAnswerCorrect: boolean): void
};

export default function Number(props: Props) {
    const [answer, setAnswer] = useState("");

    const numberClickedEventHandler = () => {
        props.onNumberClicked(props.id, props.question);
    }

    // const isAnswerCorrect = () => {
    //     if (props.answerExpected.includes(answer)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // const answerChanged = (value: any) => {
    //     setAnswer(value);
    //     props.onAnswered(props.id, (props.answerExpected.includes(value))? true : false);
    // }

    {/* <p className={styles.question}>{props.questionText}</p>
            <input className={styles.answer} type="text" value={answer} onChange={e => answerChanged(e.target.value)}></input>
            <div className={isAnswerCorrect() ? styles.cipherVisible : styles.cipherInvisible}>
                {props.cipher}
            </div> */}

    return (
        <div className={styles.gridItem} onClick={numberClickedEventHandler}>
            <div className={styles.imageNumber}>{props.id}</div>
            <img className={props.isAnswerCorrect ? styles.imageVisible : styles.imageHidden} src={props.imageURL}></img>
        </div>
    );
}