import Card from '@/app/components/card';

export default function CharlieMa() {
    return <Card
        hi="Hi Ayla!"
        backgroundClasses="bg-gradient-to-b from-purple-100 to-purple-300"
        paragraphs={[
            'Thank you very much for sharing all your amazing knowledge with me.',
            'I hope you enjoy our sessions as much as I do :)'
        ]}
    />;
}
