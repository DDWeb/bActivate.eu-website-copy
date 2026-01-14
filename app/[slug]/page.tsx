export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold capitalize mb-8">{slug.replace(/-/g, ' ')}</h1>
            <div className="prose max-w-none">
                <p>This page ({slug}) has been migrated. Content would go here.</p>
                <p>In a full migration, we would copy the content from the WordPress site for this specific page.</p>
            </div>
        </div>
    );
}
