import React from "react";

const FeatureCard = ({ icon: Icon, feature, featBrief }) => {
	return (
		<>
			<div className="w-90 space-y-3 shadow-xl shadow-gray-400 rounded-md min-h-20 bg-blue-200 px-3 py-2">
				<div className="bg-blue-300 px-2 py-2 rounded-lg border border-blue-700 w-11 text-blue-700 ">
					<Icon size={24} fill/>
				</div>

                <h3 className="text-xl text-blue-700 font-semibold">
                    {feature}
                </h3>

                <p className="text-sm mt-3 text-blue-700">
                    {featBrief}
                </p>
			</div>
		</>
	);
};

export default FeatureCard;
