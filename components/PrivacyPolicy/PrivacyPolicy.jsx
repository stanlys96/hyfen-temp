import React from 'react'
import useTranslation from 'next-translate/useTranslation'

export default function PrivacyPolicy() {
	const { t } = useTranslation('privacy-policy')

	return (
		<div className='privacy-policy-bg py-24'>
			<div className='privacy-policy-content container mx-auto'>
				<div className='flex flex-col gap-4'>
					<div>
						<h1 className='text-2xl font-bold'>{t('PrivacyPolicy')}</h1>
						<br />
						<br />
						<p className='text-xl font-bold py-3'>
							{t('InformationWeProcess')}
						</p>
						<p>{t('InformationWeProcess_desc1')}</p>
						<p className='text-xl font-bold py-3'>
							{t('InformationHyfenReceived')}
						</p>
						<p>{t('ThisIncludes')}</p>
						<ul className='list-disc'>
							<li>{t('ThisIncludes_1')}</li>
							<li>{t('ThisIncludes_2')}</li>
							<li>{t('ThisIncludes_3')}</li>
							<li>{t('ThisIncludes_4')}</li>
							<li>{t('ThisIncludes_5')}</li>
							<li>{t('ThisIncludes_6')}</li>
							<li>{t('ThisIncludes_7')}</li>
							<li>{t('ThisIncludes_8')}</li>
							<li>{t('ThisIncludes_9')}</li>
						</ul>
						<p className='text-2xl font-bold pt-3'>
							{t('UseOfPersonalInformation')}
						</p>
						<p className='text-xl font-bold py-3'>{t('ProvidedForService')}</p>
						<p>{t('WeWillUse')}</p>
						<ul className='list-disc'>
							<li>{t('WeWillUse_1')}</li>
							<li>{t('WeWillUse_2')}</li>
							<li>{t('WeWillUse_3')}</li>
							<li>{t('WeWillUse_4')}</li>
						</ul>
						<p className='text-xl font-bold py-3'>{t('ProvidedToComply')}</p>
						<p>{t('ProvidedToComply_desc1')}</p>
						<p className='text-xl font-bold py-3'>
							{t('ProvidedToCommunicate')}
						</p>
						<p>{t('ProvidedToCommunicate_desc1')}</p>
						<p className='text-xl font-bold py-3'>{t('ProvidedForUser')}</p>
						<p>{t('ProvidedForUser_desc1')}</p>
						<p className='text-xl font-bold py-3'>
							{t('ProvidedForCompliance')}
						</p>
						<p>{t('ProvidedForCompliance_desc1')}</p>
						<p className='text-xl font-bold py-3'>{t('ProvidedToComply')}</p>
						<p>{t('ProvidedToComply_desc1')}</p>
						<p className='text-xl font-bold py-3'>
							{t('SharingPersonalInformation')}
						</p>
						<p>{t('WeWillNotShare')}</p>
						<ul className='list-disc'>
							<li>{t('WeWillNotShare_1')}</li>
							<li>{t('WeWillNotShare_2')}</li>
							<li>{t('WeWillNotShare_3')}</li>
							<li>{t('WeWillNotShare_4')}</li>
							<li>{t('WeWillNotShare_5')}</li>
						</ul>
						<p className='text-xl font-bold py-3'>
							{t('PrivacyPolicyUpdates')}
						</p>
						<p>{t('PrivacyPolicyUpdates_desc1')}</p>
						<p className='text-2xl font-bold py-3'>{t('ContactUs')}</p>
						<p>{t('WeWelcome')}</p>
						{t('Email')}{' '}
						<a href='mailto:support@hyfen.gg' className='text-app-blue'>
							support@hyfen.gg
						</a>
						<p>
							{t('Address')} Office 8, Lantai 18 Unit A, Jl Jend Sudirman Kav.
							52-53 SCBD Lot. 28, Jakarta Selatan 12190
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
