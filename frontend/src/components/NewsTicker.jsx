import Marquee from "react-fast-marquee";
import { Zap, TrendingUp, Bell } from "lucide-react";

const NewsTicker = () => {
  const newsItems = [
    "20 kW geothermal pilot successfully deployed in Telangana",
    "Patented geothermal electricity generation process secured",
    "Clean Energy Genset System achieves 80% cost reduction vs diesel",
    "Supported by Ministry of New and Renewable Energy",
    "Zero-emission technology validated through field deployments",
  ];

  return (
    <div data-testid="news-ticker" className="bg-slate-900 text-white py-2.5 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center">
        <div className="flex items-center gap-2 pr-6 border-r border-slate-700 shrink-0">
          <Bell className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold uppercase tracking-wide text-emerald-400">Updates</span>
        </div>
        <Marquee gradient={false} speed={40} pauseOnHover className="ml-4">
          {newsItems.map((item, index) => (
            <span key={index} className="text-sm text-slate-300 mx-8 flex items-center gap-2">
              <Zap className="w-3 h-3 text-emerald-500" />
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default NewsTicker;
