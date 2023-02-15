import React from "react";
import styles from "../styles/content.module.css";
import { HiSearch, HiArrowSmDown } from "react-icons/hi";

interface content {
  idValue: number;
  optin: string;
  optin1: string;
  optin2: string;
}

interface wraptotal1text {
  idWrapTotal: number;
  text: string;
  h1: string;
  date: string;
  toalPrice: number;
}

const Wraptotal1text: wraptotal1text[] = [
  {
    idWrapTotal: 1,
    text: "さんの言葉",
    h1: "PRECIO",
    date: "2022-10  ",
    toalPrice: 155704,
  },
  {
    idWrapTotal: 2,
    text: "FPD",
    h1: "EXCELINER3300",
    date: "2022-10  ",
    toalPrice: 150112,
  },
  {
    idWrapTotal: 3,
    text: "ます (Batch)",
    h1: "TELINDY",
    date: "2022-10  ",
    toalPrice: 166708,
  },
  {
    idWrapTotal: 4,
    text: "さの言葉",
    h1: "CERTAS",
    date: "2022-10  ",
    toalPrice: 466440,
  },
];

const Contents: content[] = [
  {
    idValue: 1,
    optin: "たくさんの言葉",
    optin1: "たくさんの言葉",
    optin2: "たくさんの言葉",
  },
  {
    idValue: 2,
    optin: "たくさんの言葉",
    optin1: "たくさんの言葉",
    optin2: "たくさんの言葉",
  },
  {
    idValue: 3,
    optin: "たくさんの言葉",
    optin1: "たくさんの言葉",
    optin2: "たくさんの言葉",
  },
  {
    idValue: 4,
    optin: "たくさんの言葉",
    optin1: "たくさんの言葉",
    optin2: "たくさんの言葉",
  },
];

const Content: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div>
        <div className={styles.wrapoptions}>
          <div className={styles.wrapoption}>
            <div className={styles.inputtext}>
              <input
                className={styles.input}
                type="text"
                placeholder="こんにちは "
              />
              <HiSearch className={styles.inputsicon} />
            </div>
            <div className={styles.inputtext}>
              {Contents.map((item, index) => (
                <div className={styles.valuesOption} key={item.idValue}>
                  <select className={styles.selecttion}>
                    <option value={index}>{item.optin}</option>
                    <option value={index}>{item.optin1}</option>
                    <option value={index}>{item.optin2}</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          <form className={styles.inputdatefrom}>
            <p className={styles.inputdatefromtext}>カレンダー</p>
            <input className={styles.inputdate} type="date" />
          </form>
        </div>
        <div className={styles.wrapbtn}>
          <button className={styles.btn}>ボタン</button>
          <button className={styles.btn}>ボタン</button>
        </div>
        <div className={styles.wraptables}>
          <div className={styles.wraptable}>
            <div className={styles.wraptabletext1}>
              <p>もつ</p>
            </div>
            <div className={styles.wraptabletext2}>
              <p>多くの</p>
              <HiArrowSmDown className={styles.wraptabletextpicon} />
            </div>
            <div className={styles.wraptabletexttotal}>
              <div className={styles.wraptabletext}>
                <p>もっとあります</p>
                <p className={styles.wraptabletextp}>Const</p>
                <HiArrowSmDown className={styles.wraptabletextpicon} />
              </div>
              <div className={styles.wraptabletext}>
                <p>もっとあります</p>
                <p className={styles.wraptabletextp}>Const</p>
                <HiArrowSmDown className={styles.wraptabletextpicon} />
              </div>
              <div className={styles.wraptabletext}>
                <p>もっとあります</p>
                <p className={styles.wraptabletextp}>Const</p>
                <HiArrowSmDown className={styles.wraptabletextpicon} />
              </div>
              <div className={styles.wraptabletext}>
                <p>もっとあります</p>
                <p className={styles.wraptabletextp}>Const</p>
                <HiArrowSmDown className={styles.wraptabletextpicon} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wraptabless}>
          {Wraptotal1text.map((item) => (
            <div className={styles.wraptable} key={item.idWrapTotal}>
              <div className={styles.wraptotal1}>
                <p className={styles.wraptotal1text}>{item.text}</p>
                <p className={styles.wraptotal1textp}>{item.h1}</p>
                <div className={styles.wraptotalkhoi1s}>
                  <div className={styles.wraptotalkhoi1}>
                    <button className={styles.wraptotalkhoi1btn}>ります</button>
                    <p className={styles.wraptotalkhoi1text}>{item.date}</p>
                  </div>
                  <div className={styles.wraptotalkhoi2}>
                    <button className={styles.wraptotalkhoi1btn}>ります</button>
                    <p className={styles.wraptotalkhoi1text1}></p>
                  </div>
                </div>
              </div>
              <div className={styles.wraptabletext22}>
                <p className={styles.wraptabletext22p}>
                  {item.toalPrice.toLocaleString("ja-JP", {
                    style: "currency",
                    currency: "JPY",
                  })}
                </p>
              </div>

              <div className={styles.wraptabletexttotal1}>
                <div className={styles.wraptabletext11}>
                  <div className={styles.wraptabletextbo}>
                    <p className={styles.wraptabletextbop}></p>
                  </div>
                </div>
                <div className={styles.wraptabletext11}>
                  <div className={styles.wraptabletextbo1}>
                    <p className={styles.wraptabletextbop1}></p>
                  </div>
                </div>
                <div className={styles.wraptabletext11}>
                  <div className={styles.wraptabletextbo2}>
                    <p className={styles.wraptabletextbop2}></p>
                  </div>
                </div>
                <div className={styles.wraptabletext11}>
                  <div className={styles.wraptabletextbo3}>
                    <p className={styles.wraptabletextbop3}></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
