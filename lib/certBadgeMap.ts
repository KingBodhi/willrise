interface CertBadge {
  label: string;
  shortLabel: string;
  svg: string;
}

export const certBadgeMap: Record<string, CertBadge> = {
  ansi_z359_1: {
    label: "ANSI Z359.1 Certified",
    shortLabel: "ANSI Z359.1",
    svg: "ansi-logo.svg"
  },
  osha: {
    label: "OSHA Compliant",
    shortLabel: "OSHA",
    svg: "osha-logo.svg"
  },
  ce: {
    label: "CE Certified",
    shortLabel: "CE",
    svg: "ce-logo.svg"
  }
};
