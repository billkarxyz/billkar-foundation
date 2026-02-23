import { DiMsqlServer } from "react-icons/di";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const TechItem = ({
  Icon,
  color,
  label,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  label: string;
}) => (
  <div className="flex flex-row items-center gap-2">
    <Icon className={`w-5 h-5 ${color}`} />
    <span className="font-medium text-xs">{label}</span>
  </div>
);

export const TechJavascript = () => (
  <TechItem Icon={SiJavascript} color="text-yellow-400" label="JavaScript" />
);

export const TechReact = () => (
  <TechItem Icon={SiReact} color="text-cyan-400" label="React" />
);

export const TechExpress = () => (
  <TechItem Icon={SiExpress} color="text-gray-100" label="Express" />
);

export const TechBootstrap = () => (
  <TechItem Icon={SiBootstrap} color="text-purple-600" label="Bootstrap" />
);

export const TechMsqlServer = () => (
  <TechItem Icon={DiMsqlServer} color="text-red-600" label="Microsoft SQL" />
);

export const TechPhp = () => (
  <TechItem Icon={SiPhp} color="text-blue-600" label="PHP" />
);

export const TechMysql = () => (
  <TechItem Icon={SiMysql} color="text-blue-600" label="MySQL" />
);

export const TechHtml = () => (
  <TechItem Icon={SiHtml5} color="text-orange-600" label="HTML" />
);

export const TechCss = () => (
  <TechItem Icon={SiCss3} color="text-blue-600" label="CSS" />
);

export const TechNextJs = () => (
  <TechItem Icon={SiNextdotjs} color="text-gray-100" label="Next.js" />
);

export const TechTailwind = () => (
  <TechItem Icon={SiTailwindcss} color="text-cyan-500" label="Tailwind" />
);
