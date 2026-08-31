import { Link } from 'react-router-dom';

// Visible counterpart to the MedicalWebPage reviewedBy/lastReviewed schema
// injected in scripts/prerender.mjs. Keep the two in sync: the date below must
// match the lastReviewed value for the route this renders on.
const ReviewedBy = ({ lastReviewed = 'June 2026' }: { lastReviewed?: string }) => (
    <div style={{ background: '#f8f8f8', borderLeft: '3px solid #901820', padding: '0.9rem 1.25rem', margin: '0 auto 2rem', maxWidth: '56rem', fontSize: '0.85rem', color: '#555', lineHeight: 1.6 }}>
        Clinically reviewed by <Link to="/about-us" style={{ color: '#901820', fontWeight: 600 }}>Prof. Anders Miki Bojesen</Link>, DVM PhD, Professor of Veterinary Microbiology (University of Copenhagen), and <Link to="/about-us" style={{ color: '#901820', fontWeight: 600 }}>Dr. Morten Rønn Petersen</Link>, DVM PhD, Diplomate ACT. Last reviewed: {lastReviewed}.
    </div>
);

export default ReviewedBy;
