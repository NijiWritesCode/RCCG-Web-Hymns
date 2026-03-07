import React from "react";

const FeatureCard = ({ icon: Icon, feature, featBrief }) => {
	return (
		<div className="w-90 bg-blue-100 border border-blue-200 rounded-xl p-5 space-y-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
			
			<div className="w-12 h-12 flex items-center justify-center bg-blue-200 text-blue-700 rounded-lg border border-blue-300">
				<Icon size={22} />
			</div>

			<h3 className="text-lg font-semibold text-blue-800">
				{feature}
			</h3>

			<p className="text-sm text-blue-700 leading-relaxed">
				{featBrief}
			</p>

		</div>
	);
};

export default FeatureCard;