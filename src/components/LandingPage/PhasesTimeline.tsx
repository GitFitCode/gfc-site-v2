import React, { useState } from "react";
import { Phase } from "../../contexts/PhaseTimelineContext.tsx/index";
import { phaseGroups } from "../../contexts/PhaseTimelineContext.tsx/phases";
import * as Icons from "lucide-react";

const PhaseTimeline: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<Phase>(
    phaseGroups[0].phases[0]
  );

  const renderIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as React.FC<{
      className?: string;
    }>;
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  return (
    <div className="max-w-7xl mx-auto p-6 w-full">
      <div className="flex flex-col items-center gap-2 self-stretch w-full text-center mb-20">
        <p className="font-other-caption font-semibold text-[#00c2c6] text-lg uppercase">
          from concept to creation
        </p>
        <p className="font-bold text-coolgray-90 text-4xl">
          We Develop the Perfect Solution
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
        {/* Timeline */}
        <div className="space-y-8 w-full">
          {phaseGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-500">
                {group.title}
              </h3>
              {group.phases.map((phase, phaseIndex) => (
                <button
                  key={phaseIndex}
                  onClick={() => setSelectedPhase(phase)}
                  className={`flex items-center space-x-4 w-full p-4 rounded-xl transition-all ${
                    selectedPhase.title === phase.title
                      ? "bg-[#0160ff] text-white shadow-lg"
                      : "bg-[#e6ecf8] hover:bg-gray-100"
                  }`}
                >
                  <div className="p-3 rounded-xl bg-white text-[#0160ff]">
                    {renderIcon(phase.icon)}
                  </div>
                  <span className="font-medium">{phase.title}</span>
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Content Card */}
        <div className="md:col-span-2 w-full space-y-8">
          <div className="bg-white rounded-2xl  p-8 flex flex-col border border-[#e6ecf8]">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">{selectedPhase.title}</h2>
              <div className="space-y-6">
                {selectedPhase.content.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0160ff] text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              {/* Tools Section */}
              <div className="mt-auto pt-10 md:pt-24">
                <div className="bg-gray-100 rounded-3xl mt-8 pt-6 p-8 md:p-8">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <h3 className="flex text-lg font-semibold">Tools Used:</h3>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {selectedPhase.content.tools.map((tool, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 bg-white rounded-full px-4 py-2"
                        >
                          <span>{tool.icon}</span>
                          <span className="font-medium">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseTimeline;
