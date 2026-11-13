import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import InternalLinks from '@/components/InternalLinks';
import FAQSection from '@/components/FAQSection';
import { activationCultureFaqItems } from '@/lib/routeFaqs';

const P = ({ children }: { children: React.ReactNode }) => <p className="text-gray-700 leading-relaxed mb-6">{children}</p>;
const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl font-bold mb-3 mt-10">{children}</h2>;

export default function ActivationCulture() {
    useEffect(() => {
        document.title = 'Activation Culture in Mares: What It Is and When to Use It';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Activation culture finds dormant Streptococcus zooepidemicus that a normal swab misses: what it is, which mares it is for, the steps and the studies.');
    }, []);
    return (
        <main>
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold mb-4">Activation culture in mares: what it is and when to use it</h1>
                    <div className="tldr mb-8"><p className="text-gray-800 leading-relaxed"><strong>In short.</strong> Activation culture finds dormant uterine infection in problem mares. The vet instils bActivate, the growth medium the method was developed and tested with, and cultures a normal swab 48 hours later, when <em>Streptococcus zooepidemicus</em> grows. If it grows, the vet treats according to the sensitivity test. If nothing grows, that cause is unlikely and the search moves on.</p></div>

                    <H2>What is activation culture?</H2>
                    <P>Activation culture is a uterine culture taken after the bacteria have been woken up. In some mares, <em>Streptococcus zooepidemicus</em> sits in small foci 300 to 500 micrometres under the surface of the lining, in a dormant state (<a href="https://clinicaltheriogenology.net/index.php/CT/article/view/12588" target="_blank" rel="noopener noreferrer">Petersen et al., Clinical Theriogenology 2009</a>). Dormant bacteria do not grow in a culture, so the swab comes back clean, and they are not killed by antibiotics: in the 2015 study the dormant cells survived 32 times the concentration of penicillin that normally kills them (<a href="https://doi.org/10.1016/j.vetmic.2015.06.006" target="_blank" rel="noopener noreferrer">Petersen et al., Veterinary Microbiology 2015</a>).</P>
                    <P>Activation with bActivate changes both. The growth medium wakes the bacteria, so a normal swab 48 hours later can find them, and penicillin can now reach them.</P>

                    <H2>Which mares is it for?</H2>
                    <P>Activation culture is for the problem mare: she cycles normally, is covered at the right time with good semen, her culture and cytology are clean, and she still does not get in foal. It is not the first test. Timing, semen, the scan, swab and cytology come first. The full list of signs and when to ask for it is on <Link to="/when-to-use">when to use bActivate</Link>.</P>

                    <H2>How activation culture works, step by step</H2>
                    <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6 space-y-2">
                        <li><strong>A culture and cytology before activation,</strong> in early oestrus. Some mares grow <em>E. coli</em> before activation and <em>Streptococcus zooepidemicus</em> only afterwards, so the comparison is part of the answer.</li>
                        <li><strong>The vet instils 10 ml of bActivate</strong> into the uterus in early oestrus. No antibiotics are given beforehand, because they can stop the bacteria from waking up.</li>
                        <li><strong>The culture after activation, 48 hours later.</strong> A normal swab is enough. A low-volume lavage or a biopsy can be used if the vet prefers. The sample is cultured with a sensitivity test.</li>
                        <li><strong>Positive:</strong> the vet treats according to the sensitivity test, and the mare is covered in the following cycle. <strong>Negative:</strong> a dormant streptococcal infection is unlikely, and the vet looks for another cause.</li>
                    </ol>
                    <P>The step-by-step protocol for vets is on <Link to="/how-to-use">how to use bActivate</Link>.</P>

                    <H2>What the studies show</H2>
                    <P>In the placebo-controlled study, <em>Streptococcus zooepidemicus</em> grew in 64 % of mares (16 of 25) after activation with bActivate and in 8 % (1 of 12) after saline. All of them had been negative on lavage and cytology beforehand (<a href="https://doi.org/10.1016/j.vetmic.2015.06.006" target="_blank" rel="noopener noreferrer">Petersen et al., Veterinary Microbiology 2015</a>).</P>
                    <P>In two field series, mares were activated with bActivate, treated when positive, and covered. At Hagyard Equine Medical Institute, 83 % of 64 problem mares became pregnant and 70 % of those with a known outcome foaled; 47 % had been culture-positive after activation (Petersen and Bojesen, Clinical Theriogenology 2014). At Kildangan Stud, 16 of the 18 covered mares became pregnant, with 1.1 covers per mare; 16 of 19 had been activation-positive (<a href="https://doi.org/10.1016/j.jevs.2018.05.162" target="_blank" rel="noopener noreferrer">Journal of Equine Veterinary Science 2018</a>). Neither series had a placebo group, so the figures describe the whole sequence of diagnosis, treatment and covering.</P>
                    <P>Treatment usually works once the bacteria are found: in a German dataset of 28,887 uterine samples, 99.5 % of the beta-haemolytic streptococci were sensitive to penicillin (<a href="https://doi.org/10.1016/j.jevs.2024.105008" target="_blank" rel="noopener noreferrer">Köhne et al., Journal of Equine Veterinary Science 2024</a>).</P>

                    <H2>Activation culture and bActivate</H2>
                    <P>The method was described and tested with bActivate by Petersen, Bojesen and colleagues at the University of Copenhagen (<a href="https://doi.org/10.1016/j.vetmic.2015.06.006" target="_blank" rel="noopener noreferrer">Veterinary Microbiology 2015</a>). bActivate is made by Bojesen &amp; Petersen Biotech in Copenhagen and sold to vets through <Link to="/our-distributors">distributors</Link> and <Link to="/shop">online</Link> at 229 EUR per vial. One vial is one activation for one mare.</P>
                    <p className="text-sm text-gray-600 mb-8">Read more: <Link to="/blog/positive-activation-culture-what-happens-next">Positive activation culture: what happens next</Link>, <Link to="/swab-culture-vs-bactivate">Swab vs biopsy vs bActivate</Link> and <Link to="/blog/problem-mare-options">Problem mare: the options, step by step</Link>.</p>
                </div>
            </section>

            <FAQSection items={activationCultureFaqItems} heading="Frequently asked questions about activation culture" subtitle="Short answers; the sources are on this page." />

            <InternalLinks links={[
                { to: '/how-to-use', label: 'Veterinary Protocol', description: 'Step-by-step instructions for veterinarians' },
                { to: '/when-to-use', label: 'When to Use bActivate', description: 'Signs your mare may have a hidden infection' },
                { to: '/studies-effect', label: 'Clinical Results', description: 'The studies behind activation culture' },
                { to: '/equine-endometritis', label: 'Equine endometritis explained', description: 'Forms, causes, diagnosis and treatment, with sources' },
            ]} />
        </main>
    );
}
