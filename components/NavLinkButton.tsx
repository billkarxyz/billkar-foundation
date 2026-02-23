import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // sesuaikan dengan lokasi file Button

const NavLinkButton = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <Button
        variant={pathname === href ? "secondary" : "ghost"}
        className="w-full">
        {label}
      </Button>
    </Link>
  );
};

export default NavLinkButton;
