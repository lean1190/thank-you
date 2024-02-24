import Card from '@/app/components/card';

export default function CharlieMa() {
    return <Card
        hi="Hi Charlie!"
        backgroundClasses="bg-gradient-to-b from-purple-300 to-pink-300"
        paragraphs={[
            'Thank you very much for trusting me, and allowing me to help you grow your coding skills.',
            'Let\'s get started!'
        ]}
    />;
}
