import { useEffect } from 'react';
import InternalLinks from '@/components/InternalLinks';

export default function SwabComparison() {
    useEffect(() => {
        document.title = 'Swab Culture vs Biopsy vs bActivate | Diagnosing Uterine Infection in Mares';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'A standard uterine swab finds about 34% of infected mares, biopsy about 82%, and neither finds dormant bacteria. Compare the diagnostic options for problem mares.');
    }, []);
    return (
        <main>
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold mb-4">Swab culture vs biopsy vs bActivate: how do you find a hidden uterine infection?</h1>
                    <p className="text-gray-700 leading-relaxed mb-8">If your mare keeps coming back empty despite clean swabs, the problem may not be the mare. It may be the test. The three diagnostic options differ enormously in what they can detect, and none of the standard methods can find bacteria that are dormant. Here is the honest comparison, with each figure attributed to the study that reports it.</p>

                    <div className="overflow-x-auto mb-4">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr style={{ background: '#901820', color: 'white' }}>
                                    <th className="text-left p-3">Method</th>
                                    <th className="text-left p-3">What it detects</th>
                                    <th className="text-left p-3">Detection of S. zooepidemicus</th>
                                    <th className="text-left p-3">Finds dormant bacteria?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="p-3 font-bold">Standard swab culture</td>
                                    <td className="p-3">Actively growing bacteria on the uterine surface</td>
                                    <td className="p-3">About 34% of infected mares (Nielsen 2005)</td>
                                    <td className="p-3">No</td>
                                </tr>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <td className="p-3 font-bold">Endometrial biopsy culture</td>
                                    <td className="p-3">Actively growing bacteria within the tissue sample</td>
                                    <td className="p-3">About 82% of infected mares (Nielsen 2005)</td>
                                    <td className="p-3">No</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-3 font-bold">bActivate + standard culture</td>
                                    <td className="p-3">Dormant bacteria, reactivated so any standard culture can find them</td>
                                    <td className="p-3">64% of treated mares activation-positive vs 8% of saline controls (Petersen 2015, placebo-controlled)</td>
                                    <td className="p-3">Yes, that is its purpose</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-500 text-sm mb-10">Sources: Nielsen JM, Theriogenology 2005;64:510-518 (swab vs biopsy sensitivity). Petersen MR et al., Veterinary Microbiology 2015;179:119-125, DOI 10.1016/j.vetmic.2015.06.006 (placebo-controlled activation study). The comparisons measure different things and come from different studies; they are shown together as a decision aid, not as a head-to-head trial.</p>

                    <h2 className="text-2xl font-bold mb-3">Why a clean swab does not rule out infection</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">All culture-based methods depend on bacteria growing. Dormant Streptococcus equi subsp. zooepidemicus sits in a low-metabolic persister state deep in the endometrium, in foci 300 to 500 micrometres below the surface a swab can reach (Petersen et al., Clinical Theriogenology 2009). It does not grow on the plate, so the lab reports a negative, and the mare is bred again on a false all-clear.</p>

                    <h2 className="text-2xl font-bold mb-3">Where bActivate fits</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">bActivate does not replace your usual diagnostics. It is the step before them: the veterinarian instills 10 ml into the uterus during early estrus, the growth medium signals dormant bacteria to resume growth, and 48 hours later a standard culture shows what was hiding. From there, everything is familiar practice: the veterinarian identifies the bacteria and prescribes targeted antibiotics, and the mare is bred in the following cycle.</p>

                    <h2 className="text-2xl font-bold mb-3">Which method should I ask my veterinarian about?</h2>
                    <p className="text-gray-700 leading-relaxed mb-2">A practical rule of thumb, to discuss with your veterinarian:</p>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-10">
                        <li><strong>First workup of a mare that failed a cycle or two:</strong> start with standard diagnostics, ideally low-volume lavage or biopsy culture rather than a plain swab.</li>
                        <li><strong>Problem mare with clean swabs:</strong> repeated negatives plus continued failure to conceive is exactly the profile where dormant infection is likely (70 to 80% of problem mares carry one). This is where activation with bActivate is indicated.</li>
                        <li><strong>Older mare, previous endometritis, or three or more foals:</strong> each of these risk factors independently predicts a high probability of dormant infection. Consider activation as part of the off-season workup.</li>
                    </ul>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/when-to-use', label: 'When to Use bActivate', description: 'Signs your mare may have a hidden infection' },
                { to: '/how-to-use', label: 'Veterinary Protocol', description: 'Step-by-step instructions for veterinarians' },
                { to: '/studies-effect', label: 'Clinical Results', description: '83% pregnancy at Hagyard, 89% at Kildangan' },
                { to: '/shop', label: 'Order bActivate', description: 'Order online or through US distributors' },
            ]} />
        </main>
    );
}
