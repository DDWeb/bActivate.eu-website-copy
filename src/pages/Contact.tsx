import { useEffect } from 'react';
import InternalLinks from '@/components/InternalLinks';

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact bActivate | Bojesen & Petersen Biotech, Copenhagen';
        document.querySelector('meta[name="description"]')?.setAttribute('content', 'Contact the bActivate team: contact@bactivate.eu, +45 60 71 21 69, WhatsApp, or the contact form. Bojesen & Petersen Biotech ApS, Copenhagen, Denmark.');
    }, []);
    return (
        <main>
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold mb-2">Contact bActivate</h1>
                    <p className="text-gray-600 mb-10">Questions about ordering, the veterinary protocol, or becoming a distributor? We typically reply within one business day.</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-gray-50 p-6 rounded">
                            <h2 className="text-lg font-bold mb-3">Email and phone</h2>
                            <p className="mb-2">Email: <a href="mailto:contact@bactivate.eu" className="text-primary underline">contact@bactivate.eu</a></p>
                            <p className="mb-2">Phone: <a href="tel:+4560712169" className="text-primary underline">+45 60 71 21 69</a> (CET, weekdays)</p>
                            <p className="mb-2">WhatsApp: <a href="https://wa.me/4523991004" target="_blank" rel="noopener noreferrer" className="text-primary underline">chat with us</a>, we typically reply within a few hours</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded">
                            <h2 className="text-lg font-bold mb-3">Book a consultation</h2>
                            <p className="mb-4 text-gray-600">Want to talk through a specific mare or your breeding operation with the team? Book a free consultation.</p>
                            <a href="https://share-eu1.hsforms.com/1r_ir4DV2RSukWkIyzs8bzw2daoxk" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-800 transition inline-block">Request a consultation</a>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="border border-gray-200 p-6 rounded">
                            <h2 className="text-base font-bold mb-2">Orders and shipping</h2>
                            <p className="text-gray-600 text-sm">bActivate costs 229 EUR per vial and ships across Europe from Copenhagen. Order in the <a href="/shop" className="text-primary underline">shop</a> or through a <a href="/our-distributors" className="text-primary underline">local distributor</a>.</p>
                        </div>
                        <div className="border border-gray-200 p-6 rounded">
                            <h2 className="text-base font-bold mb-2">Veterinarians</h2>
                            <p className="text-gray-600 text-sm">Questions about the activation protocol, sampling, or interpreting a post-activation culture? See the <a href="/how-to-use" className="text-primary underline">veterinary protocol</a> or write to us directly.</p>
                        </div>
                        <div className="border border-gray-200 p-6 rounded">
                            <h2 className="text-base font-bold mb-2">Distributors and press</h2>
                            <p className="text-gray-600 text-sm">Interested in distributing bActivate in your market, or writing about the science? Email <a href="mailto:contact@bactivate.eu" className="text-primary underline">contact@bactivate.eu</a> and we will set up a call.</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded mb-4">
                        <h2 className="text-lg font-bold mb-3">Company</h2>
                        <p className="text-gray-700 leading-relaxed">Bojesen &amp; Petersen Biotech ApS<br />Strandboulevarden 23<br />2100 Copenhagen, Denmark<br />CVR (VAT): DK34690324</p>
                    </div>
                    <p className="text-gray-500 text-sm">bActivate was developed by Prof. Anders Miki Bojesen and Dr. Morten R&oslash;nn Petersen. <a href="/about-us" className="text-primary underline">Meet the founders</a>.</p>
                </div>
            </section>

            <InternalLinks links={[
                { to: '/shop', label: 'Order bActivate', description: '229 EUR per vial, ships from Copenhagen' },
                { to: '/our-distributors', label: 'Find a Distributor', description: 'UK, Netherlands, Denmark, Australia and more' },
                { to: '/when-to-use', label: 'When to Use', description: 'Is your mare a candidate? Signs and risk factors' },
                { to: '/studies-effect', label: 'Clinical Evidence', description: 'Hagyard, Kildangan and the peer-reviewed research' },
            ]} />
        </main>
    );
}
