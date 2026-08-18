import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Home.module.css';
import ReviewsSection from '@/components/ReviewsSection';
import WebinarSignup from '@/components/WebinarSignup';
import LiteYouTube from '@/components/LiteYouTube';

export default function Home() {
  useEffect(() => {
    document.title = 'bActivate｜不受胎牝馬の隠れた感染を診断';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'bActivateは、不受胎牝馬の隠れた子宮内感染を検出します。Hagyard（米国ケンタッキー州）で使用され、受胎率83%。活性化サイクルごとに1バイアル。');
  }, []);
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroFlex}>
            <div className={styles.heroText}>
              <div className={styles.heroEyebrow}>牝馬の妊娠をサポート</div>
              <h1 className={styles.heroTitle}>
                牝馬がなかなか受胎しませんか？ <br />
                bActivateは、スワブでは見逃される感染を見つけます。
              </h1>
              <p className={styles.heroSubtitle}>
                不受胎牝馬の70〜80%が、受胎に明らかな悪影響を及ぼす隠れた子宮内感染を抱えています。bActivateは、標準的な検査では見逃される休眠感染を活性化するので、獣医師がそれを治療し、不妊の牝馬に二度目のチャンスを与えることができます。
              </p>
            </div>
            <div className={styles.heroSilhouette}>
              <img
                src="/images/bActivate-hest-roed.gif"
                alt="Silhouette"
                width={300}
                height={300}
                className={styles.silhouetteImageHero}
              />
            </div>
          </div>

          <div className={styles.heroVideoWrapper}>
            <div className={styles.videoContainer}>
              <LiteYouTube id="_1QPkyXkFgs" title="bActivate - Facilitate Mare Pregnancy" className={styles.video} />
            </div>
          </div>
        </div>
      </section>

      {/* How bActivate works Section */}
      <section className={styles.howItWorksSection}>
        <div className={styles.container}>
          <div className={styles.howItWorksGrid}>
            <div className={styles.howItWorksText}>
              <h2 className={styles.sectionHeadingSmall}>bActivateの仕組み</h2>
              <p className={styles.description}>
                休眠細菌は通常の手法では診断が難しく、抗菌薬が効きにくい状態（薬剤寛容）にあります。効率的に対処するには細菌の再活性化が必要です。これは、細菌培養培地であるbActivateを子宮内に注入することで実現できます。
              </p>
              <Link to="/how-to-use" className={styles.btnRedSquare}>
                もっと読む
              </Link>
            </div>
            <div className={styles.howItWorksVideo}>
              <div className={styles.videoContainer}>
                <LiteYouTube id="acpF8se6Co8" title="How bActivate Works" className={styles.video} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is bActivateSection */}
      <section className={styles.whatIsSection}>
        <div className={styles.container}>
          <div className={styles.whatIsHeader}>
            <div className={styles.eyebrowRed}>bActivate</div>
            <h2 className={styles.sectionTitleLarge}>bActivateとは？</h2>
            <p className={styles.description}>
              bActivateは、繁殖牝馬の子宮内で休眠したレンサ球菌感染を再活性化できる、細菌培養培地です。
            </p>
            <Link to="/what-is-bactivate" className={styles.btnRedSquare}>
              もっと読む
            </Link>
          </div>
        </div>
      </section>

      {/* When to use Section - Two images */}
      <section className={styles.featureSectionWhite}>
        <div className={styles.container}>
          <div className={styles.featureGridTwoImages}>
            <div className={styles.twoImagesGroup}>
              <img src="/images/2_77.jpg" alt="Mare 1" width={400} height={300} className={styles.featureImg} loading="lazy" />
              <img src="/images/3_82.jpg" alt="Mare 2" width={400} height={300} className={styles.featureImg} loading="lazy" />
            </div>
            <div className={styles.featureTextSide}>
              <div className={styles.eyebrowRed}>用途</div>
              <h2 className={styles.sectionTitleLarge}>いつ使うか？</h2>
              <p className={styles.description}>
                全牝馬の5〜15%が、繁殖能力のある種牡馬と交配し、経験豊富な獣医師の管理下にあったにもかかわらず、繁殖シーズンの終わりまでに受胎しません。
              </p>
              <Link to="/when-to-use" className={styles.btnRedSquare}>
                もっと読む
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to use Section - Two images reversed */}
      <section className={styles.featureSectionWhite}>
        <div className={styles.container}>
          <div className={styles.featureGridTwoImagesReversed}>
            <div className={styles.featureTextSide}>
              <div className={styles.eyebrowRed}>用途</div>
              <h2 className={styles.sectionTitleLarge}>どう使うか？</h2>
              <p className={styles.description}>
                bActivateは、子宮の防御機構が低下した牝馬、および慢性・無症候性の感染が疑われる牝馬に使用します。
              </p>
              <Link to="/how-to-use" className={styles.btnRedSquare}>
                もっと読む
              </Link>
            </div>
            <div className={styles.twoImagesGroup}>
              <img src="/images/colt-in-field-800.webp" alt="Colt" width={400} height={300} className={styles.featureImg} loading="lazy" />
              <img src="/images/horses-2504677-800.webp" alt="Mare and foal" width={400} height={300} className={styles.featureImg} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Our products Section */}
      <section className={styles.ourProductsSection}>
        <div className={styles.container}>
          <div className={styles.productsFlex}>
            <div className={styles.productsText}>
              <div className={styles.eyebrowRed}>ショップ</div>
              <h2 className={styles.sectionTitleLarge}>製品について</h2>
              <p className={styles.description}>
                bActivateの基盤となる概念（細菌の活性化を促す仕組み）は、Morten Rønn Petersen博士（DVM, PhD）と Anders Miki Bojesen教授（DVM, PhD）によって発見されました。
              </p>
              <Link to="/shop" className={styles.btnRedSmall}>
                ショップ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Men Behind Section */}
      <section className={styles.menBehindFullSection}>
        <div className={styles.container}>
          <div className={styles.menBehindContent}>
            <h2 className={styles.menBehindTitle}>bActivateを生み出した人々</h2>
            <p className={styles.menBehindText}>
              全牝馬の10%が受胎に苦労しています。いま、2人のデンマークの研究者が、その原因かもしれないものを特定し、診断を助ける製品を生み出しました。米国ケンタッキー州にある世界最大の馬病院の獣医たちが、この製品の試験に成功しています。
            </p>
            <Link to="/about-us" className={styles.btnWhiteSolid}>
              私たちについてもっと読む
            </Link>
          </div>
        </div>
      </section>

      <WebinarSignup />

      <ReviewsSection />

    </main>
  );
}
