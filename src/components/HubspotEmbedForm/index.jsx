import { Script } from 'gatsby';
import React, { useState } from 'react';

const HubspotEmbedForm = ({ title, formId, linkedInConversionId, onLoad }) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className="hubspot-form">
			{title && (
				<p className="typo-intro mb-4">
					{title}
				</p>
			)}
			<div id="hubspotFormContainer">
				<Script id="hubspotFormLibrary" src="//js.hsforms.net/forms/embed/v2.js" onLoad={() => { setLoaded(true); onLoad && onLoad(); }} />
				{loaded && (
					<Script
						dangerouslySetInnerHTML={{
							__html: `
								window.hbspt.forms.create({
									target: "#hubspotFormContainer",
									region: "na1",
									portalId: "6705631",
									formId: "${formId}",
									onFormSubmitted: function () {
										window.lintrk('track', { conversion_id: ${linkedInConversionId} });
									}
								});
							`,
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default HubspotEmbedForm;
