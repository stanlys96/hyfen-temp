import React from 'react'
import useTranslation from 'next-translate/useTranslation'

export default function TermsAndConditions() {
	const { t } = useTranslation('terms-and-conditions')

	return (
		<div className='privacy-policy-content terms-and-conditions-bg relative'>
			<div className='flex flex-col gap-4 container mx-auto py-24'>
				<div>
					<h1 className='text-2xl font-bold'>{t('TermsOfService')}</h1>
					<br />
					<br />
					<p className='text-xl font-bold pb-3'>{t('TOSAgreement')}</p>
					<p>{t('TOSAgreement_desc1')}</p>
					<p>{t('TOSAgreement_desc2')}</p>
					<p className='text-xl font-bold py-3'>{t('PrivacyPolicy')}</p>
					<p>{t('PrivacyPolicy_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('UpdatedTermsOfService')}</p>
					<p>{t('UpdatedTermsOfService_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('Eligible')}</p>
					<p>{t('Eligible_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('Services')}</p>
					<p>{t('Services_desc1')}</p>
					<p>{t('HyfenAllowsYou')}</p>
					<ul className='list-disc'>
						<li>{t('HyfenAllowsYou_1')}</li>
						<li>{t('HyfenAllowsYou_2')}</li>
						<li>{t('HyfenAllowsYou_3')}</li>
						<li>{t('HyfenAllowsYou_4')}</li>
						<li>{t('HyfenAllowsYou_5')}</li>
					</ul>
					<p className='text-xl font-bold py-3'>{t('DigitalWalletAddress')}</p>
					<p>{t('DigitalWalletAddress_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('UseOfDappsAndDex')}</p>
					<p>{t('UseOfDappsAndDex_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('UseOfStakingServices')}</p>
					<p>{t('UseOfStakingServices_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('PurchaseDigitalAssets')}</p>
					<p>{t('PurchaseDigitalAssets_desc1')}</p>
					<p className='text-xl font-bold py-3'>
						{t('DigitalAssetTransactions')}
					</p>
					<p>{t('DigitalAssetTransactions_desc1')}</p>
					<p className='text-xl font-bold py-3'>
						{t('AccuracyOfInformationProvided')}
					</p>
					<p>{t('AccuracyOfInformationProvided_desc1')}</p>
					<p className='text-xl font-bold py-3'>
						{t('DigitalWalletRegistration')}
					</p>
					<p>{t('DigitalWalletRegistration_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('PushNotifications')}</p>
					<p>{t('PushNotifications_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('PaymentsAndFees')}</p>
					<p>{t('PaymentsAndFees_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('TransactionFees')}</p>
					<p>{t('TransactionFees_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('Tax')}</p>
					<p>{t('Tax_desc1')}</p>
					<p className='text-xl font-bold py-3'>
						{t('ServicesAndThirdPartyContent')}
					</p>
					<p>{t('ServicesAndThirdPartyContent_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('IntellectualProperty')}</p>
					<p>{t('IntellectualProperty_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('YourFeedback')}</p>
					<p>{t('YourFeedback_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('LinksToOtherWebsites')}</p>
					<p>{t('LinksToOtherWebsites_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('Termination')}</p>
					<p>{t('Termination_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('LimitationOfLiability')}</p>
					<p>{t('LimitationOfLiability_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('AsIsDisclaimer')}</p>
					<p>{t('AsIsDisclaimer_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('GoverningLaw')}</p>
					<p>{t('GoverningLaw_desc1')}</p>
					<p className='text-xl font-bold pt-3'>{t('SeverabilityAndWaiver')}</p>
					<p className='text-xl font-bold py-3'>{t('Severability')}</p>
					<p>{t('Severability_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('Waiver')}</p>
					<p>{t('Waiver_desc1')}</p>
					<p className='text-xl font-bold py-3'>{t('ChangesToThese')}</p>
					<p>{t('ChangesToThese_desc1')}</p>
					<p>{t('ByContinuing')}</p>
					<p className='text-xl font-bold py-3'>{t('ContactUs')}</p>
					<p>{t('IfYouHave')}</p>
					<p>{t('Email')}</p>
					<p>{t('Address')}</p>
				</div>
			</div>
		</div>
	)
}
