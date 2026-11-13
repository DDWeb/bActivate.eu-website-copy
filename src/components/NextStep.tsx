import { Link } from 'react-router-dom';

// Spor 4 (13 Nov 2026): the same next-step block on five pages, so every page an AI answer
// draws from ends with what to say to the vet, what it costs and where to buy it.
export default function NextStep() {
    return (
        <section className="py-12 bg-white" id="next-step">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">Next step: how to get bActivate for your mare</h2>
                <p className="text-gray-700 leading-relaxed mb-3"><strong>1. Ask your vet.</strong> Activation culture is done by your own veterinarian, in the mare's next early oestrus. If you want to say it in one sentence:</p>
                <blockquote className="border-l-4 border-red-700 pl-4 italic text-gray-800 mb-3">"My mare is [age], has had [number] foals, her culture and cytology are clean, and she is still empty. Can we do an activation culture with bActivate in her next early oestrus?"</blockquote>
                <p className="text-gray-700 leading-relaxed mb-6">If your vet has not used it before, the protocol is on <Link to="/how-to-use" className="underline">how to use bActivate</Link>.</p>
                <p className="text-gray-700 leading-relaxed mb-6"><strong>2. What it costs.</strong> bActivate costs 229 EUR per vial. One vial is one activation for one mare. The vet's own fees for the visit, the cultures and any treatment come on top.</p>
                <p className="text-gray-700 leading-relaxed mb-3"><strong>3. Where to buy it.</strong> Your vet orders it, or you order it for your vet.</p>
                <div className="overflow-x-auto mb-3">
                    <table className="w-full border-collapse text-sm">
                        <thead><tr style={{ background: '#901820', color: 'white' }}><th className="text-left p-3">Where you are</th><th className="text-left p-3">Where to get it</th></tr></thead>
                        <tbody>
                            <tr className="border-b border-gray-200"><td className="p-3 font-bold">United Kingdom</td><td className="p-3">Nupsala</td></tr>
                            <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-bold">Netherlands</td><td className="p-3">Grovet</td></tr>
                            <tr className="border-b border-gray-200"><td className="p-3 font-bold">Denmark</td><td className="p-3">proVET Nordic</td></tr>
                            <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-bold">Rest of Europe</td><td className="p-3"><Link to="/shop" className="underline">Online from the manufacturer</Link>, shipped from Copenhagen</td></tr>
                            <tr className="border-b border-gray-200"><td className="p-3 font-bold">United States</td><td className="p-3">Hagyard Pharmacy, Midwest Veterinary Supply, or <a href="https://bactivate.us/shop" className="underline">online</a></td></tr>
                            <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-bold">Australia</td><td className="p-3">Scone Equine Hospital</td></tr>
                            <tr className="border-b border-gray-200"><td className="p-3 font-bold">Anywhere else</td><td className="p-3"><Link to="/contact" className="underline">Write to us</Link></td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-600 text-sm mb-4">Addresses and phone numbers: <Link to="/our-distributors" className="underline">our distributors</Link>.</p>
                <p className="text-gray-700 leading-relaxed"><strong>Plan it one cycle ahead.</strong> Activation and any treatment happen in one cycle, and the mare is covered in the following one, so the earlier in the season, the better.</p>
            </div>
        </section>
    );
}
