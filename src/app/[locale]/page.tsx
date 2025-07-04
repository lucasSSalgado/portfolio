import {getTranslations, setRequestLocale} from 'next-intl/server';

import {routing} from '@/i18n/routing';
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
 
export default async function HomePage({ params } : { params: Promise<{locale: string}> }) {
   const { locale } = await params;
 
  // Enable static rendering
  setRequestLocale(locale);
 
  const t = await getTranslations('HomePage');
  return <h1 className='bg-red-400'>{t('title')}</h1>;
}