import { Trans } from 'react-i18next';

export default function Hr() {
  return (
    <div
      className='py-3 mt-4 
     flex items-center text-sm before:flex-1 before:border-t before:border-white before:me-6 after:flex-1 after:border-t after:border-white after:ms-6 dark:text-customGray dark:before:border-customGray dark:after:border-customGray'
    >
      <Trans i18nKey={'OR'}>OR</Trans>
    </div>
  );
}
