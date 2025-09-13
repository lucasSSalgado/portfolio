import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    output: 'export',
    i18n: {
        locales: ['en', 'pt'],
        defaultLocale: 'en',
    },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);