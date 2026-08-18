import { useState } from 'react';
import styles from './ReviewsSection.module.css';

const testimonials = [
    {
        quote: "Hagyard では、不受胎牝馬に対する標準的な繁殖検査に bActivate を組み込みました。少なくとも3サイクル受胎しなかった64頭の牝馬のうち、bActivateによる活性化と標的抗菌薬治療の後、83%が受胎しました。",
        name: "Dr. Kristina Lu, DVM",
        title: "Hagyard Equine Medical Institute、米国ケンタッキー州レキシントン",
        initials: "KL",
        tag: "臨床研究"
    },
    {
        quote: "あらゆる従来治療を試しても1年以上不妊だった、最も手強い19頭の不受胎牝馬に bActivate を使用しました。その89%が受胎しました。本当に目を見張ったのは、隠れた感染を抱えていた牝馬がいかに多かったかということです。",
        name: "Meta Osborne MVB CertESM MRCVS",
        title: "Kildangan Stud、Godolphin",
        initials: "MO",
        tag: "臨床研究"
    },
    {
        quote: "数頭の牝馬に bActivate を使用したところ、すべてが受胎し、そのほとんどが凍結精液で一度目の交配で受胎しました！",
        name: "Jeanette Marina Hansen",
        title: "馬主・生産者",
        initials: "JH",
        tag: "生産者"
    },
    {
        quote: "bActivateは、私たち繁殖獣医が仕事を効果的に行うための優れたツールです。長期的に見て、賢く、費用対効果の高い解決策でもあります。",
        name: "Lotte Bøgedal",
        title: "繁殖獣医",
        initials: "LB",
        tag: "獣医師"
    },
    {
        quote: "bActivateを使い、たった一度の交配で牡の産駒を得ました。3年間、牝馬は受胎するものの生存産駒を得られない苦しい日々が続いていました。bActivateはいくら勧めても勧めきれません。",
        name: "Mary Davison",
        title: "Cathrinestown Stud Farm、アイルランド・レイクスリップ",
        initials: "MD",
        tag: "生産者"
    },
    {
        quote: "うちの18歳の牝馬は5シーズン連続で失敗していました。bActivateの後、標準的な検査では完全に見逃されていたレンサ球菌に強陽性であることが確認されました。治療を受け、9月に交配したところ、5シーズンで初めて排卵時に液がありませんでした。いまや妊娠34日目です。侵襲的な洗浄、過剰な薬、妊娠を維持するための闘いを伴わない妊娠は、これが初めてです。",
        name: "Holly Graham-Jones",
        title: "馬主、アイルランド",
        initials: "HG",
        tag: "生産者"
    },
    {
        quote: "bActivateにより、通常の診断（培養・細胞診）では陰性と判定されていた慢性感染の牝馬を特定できました。次のシーズンは、不受胎牝馬にこれを使用する予定です。",
        name: "Drs. Anja Rosenbrock & Meta Osborne",
        title: "Tinnakill House、アイルランド",
        initials: "TR",
        tag: "獣医師"
    },
    {
        quote: "この牝馬は分娩中に子馬を失い、従来の治療では治らない子宮内感染を発症しました。bActivateは、私たちが疑っていたこと——子宮内膜の深部に潜む休眠細菌で、標準的な診断ではまったく見えないもの——を裏づけました。感染が特定・治療されたいま、2026年の繁殖シーズンに向けて準備を進めています。",
        name: "Charlotte Meldgaard, DVM",
        title: "馬の獣医、デンマーク",
        initials: "CM",
        tag: "獣医師"
    },
    {
        quote: "bActivateは、標準的なスワブ・生検・洗浄サンプルでは検出できない、深部に潜むβ溶血性レンサ球菌感染を再活性化します。適切な牝馬——子宮内貯留液の既往、感染の反復、吸収（早期胚死滅）のある牝馬や、どうしても受胎しない牝馬——に使えば、その牝馬を繁殖に残すかどうかを左右する決め手になり得ます。",
        name: "Skodborg Heste-Praksis",
        title: "馬の獣医診療所、デンマーク",
        initials: "SH",
        tag: "獣医師"
    },
    {
        quote: "うちの最も手強い不受胎牝馬は、bActivateを使うまで決して受胎しませんでした。前回はこれから始めたところ、いつもの5〜6回ではなく、最初の授精で受胎しました。初期費用は高くつくかもしれませんが、何度も繰り返すよりずっと安上がりです。",
        name: "Maria Børre Nielsen",
        title: "生産者",
        initials: "MN",
        tag: "生産者"
    }
];

const VISIBLE_DEFAULT = 6;

export default function ReviewsSection() {
    const [expanded, setExpanded] = useState(false);
    const visible = expanded ? testimonials : testimonials.slice(0, VISIBLE_DEFAULT);
    const hidden = testimonials.length - VISIBLE_DEFAULT;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>世界中の生産者・獣医に信頼されています</span>
                    <h2 className={styles.title}>お客様の声</h2>
                    <p className={styles.subtitle}>最も難しい不受胎牝馬に bActivate を使用した獣医師や生産者からの、実際の成果です。</p>
                </div>
                <div className={styles.grid}>
                    {visible.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardTop}>
                                <span className={styles.tag}>{t.tag}</span>
                                <div className={styles.stars}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                            </div>
                            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{t.initials}</div>
                                <div>
                                    <div className={styles.name}>{t.name}</div>
                                    <div className={styles.role}>{t.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.toggleWrap}>
                    <button
                        className={styles.toggleBtn}
                        onClick={() => setExpanded(e => !e)}
                        aria-expanded={expanded}
                    >
                        {expanded
                            ? 'レビューを閉じる ▲'
                            : `${testimonials.length}件のレビューをすべて見る（＋${hidden}件）▼`}
                    </button>
                </div>
            </div>
        </section>
    );
}
