import { Mail, Phone } from "lucide-react";

type ContactCardProps = {
  type: "phone" | "email";
  variant?: "card" | "compact";
};

const contactDetails = {
  phone: {
    href: "tel:+33749217835",
    label: "Téléphone",
    value: "07 49 21 78 35",
    Icon: Phone,
  },
  email: {
    href: "mailto:adelepincemaille.psy@gmail.com",
    label: "Email",
    value: "adelepincemaille.psy@gmail.com",
    Icon: Mail,
  },
} as const;

export function ContactCard({ type, variant = "card" }: ContactCardProps) {
  const { href, label, value, Icon } = contactDetails[type];

  if (variant === "compact") {
    return (
      <p className="flex items-center gap-3">
        <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
        <a href={href} className="break-all transition-colors hover:text-accent">
          {value}
        </a>
      </p>
    );
  }

  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-md bg-primary-foreground/5 p-5 transition-colors hover:bg-primary-foreground/10"
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.15em] opacity-70">{label}</p>
        <p className="mt-1 break-all text-sm">{value}</p>
      </div>
    </a>
  );
}
