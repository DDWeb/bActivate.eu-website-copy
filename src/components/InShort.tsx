import type { ReactNode } from 'react';

// Three-line answer under the H1 of an educational page. Same figures as the page, nothing new.
export default function InShort({ children }: { children: ReactNode }) {
    return (
        <div className="tldr">
            <p><strong>In short.</strong> {children}</p>
        </div>
    );
}
