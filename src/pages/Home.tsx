import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import ReviewsSection from '@/components/ReviewsSection';
import WebinarSignup from '@/components/WebinarSignup';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroFlex}>
            <div className={styles.heroText}>
              <div className={styles.heroEyebrow}>Facilitate mare pregnancy</div>
              <h1 className={styles.heroTitle}>
                Problem getting your mare in foal? <br />
                bActivate is the best solution.
              </h1>
              <p className={styles.heroSubtitle}>
                70-80% of all problem mares carry a hidden uterine infection with a clear negative effect on fertility.
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
              <video controls className={styles.video} poster="/images/hero-poster.png">
                <source src="/images/final_v2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* How bActivate works Section */}
      <section className={styles.howItWorksSection}>
        <div className={styles.container}>
          <div className={styles.howItWorksGrid}>
            <div className={styles.howItWorksText}>
              <h2 className={styles.sectionHeadingSmall}>How bActivate works?</h2>
              <p className={styles.description}>
                Dormant bacteria are difficult to diagnose by standard techniques and highly tolerant to antibiotic. Efficient handling thus requires re-activation of the bacteria. This can be achieved by instillation of bActivate, a bacterial growth medium, into the uterus.
              </p>
              <Link to="/how-to-use" className={styles.btnRedSquare}>
                READ MORE
              </Link>
            </div>
            <div className={styles.howItWorksVideo}>
              <div className={styles.videoContainer}>
                <video controls className={styles.video}>
                  <source src="/images/agent-square-english.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
            <h2 className={styles.sectionTitleLarge}>What is bActivate?</h2>
            <p className={styles.description}>
              bActivate is a bacterial growth medium capable of re-activating dormant streptococcal infections in the uterus of brood mares.
            </p>
            <Link to="/what-is-bactivate" className={styles.btnRedSquare}>
              READ MORE
            </Link>
          </div>
        </div>
      </section>

      {/* When to use Section - Two images */}
      <section className={styles.featureSectionWhite}>
        <div className={styles.container}>
          <div className={styles.featureGridTwoImages}>
            <div className={styles.twoImagesGroup}>
              <img src="/images/2_77.jpg" alt="Mare 1" width={400} height={300} className={styles.featureImg} />
              <img src="/images/3_82.jpg" alt="Mare 2" width={400} height={300} className={styles.featureImg} />
            </div>
            <div className={styles.featureTextSide}>
              <div className={styles.eyebrowRed}>Application</div>
              <h2 className={styles.sectionTitleLarge}>When to use?</h2>
              <p className={styles.description}>
                5-15% of all mares are not pregnant at the end of the breeding season, despite fertilised stallions and supervised by experienced veterinarians.
              </p>
              <Link to="/when-to-use" className={styles.btnRedSquare}>
                READ MORE
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
              <div className={styles.eyebrowRed}>Application</div>
              <h2 className={styles.sectionTitleLarge}>How to use?</h2>
              <p className={styles.description}>
                bActivate is to be used in mares with reduced uterine defense mechanisms and in mares suspected of having a chronic subclinical infection.
              </p>
              <Link to="/how-to-use" className={styles.btnRedSquare}>
                READ MORE
              </Link>
            </div>
            <div className={styles.twoImagesGroup}>
              <img src="/images/colt-in-field-4078876_1920.jpg" alt="Colt" width={400} height={300} className={styles.featureImg} />
              <img src="/images/horses-2504677_1920.jpg" alt="Mare and foal" width={400} height={300} className={styles.featureImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Our products Section */}
      <section className={styles.ourProductsSection}>
        <div className={styles.container}>
          <div className={styles.productsFlex}>
            <div className={styles.productsText}>
              <div className={styles.eyebrowRed}>Shop</div>
              <h2 className={styles.sectionTitleLarge}>Our products</h2>
              <p className={styles.description}>
                The concept behind bActivate (promoting bacterial-activation) was discovered by Morten Rønn Petersen, DVM, PhD and Professor Anders Miki Bojesen, DVM, PhD.
              </p>
              <Link to="/shop" className={styles.btnRedSmall}>
                SHOP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Men Behind Section */}
      <section className={styles.menBehindFullSection}>
        <div className={styles.container}>
          <div className={styles.menBehindContent}>
            <h2 className={styles.menBehindTitle}>The Men Behind bActivate</h2>
            <p className={styles.menBehindText}>
              Ten percent of all mares struggle to get in foal. Now two Danish researchers have identified what might be wrong and produced a product, which can facilitate diagnostics. Veterinarians at the world's largest equine hospital in Kentucky have successfully tested the product.
            </p>
            <Link to="/about-us" className={styles.btnWhiteSolid}>
              READ MORE ABOUT US
            </Link>
          </div>
        </div>
      </section>

      <WebinarSignup />

      <ReviewsSection />
    </main>
  );
}
