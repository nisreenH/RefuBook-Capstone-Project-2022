import React from 'react';
import Google from '../buttons/Google';
import Facebook from '../buttons/Facebook';
import { useTranslation } from 'react-i18next';
export default function Card(props) {
  const { t } = useTranslation();
  return (
    <div className="bg-white px-8 mb-32 py-16 w-80 md:w-96  my-10 shadow-xl shadow-gray-300 rounded-3xl md:mb-10 md:px-16 lg:px-16">
      <h3 className="text-prim uppercase text-lg mb-8">{props.title}</h3>
      <div className="flex flex-col md:gap-8 items-center gap-3 justify-center">
        <Google />
        <h3 className="text-prim uppercase text-lg">{t('signUp.or')}</h3>
        <Facebook />
      </div>
    </div>
  );
}
