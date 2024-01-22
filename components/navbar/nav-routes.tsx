import {
  caseStudiesMap,
  companyMap,
  homeMap,
  industriesMap,
  pagesMap,
} from "@/data/data";

import { Elements } from "./elements";
import { NavItem } from "./nav-item";

export const NavRoutes = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <NavItem category={homeMap} />
      </li>
      <li>
        <NavItem category={pagesMap} />
      </li>
      <li>
        <NavItem category={companyMap} />
      </li>
      <li>
        <NavItem category={industriesMap} />
      </li>
      <li>
        <NavItem category={caseStudiesMap} />
      </li>
      <li>
        <Elements />
      </li>
    </ul>
  );
};
