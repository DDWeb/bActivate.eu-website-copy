import { useEffect } from 'react';
import InternalLinks from '@/components/InternalLinks';

export default function EndangeredEquineProgram() {
    useEffect(() => {
        document.title = 'The Endangered Equine Program | Free bActivate for Rare-Breed Problem Mares';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'For breeds on a recognized conservation watchlist, we donate bActivate for the problem mares that will not get in foal, so your veterinarian can find the infection a standard swab misses.');
    }, []);

    return (
        <main>
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold mb-3">The Endangered Equine Program</h1>
                    <p className="text-xl text-gray-800 font-semibold mb-6">We donate bActivate for the problem mares of endangered breeds.</p>
                    <p className="text-gray-700 leading-relaxed mb-8">Every year, bActivate helps hundreds of broodmares get in foal. In a breed down to a few hundred animals, a mare that will not get in foal is not one lost foal. It is a lost bloodline. We donate bActivate for those mares, so your veterinarian can find what a standard swab misses.</p>

                    <div className="flex flex-wrap gap-4 mb-14">
                        <a href="/donate" className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-red-800 transition">Does your mare qualify?</a>
                        <a href="mailto:contact@bactivate.eu?subject=Endangered%20Equine%20Program" className="inline-block border border-primary text-primary px-6 py-3 rounded font-semibold hover:bg-red-50 transition">Email contact@bactivate.eu</a>
                    </div>

                    <h2 className="text-2xl font-bold mb-3">The problem</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">You know the mare. Covered cycle after cycle, every swab clean, but she will not catch. In a mainstream breed that is a disappointment. In a critically endangered one, it is a genetic line quietly disappearing. The most valuable mares to a breed's survival are often the hardest to get in foal, because they are older and have been barren for seasons.</p>

                    <h2 className="text-2xl font-bold mb-3">What bActivate is (and is not)</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">bActivate is a diagnostic growth medium. In many problem mares, a Streptococcus equi subspecies zooepidemicus infection lies sleeping deep in the uterine lining, where no swab can find it. bActivate wakes that sleeping infection so it shows up on an ordinary culture. bActivate does not treat and it is not a medicine. It activates the infection so your veterinarian can detect it and treat it with targeted antibiotics. We wake the infection. The vet detects and treats.</p>

                    <h2 className="text-2xl font-bold mb-3">What we donate</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">For breeds on a recognized conservation watchlist, we donate bActivate for your problem mares, the ones that will not get in foal, for the coming breeding season. Free, with no purchase commitment. Each mare stays under the care of your own veterinarian. We support a limited number of mares each season, so we work with programs to prioritize the mares where a foal matters most.</p>

                    <h2 className="text-2xl font-bold mb-3">Who qualifies</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">Breeds listed as endangered or at risk on a recognized conservation register, for example the RBST watchlist, the Livestock Conservancy priority list, FAO DAD-IS, or a national equivalent.</p>

                    <h2 className="text-2xl font-bold mb-3">The evidence</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">The mechanism was shown in a placebo-controlled study (Petersen et al., Veterinary Microbiology, 2015): 64% activation versus 8% in the control group. In the field, among old repeatedly barren mares averaging 12.7 years and 6.3 barren cycles, 89% of the mares bred became pregnant in our own Kildangan Stud series. That is exactly the mare a conservation program is left with.</p>
                    <p className="text-gray-500 text-sm mb-10">Sources: Petersen MR et al., Veterinary Microbiology 2015;179:119-125, DOI 10.1016/j.vetmic.2015.06.006 (placebo-controlled activation study). Kildangan Stud figures reported by the founders as a congress abstract, Journal of Equine Veterinary Science 2018;66:117, DOI 10.1016/j.jevs.2018.05.162; no placebo group was included.</p>

                    <h2 className="text-2xl font-bold mb-3">How it works</h2>
                    <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mb-10 space-y-1">
                        <li>Your association or stud applies and names the mares.</li>
                        <li>We coordinate with your veterinarian and send the units.</li>
                        <li>Your veterinarian uses bActivate and reads the result.</li>
                        <li>If an infection is revealed, your veterinarian treats.</li>
                        <li>The outcome is recorded, and with your permission we share the story.</li>
                    </ol>

                    <h2 className="text-2xl font-bold mb-3">What we ask in return</h2>
                    <p className="text-gray-700 leading-relaxed mb-10">One thing. That the mare's veterinarian records the outcome, and that the program lets us tell the story, with a foal photo and your name, if it succeeds. We neither can nor will claim to save a breed. We give breeders the tool that shows why their most important mares are not catching.</p>

                    <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
                    <div className="space-y-5 mb-12">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Does it cost anything?</h3>
                            <p className="text-gray-700 leading-relaxed">The bActivate itself is donated. If your mare qualifies, your veterinarian receives a coupon and places the order in the <a href="/shop" className="text-primary underline">bactivate.eu shop</a>, and only the shipping is paid. Your own veterinarian's normal fees still apply.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Does bActivate treat the mare?</h3>
                            <p className="text-gray-700 leading-relaxed">No. It reveals a hidden infection so your veterinarian can treat it with targeted antibiotics. bActivate is a diagnostic aid, not a medicine.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Which breeds qualify?</h3>
                            <p className="text-gray-700 leading-relaxed">Breeds on a recognized conservation watchlist, such as the RBST watchlist, the Livestock Conservancy priority list, or FAO DAD-IS. Ask us if you are unsure.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Who handles the mare?</h3>
                            <p className="text-gray-700 leading-relaxed">Your own veterinarian, from the first culture to the treatment that follows. The veterinarian also places the order with the coupon, since bActivate is used through a vet.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">What do you want in return?</h3>
                            <p className="text-gray-700 leading-relaxed">Only that the outcome is recorded and that we may share a success story, with a foal photo and your name, with credit.</p>
                        </div>
                    </div>

                    <div className="text-center border-t border-gray-200 pt-10">
                        <h2 className="text-2xl font-bold mb-4">Have an endangered breed and a mare that will not catch?</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="/donate" className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-red-800 transition">Does your mare qualify?</a>
                            <a href="mailto:contact@bactivate.eu?subject=Endangered%20Equine%20Program" className="inline-block border border-primary text-primary px-6 py-3 rounded font-semibold hover:bg-red-50 transition">Email contact@bactivate.eu</a>
                        </div>
                    </div>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/studies-effect', label: 'Clinical Results', description: '83% pregnancy at Hagyard, 89% at Kildangan' },
                { to: '/what-is-bactivate', label: 'What is bActivate?', description: 'How the diagnostic reveals a hidden infection' },
                { to: '/when-to-use', label: 'When to Use bActivate', description: 'Signs your mare may have a hidden infection' },
                { to: '/contact', label: 'Contact Us', description: 'Apply for your breed or ask a question' },
            ]} />
        </main>
    );
}
