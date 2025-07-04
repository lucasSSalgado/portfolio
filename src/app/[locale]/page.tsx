import {getTranslations, setRequestLocale} from 'next-intl/server';

import {routing} from '@/i18n/routing';
import { Button } from '@/components/ui/button';
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
 
export default async function HomePage({ params } : { params: Promise<{locale: string}> }) {
   const { locale } = await params;
 
  // Enable static rendering
  setRequestLocale(locale);
 
  const t = await getTranslations('HomePage');
  return <div>
    <h1 className='bg-red-400'>{t('title')}</h1>;
    <Button className='bg-red-400'>{t('about')}</Button>
  </div> 
}