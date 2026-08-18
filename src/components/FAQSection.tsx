import { useState } from 'react';

// Two distinct question sets. The visible accordion must stay in sync with the
// FAQPage structured data injected per route in scripts/prerender.mjs
// ('/' = homeFaqItems, '/shop' = shopFaqItems). Edit both together.
export const homeFaqItems = [
  {
    question: "bActivateとは？",
    answer: "bActivateは、不受胎牝馬の子宮内で休眠した Streptococcus equi subsp. zooepidemicus 感染を再活性化するために獣医師が使用する、細菌培養培地です。標準的な検査では検出できない無症候性子宮内膜炎（subclinical endometritis）を顕在化させるので、獣医師は正確に診断し、標的を絞った抗菌薬で治療できます。",
  },
  {
    question: "陰性のスワブなのに、なぜ牝馬は受胎しないのですか？",
    answer: "研究によれば、不受胎牝馬の70〜80%が、休眠細菌による隠れた子宮内感染を抱えています。これらの細菌は代謝の低い「パーシスター（persister）」状態に入り、標準的な子宮培養をすり抜け、抗菌薬に対して寛容（薬剤寛容）になります。標準的なスワブ細菌培養の検出感度は約34%にすぎず、こうした感染の多くを見逃します。bActivateは細菌を再活性化するので、獣医師が正確に診断し治療できるようになります。",
  },
  {
    question: "無症候性子宮内膜炎とは何か、なぜ検出が難しいのですか？",
    answer: "無症候性子宮内膜炎は、目に見える症状——分泌物、発熱、発情周期の異常——を伴わない、静かな子宮の炎症です。一見正常でも、この炎症が胚の着床を妨げます。細菌が休眠状態で代謝が低いため、通常のスワブや培養検査では捉えられません。",
  },
  {
    question: "牝馬の子宮のバイオフィルム感染とは何ですか？",
    answer: "バイオフィルムは、Streptococcus zooepidemicus のような細菌が子宮内で自らの周囲に築く保護層です。この盾により、細菌は抗菌薬に寛容になり、標準的なスワブでは検出できなくなります。バイオフィルム感染は、不受胎牝馬における慢性・難治性の不妊の主要な原因です。",
  },
  {
    question: "なぜ抗菌薬では牝馬の子宮内感染を治せないことがあるのですか？",
    answer: "細菌がバイオフィルムを形成したり、休眠パーシスター状態に入ったりすると、たとえ本来は感受性のある抗菌薬であっても、薬剤は活発に分裂する細胞を標的とするため、細菌はこれに寛容になります。bActivateはまず細菌を再活性化し、代謝的に活発で無防備な状態にするので、獣医師による標的を絞った抗菌薬治療が効くようになります。",
  },
  {
    question: "牝馬の隠れた子宮内感染の兆候は何ですか？",
    answer: "主な兆候は次のとおりです：繁殖能力のある種牡馬と交配しても受胎を繰り返し失敗する、超音波検査で子宮内貯留液が繰り返し認められる、スワブは陰性なのに原因不明の不妊がある、早期胚死滅、抗菌薬治療に複数回失敗した既往。牝馬にこれらの兆候があれば、休眠細菌感染が原因かもしれません。",
  },
  {
    question: "bActivateはどのように機能しますか？",
    answer: "獣医師が、発情初期に10 mlのbActivateを牝馬の子宮内に注入します。培養培地が48時間以内に休眠細菌を再活性化し、標準的な培養で検出できるようにします。獣医師はその培養結果に基づいて、標的を絞った抗菌薬治療を処方します。交配は次の周期に行うことが推奨されます。",
  },
  {
    question: "なぜうちの牝馬はこんなに早く妊娠を失うのですか？",
    answer: "早期胚死滅（35日目より前）は妊娠の10〜15%に、高齢牝馬や不受胎牝馬では最大30〜40%に生じます。見落とされがちな原因の一つが、休眠細菌による無症候性子宮内膜炎です。炎症は受胎を妨げるほど強くなくても、妊娠を最初の数週間で終わらせる不利な環境を作り出します。牝馬が受胎するのに妊娠を繰り返し失う場合は、bActivateを用いた休眠 Strep. zooepidemicus の検査について獣医師にご相談ください。",
  },
  {
    question: "bActivateは高齢の牝馬にも使えますか？",
    answer: "はい。高齢の牝馬（10歳以上）や、これまでに複数回出産した牝馬は、加齢とともに子宮の防御機構が弱まるため、bActivateの最も一般的な対象です。臨床研究には、長い不妊歴を持つ高齢の不受胎牝馬が相当数含まれています。",
  },
];

export const shopFaqItems = [
  {
    question: "bActivateの価格はいくらですか？",
    answer: "bActivateは1バイアルあたり¥41,999（税別）です。1バイアルで、1頭の牝馬の1活性化サイクル分です。日本へは、デンマーク・米国・オーストラリアの各拠点のうち、配送先に最も適した拠点から発送されます。また、世界各国の獣医用販売店を通じてもご購入いただけます。",
  },
  {
    question: "何が届きますか。獣医師は必要ですか？",
    answer: "10 mlのbActivate活性化培養培地を1バイアルお届けします。bActivateは獣医師の処方が必要な製品です。発情初期に獣医師が子宮内へ注入し、その後の培養や必要な抗菌薬治療も獣医師が行います。",
  },
  {
    question: "bActivateはいつ使うべきですか？",
    answer: "bActivateは、繁殖能力のある種牡馬と交配しても受胎しなかった牝馬、子宮内貯留液が繰り返し認められる牝馬、子宮内感染の既往のある牝馬、子宮の防御機構が低下した高齢の繁殖牝馬、そして過去に抗菌薬が効かなかった牝馬に適応があります。予定する交配周期の1周期前の発情期に投与します。",
  },
  {
    question: "臨床研究でbActivateはどのような受胎率を達成していますか？",
    answer: "Dr. Kristina Luが主導した Hagyard Equine Medical Institute（米国ケンタッキー州）の研究では、bActivateによる診断と獣医治療の後、64頭の不受胎牝馬の83%が受胎し、転帰が判明したもののうち70%が生存産駒を得ました。この研究にプラセボ群はなく、この牝馬群の従来の出産期待率は15〜50%とされています。Kildangan Stud（Godolphin）では、交配した不受胎牝馬の89%（18頭中16頭）が受胎し、Journal of Equine Veterinary Science（2018年）に学会抄録として発表されました。",
  },
  {
    question: "bActivateはどこで購入できますか？",
    answer: "bActivateは、デンマークの Bojesen and Petersen Biotech ApS が製造しており、世界各国の認定された馬獣医用販売店を通じて、または本ショップから直接ご購入いただけます。ご注文前のご質問は contact@bactivate.eu までお問い合わせください。",
  },
  {
    question: "bActivateはどのように配送されますか？",
    answer: "ご注文は、デンマーク・米国・オーストラリアの各拠点のうち、配送先に最も適した拠点から日本へ発送されます。診療所や牧場向けに大量にご入用の場合や、ご不明点がある場合は、contact@bactivate.eu または最寄りの販売店までご連絡ください。",
  },
];

type FAQVariant = 'home' | 'shop';

const FAQSection = ({ variant = 'home' }: { variant?: FAQVariant }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = variant === 'shop' ? shopFaqItems : homeFaqItems;
  const subtitle = variant === 'shop'
    ? 'ご注文・価格・配送、そして研究結果に関するよくある質問です。'
    : '不受胎牝馬、バイオフィルム感染、bActivateの活性化に関するよくある質問です。';

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ background: '#f8f8f8', borderTop: '1px solid #e5e7eb', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#901820', marginBottom: '0.5rem' }}>
          FAQ
        </p>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
          よくある質問
        </h2>
        <p style={{ color: '#666', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
          {subtitle}
        </p>

        <div>
          {faqItems.map((item, index) => (
            <div
              key={index}
              style={{ borderBottom: '1px solid #e5e7eb' }}
            >
              <button
                onClick={() => toggle(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '1.1rem 0',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#111',
                  lineHeight: 1.4,
                }}
              >
                <span>{item.question}</span>
                <span style={{
                  flexShrink: 0,
                  fontSize: '1.25rem',
                  color: '#901820',
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}>
                  &#8964;
                </span>
              </button>
              {openIndex === index && (
                <div style={{
                  paddingBottom: '1.1rem',
                  color: '#444',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                }}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
